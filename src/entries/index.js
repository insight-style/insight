import 'primer/build/build.css';
import '../css/main.less';

const nav = require('../pugs/index.pug');

const navHtml = nav();

document.querySelector('body').innerHTML = navHtml;

Array.from(document.querySelectorAll('.sidebar a')).forEach(a => {
  a.addEventListener('click', function (event) {
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

if (PerformanceObserver) {
  const foo = new PerformanceObserver(function (list, observer) {
    const navigationPerformance = list.getEntries()[0];
    const duration = navigationPerformance.duration
    ga('send', {
      hitType: 'timing',
      timingCategory: 'home',
      timingVar: 'loadDuration',
      timingValue: duration
    })

    observer.disconnect();
  });

  foo.observe({
    entryTypes: ['navigation']
  });
}