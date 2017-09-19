function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

//  $locationProvider.html5Mode({
//    enabled: true,
//    requireBase: false
//  });

  $stateProvider
    .state('home', {
      abstract: true,
      url: '/',
      templateUrl: 'home.html',
      controller: 'HomeController as home'
    })
    .state('home.user', {
      url: 'user',
      templateUrl: 'pages/user.html',
      controller: 'FindUserController as findUser'
    })
    .state('home.userRepos', {
      url: 'user-repos/:user/repos',
      templateUrl: 'pages/user-repos.html',
      controller: 'UserReposController as userRepos'
    });

  $urlRouterProvider.otherwise('/user');

}

export default OnConfig;
