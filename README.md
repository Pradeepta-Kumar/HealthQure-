# 🏥 HealthQure+ – AI-Powered Disease & Medicine Diagnosis System

[Live Demo 🔗](https://health-qure.vercel.app)

**HealthQure+** is a fully functional AI health assistant built using **Next.js** (App Router) and **Google Gemini API**. This full-stack application provides intelligent, context-aware disease prediction, medicine suggestions, and real-time vitals monitoring — all secured with encrypted storage and role-based authentication.

Designed for scalability, reliability, and accuracy, it empowers users with AI-driven healthcare insights while maintaining strict data privacy.

---

## 🚀 Features

- 🧠 **AI-Powered Diagnosis** – Utilizes **Google Gemini 1.5 Pro** for accurate disease prediction and medicine guidance based on user symptoms.
- 🔐 **Secure Authentication** – Integrated **NextAuth.js** for secure login, session management, and role-based access.
- 📊 **Vitals Dashboard** – Interactive UI for users to monitor vitals, symptoms, history, and encrypted health logs.
- 🗂️ **Encrypted Records** – Uses encrypted storage for personal medical data to ensure privacy and compliance.
- 🌐 **Scalable Full-Stack** – Built with **Next.js (App Router)**, server components, ISR, and MongoDB.
- 🩺 **Smart Form Input** – Dynamic, AI-assisted form inputs for better UX and diagnosis accuracy.
- ⚙️ **ISR Support** – Combines static + dynamic rendering for performance and scalability.

---

## 🧱 Tech Stack

| Layer         | Technologies                                           |
|---------------|--------------------------------------------------------|
| Frontend      | Next.js (App Router), Tailwind CSS, ShadCN UI         |
| Backend       | Next.js Server Actions, API Routes, Node.js           |
| AI Engine     | Google Gemini 1.5 Pro API                              |
| Database      | MongoDB (Mongoose ODM)                                 |
| Authentication| NextAuth.js, JWT                                       |
| Deployment    | Vercel, GitHub                                         |

---

## 📸 Screenshots

> *(Add screenshots: landing page, diagnosis form, dashboard, results section)*

---

## 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/healthqure-ai.git
cd healthqure-ai

# Install dependencies
npm install

# Set up environment variables
# Rename `.env.example` to `.env` and configure:
# - MONGODB_URI
# - GEMINI_API_KEY
# - NEXTAUTH_SECRET
# - NEXTAUTH_URL

# Run the development server
npm run dev
