/**
 * Created by lequanghiep on 1/20/2017.
 */
'use strict';

angular.module('myApp')
    .factory('AccountService', function ($http, API_URL) {
        var account = 'list';

        return {
            fetchAllTeacher: fetchAllTeacher,
            deleteAccount: deleteAccount
        };

        function fetchAllTeacher() {
            return $http.get([API_URL, account, '/fetch/all'].join(''));
        }

        function deleteAccount() {
            return $http.get([API_URL, 'delete'].join(''));
        }
    });