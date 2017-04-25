(function() {
    'use strict';

    var app = angular.module('studentapp', []).run(function() {
        console.log('app fired.');
    });

    app.factory('studentService', [
        '$http', '$q',
        function studentService($http, $q) {
            console.log('student service fired');

            // interface
            var service = {
                students: [],
                getAllStudent: getAllStudent
            };
            return service;


            // implementation
            function getAllStudent() {
                var def = $q.defer();
                $http.get("http://localhost:63845/StudentService.svc/GetAllStudent", { cache: false })
                    .success(function(data) {
                        service.students = result.data;
                        def.resolve(data);
                        console.log('students returned to controller.', data);
                    })
                    .error(function() {
                        def.reject("Failed to get students");
                    });
                return def.promise;
            }

            function addNewStudent(Student) {
                var def = $q.defer();
                $http({
                    method: "post",
                    url: "http://localhost:63845/StudentService.svc/AddNewStudent",
                    data: Student
                  })
                    .success(function(result) {
                        service.students = result.data;
                        def.resolve(result.data);
                        console.log('students returned to controller.', result.data);
                    })
                    .error(function() {
                        def.reject("Failed to add new students");
                    });
                return def.promise;
            }
        }
    ]);


    app.controller('studentsController', [
        '$scope', 'studentService',
        function studentsController($scope, studentService) {
            console.log('studentsController fired');
            var vm = this;
            vm.students = [];

            vm.getAllStudent();

            vm.getAllStudent = function() {
                studentService.getAllStudent()
                    .then(function(result) {
                        vm.students = result.data;
                        console.log('students returned to controller.', result.data);
                    },
                    function() {
                        console.log('students retrieval failed.');
                    });
            };

            vm.addNewStudent = function() {
            var Student = {
                Name: $scope.Name,
                Email: $scope.Email,
                Class: $scope.Class,
                EnrollYear: $scope.EnrollYear,
                City: $scope.City,
                Country: $scope.Country
            };
            studentService.addNewStudent(Student)
                    .then(function(result) {
                        vm.students = result.data;
                        console.log('students returned to controller.', result.data);
                    },
                    function() {
                        console.log('students retrieval failed.');
                    });
            };
        }
    ]);
})();