# PRD — Netflix Clone

| Campo | Detalhe |
|---|---|
| **Produto** | Netflix Clone |
| **Status** | Em andamento (migração para React + TypeScript) |
| **Versão** | 2.0 |

---

## 1. Visão Geral

Clone da interface do Netflix — principal plataforma de streaming mundial — desenvolvido inicialmente com HTML5, CSS3 e JavaScript puro, e atualmente em processo de migração para React 19 + TypeScript + Vite.

### Objetivo

Recriar fielmente a interface de navegação e catálogo da Netflix, exibindo um banner de destaque com filme em evidência e um carrossel de filmes/séries, com design responsivo e tema escuro característico da plataforma.

### Público-alvo

- Desenvolvedores que desejam estudar React, TypeScript e consumo de APIs
- Entusiastas de front-end interessados em clonar interfaces famosas
- Portfólio técnico para demonstração de habilidades

---

## 2. Escopo

### Incluído (MVP)

- Header com logotipo e navegação principal
- Banner/Banner hero com filme em destaque, descrição e botões de ação
- Carrossel horizontal de posters de filmes/séries (com Owl Carousel ou biblioteca equivalente)
- Design responsivo (mobile, tablet, desktop)
- Tema escuro Netflix (preto `#141414`, vermelho `#E50914`)
- Build tooling com Vite + TypeScript

### Excluído (fora do escopo atual)

- Reprodução de vídeo real
- Autenticação / login de usuário
- API real da Netflix ou backend próprio
- Catálogo dinâmico com dados reais
- Player de streaming
- Perfis de usuário
- Busca/filtros

---

## 3. Requisitos Funcionais

| ID | Requisito | Descrição |
|---|---|---|
| RF-01 | **Header** | Barra de navegação fixa no topo com logo "NETFLIX" e links: Início, Séries, Filmes, Documentários |
| RF-02 | **Banner Hero** | Seção de destaque com imagem de fundo (`capa-house.jpg`), overlay gradiente escuro, título "House of Cards", descrição e botões "Assistir Agora" + "Mais Informações" |
| RF-03 | **Botões de ação** | Botões com ícones (play, info), fundo semi-transparente, hover com inversão de cores (branco com texto preto), transição suave de 0.3s |
| RF-04 | **Carrossel de filmes** | Carrossel horizontal com 10 posters de filmes, suporte a toque, looping infinito, margem entre itens |
| RF-05 | **Responsividade** | Header empilha verticalmente em telas < 700px; botões aumentam para touch; carrossel ajusta itens visíveis (1 em mobile, 3 em tablet, 5 em desktop) |
| RF-06 | **Tema escuro** | Fundo preto `#141414`, texto branco, vermelho Netflix `#E50914` no logo, gradiente overlay no hero |

---

## 4. Requisitos Não Funcionais

| ID | Requisito | Descrição |
|---|---|---|
| RNF-01 | **Performance** | Lighthouse > 90 em todas as categorias; carregamento inicial < 3s em 3G |
| RNF-02 | **Compatibilidade** | Chrome, Firefox, Safari, Edge (últimas 2 versões) |
| RNF-03 | **Responsividade** | Layout adaptável de 320px a 1920px |
| RNF-04 | **Manutenibilidade** | Código componentizado em React, com TypeScript estrito, semany |
| RNF-05 | **Build** | Build otimizado com Vite (code splitting, minificação, asset hashing) |
| RNF-06 | **Linter** | Oxlint configurado com regras React + TypeScript |

---

## 5. Stack Tecnológica

| Tecnologia | Versão | Finalidade |
|---|---|---|
| **React** | ^19.2.7 | Biblioteca UI |
| **TypeScript** | ~6.0.2 | Tipagem estática |
| **Vite** | ^8.1.0 | Bundler e dev server |
| **Oxlint** | ^1.69.0 | Linter |
| **CSS Modules** | — | Estilização encapsulada |
| **Embla Carousel** *(sugerido)* | — | Substituição moderna do Owl Carousel (sem jQuery) |

### Por que trocar Owl Carousel?

O Owl Carousel depende de jQuery. Como o projeto migra para React, uma alternativa nativa React é necessária. Sugere-se:

- **Embla Carousel** (leve, 5kB, sem dependências, performático)
- Ou **Swiper React** (robusto, bem documentado)

---

## 6. Arquitetura de Componentes (sugerida)

```
src/
├── App.tsx                    # Raiz da aplicação
├── main.tsx                   # Entry point
├── index.css                  # Estilos globais (tema escuro)
├── components/
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.module.css
│   ├── HeroBanner/
│   │   ├── HeroBanner.tsx
│   │   └── HeroBanner.module.css
│   └── MovieCarousel/
│       ├── MovieCarousel.tsx
│       └── MovieCarousel.module.css
├── assets/                    # Imagens, ícones
└── types/                     # Tipos TypeScript compartilhados
    └── index.ts
```

---

## 7. User Stories

### US-01 — Header de navegação
> **Como** usuário,
> **Quero** ver um header com logotipo e links de navegação,
> **Para** saber que estou em um clone da Netflix e poder navegar entre categorias.

### US-02 — Banner de destaque
> **Como** usuário,
> **Quero** ver um banner grande com um filme em evidência, descrição e botões,
> **Para** entender rapidamente qual é o conteúdo principal da plataforma.

### US-03 — Carrossel de filmes
> **Como** usuário,
> **Quero** navegar horizontalmente por posters de filmes/séries,
> **Para** explorar o catálogo disponível.

### US-04 — Layout responsivo
> **Como** usuário mobile,
> **Quero** que a interface se adapte ao meu dispositivo,
> **Para** ter uma boa experiência em qualquer tela.

---

## 8. Marcos / Roadmap

| Marco | Descrição | Status |
|---|---|---|
| **M1** | Scaffold Vite + React + TypeScript configurado | ✅ Concluído |
| **M2** | Header componentizado com logo e navegação | ⏳ Pendente |
| **M3** | Banner Hero com overlay gradiente e botões | ⏳ Pendente |
| **M4** | Carrossel de filmes funcional (Embla ou Swiper) | ⏳ Pendente |
| **M5** | Responsividade completa (mobile, tablet, desktop) | ⏳ Pendente |
| **M6** | Refinamentos visuais e performance | ⏳ Pendente |
| **M7** | Publicação (GitHub Pages / Vercel) | ⏳ Pendente |

---

## 9. Critérios de Sucesso

- Aparência visual correspondente ao screenshot de referência (`img/clone-netflix.png`)
- Layout responsivo funcional em mobile, tablet e desktop
- Código componentizado, tipado, sem warnings de linter
- Build de produção bem-sucedido (sem erros)
- Carrossel funcionando com navegação por clique, toque e arrasto

---

## 10. Assets

Os seguintes assets já estão disponíveis em `img/`:

| Arquivo | Uso |
|---|---|
| `capa-house.jpg` | Background do banner hero |
| `mini1.jpg` a `mini10.jpg` | Posters do carrossel de filmes |
| `clone-netflix.png` | Screenshot de referência do resultado final |

---

## 11. Glossário

| Termo | Definição |
|---|---|
| **Hero/Banner** | Seção principal de destaque no topo da página |
| **Carrossel** | Componente de navegação horizontal com rolagem infinita |
| **Overlay** | Camada semitransparente sobre a imagem de fundo para melhorar legibilidade |
| **Responsividade** | Capacidade de adaptar o layout a diferentes tamanhos de tela |
