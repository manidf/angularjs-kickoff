(function(){
	'use strict';

	function answer(){
		return { 
			restrict: 'AE', 
			scope: { 
				answerText: '@'
			},
			controller: function($scope){ 
			}, 
			link: function(scope, element, attrs){
			},
			template: '<div>{{answerText}}</div>' 
		};
	}

	angular
		.module('ngInterviewPrep.answer', [])
		.directive('answer', answer);	
})();