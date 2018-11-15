import 'primer/build/build.css'
import '../../css/main.less'

const nav = require('../../pugs/support/typography.pug')

const navHtml = nav()

document.querySelector('body').innerHTML = navHtml
