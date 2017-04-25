/// <reference path="../angular.min.js" />
/// <reference path="Modules.js" />

app.service("CRUD_AngularJs_RESTService", function($http) {
    //Create new record  
    this.post = function(Student) {
        var request = $http({
            method: "post",
            crossDomain: true,
            url: "http://localhost/WCFRESTAPI/StudentService.svc/AddNewStudent",
            data: Student
        });
        return request;
    }

    //Update the Record  
    this.put = function(StudentID, Student) {
        //debugger;  
        var request = $http({
            method: "put",
            url: "http://localhost/WCFRESTAPI/StudentService.svc/UpdateStudent",
            data: Student
        });
        return request;
    }

    //Get All Records
    this.getAllStudent = function() {
        return $http.get("http://localhost/WCFRESTAPI/StudentService.svc/GetAllStudent", { cache: false });
    };


    //Get Single Records  
    this.get = function(StudentID) {
        return $http.get("http://localhost/WCFRESTAPI/StudentService.svc/GetStudentDetails/" + StudentID);
    }

    //Delete the Record  
    this['delete'] = function(StudentID) {
        var request = $http({
            method: "delete",
            url: "http://localhost/WCFRESTAPI/StudentService.svc/DeleteStudent/" + StudentID
        });
        return request;
    }
});  

