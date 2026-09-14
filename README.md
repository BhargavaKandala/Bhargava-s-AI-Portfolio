# 🎨 Sketch Portfolio

> **An immersive, hand-drawn 3D interactive portfolio experience built with React 19, Three.js, React Three Fiber, and GSAP.**

🌐 **Live Demo:** [https://sketch-portfolio.shajith870.workers.dev/](https://sketch-portfolio.shajith870.workers.dev/)

---

[![React 19](https://img.shields.io/badge/React-19.2.7-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.185-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![React Three Fiber](https://img.shields.io/badge/R3F-9.6-000000?style=for-the-badge&logo=react&logoColor=61DAFB)](https://docs.pmnd.rs/react-three-fiber)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://gsap.com/)
[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

---

## ✨ Overview

**Sketch Portfolio** is a unique, sketch-book themed 3D interactive web app. It blends hand-drawn aesthetics with real-time 3D web graphics, spatial ambient audio, interactive room exploration, and smooth paper-style transitions.

---

## 🚀 Key Features

- 🎭 **3D Hand-Drawn Interactive World**: Explore 3D sketch rooms and environments rendered via React Three Fiber and Three.js.
- ⚡ **Adaptive Performance Engine**: Dynamic hardware tiering that auto-scales DPR, shadows, antialiasing, and texture resolution based on the user's GPU & CPU capabilities.
- 📜 **Handwritten & GSAP Animations**: Smooth camera movements, custom paper transitions, and animated stroke-drawing effects via Vara.js and GSAP.
- 🎧 **Spatial Audio System**: Custom audio manager providing room ambience, sound effects, and volume controls.
- 🗺️ **Navigation & Teleportation**: Quick-access map UI and deep-link routing for seamless room switching.
- 📱 **Responsive & Mobile Ready**: Tailored layouts, touch controls, and optimized asset preloading across desktop, tablet, and mobile browsers.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Core Framework** | React 19, React Router 7, Vite |
| **3D & Canvas** | Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`), `@react-three/postprocessing` |
| **Animation & Motion** | GSAP (`@gsap/react`), Vara.js, Custom CSS/SCSS keyframes |
| **Styling** | Sass (SCSS), Modern CSS Custom Properties |
| **State & Context** | React Context API (`AudioManager`, `PerformanceContext`, `SceneContext`, `AchievementsContext`) |
| **Icons & Assets** | Lucide React, Custom Hand-Drawn WebP/SVG Textures |

---

## ⚙️ Getting Started

### Prerequisites

Ensure you have **Node.js 18+** and **npm** installed on your system.

### 1. Clone the Repository

```bash
git clone https://github.com/shajith23/sketch-portfolio.git
cd sketch-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Scripts Overview

| Command | Action |
| :--- | :--- |
| `npm run dev` | Launch local development server via Vite |
| `npm run build` | Bundle and optimize production files to `dist/` |
| `npm run preview` | Serve the local `dist/` production build |
| `npm run lint` | Run Oxlint for fast code quality checks |

---

## ☁️ Deployment Guide (Cloudflare Pages)

Follow these step-by-step instructions to deploy the application on **Cloudflare Pages**.

### Option 1: Automatic Deployment via Git Integration (Recommended)

1. **Push Changes to GitHub**:
   Ensure all code is committed and pushed to your GitHub repository:
   ```bash
   git add .
   git commit -m "docs: add deployment instructions"
   git push origin main
   ```

2. **Connect Repository to Cloudflare Pages**:
   - Log into the [Cloudflare Dashboard](https://dash.cloudflare.com/).
   - Navigate to **Workers & Pages** > **Create application** > **Pages** tab.
   - Click **Connect to Git** and authorize your GitHub account.
   - Select your repository (`sketch-portfolio`).

3. **Configure Build Settings**:
   - **Project Name**: `sketch-portfolio`
   - **Production Branch**: `main`
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`

4. **Set Environment Variables**:
   - Under **Environment variables (advanced)**, add:
     - `NODE_VERSION` = `20`

5. **Save & Deploy**:
   - Click **Save and Deploy**. Cloudflare will run the build process and deploy your site.
   - Any future commits pushed to `main` will automatically trigger automatic deployments.

---

### Option 2: Direct Terminal Deployment via Wrangler CLI

If you want to deploy directly from your local terminal:

1. **Authenticate with Cloudflare**:
   ```bash
   npx wrangler login
   ```

2. **Build the Production Bundle**:
   ```bash
   npm run build
   ```

3. **Deploy the `dist/` Directory**:
   ```bash
   npx wrangler pages deploy dist --project-name=sketch-portfolio
   ```

4. **Complete Deployment**:
   - Wrangler will deploy your `dist/` folder and output the live deployment URL.

---


## 📂 Project Structure

```text
sketch-portfolio/
├── dist/                  # Production build output
├── public/                # Static assets, fonts, sounds, textures & models
├── src/
│   ├── assets/            # Project assets & branding
│   ├── components/
│   │   ├── canvas/        # 3D R3F Experience, lighting & 3D room objects
│   │   ├── dom/           # DOM overlays, preloader & paper transitions
│   │   └── ui/            # Navigation controls, achievements & HUD overlays
│   ├── config/            # Texture preload manifests & device rules
│   ├── context/           # Audio, performance, scene & achievements state
│   ├── hooks/             # Custom React hooks (meta tags, resize, interaction)
│   ├── sections/          # 2D/3D Sections (Hero, About, Projects, Skills, Contact)
│   ├── styles/            # SCSS stylesheets & visual tokens
│   ├── utils/             # Sound manager & math helper functions
│   ├── App.jsx            # Main Application entry & Canvas context provider
│   └── index.css          # Global styling tokens & custom utility classes
├── package.json           # Dependencies and build scripts
└── README.md              # Project documentation
```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Crafted with Shan❤️ and ☕ using React 19 & Three.js
</p>
