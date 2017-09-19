class UserReposController {
  constructor (UserReposService, $stateParams) {
    'ngInject';

    this.UserReposService = UserReposService;
    this.$stateParams = $stateParams;
    this.user = this.$stateParams.user;
    this.getUserRepos();
    this.reverse = true;
  }
  
  getUserRepos() {
    var vm = this;
    this.UserReposService.getUserRepos().get({user: this.user}).$promise.then(
      function(res){
        vm.repos = res;
      }
    )
  }
  
}

export default {
  name: 'UserReposController',
  fn: UserReposController
};