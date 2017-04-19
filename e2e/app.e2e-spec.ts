import { PokeStorePage } from './app.po';

describe('poke-store App', () => {
  let page: PokeStorePage;

  beforeEach(() => {
    page = new PokeStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
