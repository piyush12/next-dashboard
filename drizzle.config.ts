import * as dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

dotenv.config({
  path: "./.env.local",
});

if (typeof process.env.XATA_DATABASE_URL_POSTGRES !== "string") {
  throw new Error("please provide valid xata database url");
}

export default defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.XATA_DATABASE_URL_POSTGRES,
  },
});
