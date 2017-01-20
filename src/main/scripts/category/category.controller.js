/**
 * Created by lequanghiep on 1/16/2017.
 */
'use strict';

angular.module('myApp')
    .controller('CategoryController', function ($scope) {
        $scope.status = {
            step: 1
        };

        $scope.changeView = function changeView(param) {
            $scope.status.step = param === 'back' ? $scope.status.step - 1 : $scope.status.step + 1;
        };

        // $scope.saveCategory = function () {
        //     var method = $scope.category._id ? CategoriesService.updateCategory : CategoriesService.saveCategory;
        //
        //     method.call(null, $scope.category)
        //         .then(function () {
        //
        //             alert("Thành công");
        //             $scope.toggle();
        //         })
        //         .catch(function (err) {
        //             alert(err.toString());
        //         });
        // };
        //
        // $scope.delete = function (data) {
        //     CategoriesService.deleteCategory(data._id)
        //         .then(function () {
        //             alert("Thành công");
        //             angular.element('#datatable').DataTable().ajax.reload(null, false);
        //         })
        //         .catch(function (err) {
        //             alert(err.toString());
        //         });
        // };
        //
        // $scope.edit = function (data) {
        //     $scope.$apply(function () {
        //         $scope.toggle();
        //         $scope.category = data;
        //     });
        // };
        //
        // var loadCategoriesList = function () {
        //     var options = {
        //         url: [API_URL, 'category/fetch'].join(''),
        //         columns: [
        //             {'title': 'ID', 'data': null},
        //             {'title': 'CODE', 'data': 'code'},
        //             {'title': 'NAME', 'data': 'name'},
        //             {'': ''}
        //         ],
        //         columnDefs: [
        //             {
        //                 "render": function () {
        //                     return '<button class="btn btn-info" id="command-edit">Edit</button>' +
        //                         '<button class="btn btn-danger" id="command-delete">Delete</button>';
        //                 },
        //                 "targets": -1
        //             }
        //         ]
        //
        //     };
        //
        //     options.delete = function (data) {
        //         $scope.delete(data);
        //     };
        //     options.edit = function (data) {
        //         $scope.edit(data);
        //     };
        //     DataTable.generateDataTable(options, angular.element('#datatable'));
        // };
    });