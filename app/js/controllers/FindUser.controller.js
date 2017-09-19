class FindUserController {
  constructor (UserService, $location) {
    'ngInject';

    this.UserService = UserService;
    this.$location = $location;
  }
  
  getUser(user) {
    var vm = this;
    this.UserService.getUser().get({user: user}).$promise.then(
      function(res){
        vm.user = res;
      },
      function(err){
        vm.message = `User ${err.data.message}`;
      }
    )
  }
  
  setUserUrl(user) {
    this.$location.path('user-repos/' + user + '/repos');
  }

}

export default {
  name: 'FindUserController',
  fn: FindUserController
};