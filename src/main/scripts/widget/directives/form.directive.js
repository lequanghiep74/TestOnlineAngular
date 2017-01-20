/**
 * Created by lequanghiep on 1/20/2017.
 */
angular.module('myApp')
    .directive('multiSelect', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element) {
                if (scope.$last) {
                    $timeout(function () {
                        var select = element.parent();
                        select.chosen({allow_single_deselect: true});

                        //resize the chosen on window resize
                        $(window)
                            .off('resize.chosen')
                            .on('resize.chosen', function () {
                                select.each(function () {
                                    var $this = $(this);
                                    $this.next().css({'width': $this.parent().width()});
                                })
                            }).trigger('resize.chosen');
                        //resize chosen on sidebar collapse/expand
                        $(document).on('settings.ace.chosen', function (e, event_name, event_val) {
                            if (event_name != 'sidebar_collapsed') return;
                            select.each(function () {
                                var $this = $(this);
                                $this.next().css({'width': $this.parent().width()});
                            })
                        });


                        $('#chosen-multiple-style .btn').on('click', function (e) {
                            var target = $(this).find('input[type=radio]');
                            var which = parseInt(target.val());
                            if (which == 2) element.addClass('tag-input-style');
                            else select.removeClass('tag-input-style');
                        });
                    });
                }
            }
        }
    })
    .directive('dateTimePicker', function () {
        return {
            restrict: 'A',
            link: function (scope, element) {
                if (!ace.vars['old_ie']) {
                    element.datetimepicker({
                        format: 'dd/MM/yyyy',//use this option to display seconds
                        icons: {
                            time: 'fa fa-clock-o',
                            date: 'fa fa-calendar',
                            up: 'fa fa-chevron-up',
                            down: 'fa fa-chevron-down',
                            previous: 'fa fa-chevron-left',
                            next: 'fa fa-chevron-right',
                            today: 'fa fa-arrows ',
                            clear: 'fa fa-trash',
                            close: 'fa fa-times'
                        }
                    }).next().on(ace.click_event, function () {
                        $(this).prev().focus();
                    });
                }
            }
        }
    })
    .directive('inputMask', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                element.mask(attr.inputMask);
            }
        }
    });