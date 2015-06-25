(function(){
	'use strict';

	describe('Interview directive', function(){
		var $scope, compiledTemplate, rootElement;

		beforeEach(module('ngInterviewPrep.answer'));

		beforeEach(inject(function($rootScope){
			$scope = $rootScope.$new();
		}));

		function compileDirective(template) {
			inject(function($compile) {
				compiledTemplate = $compile(template)($scope);
				compiledTemplate.scope().$digest();

				rootElement = compiledTemplate.find('div');
			});
		}

		it('Should have answer text', function() {
			compileDirective("<div answer answer-text=\"this is the answer\"></div>");

			console.log(compiledTemplate);

			expect(compiledTemplate.isolateScope().answerText).toBe('this is the answer');
		});
	});
})();