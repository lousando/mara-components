import path from 'path'

export default function () {
    this.addPlugin(path.resolve(__dirname, "plugin.js"))
}

module.exports.meta = require('./package.json')