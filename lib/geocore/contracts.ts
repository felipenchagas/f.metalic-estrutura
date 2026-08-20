export function hasMinimumFaqs(faq: unknown, min = 3): boolean {
  if (!Array.isArray(faq)) return false;
  const valid = faq.filter(item => {
    const q = typeof item?.question === 'string' ? item.question.trim() : '';
    const a = typeof item?.answer === 'string' ? item.answer.trim() : '';
    return q.length >= 8 && a.length >= 20;
  });
  return valid.length >= min;
}
