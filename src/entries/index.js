import 'primer/build/build.css';
import '../css/main.less';

const nav = require('../pugs/index.pug');

const navHtml = nav();

document.querySelector('body').innerHTML = navHtml;

Array.from(document.querySelectorAll('.sidebar a')).forEach(a => {
  a.addEventListener('click', function(event) {
    event.preventDefault();

    ga('send', {
      hitType: 'event',
      eventCategory: 'sidebar',
      eventAction: 'click',
      eventLabel: this.getAttribute('href'),
      hitCallback: () => {
        location.href = this.getAttribute('href');
      }
    });
  });
});
