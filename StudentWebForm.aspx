<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="StudentWebForm.aspx.cs" Inherits="StudentAungularJSWebApp.StudentWebForm" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<%--<script type="text/javascript" src="Scripts/angular.js"></script> 
--%><script type="text/javascript" src="Scripts/angular.min.js"></script>
<script type="text/javascript" src="Scripts/MyScripts/Modules.js"></script>  
<script type="text/javascript" src="Scripts/MyScripts/Services.js"></script>  
<script type="text/javascript" src="Scripts/MyScripts/Controllers.js"></script>

<html xmlns="http://www.w3.org/1999/xhtml" data-ng-app="RESTClientModule">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <table id="tblContainer" data-ng-controller="CRUD_AngularJs_RESTController">  
        <tr>  
            <td>  
                <table ng-table="tblContainer" style="border: solid 2px Green; padding: 5px;">  
                    <tr style="height: 30px; background-color: skyblue; color: maroon;">  
                        <th></th>  
                        <th>ID</th>  
                        <th>Name</th>  
                        <th>Email</th>  
                        <th>Class</th>  
                        <th>Year</th>  
                        <th>City</th>  
                        <th>Country</th>  
                        <th></th>  
                        <th></th>  
                    </tr>
                    <tbody ng-repeat="stud in Students">
                        <tr>  
                            <td></td>  
                            <td><span>{{stud.StudentID}}</span></td>  
                            <td><span>{{stud.Name}}</span></td>  
                            <td><span>{{stud.Email}}</span></td>  
                            <td><span>{{stud.Class}}</span></td>  
                            <td><span>{{stud.EnrollYear}}</span></td>  
                            <td><span>{{stud.City}}</span></td>  
                            <td><span>{{stud.Country}}</span></td>  
                            <td>  
                                <input type="button" id="Edit" value="Edit" data-ng-click="getStudent(stud)" />
                            </td>
                            <td>  
                                <input type="button" id="Delete" value="Delete" data-ng-click="deleteStudent(stud)" />
                            </td>  
                        </tr>  
                    </tbody>  
                </table>  
            </td>  
        </tr>  
        <tr>  
            <td>  
                <div style="color: red;">{{Message}}</div>  
                <table style="border: solid 4px Red; padding: 2px;">  
                    <tr>  
                        <td></td>  
                        <td>  
                            <span>Student ID</span>  
                        </td>  
                        <td>  
                            <input type="text" id="StudentID" readonly="readonly" data-ng-model="StudentID" />  
                        </td>  
                    </tr>  
                    <tr>  
                        <td></td>  
                        <td>  
                            <span>Student Name</span>  
                        </td>  
                        <td>  
                            <input type="text" id="sName" required data-ng-model="Name" />  
                        </td>  
                    </tr>  
                    <tr>  
                        <td></td>  
                        <td>  
                            <span>Email</span>  
                        </td>  
                        <td>  
                            <input type="text" id="sEmail" required data-ng-model="Email" />  
                        </td>  
                    </tr>  
                    <tr>  
                        <td></td>  
                        <td>  
                            <span>Class</span>  
                        </td>  
                        <td>  
                            <input type="text" id="sClass" required data-ng-model="Class" />  
                        </td>  
                    </tr>  
                    <tr>  
                        <td></td>  
                        <td>  
                            <span>Enrollement Year</span>  
                        </td>  
                        <td>  
                            <input type="text" id="sEnrollYear" required data-ng-model="EnrollYear" />  
                        </td>  
                    </tr>  
                    <tr>  
                        <td></td>  
                        <td>  
                            <span>City</span>  
                        </td>  
                        <td>  
                            <input type="text" id="sCity" required data-ng-model="City" />  
                        </td>  
                    </tr>  
                    <tr>  
                        <td></td>  
                        <td>  
                            <span>Country</span>  
                        </td>  
                        <td>  
                            <input type="text" id="sCountry" required data-ng-model="Country" />  
                        </td>  
                    </tr>  
                    <tr>  
                        <td></td>  
                        <td></td>  
                        <td>  
                            <input type="button" id="save" value="Save" data-ng-click="save();" />  
  
                            <input type="button" id="Clear" value="Clear" data-ng-click="clear()" />  
                        </td>  
                    </tr>  
                </table>  
            </td>  
        </tr>
      </table>
    </div>
    </form>
</body>
</html>
