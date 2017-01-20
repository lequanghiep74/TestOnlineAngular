/**
 * Created by lequanghiep on 1/20/2017.
 */
'use strict';

angular.module('myApp')
    .factory('CategoryService', function ($http, API_URL) {
        var category = 'list';

        return {
            fetchAllCategories: fetchAllCategories
        };

        function fetchAllCategories() {
            return $http.get([API_URL, category, '/fetch/all'].join(''));
        }
    });