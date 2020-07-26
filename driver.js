const FlipBookService = require('./services/FlipBookService');

const SIGNUP = 'signup';
const SHOWUSERS = 'showusers';
const POST = '@post';
const NEWSFEED = '@newsfeed';
const FOLLOW = '@follow';

class Driver {
  constructor() {
    this.inputs = [
      // 'signup~lucious',
      // 'signup~tom',
      // 'showusers',
      // 'tom@post~I am going to be the darkest wizard of all time',
      // 'tom@post~I am lord Voldemort btw :)',
      // 'tom@newsfeed',
      // 'lucious@follow~tom',
      // 'lucious@newsfeed',
      // 'lucious@post~Happiness can be found, always',
      // 'lucious@newsfeed',
      // 'tom@post~I shall rule over the world and no one can stop me',
      // 'lucious@newsfeed',
      'signup~john',
      'signup~tom',
      'tom@follow~tom',
      'tom@post~hello world!',
      'tom@newsfeed',
    ];
  }

  main() {
    const flipBookService = new FlipBookService();
    this.inputs.forEach((input) => {

      if (input.includes(SIGNUP)) {
        flipBookService.signUp(input.split('~')[1]);
      } else if (input.includes(SHOWUSERS)) {
        flipBookService.showUsers();
      } else if (input.includes(POST)) {
        flipBookService.post(input.split('@')[0], input.split('~')[1]);
      } else if (input.includes(NEWSFEED)) {
        flipBookService.showNewsFeed(input.split('@')[0]);
      } else if (input.includes(FOLLOW)) {
        flipBookService.follow(input.split('@')[0], input.split('~')[1]);
      }
    });
  }
}

const driver = new Driver();
driver.main();

module.exports = Driver;
