const schemaTypes = new Set(['WebPage', 'FAQPage', 'Service', 'BreadcrumbList', 'Organization', 'WebSite', 'LocalBusiness', 'ProfessionalService']);

export function sanitizeRichHtml(value: unknown, max = 12000): string {
  const input = typeof value === 'string' ? value.slice(0, max) : '';
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/on\w+='[^']*'/gi, '')
    .replace(/javascript:[^"']*/gi, '')
    .trim();
}

export function sanitizePlainText(value: unknown, max = 500): string {
  const input = typeof value === 'string' ? value.slice(0, max * 4) : '';
  return input
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

function normalizeValue(value: unknown, depth = 0): unknown {
  if (depth > 8) throw new Error('Schema estruturado excede a profundidade permitida.');
  if (value === null || typeof value === 'boolean' || typeof value === 'number') return value;
  if (typeof value === 'string') {
    if (value.length > 4000 || /<\/?script/i.test(value) || /^\s*(?:javascript|data):/i.test(value)) {
      throw new Error('Schema estruturado contém texto ou URL inseguro.');
    }
    return sanitizePlainText(value, 4000);
  }
  if (Array.isArray(value)) {
    if (value.length > 100) throw new Error('Schema estruturado excede o tamanho permitido.');
    return value.map(item => normalizeValue(item, depth + 1));
  }
  if (!value || typeof value !== 'object') throw new Error('Valor inválido em schema estruturado.');
  const output: Record<string, unknown> = {};
  for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
    if (['__proto__', 'prototype', 'constructor'].includes(key) || key.length > 80) continue;
    output[key] = normalizeValue(item, depth + 1);
  }
  return output;
}

export function normalizeGeoCoreSchemas(value: unknown): Record<string, unknown>[] {
  if (!Array.isArray(value) || value.length === 0) return [];
  if (value.length > 20) throw new Error('Schemas estruturados ausentes ou em formato inválido.');
  const normalized = value.map(item => {
    const schema = normalizeValue(item) as Record<string, unknown>;
    const type = typeof schema['@type'] === 'string' ? schema['@type'] : '';
    if (!schemaTypes.has(type)) throw new Error(`Tipo de schema não permitido: ${type || 'ausente'}.`);
    if (type === 'FAQPage' && !Array.isArray(schema.mainEntity)) throw new Error('FAQPage sem perguntas válidas.');
    return schema;
  });
  const seen = new Set<string>();
  return normalized.filter(schema => {
    const type = String(schema['@type']);
    const stable = type === 'WebPage' || type === 'FAQPage' ? type : `${type}:${String(schema['@id'] || schema.url || '')}`;
    if (seen.has(stable)) return false;
    seen.add(stable);
    return true;
  });
}

export function serializeJsonLdSafe(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026');
}
