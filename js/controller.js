angular.module('RouteControllers', [])
   
      .controller('AboutController', function($scope)  {
      
        
    })
      
      .controller('TourController', function($scope) {
        
      var tourCalender = [{
        date: "10th August",
        city: "Belfast"
        
      },{
        date: "19th August",
        city: "London"
        
      },{
        date: "20th August",
        city: "Manchester"
        
      },
      ];
         $scope.bandTour = tourCalender;
       
       })
      
        .config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
  ]);
})


        .controller('MusicController', ['$scope',
  function MyCtrl($scope) {

    $scope.product = {
      name: 'The Monkees',
      description: 'Last Train To Clarksville 1966',
      media: [{
        src: 'ZcXpKiY2MXE'

      }]
    };

    $scope.getIframeSrc = function(src) {
      return 'https://www.youtube.com/embed/' + src;
    };
  }
])

    .controller('NewsController', function($scope) {

    	$scope.titleNewsletter = "Want to keep you in a loop? Subscribe below";
    })
        
    .controller('ContactController', function($scope) {
      $scope.contactData = {
    sender_message: ""
  }
    	    
      $scope.submitForm = function() {

      
      if ($scope.userForm.$valid) {
        alert('Thank you, your form has been submitted successfully.');
      }
      

    };
       });
