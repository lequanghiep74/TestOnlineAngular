/**
 * Created by lequanghiep on 1/20/2017.
 */
'use strict';

angular.module('myApp')
    .factory('TeacherService', function ($http, API_URL) {
        var teacher = 'list';

        return {
            fetchAllTeacher: fetchAllTeacher
        };

        function fetchAllTeacher() {
            return $http.get([API_URL, teacher, '/fetch/all'].join(''));
        }
    });