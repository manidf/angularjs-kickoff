(function(){
	'use strict';

	function config($stateProvider, $urlRouterProvider, $httpProvider) {
		$urlRouterProvider.otherwise( '/interview' );
	}

	function run() {

	}

	function appCtrl($location, $scope) {
		/*jshint validthis:true */

		var vm = this;

		$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      		if ( angular.isDefined( toState.data.pageTitle ) ) {
        		vm.pageTitle = toState.data.pageTitle + ' | Interview Prep' ;
      		}
    	});
	}

	angular
		.module('ngInterviewPrep', [
			'templates-app',
			'templates-common',
			'ngInterviewPrep.interview', 
			'ngInterviewPrep.questionService',
			'ui.router', 
			'ui.bootstrap'
		])
		.config(config)
		.run(run)
		.controller('AppCtrl', appCtrl);
})();