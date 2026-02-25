# Plano de Arquitetura de Sitemaps (Silo Estadual + Clusters de Bairros)

## 📌 Visão Geral
O usuário solicitou uma mudança arquitetural profunda na estruturação dos sitemaps regionais (Paraná) para otimização de *Crawl Budget* e hierarquia semântica perfeita. O objetivo é concentrar as matrizes (Cidades) em um único arquivo mestre e ramificar os Bairros de acordo com o peso/tamanho da cidade (VIPs vs Agrupados).

**Tipo de Projeto:** WEB (SEO / Next.js)
**Arquivo Gerado:** `PLAN-sitemap-architecture.md`

## 🎯 Critérios de Sucesso
- `sitemap-parana.xml`: Deve conter **TODAS AS 406 CIDADES**, sem exceção. A prioridade de Curitiba deve ser a maior (`1.0`), decrescendo para as demais. Não deve conter bairros.
- `sitemap-[slug].xml` (Ex: `sitemap-curitiba.xml`): Deve ser gerado apenas para cidades grandes (> 4 bairros). Deve conter **APENAS OS BAIRROS** dessa cidade. A URL raiz da cidade **NÃO** deve estar aqui (pois já está no `sitemap-parana.xml`).
- `sitemap-demais-bairros.xml`: Deve agrupar **TODOS OS BAIRROS** das cidades pequenas (<= 4 bairros).
- O arquivo de index `sitemap.xml` deve referenciar: `sitemap-parana.xml`, todos os `sitemap-[slug].xml` (grandes), e o `sitemap-demais-bairros.xml`.

## 🛠️ Stack Tecnológica
- **Next.js App Router (Route Handlers)**
- **TypeScript** para rotas dinâmicas
- Lógica de processamento e contagem em Array (filter, map) consumindo `seo-cities-store.ts`.

## 📂 Estrutura de Arquivos Afetada
- `app/sitemap.xml/route.ts` (Index Mestre - a ser modificado)
- `app/sitemap-parana.xml/route.ts` (Silo Estadual de Cidades - a ser recriado)
- `app/sitemap-[slug].xml/route.ts` (Silo Dinâmico de Bairros VIP - a ser modificado)
- `app/sitemap-demais-bairros.xml/route.ts` (Silo de Bairros Menores - a ser criado)
- `app/admin/seo/sitemaps/page.tsx` (Painel Admin UI - a ser atualizado para refletir a nova arquitetura)

## 📝 Divisão de Tarefas (Task Breakdown)

### Task 1: Recriar `sitemap-parana.xml` (Todas as Cidades)
- **Agente:** `backend-specialist`
- **Ação:** Refatorar a rota para listar `/pr/[slug]` de **todas as 406 cidades**.
- **Regras:**
  - `Curitiba` = Prioridade 1.0.
  - Cidades > 10 bairros = Prioridade 0.9.
  - Cidades > 4 bairros = Prioridade 0.8.
  - Cidades <= 4 bairros = Prioridade 0.6.
- **INPUT:** `citiesPR`, `seo-cities-store`
- **OUTPUT:** XML válido com 406 URLs. NENHUM bairro incluído.
- **VERIFY:** Acesso a `/sitemap-parana.xml` retorna 406 locs.

### Task 2: Modificar `sitemap-[slug].xml` (Exclusivo para Bairros VIP)
- **Agente:** `backend-specialist`
- **Ação:** Ajustar a rota dinâmica para renderizar **apenas** URLs de bairros (`/pr/[slug]/[bairro]`).
- **Regras:**
  - Remover a URL da cidade-mãe (Para não duplicar com o `sitemap-parana.xml`).
  - Retornar 404 dinamicamente se a cidade tiver `<= 4 bairros` (pois estes irão para o agrupador).
- **INPUT:** `slug` da URL.
- **OUTPUT:** XML apenas com locs de bairros do slug correspondente. Priority 0.7.
- **VERIFY:** Acesso a `/sitemap-curitiba.xml` não exibe a raiz `/pr/curitiba`. Acesso a `/sitemap-abatia.xml` (4 bairros) retorna 404 (tratado) ou schema vazio (fallback). 

### Task 3: Criar `sitemap-demais-bairros.xml`
- **Agente:** `backend-specialist`
- **Ação:** Listar todos os bairros de todas as cidades que possuem de 1 a 4 bairros cadastrados.
- **INPUT:** Iteração sobre todas as cidades filtras por `neighborhoods.length > 0 && <= 4`.
- **OUTPUT:** XML unificado com `/pr/[cidade]/[bairro]`. Priority 0.6.
- **VERIFY:** Acesso à rota retorna blocos contendo os bairros de cidades pequenas.

### Task 4: Atualizar `sitemap.xml` (Index Mestre) e Excluir Obsoletos
- **Agente:** `backend-specialist`
- **Ação:** 
  - Incluir `sitemap-parana.xml`.
  - Incluir dinamicamente os `sitemap-[slug].xml` (Apenas cidades > 4 bairros).
  - Incluir `sitemap-demais-bairros.xml` (se houver cidades com 1-4 bairros).
  - Excluir o arquivo antigo `sitemap-parana-cidades.xml/route.ts` que não faz mais sentido na arquitetura.
- **VERIFY:** Acesso a `/sitemap.xml` retorna o número exato de sitemaps conforme a regra.

### Task 5: Atualizar Dashboard SEO Admin
- **Agente:** `frontend-specialist`
- **Ação:** Refletir a nova separação no painel, mostrando o `sitemap-parana.xml` com as 406 LPs, a contagem de Sitemaps de Bairros VIP, e o bloco de `demais-bairros`.
- **VERIFY:** Painel renderiza todas as contagens baseadas na nova estrutura.

---
## ✅ PHASE X (Verification Strategy) COMPLETE
- [x] Executar build local para validar tipagem TypeScript (especialmente rotas dinâmicas).
- [x] Acessar rotas no navegador/terminal para validar montagem do XML puro.
- [x] Rodar auditoria `checklist.py`.

- Lint: ✅ Pass
- Build: ✅ Success
- Date: 2026-02-25
