app.controller('AngularController', ['$scope', '$http', 'AngularService', function ($scope, $http, AngularService) {

    //$scope.formdata = {};
    var productId = 0;       //used for update data
    alert(productId);
    
    //load data
    AngularService.get().success(function (response) {
        alert(response.d);
        $scope.Products = JSON.parse(response.d);
    });

    //submit and update data 
    $scope.add = function () {
        debugger;
        if ($('#txtProductName').val() == '') {
            setTimeout(function () {
                $('#txtProductName').focus();
                $('#txtProductName').css({
                    "border": "1px solid red"
                });
            }, 10);
            return false;
        }
        if ($('#txtProductDescription').val() == '') {
            setTimeout(function () {
                $('#txtProductDescription').focus();
                $('#txtProductName').css({
                    "border": ""
                });
                $('#txtProductDescription').css({
                    "border": "1px solid red"
                });
            }, 10);
            return false;
        }
        
        
        if (productId == 0) {
            AngularService.Add($scope.ProductName, $scope.ProductDescription).success(function (response) {
                AngularService.get().success(function (data) {
                    $scope.Products = JSON.parse(data.d);
                    //$scope.formdata = {};
                });
            });
        } else {
            AngularService.Update(productId, $scope.ProductName, $scope.ProductDescription).success(function (response) {
                AngularService.get().success(function (data) {
                    $scope.Products = JSON.parse(data.d);
                    //$scope.formdata = {};
                    productId = 0;
                    $("#btnSubmit").html('Submit');
                });
            });
        }
    };

    //clear form
    $scope.cancel = function () {
        //$scope.formdata = {};
        productId = 0;
        $('#txtProductName').css({
            "border": ""
        });
        $('#txtProductDescription').css({
            "border": ""
        });
        $("#btnSubmit").html('Submit');
    };

    //delete data
    $scope.delete = function (id) {
        AngularService.Delete(id).success(function (response) {
            AngularService.get().success(function (data) {
                $scope.Products = JSON.parse(data.d);
                //$scope.formdata = {};
                productId = 0;
            });
        });
    };

    //edit data
    $scope.edit = function (products) {
        $scope.ProductName = products.ProductName;
        $scope.ProductDescription = products.ProductDescription;
        productId = products.ID;
        $("#btnSubmit").html('Update');
    };
}]);