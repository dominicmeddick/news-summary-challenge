'use strict';

describe('NewsList', () => {

  let newsList;

  beforeEach(() => {
    newsList = new NewsList
  })

  it('returns an array of a news class', () => {
    expect(newsList.returnList()).toEqual([])
  })

  it('creating a news article increases the length of the array', () => {
    newsList.createArticle('doctor discovers gummy bears', 'dr disrespect just loves gummy bears', 'heres a photo')
    expect(newsList.list.length).toBe(1)
    expect(newsList.counter).toBe(1)
  })

})