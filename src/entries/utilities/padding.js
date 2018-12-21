import 'primer/build/build.css'
import '../../css/main.less'

const nav = require('../../pugs/utilities/padding.pug')

const navHtml = nav()

document.querySelector('body').innerHTML = navHtml