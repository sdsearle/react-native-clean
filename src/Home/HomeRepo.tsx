import {HomeCounter} from './HomeCounter';

export class HomeRepo {
  counter = new HomeCounter();
  constructor() {}

  updateCount(callback) {
    this.counter.count++;
    callback(this.counter.count);
  }
}
