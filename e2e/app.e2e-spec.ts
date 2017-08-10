import { AngularLeafletStarterPage } from './app.po';

describe('angular-leaflet-starter App', () => {
  let page: AngularLeafletStarterPage;

  beforeEach(() => {
    page = new AngularLeafletStarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
