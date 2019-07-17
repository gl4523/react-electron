const express = require('express')
const app = express()
const {resolve} = require('path')
const devMiddleWare = require('webpack-dev-middleware')
const hotMiddleWare = require('webpack-hot-middleware')
const webpack = require('webpack')
const config = require('./webpack.dev.config')
const complier = webpack(config)
const PORT = 8089


app.use(devMiddleWare(complier, {
    publicPath: config.output.publicPath,
    quiet: true
}))
app.use(hotMiddleWare(complier, {
    heartbeat: 2000
}))

app.use(express.static(resolve(__dirname, '..', 'dist')))
app.listen(PORT, function() {
    console.log(`服务已启动${PORT}`)
})