import 'primer/build/build.css'
import '../css/main.less'

const nav = require('../pugs/nav.pug')

const navHtml = nav()

document.querySelector('#root').innerHTML = navHtml
