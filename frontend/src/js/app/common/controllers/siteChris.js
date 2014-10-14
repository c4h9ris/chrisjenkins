var siteChris = angular.module('siteChris', []);

siteChris.controller('siteChrisCtrl', function ($scope) {
	$scope.filters = { };
	$scope.myProjects = [
		{
			title: "MasterCard Canada",
			description: "A project to enable MasterCard customers to access business tools.",
			tags: {
				1: "AngularJS",
				2: "Application",
				3: "Finance"
			},
			img: "img/mastercard-canada.jpg"
		},
		{
			title: "EE",
			description: "A project to enable EE customers to access business tools.",
			tags: {
				1: "AngularJS",
				2: "Application",
				3: "Telecoms"
			},
			img: "img/EE.jpg"
		},
		{
			title: "iBusinessHub",
			description: " Available exclusively to Santander Business Banking customers and offers 3 packages of small business software",
			tags: {
				1: "WordPress",
				2: "Brochure Site",
				3: "Finance"
			},
			img: "img/ibusinesshub.jpg"
		},
		{
			title: "Plan HQ",
			description: "WordPress blog site designed to support the Plan HQ Ruby application",
			tags: {
				1: "WordPress",
				2: "Blog"				
			},
			img: "img/ibusinesshub.jpg"
		}
	];
	$scope.modalShown = false;
	$scope.toggleModal = function() {
		$scope.modalShown = !$scope.modalShown;
	};
});

siteChris.directive('modalDialog', function() {
    return {
	    restrict: 'E',
	    scope: {
	      	show: '='
	    },
	    replace: true, // Replace with the template below
	    transclude: true, // we want to insert custom content inside the directive
	    link: function(scope, element, attrs) {
	    scope.dialogStyle = {};
	    if (attrs.width)
	        scope.dialogStyle.width = attrs.width;
	    if (attrs.height)
	        scope.dialogStyle.height = attrs.height;
	    scope.hideModal = function() {
	        scope.show = false;
	    };
    },
    template: '...' // See below
  };
});