
app.factory('AngularService', ['$http', function($http) {
    return {
        //load data service
        get: function() {
            return $http({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                url: 'http://localhost:63845/ProductService.svc/GetAllProduct'
            });
        },

        //add data service
        Add: function(productName, productDescription) {
            return $http({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                url: 'http://localhost:63845/ProductService.svc/AddNewProduct',
                data: { productName: productName, productDescription: productDescription }
            });
        },

        //delete data service
        Delete: function(productId) {
            return $http({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                url: 'http://localhost:63845/ProductService.svc/DeleteProduct',
                data: { id: productId }
            });
        },

        //update data service
        Update: function(productId, productName, productDescription) {
            return $http({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                url: 'http://localhost:63845/ProductService.svc/UpdateProduct',
                data: { updateId: productId, productName: productName, productDescription: productDescription }
            });
        }
    };
} ]);

