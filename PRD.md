# PRD — Netflix Clone

| Campo | Detalhe |
|---|---|
| **Produto** | Netflix Clone |
| **Status** | Em andamento (full-stack com Docker) |
| **Versão** | 3.0 |

---

## 1. Visão Geral

Clone da interface da Netflix — principal plataforma de streaming mundial — desenvolvido como aplicação **full-stack**: frontend em React 19 + TypeScript + Vite, backend em Node.js + Express + TypeScript com catálogo mock, e ambiente containerizado com Docker/docker-compose (dev e produção).

### Objetivo

Recriar fielmente a interface de navegação e catálogo da Netflix: header fixo com navegação, banner hero com filme em evidência, carrosséis horizontais por fileiras (Top 10, Tendências, etc.), footer, tema escuro característico e layout responsivo de 320px a 1920px — tudo consumindo uma API própria (`/api`).

### Público-alvo

- Desenvolvedores que desejam estudar React, TypeScript, Node.js, Express e Docker
- Entusiastas de front-end interessados em clonar interfaces famosas
- Portfólio técnico para demonstração de habilidades

---

## 2. Escopo

### Incluído (MVP)

- Header com logotipo, navegação e perfil
- Banner/Banner hero com filme em destaque, descrição e botões de ação
- Carrosséis horizontais de posters por fileiras (Top 10, Tendências, Originais, etc.)
- Footer com colunas de links
- API REST própria (Express) com catálogo mock (`/api`)
- Design responsivo (mobile, tablet, desktop)
- Tema escuro Netflix (preto `#141414`, vermelho `#E50914`)
- Build tooling com Vite + TypeScript (frontend) e tsx + tsc (backend)
- Containerização com Docker + docker-compose (dev com hot-reload e produção com Nginx)

### Excluído (fora do escopo atual)

- Reprodução de vídeo real
- Autenticação / login de usuário
- API real da Netflix
- Banco de dados externo (SQLite/PostgreSQL) — o catálogo é servido de um arquivo JSON
- Player de streaming
- Perfis de usuário
- Busca/filtros avançados

---

## 3. Requisitos Funcionais

| ID | Requisito | Descrição |
|---|---|---|
| RF-01 | **Header** | Barra de navegação fixa no topo com logo "NETFLIX", links (Início, Séries, Filmes, Documentários) e ícone de perfil. Transparente no topo e preta com gradiente ao rolar. |
| RF-02 | **Banner Hero** | Seção de destaque com imagem de fundo (`capa-house.jpg`), overlay gradiente escuro, título "House of Cards", match %, ano, selo etário, descrição e botões de ação. |
| RF-03 | **Botões de ação** | Botões com ícones (play, info). "Assistir Agora" branco com texto preto; "Mais Informações" cinza translúcido. Transição suave de 0.3s. |
| RF-04 | **Carrossel de filmes** | Carrossel horizontal custom (CSS scroll-snap) por fileira, com setas que aparecem no hover, suporte a toque/arrasto e card com hover scale estilo Netflix. |
| RF-05 | **Responsividade** | Header empilha verticalmente em telas < 700px; setas do carrossel ocultas no mobile; hero e tipografia adaptáveis de 320px a 1920px. |
| RF-06 | **Tema escuro** | Fundo preto `#141414`, texto branco, vermelho Netflix `#E50914` no logo, gradiente overlay no hero. |
| RF-07 | **API REST** | Backend Express com endpoints `/api/catalog`, `/api/movies`, `/api/movies/:id`, `/api/genres`, `/api/featured`, `/api/health`. Catálogo mock servido de JSON. |
| RF-08 | **Containerização** | Docker/docker-compose com dois serviços: `web` (frontend) e `api` (backend). Dev com hot-reload (volumes) e produção servida por Nginx com proxy `/api`. |
| RF-09 | **Footer** | Rodapé com colunas de links (Texto de áudio e legendas, Imprensa, Privacidade, Entre em contato etc.) no padrão da Netflix. |

---

## 4. Requisitos Não Funcionais

| ID | Requisito | Descrição |
|---|---|---|
| RNF-01 | **Performance** | Lighthouse > 90 em todas as categorias; carregamento inicial < 3s em 3G |
| RNF-02 | **Compatibilidade** | Chrome, Firefox, Safari, Edge (últimas 2 versões) |
| RNF-03 | **Responsividade** | Layout adaptável de 320px a 1920px |
| RNF-04 | **Manutenibilidade** | Código componentizado em React, com TypeScript estrito |
| RNF-05 | **Build** | Build otimizado com Vite (code splitting, minificação, asset hashing) |
| RNF-06 | **Linter** | Oxlint configurado com regras React + TypeScript |
| RNF-07 | **Containerização** | Imagens Docker slim e multi-stage; docker-compose up reproduz o ambiente completo (dev e prod) |
| RNF-08 | **API interna** | Frontend acessa a API via caminho relativo `/api` (proxy do Vite em dev e do Nginx em prod), sem divergência de URL entre ambientes |

---

## 5. Stack Tecnológica

| Tecnologia | Versão | Finalidade |
|---|---|---|
| **React** | ^19.2.7 | Biblioteca UI |
| **TypeScript** | ~6.0.2 | Tipagem estática |
| **Vite** | ^8.1.0 | Bundler e dev server (frontend) |
| **Oxlint** | ^1.69.0 | Linter |
| **Express** | ^5.x | Backend / API REST |
| **tsx** | ^4.x | Hot-reload do backend em dev |
| **Nginx** | alpine | Servidor estático de produção + proxy reverso |
| **Docker / docker-compose** | — | Containerização (dev e produção) |
| **CSS Modules** | — | Estilização encapsulada |
| **Carrossel custom** | — | CSS scroll-snap + JS leve (sem dependência de biblioteca) |

---

## 6. Arquitetura de Componentes

```
netflix/
├── docker-compose.yml        # Serviços: web + api
├── Dockerfile                # Frontend multi-stage (node → nginx)
├── nginx.conf                # SPA fallback + proxy /api
├── server/                   # Backend Express + TS
│   ├── Dockerfile
│   └── src/
│       ├── server.ts         # Bootstrap HTTP
│       ├── app.ts            # Config do Express + rotas
│       ├── routes/           # catalog, movies, genres, featured, health
│       ├── data/
│       │   └── catalog.json  # Catálogo mock (herói + fileiras)
│       └── types.ts
└── src/                      # Frontend React
    ├── App.tsx               # Raiz da aplicação
    ├── main.tsx              # Entry point
    ├── index.css             # Estilos globais (tema escuro)
    ├── api/
    │   └── client.ts         # Cliente HTTP (fetch /api)
    ├── hooks/
    │   └── useCatalog.ts     # Busca do catálogo
    ├── types/
    │   └── index.ts          # Tipos compartilhados
    └── components/
        ├── Header/
        ├── HeroBanner/
        ├── MovieRow/
        ├── MovieCard/
        └── Footer/
public/images/                # capa-house.jpg, mini1-10.jpg
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
> **Quero** navegar horizontalmente por fileiras de filmes/séries,
> **Para** explorar o catálogo disponível.

### US-04 — Layout responsivo
> **Como** usuário mobile,
> **Quero** que a interface se adapte ao meu dispositivo,
> **Para** ter uma boa experiência em qualquer tela.

### US-05 — Catálogo dinâmico
> **Como** usuário,
> **Quero** que o conteúdo venha de uma API,
> **Para** que o frontend e o backend estejam desacoplados, como em um projeto real.

---

## 8. Marcos / Roadmap

| Marco | Descrição | Status |
|---|---|---|
| **M0** | PRD atualizado + reorganização da estrutura | ✅ Concluído |
| **M1** | Scaffold Vite + React + TypeScript configurado | ✅ Concluído |
| **M2** | Header componentizado com logo e navegação | ✅ Concluído |
| **M3** | Banner Hero com overlay gradiente e botões | ✅ Concluído |
| **M4** | Carrossel de filmes funcional (custom scroll-snap) | ✅ Concluído |
| **M5** | Responsividade completa (mobile, tablet, desktop) | ✅ Concluído |
| **M6** | Footer + refinamentos visuais | ✅ Concluído |
| **M7** | Backend Express + API /api com catálogo mock | ✅ Concluído |
| **M8** | Docker/docker-compose (dev + produção com Nginx) | ✅ Concluído |
| **M9** | Publicação (GitHub Pages / Vercel / deploy container) | ⏳ Pendente |

---

## 9. Critérios de Sucesso

- Aparência visual correspondente ao screenshot de referência (`img/clone-netflix.png`) e à versão original em HTML (`main` branch)
- Layout responsivo funcional em mobile, tablet e desktop
- Código componentizado, tipado, sem warnings de linter
- Build de produção bem-sucedido (sem erros)
- Carrossel funcionando com navegação por clique, toque e arrasto
- API `/api` respondendo o catálogo mock consumido pelo frontend
- `docker compose up` reproduzindo dev (hot-reload) e produção (Nginx) sem configuração manual

---

## 10. Assets

Os seguintes assets já estão disponíveis em `public/images/` (movidos de `img/`):

| Arquivo | Uso |
|---|---|
| `capa-house.jpg` | Background do banner hero |
| `mini1.jpg` a `mini10.jpg` | Posters dos carrosséis de filmes |
| `clone-netflix.png` | Screenshot de referência do resultado final |

---

## 11. Glossário

| Termo | Definição |
|---|---|
| **Hero/Banner** | Seção principal de destaque no topo da página |
| **Carrossel** | Componente de navegação horizontal com rolagem infinita |
| **Overlay** | Camada semitransparente sobre a imagem de fundo para melhorar legibilidade |
| **Responsividade** | Capacidade de adaptar o layout a diferentes tamanhos de tela |
| **API REST** | Interface HTTP que expõe dados do catálogo consumidos pelo frontend |
| **Docker Compose** | Ferramenta para orquestrar múltiplos containers (web + api) |
| **Multi-stage** | Build em etapas no Dockerfile para gerar imagem final enxuta |
