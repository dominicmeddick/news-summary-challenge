'use strict';

describe('News', () => {

  let news;

  beforeEach(() => {
    news = new News
  })

  it('returns the id', () => {
    expect(news.returnId()).toBe(this.id)
  })

  it('returns the headline', () => {
    expect(news.returnHeadline()).toBe(this.headline)
  })

  it('returns the body', () => {
    expect(news.returnBody()).toBe(this.body)
  })

  it('returns a photo', () => {
    expect(news.returnPhoto()).toBe(this.photo)
  })
})