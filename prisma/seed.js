"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../generated/prisma/index.js");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new index_js_1.PrismaClient();
async function main() {
    const email = "admin@gmail.com";
    const password = "123456";
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (!existingUser) {
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name: "Admin User",
            },
        });
        console.log("✅ Admin user created successfully!");
    }
    else {
        console.log("⚠️ Admin user already exists!");
    }
}
main()
    .then(() => prisma.$disconnect())
    .catch((e) => {
    console.error(e);
    prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map