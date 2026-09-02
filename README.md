# 🏛️ Website Dra. Rosana Beling — Advocacia com Propósito

Website institucional de alta performance para o escritório **Dra. Rosana Beling Advocacia** (OAB/SC 24.701), situado em Balneário Camboriú - SC. O site conta com arquitetura Single Page Application (SPA) moderna, design responsivo, animações fluidas, otimização SEO e integração direta com WhatsApp.

---

## 🚀 1. Tecnologias Utilizadas

O projeto foi construído com as melhores práticas de desenvolvimento web moderno:

- **[React 18+](https://react.dev/)**: Biblioteca componentizada para interface de usuário reativa.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática rigorosa para confiabilidade e manutenibilidade.
- **[Vite](https://vitejs.dev/)**: Bundler ultrarrápido para desenvolvimento e build de produção.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework utilitário moderno configurado com tokens temáticos personalizados.
- **[Motion (Framer Motion)](https://motion.dev/)**: Animações fluidas de transição de abas, modais e elementos interativos.
- **[Lucide React](https://lucide.dev/)**: Conjunto de ícones vetoriais modernos e leves.
- **[Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)**: Efeito de celebração visual ao enviar formulários de contato com sucesso.
- **GitHub Pages SPA Routing (`404.html` + `index.html`)**: Suporte completo a rotas limpas no domínio customizado (`rosanabeling.adv.br`).

---

## 🎨 2. Cores, Tipografia e Estilo dos Componentes

O design foi concebido com uma paleta sóbria, elegante e acolhedora, ideal para o segmento jurídico premium:

### 🎭 Paleta de Cores

| Nome / Token | Código HEX | Aplicação |
| :--- | :---: | :--- |
| **Warm Background** | `#F8F5F0` | Fundo principal da página (areia claro e acolhedor) |
| **Warm Cream** | `#FAF7F2` | Fundo secundário para seções alternadas e cards suaves |
| **Warm Card** | `#FFFFFF` | Fundo de cards, caixas de destaque e modais |
| **Warm Border** | `#E8E2D8` | Bordas sutis de separação e contorno de cards |
| **Caramel / Dourado** | `#B88E5E` | Destaques, ícones, bordas nobres e botões primários |
| **Caramel Hover** | `#A57C4E` | Estado hover de botões e links de destaque |
| **Caramel Light** | `#F4ECE1` | Fundos de badges, tags e destaques suaves |
| **Dark Coffee** | `#211C19` | Tipografia principal (títulos e textos) com alto contraste |
| **Dark Muted** | `#5C544E` | Textos de apoio, subtítulos e descrições secundárias |
| **Dark Footer** | `#1C1714` | Fundo do rodapé |
| **WhatsApp Green** | `#25D366` | Botão flutuante e botões de chamada rápida do WhatsApp |

### 🔤 Tipografia

- **Títulos (`h1`, `h2`, `h3`, `h4`)**: `Playfair Display` & `Cormorant Garamond` (Serifas clássicas e refinadas).
- **Corpo do Texto & Menus**: `Plus Jakarta Sans` & `Inter` (Sans-serif moderno com legibilidade excelente).
- **Subtítulos e Detalhes Display**: `Cinzel` (Elegância para identificadores e selos).

### 🔘 Estilo dos Botões

1. **Botão Primário (Dourado / Caramelo)**:
   - Classes: `bg-[#B88E5E] text-white hover:bg-[#A57C4E] transition-colors rounded-lg shadow-sm font-semibold`
   - Uso: Agendamento de consultas, envio de formulários e chamadas de ação (CTA).

2. **Botão Secundário / Contorno**:
   - Classes: `border border-[#B88E5E] text-[#B88E5E] hover:bg-[#B88E5E] hover:text-white transition-colors rounded-lg`
   - Uso: "Saiba Mais", abertura de modais informativos e navegação secundária.

3. **Botão WhatsApp**:
   - Classes: `bg-[#25D366] text-white hover:bg-[#20ba59] shadow-lg rounded-full`
   - Uso: Botão flutuante fixo no canto inferior direito e botões rápidos de atendimento.

---

## 👨‍💻 3. Quem Criou o Site (Créditos)

- **Desenvolvido por**: **Freccia Tecnologia**
- **Responsável**: [afreccia@gmail.com](mailto:afreccia@gmail.com)
- **Instagram / Contato do Desenvolvedor**: [@afreccia78](https://www.instagram.com/afreccia78)

---

## 📍 4. Onde Alterar as Informações e Textos

Todas as informações centrais do escritório estão organizadas de forma modular para facilitar atualizações:

### 📞 Telefones, Endereço, E-mail e Redes Sociais
👉 **Arquivo:** `src/contactConfig.ts`
- Modifique nome, título, OAB, endereço completo, números de telefone, WhatsApp, e-mail e links sociais. Qualquer alteração aqui reflete automaticamente em todo o site (Header, Footer, Páginas e Modais).

### 📄 Seções e Páginas Específicas

| Conteúdo que deseja alterar | Arquivo correspondente |
| :--- | :--- |
| **Hero / Banner Principal** (Frase de impacto e apresentação inicial) | `src/components/Hero.tsx` |
| **Página "Sobre a Dra. Rosana"** (Biografia completa e trajetória) | `src/components/AboutPage.tsx` |
| **Resumo "Sobre" na Página Inicial** | `src/components/About.tsx` e `src/components/AboutModal.tsx` |
| **Áreas de Atuação** (Família, Sucessões, Imobiliário, Regularização) | `src/components/AreasOfPractice.tsx` |
| **Artigos & Publicações Jurídicas** (Títulos, resumos e links) | `src/components/Articles.tsx` |
| **Depoimentos de Clientes** | `src/components/Testimonials.tsx` |
| **Página de Contato & Mapa** | `src/components/ContactPage.tsx` |
| **Modal Rápido de Contato** | `src/components/ContactModal.tsx` |
| **Cabeçalho & Menu de Navegação** | `src/components/Navbar.tsx` e `src/components/Logo.tsx` |
| **Rodapé do Site** | `src/components/Footer.tsx` |
| **Metadados de SEO & Favicon** | `index.html` e `public/sitemap.xml` |

---

## 🖼️ 5. Localização e Formato das Fotos / Imagens

> ⚠️ **Padrão Oficial:** Todas as imagens do projeto utilizam o formato **`.jpg`** (salvas com alta qualidade e tamanho otimizado).

| Imagem | Localização do Arquivo | Onde é exibida no site |
| :--- | :--- | :--- |
| **Foto Principal da Dra. Rosana (Hero)** | `public/rosana.jpg` e `src/assets/rosana.jpg` | Banner principal na página inicial |
| **Foto de Perfil da Dra. Rosana** | `public/rosana_perfil.jpg` e `src/assets/rosana_perfil.jpg` | Página "Sobre" e modais de biografia |
| **Foto da Fachada do Escritório** | `public/fachada.jpg` e `src/assets/fachada.jpg` | Página "Contato", endereço e localização |
| **Miniatura Google / Favicon Touch** | `public/rosana_favicon.jpg` e `src/assets/rosana_favicon.jpg` | Miniatura no Google Search (SERP), Open Graph e Apple Touch |
| **Ícone do Site / Favicon** | `public/favicon.svg` | Aba do navegador e ícone de favoritos |

### 💡 Como trocar uma imagem:
1. Nomeie a nova imagem com o mesmo nome e formato (ex: `rosana.jpg`, `rosana_perfil.jpg` ou `fachada.jpg`).
2. Substitua o arquivo correspondente na pasta `public/` e na pasta `src/assets/`.
3. Execute o build (`npm run build`) para atualizar a pasta de distribuição.

---

## 🛠️ 6. Comandos de Desenvolvimento e Publicação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento local
npm run dev

# Verificar erros de tipagem TypeScript
npm run lint

# Gerar build otimizado para produção (pasta dist/)
npm run build
```

---

## 🌐 7. Domínio e Publicação (GitHub Pages)

- **Domínio Principal**: `https://rosanabeling.adv.br`
- **Arquivo CNAME**: `public/CNAME` (contém `rosanabeling.adv.br` para vinculação automática no GitHub Pages).
- **Prevenção de Erro 404 em Rotas**: Configurado via `public/404.html` e script de redirecionamento no `index.html`.
