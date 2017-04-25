var StudentService = angular.module('StudentService', [])
StudentService.factory('StudentDataOp', ['$http', function($http) {

    var urlBase = 'http://localhost:63845/StudentService.svc';
    var StudentDataOp = {};

    StudentDataOp.getStudents = function() {
        return $http.get(urlBase + '/GetAllStudent');
    };

    StudentDataOp.addStudent = function(stud) {
        return $http.post(urlBase + '/AddNewStudent', stud);
    };
    return StudentDataOp;

} ]);