# FoxAssured Portfolio

This repository contains the source code for **FoxAssured**, the professional portfolio website of **Kyle Fox**, SDET & Test Architect. 

The site is designed to showcase my technical expertise in test automation, quality assurance consulting, and software architecture, while providing a clean, accessible interface for potential clients and employers.

## 🚀 Live Site
Visit the live application at: **[foxassured.com](https://foxassured.com)**

## 🛠 Tech Stack

Built with modern web technologies focusing on performance, maintainability, and type safety:

*   **Core:** [React](https://react.dev/) (v19)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Custom Pastel Theme)
*   **Routing:** [React Router](https://reactrouter.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Build:** Vite (implied) / Standard React Scripts

## ✨ Features

*   **Responsive Design:** Fully fluid layout that adapts from mobile devices to large desktops.
*   **Pastel Aesthetic:** A custom-configured Tailwind theme utilizing a specific `pastel-green` palette for a clean, approachable professional look.
*   **Interactive Portfolio:**
    *   **Work History Tabs:** A split-view interactive component to navigate detailed experience without clutter.
    *   **Project Showcase:** Cards displaying tech stacks (Playwright, Python, K6) with direct links to GitHub repositories.
*   **Service Listings:** Clear categorization of SDET services (Automation, Auditing, CI/CD).
*   **Education Section:** Placeholder for upcoming educational content and courseware.

## 🏃‍♂️ Running Locally

To run this project on your local machine:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/FoxAssured/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 📦 Deployment to GitHub Pages

This project is configured for deployment to GitHub Pages with a custom domain (`foxassured.com`).

### 1. Prerequisites
Ensure your `package.json` has the `gh-pages` package installed:
```bash
npm install gh-pages --save-dev
```

And update your `scripts` in `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 2. Deploy
To deploy the latest version:
```bash
npm run deploy
```

This will build the project to the `dist` folder and push it to the `gh-pages` branch.

### 3. Custom Domain
The `public/CNAME` file ensures GitHub Pages uses **foxassured.com**. Ensure your DNS provider (e.g., GoDaddy, Namecheap) has:
*   **A Records** pointing to GitHub IPs (185.199.108.153, etc.)
*   **CNAME Record** for `www` pointing to `foxassured.github.io`

## 📂 Project Structure

```
/
├── public/              # Static assets & CNAME
├── src/
│   ├── components/      # Reusable UI components (Navbar, Footer, Icon, Layout)
│   ├── pages/           # Route views (Landing, Portfolio, Education)
│   ├── types.ts         # TypeScript interfaces (Project, Experience, etc.)
│   ├── constants.ts     # Content data source (TEXT, URLs, SKILLS)
│   ├── App.tsx          # Main router configuration
│   └── index.tsx        # Entry point
├── index.html           # HTML root & Tailwind config
└── vite.config.ts       # Build configuration
```

## 📬 Contact

*   **Email:** foxassured@gmail.com
*   **LinkedIn:** [Kyle Fox](https://www.linkedin.com/in/kyle-fox1/)
*   **GitHub:** [FoxAssured](https://github.com/FoxAssured)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).