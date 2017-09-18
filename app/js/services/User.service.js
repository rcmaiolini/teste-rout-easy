class UserService {
  constructor(AppSettings, $resource) {
    'ngInject';

    this.resource = $resource;
    this.AppSettings = AppSettings;
  }
  
  getUser() {
    return this.resource(this.AppSettings.apiUrl + 'users/:user', {user: '@user'}, {
      get: {
        method: 'GET',
        params: {
          user: '@user'
        }
      }
    });
  }

}

export default {
  name: 'UserService',
  fn: UserService
};
