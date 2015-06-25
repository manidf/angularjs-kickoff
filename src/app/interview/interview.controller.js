(function(){
	'use strict';

	function config($stateProvider) {
		$stateProvider.state('interview', {
			url: '/interview',
			views: {
				main: { 
					controller: 'InterviewCtrl', 
					templateUrl: 'interview/interview.tpl.html' 
				}
			},
			data: { pageTitle: 'Interview' }
		});
	}

	function interviewCtrl() {
		/*jshint validthis:true */

		var vm = this;

		function init() {
			vm.questions = [{ key: 'Question 1', value: 'Answer 1' },{ key: 'Question 2', value: 'Answer 2' }];
		}

		init();
	}

	angular
		.module('ngInterviewPrep.interview', [
			'ui.router'
		])
		.config(config)
		.controller('InterviewCtrl', interviewCtrl);
})();