import { MovieSitePage } from './app.po';

describe('movieSite App', () => {
  let page: MovieSitePage;

  beforeEach(() => {
    page = new MovieSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
