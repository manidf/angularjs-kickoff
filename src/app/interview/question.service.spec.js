(function(){
	'use strict';

	describe('Interview service', function(){
		var questionService, $httpBackend;

		beforeEach(module('ngInterviewPrep.questionService'));

		beforeEach(inject(function(_QuestionService_, _$httpBackend_){
			$httpBackend = _$httpBackend_;

			questionService = _QuestionService_;
		}));

		it('Should get a list of questions', function(){
			$httpBackend.whenGET('/questions').respond([{ key: 'Question 1', value: 'Answer 1' },{ key: 'Question 2', value: 'Answer 2' }]);

			questionService.getQuestions(function(data){
				expect(data.length).toBe(2);
			});

			$httpBackend.flush();
		});
	});
})();