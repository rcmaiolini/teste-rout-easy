class UserReposService {
  constructor(AppSettings, $resource) {
    'ngInject';

    this.resource = $resource;
    this.AppSettings = AppSettings;
  }
  
  getUserRepos() {
    return this.resource(this.AppSettings.apiUrl + 'users/:user/repos', {user: '@user'}, {
      get: {
        method: 'GET',
        params: {
          user: '@user'
        },
        transformResponse: function(data) {
          return angular.fromJson(data);
        },
        isArray: true
      }
    });
  }

}

export default {
  name: 'UserReposService',
  fn: UserReposService
};
