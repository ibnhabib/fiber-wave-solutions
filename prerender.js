
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Define routes that match App.tsx exactly
const routesToPrerender = [
  '/',
  '/network-installation',
  '/fiber-optic', 
  '/wifi-setup',
  '/ethernet',
  '/cctv',
  '/voip',
  '/our-services'
]

;(async () => {
  // For each route, pre-render the HTML
  for (const url of routesToPrerender) {
    const appHtml = await render(url);
    const html = template.replace('<!--app-html-->', appHtml)

    const filePath = `dist/client${url === '/' ? '/index' : url}.html`
    const absoluteFilePath = toAbsolute(filePath)
    
    // Ensure directory exists before writing file
    const dir = path.dirname(absoluteFilePath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    
    fs.writeFileSync(absoluteFilePath, html)
    console.log('pre-rendered:', filePath)
  }
})()
