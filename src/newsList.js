'use strict';

class NewsList {
  constructor() {
    this.list = []
    this.counter = 0
  }

  createArticle(headline, body, photo) {
    this.list.push(new News(this.counter, headline, body, photo))
    this.counter ++
  }

  returnList() {
    return this.list
  }

  returnCounter() {
    return this.counter
  }

}