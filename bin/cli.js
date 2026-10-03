#!/usr/bin/env node
import { spawn } from "child_process";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distHubScript = path.join(rootDir, "dist", "index.js");
const tsHubScript = path.join(rootDir, "src", "index.ts");

if (fs.existsSync(distHubScript)) {
  const child = spawn(process.execPath, [distHubScript], {
    stdio: ["inherit", "inherit", "inherit"],
    env: process.env
  });
  child.on("exit", (code) => process.exit(code || 0));
} else {
  const child = spawn("npx", ["-y", "ts-node", tsHubScript], {
    stdio: ["inherit", "inherit", "inherit"],
    env: process.env,
    shell: true
  });
  child.on("exit", (code) => process.exit(code || 0));
}
