'use strict';

class News {

  constructor(id, headline, body, photo) {
    this.id = id
    this.headline = headline
    this.body = body
    this.photo = photo
  }

  returnId () {
    return this.id
  }

  returnHeadline () {
    return this.Headline
  }

  returnBody () {
    return this.body
  }

  returnPhoto () {
    return this.photo
  }

}
