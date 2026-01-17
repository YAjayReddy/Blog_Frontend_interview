CA Monk – Frontend Developer Assignment

A modern, responsive blog platform built as part of the **Frontend Developer Intern assignment for CA Monk**.
The project focuses on **clean UI, thoughtful UX, scalable architecture, and real-world frontend best practices**.

---

## Author

**Ajay Reddyka Yamala**
🔗 LinkedIn: [https://www.linkedin.com/in/ajayreddyy/](https://www.linkedin.com/in/ajayreddyy/)

---

## Project Overview

This application is a **content-focused blog platform** where users can:

* Browse featured blogs
* Read detailed blog articles in a clean editorial layout
* Create and publish new blog posts
* Navigate seamlessly using a modern vertical sidebar

The UI and UX were intentionally designed to feel **professional, product-grade, and futuristic**, rather than a basic CRUD demo.

---

## Key Features

### 📰 Blog Experience

* Featured blogs landing page
* Dedicated blog detail page with:

  * Hero section
  * Reading progress bar
  * Structured article content
  * Right sidebar with metadata and related blogs

### ✍️ Create Blog

* Clean editor-style interface
* Form validation
* Publish flow with loading state

### 🧭 Navigation & Layout

* Vertical left sidebar navigation
* Active route highlighting
* Global layout consistency
* Classy footer across all pages

### 🎨 UI / UX

* Modern design using Tailwind CSS
* Editorial-style typography
* Responsive layout
* Smooth hover and transition effects

---

## 🛠 Tech Stack & Tools Used

### Core Technologies

* **React (TypeScript)** – UI development
* **Vite** – Fast development & build tool
* **React Router DOM** – Client-side routing

### State & Data Handling

* **@tanstack/react-query** – Server state management
* **Axios** – API communication

### Styling & UI

* **Tailwind CSS** – Utility-first styling
* **shadcn/ui** – Reusable UI components
* **Lucide Icons** – Clean iconography

### Code Quality & Architecture

* Modular component structure
* Custom hooks (`useBlog`, `useCreateBlog`)
* Layout components (`PageContainer`, `SideNav`, `Footer`)

---

## 📦 Dependencies

Main dependencies used in this project:

```bash
react
react-dom
react-router-dom
@tanstack/react-query
axios
tailwindcss
postcss
autoprefixer
```

Development dependencies:

```bash
vite
typescript
@vitejs/plugin-react-swc
```

---

## ⚙️ Requirements to Run Locally

Make sure you have the following installed:

* **Node.js** ≥ 20.19.0 or ≥ 22.12.0
* **npm** ≥ 9.x

Check versions:

```bash
node -v
npm -v
```

---

## ▶️ How to Run the Project Locally

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd <project-folder>
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open in browser**

```
http://localhost:5173
```

---

## 🧱 Project Structure (Simplified)

```
src/
├─ components/
│  ├─ layout/
│  │  ├─ SideNav.tsx
│  │  ├─ Footer.tsx
│  │  └─ PageContainer.tsx
│
├─ pages/
│  ├─ FeaturedBlogs.tsx
│  ├─ BlogDetail.tsx
│  └─ CreateBlog.tsx
│
├─ hooks/
│  ├─ useBlog.ts
│  └─ useCreateBlog.ts
│
├─ assets/
│  └─ logo.png
│
└─ App.tsx
```

---

## 🧠 Design & Architectural Decisions

* **Vertical sidebar navigation** was chosen to create a product-like experience and reduce top-level clutter.
* **Editorial layout** was used for blog detail pages to improve readability and content focus.
* **React Query** handles server state to keep components clean and scalable.
* **Tailwind CSS** enables rapid iteration while maintaining design consistency.
* Avoided unnecessary libraries to keep the codebase lightweight and understandable.

---

## Assignment Notes

* The design does not blindly copy the reference UI.
* Visual and UX improvements were intentionally made to demonstrate **frontend thinking**, not just implementation.
* The project emphasizes **clean structure, maintainability, and user experience**.

---

## Final Thoughts

This project represents my approach to building **real-world frontend applications** — focusing on usability, clean architecture, and scalable design rather than just completing requirements.

Thank you for reviewing my assignment 🙌
