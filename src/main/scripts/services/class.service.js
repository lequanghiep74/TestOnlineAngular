/**
 * Created by lequanghiep on 1/20/2017.
 */
'use strict';

angular.module('myApp')
    .factory('ClassService', function ($http, API_URL) {
        var classUrl = 'list';

        return {
            deleteClass: deleteClass
        };

        function deleteClass() {
            return $http.get([API_URL, 'delete'].join(''));
        }
    });