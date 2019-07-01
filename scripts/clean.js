
const fs = require('fs')
const path = require('path')

const LAST_DOT = /\.(?=[^.]+$)/
const PACKAGE_DIR = path.join(__dirname, '..')


fs.readdirSync(PACKAGE_DIR)
  .map(file => {
    const [name, ext] = file.split(LAST_DOT)
    return { file, name, ext}
  })
  .filter(({ ext }) => ['js', 'json'].includes(ext))
  .filter(({ file }) => file !== 'package.json')
  .forEach(({ file }) => {
    fs.unlinkSync(path.join(PACKAGE_DIR, file))
  })
