/**
 * Created by lequanghiep on 1/16/2017.
 */
'use strict';

angular.module('myApp')
    .controller('CategoryController', function ($scope, DataTable, Button, API_URL) {
        $scope.status = {
            step: 1,
            select: [
                {name: 'Not set', value: 'noteset'},
                {name: 'True', value: "True"},
                {name: 'False', value: "False"}
            ]
        };

        $scope.changeView = function changeView(param) {
            $scope.status.step = param === 'back' ? $scope.status.step - 1 : $scope.status.step + 1;
            if (param === 'back') {
                $scope.category = {};
            }
        };

        $scope.saveCategory = function saveCategory() {
            // var method = $scope.category._id ? CategoriesService.updateCategory : CategoriesService.saveCategory;
            //
            // method.call(null, $scope.category)
            //     .then(function () {
            //
            //         alert("Thành công");
            //         $scope.toggle();
            //     })
            //     .catch(function (err) {
            //         alert(err.toString());
            //     });
        };

        $scope.deleteCategory = function deleteCategory(data) {
            // CategoriesService.deleteCategory(data._id)
            //     .then(function () {
            //         alert("Thành công");
            //         angular.element('#datatable').DataTable().ajax.reload(null, false);
            //     })
            //     .catch(function (err) {
            //         alert(err.toString());
            //     });
        };

        $scope.edit = function (data) {
            $scope.$apply(function () {
                $scope.changeView();
                $scope.category = data;
            });
        };

        var loadCategoriesList = function loadCategoriesList() {
            var options = {
                url: [API_URL, 'category/fetch'].join(''),
                columns: [
                    {'title': 'ID', 'data': null},
                    {'title': 'Name', 'data': 'name'},
                    {'title': 'Code', 'data': 'code'},
                    {'title': 'Status', 'data': 'status'},
                    {'': ''}
                ],
                columnDefs: [
                    {
                        "render": function () {
                            return Button.groupButton([Button.editButton(), Button.deleteButton()]);
                        },
                        "targets": -1
                    },
                    {
                        "render": function (data) {
                            var className = data === 'True' ? 'label-success' : 'label-danger';
                            return ['<span class="label label-sm ', className, '">', data, '</span>'].join('');
                        },
                        "targets": -2
                    }
                ]

            };

            options.delete = function (data) {
                $scope.deleteCategory(data);
            };
            options.edit = function (data) {
                $scope.edit(data);
            };
            DataTable.generateDataTable(options, angular.element(document.querySelector('#categoryDataTable')));
        };

        $scope.$on('$includeContentLoaded', function (obj, url) {
            if (url === 'scripts/category/category.list.template.html') {
                loadCategoriesList();
            }
        });
    });