var myApp = angular.module('myApp', ['StudentService']);

myApp.controller('StudentController', function($scope, StudentDataOp) {
    $scope.status;
    $scope.students;
    getStudents();

    function getStudents() {
        StudentDataOp.getStudents()
            .success(function(studs) {
                alert(studs[0].Email);
                $scope.students = studs;
            })
            .error(function(error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

    $scope.triggerChangeWithApply = function() {
        setTimeout(function() {
            $scope.$apply(function() {
                getStudents();
            })
        }, 15000)
    };

    $scope.addStudent = function() {
        var stud = {
            Name: $scope.Name,
            Email: $scope.Email,
            Class: $scope.Class,
            EnrollYear: $scope.EnrollYear,
            City: $scope.City,
            Country: $scope.Country
        };
        StudentDataOp.addStudent(stud)
            .success(function() {
                $scope.status = 'Inserted Student! Refreshing Student list.';
                $scope.triggerChangeWithApply();
                $scope.status = 'Refreshed Student list.';

                /*setTimeout(function() {
                $scope.$apply(function() {
                $scope.status = "Data Refreshed";
                getStudents();
                });
                }, 2000);*/
                //getStudents();
                //$scope.students.push(stud);
            }).
            error(function(error) {
                $scope.status = 'Unable to insert Student: ' + error.message;
            });
    };
});