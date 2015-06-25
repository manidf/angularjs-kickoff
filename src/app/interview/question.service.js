(function(){
	'use strict';

	function questionService($http){
		/*jshint validthis:true*/

		this.getQuestions = function(){
			return $http.get('/questions');
		};
	}

	angular
		.module('ngInterviewPrep.questionService', [])
		.service('QuestionService', questionService);
})();