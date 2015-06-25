(function(){
	'use strict';

	describe('Interview controller', function(){
		var interviewCtrl, $scope;

		beforeEach(module('ngInterviewPrep.interview'));

		beforeEach(inject(function($controller, $rootScope){
			$scope = $rootScope.$new();

			interviewCtrl = $controller('InterviewCtrl as vm', { $scope: $scope });
		}));

		it('Should pass a dummy test', inject(function(){
			expect(interviewCtrl).toBeTruthy();
		}));

		it('Should initialize questions', function(){
			expect(interviewCtrl.questions.length).toBeGreaterThan(0);
		});
	});
})();