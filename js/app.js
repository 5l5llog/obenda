angular.module("myBand", ["ngRoute","RouteControllers"])

  .config(function($routeProvider,$locationProvider) {
  
  $locationProvider.hashPrefix('');

    $routeProvider.when("/", {
        template: "<div main-slide-show></div>"

    })
    
    .when("/about", {
        templateUrl : "templates/about.html",
        controller : "AboutController"
    }).when("/music", {
        templateUrl : "templates/music.html",
        controller : "MusicController"
    }).when("/tour", {
        templateUrl : "templates/tour.html",
        controller : "TourController"
    }).when("/newsletter", {
        templateUrl : "templates/newsletter.html",
        controller : "NewsController"
        }).when("/contact", {
        templateUrl : "templates/contact.html",
        controller : "ContactController"
    })
    })
        .directive("mainSlideShow",function(){
  return{
    template:`<ul class='cb-slideshow'>
            <li><span>Image 01</span></li>
            <li><span>Image 02</span></li>
            <li><span>Image 03</span></li>
            <li><span>Image 04</span></li>
            <li><span>Image 05</span></li>
            <li><span>Image 06</span></li>
        </ul>`
  }
    });
        