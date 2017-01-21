/**
 * Created by lequanghiep on 1/20/2017.
 */
'use strict';

angular.module('myApp')
    .factory('TokenService', function ($http, API_URL) {
        var token = 'list';

        return {
            deleteToken: deleteToken
        };

        function deleteToken() {
            return $http.get([API_URL, 'delete'].join(''));
        }
    });