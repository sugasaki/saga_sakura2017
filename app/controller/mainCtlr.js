/* 
 */
'use strict';

angular.module('main', ['adf']).controller('mainCtrl', func);

function func($scope, $stateParams, localStorageService) {
    $scope.randomNo = Math.floor((Math.random() * 10000000) + 1);

    $scope.viewModel = {};
    $scope.viewModel.selectedNode = [];
    $scope.active = {};


    //検索処理の初期化
    init_search();


    function init_search() {
        $scope.searchOptions = {};

        //$scope.searchOptions.searchStrings = "関西電力";
        $scope.searchOptions.searchStrings = "東京電力";

        if ($stateParams.myWord) $scope.searchOptions.searchStrings = $stateParams.myWord;
    }




}
