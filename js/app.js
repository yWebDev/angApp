/**
 * Created by Yurii_Shpakovych on 9/2/2016.
 */
var basketModule = angular.module('basketModule', []);
basketModule.controller('basketCtrl', basketCtrl);

function basketCtrl($scope) {
    $scope.products = [
        {
            name: 'Banana',
            bought: true
        },
        {
            name: 'Sugar',
            bought: false
        }
    ];

    $scope.left = function () {
        var count = 0;
        angular.forEach($scope.products, function (item) {
            if (!item.bought) {
                count++;
            }
        });
        return count;
    };

    $scope.addProduct = function () {
        if (!$scope.newProductName) {
            return;
        }

        $scope.products.push({
            name: $scope.newProductName,
            bought: false
        });
        $scope.newProductName = '';
    };
}