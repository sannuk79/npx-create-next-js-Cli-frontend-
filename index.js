#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectName = process.argv[2];

if (!projectName) {
  console.error('❌ Please provide a project name');
  console.error('Usage: npx create-clean-next myapp');
  process.exit(1);
}

const targetPath = path.join(process.cwd(), projectName);
const templatePath = path.join(__dirname, 'template');

// Check if folder already exists
if (fs.existsSync(targetPath)) {
  console.error(`❌ Folder "${projectName}" already exists`);
  process.exit(1);
}

console.log(`🚀 Creating clean Next.js project: ${projectName}`);

// Copy template
fs.copySync(templatePath, targetPath);

// Install dependencies
console.log('📦 Installing dependencies...');
try {
  execSync('npm install', {
    cwd: targetPath,
    stdio: 'inherit',
  });
} catch (error) {
  console.error('❌ Failed to install dependencies');
  process.exit(1);
}

// Initialize git
console.log('📁 Initializing git...');
try {
  execSync('git init', {
    cwd: targetPath,
    stdio: 'ignore',
  });
} catch (error) {
  // Git might not be installed, skip silently
}

console.log(`\n✅ Project ready!`);
console.log(`\n📁 cd ${projectName}`);
console.log('🚀 npm run dev\n');
