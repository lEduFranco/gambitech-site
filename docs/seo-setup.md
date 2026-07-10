# Guia completo de SEO — Gambit Tech

Checklist para indexação no Google, Search Console, Google Business Profile e crescimento orgânico.

---

## 1. Google Search Console

### Cadastrar a propriedade

1. Acesse [Google Search Console](https://search.google.com/search-console)
2. Clique em **Adicionar propriedade**
3. Escolha **Prefixo do URL** e informe: `https://gambitech.com.br`
4. Método recomendado: **Tag HTML**
   - Copie apenas o valor do atributo `content` (ex.: `abc123xyz`)
   - Cole em `.env.local`:
     ```bash
     GOOGLE_SITE_VERIFICATION=abc123xyz
     ```
   - Faça deploy e clique em **Verificar** no Search Console

### Enviar o sitemap

Após verificação:

1. Menu **Sitemaps** → adicionar: `sitemap.xml`
2. URL completa: `https://gambitech.com.br/sitemap.xml`

O sitemap já inclui:

- Home (`/`)
- Blog (`/blog`) e todos os artigos
- Todas as páginas de portfólio (`/portfolio/[slug]`)

### Monitorar (semanal)

- **Pages** → páginas indexadas vs. não indexadas
- **Performance** → queries com "software house", "fábrica de software", etc.
- **Core Web Vitals** → LCP, CLS, INP
- **Links** → sites que linkam para você (backlinks)

---

## 2. Google Business Profile (Brasília)

Para ranquear em buscas locais ("software house Brasília"):

1. Acesse [Google Business](https://business.google.com)
2. Crie perfil com dados oficiais:
   - **Nome:** Gambit Tech
   - **Categoria:** Empresa de software / Desenvolvimento de software
   - **Telefone:** +55 61 99433-0906
   - **Site:** https://gambitech.com.br
   - **Área:** Brasília, DF (e região atendida: Brasil)
3. Verifique o negócio (cartão postal, telefone ou e-mail)
4. Adicione fotos (logo `knight.png`, screenshots de projetos)
5. Publique updates mensais (cases, artigos do blog)
6. Peça avaliações a clientes satisfeitos (com moderação)

---

## 3. Bing Webmaster Tools (opcional)

1. [Bing Webmaster](https://www.bing.com/webmasters)
2. Importe do Google Search Console ou verifique manualmente
3. Envie o mesmo sitemap: `https://gambitech.com.br/sitemap.xml`

---

## 4. O que já está implementado no site

| Recurso | Local |
|---------|-------|
| Metadata (title, description, keywords) | `app/data/site.ts` |
| Open Graph / Twitter (1200×630) | `app/opengraph-image.tsx` |
| Sitemap | `app/sitemap.ts` → `/sitemap.xml` |
| Robots | `app/robots.ts` → `/robots.txt` |
| JSON-LD (Organization, FAQ, Blog, Cases) | `app/lib/json-ld.ts` |
| Blog SEO (3 artigos) | `app/data/blog.ts` |
| FAQ na home | `app/data/faq.ts` |
| Verificação Google | env `GOOGLE_SITE_VERIFICATION` |

---

## 5. Backlinks — plano de 90 dias

Backlinks são essenciais para ranquear "software house Brasil".

### Ações imediatas

- [ ] LinkedIn da empresa com link para gambitech.com.br
- [ ] GitHub org/profile com website no bio
- [ ] Assinatura de e-mail com link do site
- [ ] Pedir link nos sites de clientes (Tô Mais Vip, Fraternidade Nova Era, etc.)

### Conteúdo

- [ ] Publicar 1 artigo novo no blog por mês
- [ ] Compartilhar artigos no LinkedIn com link canônico
- [ ] Guest post em blogs de tecnologia/negócios

### Diretórios (com moderação)

- [ ] Clutch, GoodFirms ou similares (perfil software house Brasil)
- [ ] Diretórios locais de Brasília / DF

---

## 6. Keywords alvo (acompanhar no Search Console)

| Keyword | Página principal |
|---------|------------------|
| software house | `/` |
| fábrica de software | `/` |
| software house Brasil | `/` |
| desenvolvimento de software sob medida | `/`, `/blog/quanto-custa-desenvolver-software-sob-medida` |
| como escolher software house | `/blog/como-escolher-software-house` |
| o que é fábrica de software | `/blog/o-que-e-fabrica-de-software` |
| software house Brasília | `/` + Google Business |

---

## 7. Google Analytics 4 (opcional)

1. Crie propriedade em [Google Analytics](https://analytics.google.com)
2. Copie o **Measurement ID** (formato `G-XXXXXXXXXX`)
3. Adicione em `.env.local` e na Vercel:
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
4. Redeploy — o script é injetado automaticamente via `app/components/GoogleAnalytics.tsx`

---

## 8. Próximas melhorias opcionais

1. **Imagem OG estática em PNG** — exportar de `/opengraph-image` para redes que não renderizam dinâmico
2. **Google Analytics 4** — eventos de contato (clique email/telefone)
3. **Mais artigos** — SaaS, IA empresarial, MVP
4. **Página /servicos** — landing dedicada para "desenvolvimento de software"
5. **hreflang** — se expandir para EN no futuro

---

## 9. Testar antes e depois do deploy

```bash
# Build local
npm run build
npm run start

# URLs para validar
open http://localhost:3000/robots.txt
open http://localhost:3000/sitemap.xml
open http://localhost:3000/opengraph-image
```

Ferramentas online:

- [Rich Results Test](https://search.google.com/test/rich-results) — JSON-LD
- [PageSpeed Insights](https://pagespeed.web.dev/) — performance
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) — OG image
- [Twitter Card Validator](https://cards-dev.twitter.com/validator) — Twitter cards

---

## Contato técnico

Dúvidas sobre SEO do site: revisar `app/data/site.ts` e este guia.  
Para alterar textos dos artigos: `app/data/blog.ts`.
