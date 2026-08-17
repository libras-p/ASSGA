# TODO - Integração Painel Admin com Site

## ✅ CONCLUÍDO (Fase 1)

- [x] Criar arquivo `carregar-dados.js` com funções de carregamento
- [x] Adicionar referência ao script em `index.html`
- [x] Adicionar referência ao script em `historia.html`
- [x] Adicionar referência ao script em `esportiva.html`
- [x] Adicionar referência ao script em `evento.html`
- [x] Adicionar referência ao script em `estatuto.html`
- [x] Adicionar referência ao script em `diretoria.html`
- [x] Modificar slider em `index.html` para carregar dados do localStorage
- [x] Sincronização de dados quando mudar entre abas do navegador

## ⏳ PRÓXIMAS ETAPAS (Fase 2)

### Adicionar classes/IDs nos elementos HTML

#### `historia.html`
- [ ] Adicionar classe `historia-titulo` ao título h2
- [ ] Adicionar classe `historia-texto` ao container de texto

#### `esportiva.html`
- [ ] Adicionar classe `esportiva-titulo` ao título h2
- [ ] Adicionar classe `esportiva-modalidade` à modalidade
- [ ] Adicionar classe `esportiva-texto` ao container de texto

#### `evento.html`
- [ ] Adicionar classe `evento-nome` ao nome do evento
- [ ] Adicionar classe `evento-data` à data
- [ ] Adicionar classe `evento-local` ao local
- [ ] Adicionar classe `evento-vagas` às vagas
- [ ] Adicionar classe `evento-valor` ao valor/preço
- [ ] Adicionar classe `evento-status` ao status
- [ ] Adicionar classe `evento-descricao` à descrição

#### `estatuto.html`
- [ ] Adicionar classe `estatuto-titulo` ao título
- [ ] Adicionar classe `estatuto-texto` ao container de texto
- [ ] Adicionar classe `estatuto-pdf` ao link PDF

#### `diretoria.html`
- [ ] Adicionar classe `diretoria-presidente` ao presidente
- [ ] Adicionar classe `diretoria-vice` ao vice-presidente
- [ ] Adicionar classe `diretoria-secretario` ao secretário
- [ ] Adicionar classe `diretoria-tesoureiro` ao tesoureiro
- [ ] Adicionar classe `diretoria-texto` ao container de texto

## 🎯 OBJETIVO FINAL

Permitir que administradores atualizem conteúdo do site através do painel admin, com os dados sendo salvos no localStorage e exibidos automaticamente em todas as páginas públicas.

## 📋 FLUXO DE FUNCIONAMENTO

```
1. Admin edita dados em adminpainel.html
   ↓
2. JavaScript salva em localStorage
   ↓
3. Usuário acessa página pública (ex: historia.html)
   ↓
4. carregar-dados.js carrega dados do localStorage
   ↓
5. Conteúdo é exibido dinamicamente na página
```

## 🚀 PRÓXIMOS PASSOS RECOMENDADOS

1. **Fase 2**: Adicionar classes aos elementos HTML (5 arquivos)
2. **Fase 3**: Testar carregamento de dados em cada página
3. **Fase 4**: Implementar backend (Node.js + MongoDB) para persistência real entre dispositivos
4. **Fase 5**: Adicionar autenticação mais robusta e controle de versões

---

**Data**: 17 de agosto de 2026
**Status**: Em Progresso
**Próxima Revisão**: Após conclusão da Fase 2
