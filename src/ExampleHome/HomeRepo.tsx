export class HomeRepo {
  count = 0;
  constructor() {}

  updateCount(callback) {
    console.log(this.count);
    this.count = this.count + 1;
    console.log(this.count);
    callback(this.count);
  }
}
