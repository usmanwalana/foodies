import { FoodiesPage } from './app.po';

describe('foodies App', function() {
  let page: FoodiesPage;

  beforeEach(() => {
    page = new FoodiesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fd works!');
  });
});
