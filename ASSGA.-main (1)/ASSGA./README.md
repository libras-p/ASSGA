# assga

Site oficial da **ASSGA** (Associação ... ) — hospedado no **GitHub Pages**.

## 🌐 Configuração de Domínio / DNS

> ⚠️ **Problema atual (InvalidARecordError):**
> O GitHub Pages detectou que `www.assga.com` está configurado como **registro A**.
> O GitHub Pages exige um **registro CNAME** apontando para `daef27.github.io`.

### 1. O que já está correto no repositório

O arquivo **`CNAME`** na raiz do repositório contém exatamente:

```
www.assga.com
```

Isso já é o esperado pelo GitHub Pages. **Nenhuma alteração é necessária neste repositório.**

### 2. O que precisa ser corrigido no provedor de DNS (registrar)

A correção deve ser feita no painel do seu provedor de DNS
(ex.: GoDaddy, Cloudflare, Registro.br, Hostinger, etc.), **não** neste repositório.

#### a) Subdomínio `www` → registro CNAME

| Campo   | Valor                        |
|---------|------------------------------|
| Tipo    | `CNAME`                      |
| Nome    | `www`                        |
| Alvo    | `daef27.github.io`           |
| TTL     | 600 (ou o padrão)            |

> 🔁 Substitua/remova o **registro A** existente de `www.assga.com` por este CNAME.

#### b) Domínio raiz (apex) `assga.com` → registros A

Para que o domínio principal (o "nome alternativo") também funcione,
adicione os **4 registros A** do GitHub Pages:

| Tipo | Nome      | Valor                 |
|------|-----------|-----------------------|
| `A`  | `@`       | `185.199.108.153`     |
| `A`  | `@`       | `185.199.109.153`     |
| `A`  | `@`       | `185.199.110.153`     |
| `A`  | `@`       | `185.199.111.153`     |

#### c) (Opcional) HTTPS / Verificação

- Habilite **"Enforce HTTPS"** nas configurações do repositório
  (`Settings → Pages`) depois que o DNS propagar.
- A propagação do DNS pode levar de alguns minutos a **48 horas**.

### 3. Compartilhamento de domínio em múltiplos repositórios

> ℹ️ **Importante:** um mesmo domínio **só pode ser usado por um único repositório**
> no GitHub Pages. Como o repositório deste projeto é `daef27/...` (com CNAME de
> `www.assga.com`), nenhum outro projeto pode usar `www.assga.com` ou `assga.com`.

### 4. Referência oficial

- [Gerenciando um domínio personalizado para o GitHub Pages](https://docs.github.com/pt/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Sobre domínios personalizados e o GitHub Pages](https://docs.github.com/pt/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

