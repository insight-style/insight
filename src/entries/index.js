import 'primer/build/build.css'
import '../css/main.less'

const nav = require('../pugs/index.pug')

const navHtml = nav()

document.querySelector('body').innerHTML = navHtml
