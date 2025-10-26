Here’s your README rewritten with **proper Markdown syntax**, clean formatting, and consistent code block usage 👇

---

# 📦 Portfolio Backend API

🚀 **Live API:** [https://your-portfolio-api.herokuapp.com](https://your-portfolio-api.herokuapp.com)

## 🧭 Overview

A robust REST API built with **Node.js** and **Express.js** to serve as the backend for a portfolio website.
This API handles **authentication**, **blog posts**, and **project management** with secure endpoints and database integration.

---

## ✨ Key Features

* 🔐 JWT-based authentication
* 📝 Blog post management
* 💼 Project portfolio management
* 🛡️ Secure password hashing with **bcrypt**
* 🎯 Built with **TypeScript** for type safety
* 📊 **Prisma ORM** for database operations

---

## 🧰 Technology Stack

| Category           | Technology                         |
| ------------------ | ---------------------------------- |
| **Runtime**        | Node.js                            |
| **Framework**      | Express.js                         |
| **Language**       | TypeScript                         |
| **Database**       | PostgreSQL                         |
| **ORM**            | Prisma                             |
| **Authentication** | JWT                                |
| **Security**       | bcrypt                             |
| **Dev Tools**      | ESLint, Prettier, nodemon, ts-node |

---

## 🛠️ API Endpoints

### 🔑 Authentication

```bash
POST /auth/login        # User login
```

### 📝 Blog Posts

```bash
GET    /blogs           # Get all blog posts
POST   /blogs           # Create new blog post
PUT    /blogs/:id       # Update blog post
DELETE /blogs/:id       # Delete blog post
```

### 💼 Projects

```bash
GET    /projects        # Get all projects
POST   /projects        # Create new project
PUT    /projects/:id    # Update project
DELETE /projects/:id    # Delete project
```

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio-backend.git
cd portfolio-backend
```

### 2️⃣ Setup Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Then update it with your credentials:

```env
DIRECT_URL="postgresql://username:password@localhost:6543/portfolio"
DATABASE_URL="postgresql://username:password@localhost:5432/portfolio"
JWT_SECRET="your-secure-jwt-secret"
PORT=5000
```

---

## 🗄️ Database Setup

Run migrations:

```bash
npx prisma migrate dev
```

Generate Prisma client:

```bash
npx prisma generate
```

(Optional) Seed the database:

```bash
npm run seed
```

---

## 🚀 Start Development Server

```bash
npm run dev
```

---

## 🧩 Database Migrations

Generate a new migration:

```bash
npx prisma migrate dev --name migration_name
```

Deploy migrations (for production):

```bash
npx prisma migrate deploy
```

---

## 🌐 Deployment

### 1️⃣ Build the project

```bash
npm run build
```

### 2️⃣ Set environment variables

```bash
DATABASE_URL=your_production_db_url
DIRECT_URL=your_production_db_url
JWT_SECRET=your_production_secret
```

### 3️⃣ Run migrations

```bash
npx prisma migrate deploy
```

---

## 🔒 Security

* ✅ JWT token authentication
* ✅ Password hashing with bcrypt
* ✅ Protected routes using middleware
* ✅ Input validation
* ✅ Rate limiting
* ✅ CORS configuration

---

Would you like me to make a **Frontend README** version too (matching the same style)?
