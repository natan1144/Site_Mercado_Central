# Mercado Central

## Integrantes da dupla

- Natan Henrique Pena — RA: UC26100628
- Willamy da Costa Almeida — RA: UC26101777

## Descrição do caso escolhido

O projeto consiste em uma landing page institucional para o **Mercado Central**, um mercado de bairro localizado no Riacho Fundo I, Brasília – DF. O estabelecimento é um pequeno negócio local que vende produtos de hortifruti, mercearia, laticínios, bebidas, itens de higiene e limpeza, e possui como principal diferencial um açougue bem avaliado pelos clientes da região.

## Necessidade identificada

O Mercado Central não possuía uma presença digital estruturada que comunicasse de forma clara seus diferenciais (variedade de produtos, açougue premiado, entrega em domicílio), suas promoções da semana, horários de funcionamento e formas de contato. Sem uma página própria, clientes em potencial dependiam apenas de avaliações dispersas no Google ou da indicação de vizinhos para conhecer o estabelecimento, sem conseguir visualizar previamente promoções, localização exata ou horários antes de decidir ir até a loja ou fazer um pedido.

## Público-alvo

O público-alvo é formado por **moradores do Riacho Fundo I e região**, que buscam um mercado de bairro próximo de casa. São pessoas que valorizam praticidade, preços acessíveis e atendimento próximo, e que precisam encontrar com facilidade: o que o mercado oferece, quais são as promoções da semana, os horários de funcionamento, a localização exata e uma forma rápida de entrar em contato (telefone ou WhatsApp) para tirar dúvidas ou solicitar entrega.

## Objetivo do site

A principal ação esperada do visitante é **entrar em contato com o mercado** — por telefone ou WhatsApp — para fazer um pedido, tirar dúvidas sobre produtos/entrega ou se planejar para visitar a loja. De forma complementar, a página também favorece que o visitante confira as promoções da semana, veja os horários de funcionamento e encontre a localização no mapa.

## Processo de desenvolvimento

O desenvolvimento partiu da identificação do Mercado Central como um pequeno negócio local sem presença digital estruturada. A dupla organizou o trabalho nas seguintes etapas:

1. **Diagnóstico**: levantamento dos diferenciais do mercado (açougue, variedade, entrega), do público-alvo e da ação principal que o site deveria favorecer (contato via telefone/WhatsApp).
2. **Planejamento do conteúdo**: definição das seções necessárias — apresentação (hero), diferenciais, galeria do açougue, promoções, horários/localização, depoimentos e contato.
3. **Estruturação do HTML**: criação da página com elementos semânticos (`header`, `nav`, `main`, `section` e `footer`) organizados por seção, identificadas por `id` para navegação interna.
4. **Estilização com CSS**: definição de uma paleta de cores própria (preto, amarelo e vermelho, remetendo a açougue/feira) e organização visual das seções.
5. **Implementação do JavaScript**: adição de comportamento interativo (menu mobile, destaque de seção ativa, lightbox da galeria, animação de entrada dos cards).
6. **Ajustes e correções**: durante o processo, foi identificado que o `index.html` referenciava os arquivos `mercado.css` e `mercado.js` enquanto os arquivos reais estavam organizados em `css/style.css` e `js/script.js` — os caminhos foram corrigidos para refletir a estrutura de pastas adotada.
7. **Testes e publicação**: verificação do funcionamento da página em diferentes tamanhos de tela e publicação via GitHub Pages.

## Principais decisões do projeto

- **Estrutura HTML**: a página foi dividida em seções semânticas com `id` próprio (`#diferenciais`, `#acougue`, `#promocoes`, `#horarios`, `#depoimentos`), permitindo navegação por âncoras a partir do menu fixo.
- **Organização visual**: uso de uma seção de destaque (hero) com chamada para ação logo no topo, seguida de uma "esteira" animada com as categorias de produtos, cards de diferenciais, galeria do açougue, promoções, informações práticas e depoimentos.
- **Identidade visual**: paleta de cores (preto/escuro de fundo, amarelo e vermelho como destaque) escolhida para remeter ao universo de açougue e mercado, com tipografia legível (Nunito) para o corpo do texto.
- **Responsividade**: uso de menu hambúrguer para telas pequenas, com fechamento automático ao clicar em um link, rolar a página ou redimensionar a janela para desktop.
- **Acessibilidade**: imagens com atributo `alt`, botão do menu mobile com `aria-label` e `aria-expanded`, lightbox com navegação por teclado e imagem ampliada mantendo o texto alternativo original.
- **Interatividade**: prioridade para funcionalidades que reforçam a experiência da página, como galeria ampliada, menu responsivo e destaque da seção ativa.

## Funcionalidade em JavaScript

Foram implementadas múltiplas funcionalidades em JavaScript puro (`js/script.js`), sendo a principal delas:

**Lightbox da galeria do açougue**: ao clicar em uma das fotos da seção de galeria (`#acougue`), a imagem é exibida ampliada em uma sobreposição (`#lightbox`), permitindo que o visitante veja os cortes de carne com mais detalhe. O lightbox pode ser fechado clicando no botão "✕", clicando fora da imagem ou pressionando a tecla `Esc`.

Funcionalidades complementares também implementadas:

- **Destaque do link ativo no menu** conforme a seção visível na tela, usando `IntersectionObserver`.
- **Ocultação automática do menu** ao rolar a página para baixo, e reexibição ao rolar para cima.
- **Menu hambúrguer responsivo**, com fechamento automático em diferentes situações.
- **Animação de entrada dos cards** de diferenciais, promoções e depoimentos conforme entram na área visível da tela.
- **Acessibilidade no lightbox**, mantendo o foco do teclado e copiando o `alt` original da imagem aberta.

Essas funcionalidades foram escolhidas por melhorarem diretamente a experiência de navegação sem exigir lógica complexa, mantendo o projeto compatível com o nível da disciplina.

## Uso de Bootstrap

O projeto utiliza o Bootstrap 5.3.3 por meio de CDN para auxiliar na criação de layouts responsivos e facilitar a organização visual dos elementos.

A aplicação do Bootstrap foi feita principalmente na seção **"Diferenciais"** do Mercado Central, utilizando o sistema de grid responsivo.

Foram utilizadas classes como:

- `container`
- `row`
- `g-4`
- `col-12`
- `col-md-6`
- `col-lg-4`

Essas classes permitem que os cards de diferenciais se adaptem automaticamente conforme o tamanho da tela:

- Em celulares: os cards aparecem em uma coluna.
- Em tablets: os cards ficam organizados em duas colunas.
- Em computadores: os cards aparecem em três colunas.

A escolha do Bootstrap ajudou a melhorar a responsividade do site, mantendo uma estrutura organizada sem substituir o CSS personalizado desenvolvido para a identidade visual do Mercado Central.

## Testes realizados

- **Responsividade**: a página foi testada em diferentes larguras de tela usando as ferramentas de inspeção do navegador.
- **Links e navegação**: verificação do funcionamento de todos os links internos, Google Maps, avaliações no Google, telefone e WhatsApp.
- **Imagens**: confirmação de que todas as imagens (`logo.png`, `carne1.jpeg`, `carne2.jpeg`, `churrasco.jpeg`) carregam corretamente.
- **JavaScript**: teste manual do lightbox, menu mobile, destaque de seção ativa e animação dos cards.
- **Acessibilidade**: teste do menu mobile com `aria-expanded`, navegação por teclado no lightbox e fechamento com `Esc`.
- **Publicação**: após o deploy no GitHub Pages, foi verificado se CSS, JavaScript e imagens carregavam corretamente fora do ambiente local.

## Links

- Link do repositório: https://github.com/natan1144/Site_Mercado_Central
- Link do site publicado: https://natan1144.github.io/Site_Mercado_Central/

## Contribuição dos integrantes

- **Natan Henrique Pena**: responsável pela estruturação do HTML, criação das seções principais, estilização com CSS, implementação das funcionalidades em JavaScript, organização dos arquivos, testes de responsividade e publicação no GitHub Pages.

- **Willamy da Costa Almeida**: responsável pela pesquisa sobre o negócio escolhido, organização dos conteúdos apresentados no site, revisão das informações, apoio nos testes de navegação, verificação da responsividade e auxílio na documentação do projeto.