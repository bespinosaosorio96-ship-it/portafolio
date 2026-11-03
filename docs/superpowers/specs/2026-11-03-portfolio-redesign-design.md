# Design Document: Portfolio Redesign — Brayan Espinosa Osorio

- **Date:** 2026-11-03
- **Author:** Antigravity & Brayan Espinosa
- **Status:** In Review

---

## 1. Intent & The Why

Brayan Espinosa Osorio is a software developer with strengths spanning backend and logic (Python, Java, MySQL, PostgreSQL, n8n), automation, AI experiments, and modern frontend (JavaScript, React). His current portfolio uses a generic, static HTML/CSS template with placeholders that fail to convey his technical depth, his real repositories on GitHub, and his personal identity.

The intent is to completely rebuild the portfolio into a distinctive, fast, and high-impact web application that highlights his personal brand ("mi persona") as a capable, rigorous software engineer.

---

## 2. Goals, Non-Goals & Anti-Goals

### Goals
- **Personal Brand & Authority:** Present Brayan authentically through high-contrast modern aesthetics, sharp typography, and direct proof of work.
- **Interactive Split Hero with Terminal:** Provide an interactive Unix-style terminal alongside his profile and photo (`fotopersonal.jpg`), allowing visitors to run commands (`brayan.skills`, `brayan.projects`, `brayan.contact`, `help`, `clear`) or click suggested command chips.
- **Real GitHub Repositories Showcase:** Highlight his actual work (`HelpDesktopBot`, `poryectoia`, `Proyecto-ia2`, `Brayan-Espinosa-Osorio-fake-store-proyecto-JS`, `CultuVivo`, `miniproyecto-python`, `Algoritmia`) with live repository links, stack tags, and concise value descriptions.
- **Interactive Stack Filter:** Allow recruiters and clients to filter projects by categories (All, Python & Backend, AI & Bots, Frontend & JS, Databases).
- **Fast & Responsive:** Single-page application built with React, Vite, and Tailwind CSS, responsive across mobile, tablet, and desktop devices.
- **Direct Contact Experience:** Integrated one-click email copy (`bespinosaosorio96@gmail.com`), direct link to LinkedIn (`https://www.linkedin.com/in/brayan-espinosa-osorio-0ba521443/`), and GitHub profile link.

### Non-Goals
- Complex backend server / database for the portfolio itself (the portfolio will be a static client-side SPA easily hostable on Vercel, Netlify, or GitHub Pages).
- Full blogging platform or CMS (can be added in future versions if desired).

### Anti-Goals
- Generic "AI generated" look (avoid washed-out purple gradients on generic dark slate or template-looking layouts).
- Bloated dependencies or slow loading times.
- Placeholder text or generic "Lorem ipsum" cards.

---

## 3. Technology Stack & Architecture

- **Framework:** React 18+ with Vite (blazing fast HMR and build performance).
- **Styling:** Tailwind CSS (utility-first, customized dark theme palette).
- **Icons:** Lucide React (clean, lightweight, modern tech iconography).
- **Asset Management:** Preserve existing assets (`fotopersonal.jpg`) and optimize for web.
- **Palette (Cyber Dark Default):**
  - Background Base: `#070a13` (Deep Obsidian / Charcoal)
  - Card & Surface: `rgba(15, 23, 42, 0.65)` with 1px border `rgba(30, 41, 59, 0.8)`
  - Primary Accent: `#10b981` (Emerald Green)
  - Secondary Accent: `#38bdf8` (Cyan / Sky)
  - Text: `#f8fafc` (Headings/Primary), `#94a3b8` (Muted/Secondary)
- **Palette (Matrix Mode Override):**
  - Background Base: `#020603` (Deep Matrix Abyssal Black)
  - Card & Surface: `rgba(3, 20, 8, 0.85)` with 1px border `rgba(0, 255, 102, 0.4)`
  - Primary Accent: `#00ff66` (Phosphor Matrix Green)
  - Secondary Accent: `#22c55e` (Emerald Green)
  - Text: `#f0fdf4` (Headings/Primary), `#86efac` (Muted/Secondary)
- **Interactive Canvas & Effects:**
  - HTML5 Canvas Matrix Digital Rain running in background.
  - Interactive 3D Spotlight cursor lighting on project cards.
  - Dynamic typewriter effect for rotating developer roles in Hero.
  - Toggle button and terminal command (`matrix`) to dynamically transition the whole color scheme between Cyber Dark and Matrix Green.

---

## 4. Decided Features & UI Structure

### A. Navigation
- Sticky glassmorphic navbar (`backdrop-blur-md bg-opacity-80`).
- Logo: `brayan.dev` with pulsing status dot ("Open to work").
- Navigation items: `#inicio`, `#sobre-mi`, `#proyectos`, `#habilidades`, `#contacto`.
- Quick social icons (GitHub, LinkedIn).

### B. Split Hero Section
- **Left Column (Profile & Bio):**
  - Live availability badge: `● Disponible para nuevos proyectos`.
  - Headline: `Brayan Espinosa Osorio`.
  - Subtitle: `Software Developer | Backend, Automatización & Frontend Moderno`.
  - Punchy Bio: *"No solo me dedico a crear soluciones, sino a transformar problemas complejos en experiencias funcionales y eficientes."*
  - CTA Buttons: "Explorar Proyectos", "Contactar", "Descargar CV".
  - Personal photo (`fotopersonal.jpg`) with an ambient emerald halo and tech border.
- **Right Column (Interactive Terminal):**
  - Mac/Unix style top bar (three window buttons + title `brayan@dev:~`).
  - Welcome banner with ASCII or clean syntax.
  - Interactive input line where users can type or click command pills:
    - `help` / `ayuda`: list of supported commands.
    - `skills`: outputs organized technical skills.
    - `projects`: outputs top repositories with clickable links.
    - `contact`: outputs email and LinkedIn.
    - `clear`: clears terminal screen.

### C. Projects Showcase (Real Repositories)
- Filter Bar: `Todos`, `Python & Backend`, `IA & Automatización`, `Frontend & Web`, `Bases de Datos`.
- Featured Cards:
  1. **HelpDesktopBot:** Bot de soporte y mesa de ayuda con Python. Tags: Python, Automatización, Bot.
  2. **Proyecto IA & CI/CD:** Experimentación con modelos de IA y flujos de GitHub Actions. Tags: AI, YAML, CI/CD, JS.
  3. **Fake Store E-Commerce:** Aplicación web de catálogo y consumo de APIs dinámicas. Tags: JavaScript, CSS3, APIs.
  4. **CultuVivo:** Plataforma colaborativa para la cultura y sostenibilidad comunitaria. Tags: Web, HTML/CSS/JS, Colaboración.
  5. **Gestión & Algoritmia:** Solución de lógica de datos y automatización en Python y JS. Tags: Python, Algoritmos.
  6. **Sistemas de Base de Datos:** Modelado y arquitectura de datos SQL en MySQL y PostgreSQL. Tags: MySQL, PostgreSQL, SQL.
- Each card includes: Title, description, tech chips, GitHub repository link, and live demo link (if applicable).

### D. Tech Stack & Matrix
- Organized into clear competency groups:
  - **Lenguajes & Backend:** Python, Java, JavaScript (ES6+), Node.js.
  - **Bases de Datos:** MySQL, PostgreSQL.
  - **Frontend:** React, HTML5, CSS3, Tailwind CSS.
  - **DevOps & Herramientas:** Git, GitHub, GitHub Actions, n8n, Linux/Bash.

### E. About & Philosophy
- Brief narrative of Brayan's approach: problem-solving orientation, clean architecture, continuous learning, and adaptability.

### F. Contact & Footer
- Interactive contact card with one-click copy for `bespinosaosorio96@gmail.com`.
- Direct mailto link.
- Social links: GitHub (`https://github.com/bespinosaosorio96-ship-it`), LinkedIn (`https://www.linkedin.com/in/brayan-espinosa-osorio-0ba521443/`).
- Footer with dynamic year and signature.

---

## 5. Left to the Builder

- Vite project scaffolding details and file structure (e.g., `src/components/Hero.tsx`, `src/components/Terminal.tsx`, `src/components/Projects.tsx`, etc.).
- Exact animation timing and transitions (CSS transitions / micro-animations).
- Responsive breakpoint nuances for mobile screens (< 768px collapsing split hero to vertical layout).
- Handling Vite build outputs so existing repository history is preserved and production build is deployable.

