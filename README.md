# Desafio de Desenvolvimento Front-end

Desafio tecnico para a vaga de front-end da empresa Jurisoft

## Sumário

1. [Visão Geral](#visão-geral)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Instalação](#instalação)
4. [Como Usar](#como-usar)
5. [Estrutura do Projeto](#estrutura-do-projeto)
6. [Considerações do candidato](#consideraçoes-do-candidato)

## Visão Geral

O desafio consistia em reproduzir dentro de um prazo de 4 dias um layout proposto, utlizando `nuxt` como framework javascript e `scss` como pré-processador de css.<br>
O layout simulava a tela inicial de uma dashboard, contendo: Uma barra lateral, uma barra no topo e o conteudo principal. Dentro desse conteudo principal haviam alguns widgets e cada um tinha sua funcionalidade especifica.

## Tecnologias Utilizadas

- Nuxt3
- Sass
- Vue3
- Javascript
- Jsdocs
- NuxtIcon

## Instalação

Para instalar siga o passo a passo:
```bash
# Clone este repositório.
$ git clone <git@github.com:Andersonmpereira/frontend-case.git>

# instale as dependencias
$ npm install

```

## Como Usar

Para inciar o projeto, acesso o diretorio clonado e rode o comando
```bash.
$ npm run dev
```

Com isso já é possivel acessar o projeto localmente.<br>
O acesso é `localhost:porta`, por exemplo:
```bash.
http://localhost:3000/
```

Alguns dados são mockados e é possível ativá-los ou desativá-los por meio da variável/prop chamada `mock`. Para ativar o `mock`, defina `mock=true`; para desativá-lo e visualizar os dados reais, defina `mock=false`.

- [Courses.vue](https://sass-lang.com/install)
- [CoursesProgress.vue](https://sass-lang.com/install)
- [DailyWork.vue](https://sass-lang.com/install)
- [Highlight.vue](https://sass-lang.com/install)

## Estrutura do Projeto

O projeto segue a linha de estrutura padrão do `nuxt` e foi utilizado:

- Layout: criei um layout padrão para ser acessado por todas as pages
- Components: criei alguns componentes para modularizar a aplicação
- Pages: Crei as paginas mesmo sem conteudo simular navegação na aplicação
- Composables: Criei para gerenciar o cronometro
- Assets: Contém os estilos padrões e imagens complementares

## Considerações do candidato

- De modo geral foi um desafio extremamente interessante que pude validar meu conhecimento
- Apesar de ter feito algumas funcionalidades e  mockado informações dinamicamente, meu foco principal foi na fidelidade ao layout e sua adaptação a diferentes dispositivos
- A aplicação está responsiva
- Por conta do tempo, não consegui fazer o gerenciamento dos botões do widget baseado se há ou não conteudo mockado e a inserção da barra de pesquisa na tabela
- Também gostaria de ter implementado modo escuro e testes unitarios, pelo menos para o contador

---

Para finalizar, agradeço a oportunidade.