import angular from 'angular';

window.$ = window.jQuery = require('../../node_modules/jquery/dist/jquery.js');
let Bootstrap = require('../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js');
Bootstrap.$ = $;

// angular modules
import constants from './constants';
import onConfig  from './on_config';
import onRun     from './on_run';

import 'angular-ui-router';
import 'angular-ui-bootstrap';
import 'angular-resource';
import './templates';
import './filters';
import './controllers';
import './services';
import './directives';

// create and bootstrap application
const requires = [
  'ui.router',
  'ui.bootstrap',
  'ngResource',
  'templates',
  'app.filters',
  'app.controllers',
  'app.services',
  'app.directives'
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', constants);

angular.module('app').config(onConfig);

angular.module('app').run(onRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
