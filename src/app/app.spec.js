(function(){
	'use strict';

	describe('App controller', function(){
		var appCtrl, $location, $scope;

		beforeEach(module('ngInterviewPrep'));

		beforeEach(inject(function($controller, _$location_, $rootScope){
			$location = _$location_;
			$scope = $rootScope.$new();

			appCtrl = $controller('AppCtrl', { $location: $location, $scope: $scope });
		}));

		it ('Should pass a dummy test', inject(function(){
			expect(appCtrl).toBeTruthy();
		}));
	});
})();