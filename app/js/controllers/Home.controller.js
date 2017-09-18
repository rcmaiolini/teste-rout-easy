class HomeController {
  constructor (AppSettings) {
    'ngInject';

    this.title = AppSettings.appTitle;
  }
}

export default {
  name: 'HomeController',
  fn: HomeController
};