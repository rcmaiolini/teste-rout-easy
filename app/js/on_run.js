function OnRun($rootScope, $location, AppSettings) {
  'ngInject';

  // change page title based on state
  $rootScope.$on('$locationChangeStart', (event, toState) => {
    $rootScope.pageTitle = '';
    
    if (toState.title) {
      $rootScope.pageTitle += toState.title;
      $rootScope.pageTitle += ' \u2014 ';
    }

    $rootScope.pageTitle += AppSettings.appTitle + ' - ' + AppSettings.subTitle;
  });

}

  export default OnRun;
