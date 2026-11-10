# Órbita Store

Uma loja fictícia de jogos independentes com atmosfera espacial, criada para o desafio DIO **Recriando a Interface da PlayStation Store com Angular**. Reinterpreta a organização de uma loja de jogos com menu, catálogo de cards, etiquetas e preços compostos em componentes Angular. Jogos, textos e artes CSS são originais desta implementação; não há compras, integração PSN ou vínculo com Sony.

## Executar

Node 24.16 e npm 11.13 usados na validação. Angular 22.2 e CLI 22.2.6 fixados pelo package-lock.json.

```sh
npm ci
npm start
npm run build
npm test -- --watch=false
```

## Explorar

- Catálogo com seis jogos fictícios e detalhes em dialog nativo.
- Busca sem diferença entre acentos/maiúsculas, filtros por gênero e ordenação por preço.
- Lista de desejos em memória, combinável com os demais filtros; reiniciar a página limpa a seleção.
- Estado vazio com limpeza dos filtros; preço gratuito e preço anterior.
- Layout com grid adaptável, tipografia fluida, foco visível, skip link, rótulos e estados aria-pressed.
- Arte procedural feita exclusivamente em CSS, sem imagens externas, fontes remotas ou rastreamento.

App controla catálogo/estado. GameCard compõe GameArt, GameLabel e GamePrice; entradas tipadas recebem dados do pai, outputs emitem ações. Preços em centavos evitam cálculos decimais inadequados. CSS está em src/styles.css.

## Referência e diferenças

Enunciado DIO consultado em 10/11/2026: replicar ou melhorar o projeto e apresentar repositório GitHub. Fonte didática: https://github.com/felipeAguiarCode/angular-psn-store-clone, commit 594c87c89b84556a111dd0a10f87efb7316d6d88 (Angular 14). Estrutura e código completos dos componentes oficiais foram estudados; esta implementação usa standalone e inputs/outputs modernos, dados tipados, conteúdo original e controles funcionais. Não usa imagens ou código copiados do repositório.

Os players das duas primeiras aulas não expuseram vídeo/legendas pelos controles acessíveis; a página apresentou imagem de apresentação. Não se afirma leitura das transcrições nem conclusão das 16 videoaulas deste desafio. Lacuna registrada nas notas do curso.

## Validação e limites

Build de produção passou: 150,50 kB inicial, transferência estimada 45,17 kB. Testes cobrem combinação de filtros, ordenação, atualização de favoritos pelo DOM e integridade dos dados. Abertura visual local no navegador está pendente devido à restrição da ferramenta já registrada. A modal nativa deve receber conferência visual, de foco e Escape em navegador real antes de afirmar revisão interativa completa.

Status: publicação do código autorizada pelo usuário em 10/11/2026. Entrega DIO ainda pendente; não há certificado ou entrega confirmados para este projeto.

Resultado final: 4/4 testes aprovados em 10/11/2026. Build sem avisos.

