const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/like');
  I.wait(3);
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#svargas');
  I.see('Belum ada Restoran yang kamu sukai!', '#svargas');
});