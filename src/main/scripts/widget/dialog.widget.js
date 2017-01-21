/**
 * Created by lequanghiep on 1/21/2017.
 */
'use strict';

angular.module('myApp')
    .factory('Dialog', function () {
        return {
            errorDialog: errorDialog,
            successDialog: successDialog
        };

        function errorDialog() {

        }

        function successDialog() {

        }
    });