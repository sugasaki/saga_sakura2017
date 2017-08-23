(function () {
    'use strict';


var BASE_URL = '/viva/';
var randomNo = Math.floor((Math.random() * 10000000) + 1);


var app = angular.module('app', [

    'ui.router',
    'ui.layout',
    'ui.bootstrap',
    //'ngMaterial',
    'restangular',  //https://github.com/mgonto/restangular //Serviceを書く手間が省ける
    'LocalStorageModule', //angular-local-storag

    'adf', 'adf.structures.base',

]).value('adfTemplatePath', 'app/adf.templates/');


app.config(function (dashboardProvider) {
    dashboardProvider.widgetsPath('app/adf.widget');
});



//初期の画面構成を構築する。ヘッダー、コンテンツエリア、フッター
app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');  //下記以外のURLは'/'へリダイレクト


        $stateProvider

            .state('main', {
                //url: '/',
                //abstract: true,
                //controller: 'mainController',
                templateUrl: BASE_URL + 'app/view/home.html?i=' + randomNo,
            })


            .state('main.detail', {
                url: '/home',
                views: {
                    header: {
                        controller: 'headerController',
                        templateUrl: BASE_URL + 'app/view/header.html?i=' + randomNo,
                    },
                    container: {
                        controller: 'testController',
                        templateUrl: BASE_URL + 'app/view/main.html?i=' + randomNo,
                    },
                    footer: {
                        controller: 'footerController',
                        templateUrl: BASE_URL + 'app/view/footer.html?i=' + randomNo,
                    },
                }

            })





    }])



    //メイン画面のコントローラー
    app.controller('mainController', function ($rootScope, $scope) {
        var a = 1;
    });


    //ヘッダー表示用コントローラー
    app.controller('headerController', function ($scope, $location) {
        $scope.navCollapsed = true;

        $scope.toggleNav = function () {
            $scope.navCollapsed = !$scope.navCollapsed;
        };

        $scope.$on('$routeChangeStart', function () {
            $scope.navCollapsed = true;
        });

        $scope.navClass = function (page) {
            var currentRoute = $location.path().substring(1) || 'Sample 01';
            return page === currentRoute || new RegExp(page).test(currentRoute) ? 'active' : '';
        };
    });


    //フッター表示用コントローラー （現状は空）
    app.controller('footerController', function ($scope) {
        var a = 1;
    });


    //ヘッダー表示用コントローラー
    app.controller('testController', function ($scope) {
        var a = 1;
    });



    app.run(function () {
        //var Visualizer = window['ui-router-visualizer'].Visualizer;
        //var pluginInstance = $uiRouter.plugin(Visualizer);
    });



})();
