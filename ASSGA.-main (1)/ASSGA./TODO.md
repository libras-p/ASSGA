# TODO - Responsividade e Padronização do Site ASSGA

## Objetivo
Deixar todas as páginas do site responsivas para celular e notebook/desktop, padronizando navegação.

## Passos

- [x] **1. `diretoria.html`** - Adicionar header padrão (logo ASSGA + menu de navegação + hambúrguer)
- [x] **2. `diretoria.html`** - Adicionar media queries responsivas (celular e tablet/notebook)
- [x] **3. `diretoria.html`** - Adicionar função `toggleMenu()` no JavaScript
- [x] **4. `esportiva.html`** - Adicionar header padrão (logo ASSGA + menu de navegação + hambúrguer)
- [x] **5. `esportiva.html`** - Adicionar media queries responsivas (celular e tablet/notebook)
- [x] **6. `esportiva.html`** - Adicionar função `toggleMenu()` no JavaScript
- [x] **7. Verificar** - Revisar consistência entre as 6 páginas
- [x] **8. `diretoria.html`** - Adicionar gestão 2027 (botão filtro + card Presidente 2027)
- [x] **9. Todas as páginas** - Padronizar logo `.logo-area img` para 56x68 px (desktop, tablet e celular)
- [x] **10. Todas as páginas** - Envolver a logo `Assga_foto.jpg` com link para `index.html`
- [x] **11. Todas as páginas** - Efeito hover do menu funcionando em todos os tamanhos (celular, tablet e notebook) via `:hover`, `:active` e `:focus`

## DNS / Custom Domain (GitHub Pages - InvalidARecordError)

## Objetivo
Corrigir a configuração de DNS do domínio `www.assga.com` para o GitHub Pages.

## Passos

- [x] **1. Repositório** - Verificar/confirmar que o arquivo `CNAME` contém `www.assga.com` (correto)
- [x] **2. Documentação** - Adicionar guia de DNS no `README.md` com os registros CNAME/A obrigatórios
- [x] **3. Provedor de DNS** - (Ação manual) Alterar `www.assga.com` de **A** para **CNAME → `daef27.github.io`** no painel do registrar
- [x] **4. Provedor de DNS** - (Ação manual) Adicionar os 4 registros A do GitHub Pages no domínio raiz `assga.com`
- [ ] **5. Verificação** - Aguardar propagação do DNS (até 48h) e confirmar em `Settings → Pages` que o domínio ficou "Verified"
