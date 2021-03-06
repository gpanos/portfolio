const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer')

const {
  PDFDocument: Document
} = require('pdf-lib')

export default async function PDF () {
  await this.nuxt.hook('build:done', async (builder) => {
    if (process.env.NODE_ENV !== 'production') {
      await build(builder.options.server)
    }
  })
}

async function build ({ host, port }) {
  const browser = await puppeteer.launch({
    headless: true
  })

  const page = await browser.newPage()

  await page.goto(`http://${host}:${port}/pdf`, {
    waitUntil: 'networkidle2'
  })

  const bytes = await page.pdf()
  const document = await Document.load(bytes)

  document.setTitle(await page.title())

  const file = path.resolve('static', 'downloads/resume.pdf')

  fs.mkdirSync(file.substring(0, file.lastIndexOf('/')), {
    recursive: true
  })

  const ws = fs.createWriteStream(file)
  ws.write(await document.save())
  ws.end()

  await page.close()
  await browser.close()
}
