class FindUserController {
  constructor (UserService) {
    'ngInject';

    this.UserService = UserService;
  }
  
  getUser(user) {
    var vm = this;
    vm.user = null;
    this.UserService.getUser().get({user: user}).$promise.then(
      function(res){
        vm.user = res;
        console.log(vm.user)
      },
      function(err){
        console.log('User not found')
      }
    )
  }

}

export default {
  name: 'FindUserController',
  fn: FindUserController
};