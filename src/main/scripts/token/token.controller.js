/**
 * Created by lequanghiep on 1/16/2017.
 */
'use strict';

angular.module('myApp')
    .controller('TokenController', function ($scope, $stateParams, StringUtils, API_URL, Button, DateUtils, DataTable) {
        $scope.status = {
            step: 1,
            type: $stateParams.type
        };
        $scope.title = $scope.status.type === 'available' ? 'Available' : 'Non Available';

        $scope.changeView = function changeView(param) {
            $scope.status.step = param === 'back' ? $scope.status.step - 1 : $scope.status.step + 1;
            if (param === 'back') {
                $scope.token = {};
            }
        };

        $scope.saveToken = function saveToken() {

        };

        $scope.deleteToken = function deleteToken() {

        };

        $scope.edit = function (data) {
            $scope.$apply(function () {
                $scope.changeView();
                $scope.token = data;
            });
        };

        var loadTokensList = function loadTokensList() {
            var options = {
                url: [API_URL, 'token/fetch'].join(''),
                columns: [
                    {'title': 'ID', 'data': null},
                    {'title': 'Token Key', 'data': 'tokenKey'},
                    {'title': 'Created Date', 'data': 'createdDate'},
                    {'': ''}
                ],
                columnDefs: [
                    {
                        "render": function () {
                            return Button.groupButton([Button.deleteButton()]);
                        },
                        "targets": -1
                    },
                    {
                        "render": function (data) {
                            return DateUtils.convertMilToDate(data);
                        },
                        "targets": -2
                    }
                ]
            };

            options.delete = function (data) {
                $scope.deleteToken(data);
            };
            options.edit = function (data) {
                $scope.edit(data);
            };
            DataTable.generateDataTable(options, angular.element(document.querySelector('#tokenDataTable')));
        };

        $scope.$on('$includeContentLoaded', function (obj, url) {
            if (url === 'scripts/token/token.list.template.html') {
                loadTokensList();
            }
        });
    });