const fs = require('fs')
const path = require('path')
const https = require('https')

const options = {
  hostname: 'https://www.npmjs.com',
  port: 8080,
  path: '/@lan-ui/lan-ui',
  method: 'GET'
}

// Get latest version of lan-ui
const req = https.request(options, (res) => {
  if (res.statusCode !== 200) {
    console.error(`Request Failed. Status Code: ${statusCode}`)
    res.resume()

    return
  }

  let rawData = ''
  res.on('data', (data) => {
    rawData += data
  })
  res.on('end', () => {
    const parsedData = JSON.parse(rawData)
    const version = parsedData['dist-tags'].latest
    replaceVersion(version)
  })
})

req.on('error', (e) => {
  console.error(e);
})

req.end()

function replaceVersion(version) {
  const packagePath = path.resolve(__dirname, '../template/package.json')
  let content = fs.readFileSync(packagePath).toString()
  content = content.replace(/(?<="@lan-ui/lan-ui": "~)\d+\.\d+\.\d+(?=")/, version)
  fs.writeFileSync(packagePath, content)
}
