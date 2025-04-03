
import { execSync } from 'child_process'
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

// Build the client-side application
console.log('Building client...')
execSync('vite build --outDir dist/client', { stdio: 'inherit' })

// Build the server-side entry point
console.log('Building server...')
execSync('vite build --ssr src/entry-server.tsx --outDir dist/server', { stdio: 'inherit' })

// Run the prerender script
console.log('Pre-rendering pages...')
execSync('node prerender.js', { stdio: 'inherit' })

console.log('Build complete!')
