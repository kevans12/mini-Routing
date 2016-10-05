angular.module('miniRouting').controller('productsCtrl', function($scope, $stateParams, productService){
  $scope.test = "Testing Product Control";
  if ($stateParams.id === 'shoes') {
    $scope.productData = productService.shoeData;
  }
  else if ($stateParams.id === 'socks') {
    $scope.productData = productService.sockData;
  }

});
