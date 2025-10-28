import express from "express";
import cors from "cors";
import 'dotenv/config';
import bodyParser from "body-parser";
import authRoutes from "./routes/auth";
import prisma from "./prisma";
import blogRoutes from "./routes/blog";
import projectRoutes from "./routes/project";

prisma.$connect();
   
// Create the app instance
const app = express();

// Apply middleware
app.use(cors());
app.use(bodyParser.json());

// Apply routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/projects", projectRoutes);

// Export the app for Vercel
export default app;



// async function main() {
//   //  Try to connect to the database first
//   try {
//     await prisma.$connect();
//     console.log("✅ Database connected successfully!");
//   } catch (error) {
//     console.error("❌ Failed to connect to database", error);
//     process.exit(1); // Exit the app if connection fails
//   }

//   const app = express();
//   app.use(cors());
//   app.use(bodyParser.json());

//   app.use("/api/auth", authRoutes);
//   app.use("/api/blogs", blogRoutes);
//   app.use("/api/projects", projectRoutes);


//   const PORT = process.env.PORT || 4000;

//   app.listen(PORT, () => {
//     console.log(`🚀 Server running on http://localhost:${PORT}`);
//   });
// }


// main();
