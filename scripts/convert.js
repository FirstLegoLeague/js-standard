
const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const jsonFile = require('jsonfile')

const LAST_DOT = /\.(?=[^.]+$)/
const CONFIGS_DIR = path.join(__dirname, '../configs')
const DEFAULT_CONFIG = 'base'


fs.readdirSync(CONFIGS_DIR)
  .map(file => {
    const [name, ext] = file.split(LAST_DOT)
    return { file, name, ext}
  })
  .filter(({ ext }) => ['yml', 'yaml'].includes(ext))
  .forEach(({ file, name }) => {
    const data = fs.readFileSync(path.join(CONFIGS_DIR, file))
    const config = yaml.safeLoad(data, 'utf8')
    jsonFile.writeFileSync(`${name}.json`, config, { spaces: 2 })
    fs.writeFileSync(`${name}.js`, `module.exports = require('./${name}.json')`)
  })

fs.writeFileSync(`index.js`, `module.exports = require('./${DEFAULT_CONFIG}.json')`)
