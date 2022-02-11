define(['exports', 'marionette', 'underscore', 'jquery', 'config', 'models/attachment_collection', 'text!templates/attachment_item_tmpl.html', 'text!templates/attachment_list_tmpl.html'], function (exports, _marionette, _underscore, _jquery, _config, _attachment_collection, _attachment_item_tmpl, _attachment_list_tmpl) {
    'use strict';

    /*
    * @Author: Lutz Reiter, Design Research Lab, Universität der Künste Berlin
    * @Date:   2016-05-04 11:38:41
    * @Last Modified by:   lutzer
    * @Last Modified time: 2016-07-14 12:00:04
    */

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _marionette2 = _interopRequireDefault(_marionette);

    var _underscore2 = _interopRequireDefault(_underscore);

    var _jquery2 = _interopRequireDefault(_jquery);

    var _config2 = _interopRequireDefault(_config);

    var _attachment_collection2 = _interopRequireDefault(_attachment_collection);

    var _attachment_item_tmpl2 = _interopRequireDefault(_attachment_item_tmpl);

    var _attachment_list_tmpl2 = _interopRequireDefault(_attachment_list_tmpl);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var AttachmentListView = function (_Marionette$Composite) {
        _inherits(AttachmentListView, _Marionette$Composite);

        function AttachmentListView() {
            _classCallCheck(this, AttachmentListView);

            return _possibleConstructorReturn(this, (AttachmentListView.__proto__ || Object.getPrototypeOf(AttachmentListView)).apply(this, arguments));
        }

        _createClass(AttachmentListView, [{
            key: 'events',
            value: function events() {
                return {
                    'click #load-more-button': 'onLoadMoreButtonClick'
                };
            }
        }, {
            key: 'initialize',
            value: function initialize(options) {

                this.fetchParams = {};

                if (options.interview != null) this.fetchParams.interview = options.interview;

                this.collection = new _attachment_collection2.default();

                this.collection.fetch({ data: _jquery2.default.param(this.fetchParams) });
            }
        }, {
            key: 'template',
            get: function get() {
                return _underscore2.default.template(_attachment_list_tmpl2.default);
            }
        }, {
            key: 'childViewContainer',
            get: function get() {
                return '#attachment-list';
            }
        }, {
            key: 'className',
            get: function get() {
                return 'composite-view';
            }
        }, {
            key: 'childView',
            get: function get() {
                return _marionette2.default.ItemView.extend({
                    template: _underscore2.default.template(_attachment_item_tmpl2.default),
                    className: 'attachment',
                    tagName: 'li',
                    events: {
                        'click #deleteButton': 'onDeleteButtonClicked',
                        'click #editButton': 'onEditButtonClicked'
                    },
                    templateHelpers: {
                        fileDir: _config2.default.files_url
                    },
                    onDeleteButtonClicked: function onDeleteButtonClicked() {
                        if (confirm("Are you sure you want to delete the attachment?")) {
                            this.model.destroy();
                        }
                    },
                    onEditButtonClicked: function onEditButtonClicked() {
                        window.location.href = "#attachment/" + this.model.id;
                    }
                });
            }
        }]);

        return AttachmentListView;
    }(_marionette2.default.CompositeView);

    ;

    exports.default = AttachmentListView;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9hdHRhY2htZW50X2xpc3Rfdmlldy5qcyJdLCJuYW1lcyI6WyJBdHRhY2htZW50TGlzdFZpZXciLCJvcHRpb25zIiwiZmV0Y2hQYXJhbXMiLCJpbnRlcnZpZXciLCJjb2xsZWN0aW9uIiwiQXR0YWNobWVudENvbGxlY3Rpb24iLCJmZXRjaCIsImRhdGEiLCIkIiwicGFyYW0iLCJfIiwidGVtcGxhdGUiLCJNYXJpb25ldHRlIiwiSXRlbVZpZXciLCJleHRlbmQiLCJpdGVtVGVtcGxhdGUiLCJjbGFzc05hbWUiLCJ0YWdOYW1lIiwiZXZlbnRzIiwidGVtcGxhdGVIZWxwZXJzIiwiZmlsZURpciIsIkNvbmZpZyIsImZpbGVzX3VybCIsIm9uRGVsZXRlQnV0dG9uQ2xpY2tlZCIsImNvbmZpcm0iLCJtb2RlbCIsImRlc3Ryb3kiLCJvbkVkaXRCdXR0b25DbGlja2VkIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaWQiLCJDb21wb3NpdGVWaWV3Il0sIm1hcHBpbmdzIjoiO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFnQk1BLGtCOzs7Ozs7Ozs7OztxQ0ErQk87QUFDTCx1QkFBTztBQUNILCtDQUE0QjtBQUR6QixpQkFBUDtBQUdIOzs7dUNBR09DLE8sRUFBUzs7QUFFbkIscUJBQUtDLFdBQUwsR0FBbUIsRUFBbkI7O0FBRUEsb0JBQUlELFFBQVFFLFNBQVIsSUFBcUIsSUFBekIsRUFDQyxLQUFLRCxXQUFMLENBQWlCQyxTQUFqQixHQUE2QkYsUUFBUUUsU0FBckM7O0FBRUQscUJBQUtDLFVBQUwsR0FBa0IsSUFBSUMsK0JBQUosRUFBbEI7O0FBRU0scUJBQUtELFVBQUwsQ0FBZ0JFLEtBQWhCLENBQXNCLEVBQUVDLE1BQU1DLGlCQUFFQyxLQUFGLENBQVEsS0FBS1AsV0FBYixDQUFSLEVBQXRCO0FBRU47OztnQ0EvQ2lCO0FBQUUsdUJBQU9RLHFCQUFFQyxRQUFGLENBQVdBLDhCQUFYLENBQVA7QUFBNkI7OztnQ0FFckI7QUFBRSx1QkFBTyxrQkFBUDtBQUEyQjs7O2dDQUV6QztBQUFFLHVCQUFPLGdCQUFQO0FBQXlCOzs7Z0NBRTNCO0FBQ1QsdUJBQU9DLHFCQUFXQyxRQUFYLENBQW9CQyxNQUFwQixDQUEyQjtBQUM5QkgsOEJBQVVELHFCQUFFQyxRQUFGLENBQVdJLDhCQUFYLENBRG9CO0FBRTlCQywrQkFBWSxZQUZrQjtBQUc5QkMsNkJBQVMsSUFIcUI7QUFJOUJDLDRCQUFTO0FBQ0wsK0NBQXdCLHVCQURuQjtBQUVMLDZDQUFzQjtBQUZqQixxQkFKcUI7QUFROUJDLHFDQUFpQjtBQUNiQyxpQ0FBVUMsaUJBQU9DO0FBREoscUJBUmE7QUFXOUJDLDJDQUF3QixpQ0FBVztBQUMvQiw0QkFBSUMsUUFBUSxpREFBUixDQUFKLEVBQWdFO0FBQzVELGlDQUFLQyxLQUFMLENBQVdDLE9BQVg7QUFDSDtBQUNKLHFCQWY2QjtBQWdCOUJDLHlDQUFzQiwrQkFBVztBQUM3QkMsK0JBQU9DLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLGlCQUFlLEtBQUtMLEtBQUwsQ0FBV00sRUFBakQ7QUFDSDtBQWxCNkIsaUJBQTNCLENBQVA7QUFvQkg7Ozs7TUE3QjRCbkIscUJBQVdvQixhOztBQW9EM0M7O3NCQUVjaEMsa0IiLCJmaWxlIjoiYXR0YWNobWVudF9saXN0X3ZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qXG4qIEBBdXRob3I6IEx1dHogUmVpdGVyLCBEZXNpZ24gUmVzZWFyY2ggTGFiLCBVbml2ZXJzaXTDpHQgZGVyIEvDvG5zdGUgQmVybGluXG4qIEBEYXRlOiAgIDIwMTYtMDUtMDQgMTE6Mzg6NDFcbiogQExhc3QgTW9kaWZpZWQgYnk6ICAgbHV0emVyXG4qIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTYtMDctMTQgMTI6MDA6MDRcbiovXG5cbmltcG9ydCBNYXJpb25ldHRlIGZyb20gJ21hcmlvbmV0dGUnO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbmZpZyBmcm9tICdjb25maWcnO1xuaW1wb3J0IEF0dGFjaG1lbnRDb2xsZWN0aW9uIGZyb20gJ21vZGVscy9hdHRhY2htZW50X2NvbGxlY3Rpb24nO1xuXG5pbXBvcnQgaXRlbVRlbXBsYXRlIGZyb20gJ3RleHQhdGVtcGxhdGVzL2F0dGFjaG1lbnRfaXRlbV90bXBsLmh0bWwnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJ3RleHQhdGVtcGxhdGVzL2F0dGFjaG1lbnRfbGlzdF90bXBsLmh0bWwnO1xuXG5jbGFzcyBBdHRhY2htZW50TGlzdFZpZXcgZXh0ZW5kcyBNYXJpb25ldHRlLkNvbXBvc2l0ZVZpZXcge1xuXG4gICAgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gXy50ZW1wbGF0ZSh0ZW1wbGF0ZSkgfVxuXG4gICAgZ2V0IGNoaWxkVmlld0NvbnRhaW5lcigpIHsgcmV0dXJuICcjYXR0YWNobWVudC1saXN0JyB9XG5cblx0Z2V0IGNsYXNzTmFtZSgpIHsgcmV0dXJuICdjb21wb3NpdGUtdmlldycgfVxuXG5cdGdldCBjaGlsZFZpZXcoKSB7IFxuICAgICAgICByZXR1cm4gTWFyaW9uZXR0ZS5JdGVtVmlldy5leHRlbmQoe1xuICAgICAgICAgICAgdGVtcGxhdGU6IF8udGVtcGxhdGUoaXRlbVRlbXBsYXRlKSxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA6ICdhdHRhY2htZW50JyxcbiAgICAgICAgICAgIHRhZ05hbWU6ICdsaScsXG4gICAgICAgICAgICBldmVudHMgOiB7XG4gICAgICAgICAgICAgICAgJ2NsaWNrICNkZWxldGVCdXR0b24nIDogJ29uRGVsZXRlQnV0dG9uQ2xpY2tlZCcsXG4gICAgICAgICAgICAgICAgJ2NsaWNrICNlZGl0QnV0dG9uJyA6ICdvbkVkaXRCdXR0b25DbGlja2VkJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlSGVscGVyczoge1xuICAgICAgICAgICAgICAgIGZpbGVEaXIgOiBDb25maWcuZmlsZXNfdXJsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25EZWxldGVCdXR0b25DbGlja2VkIDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSBhdHRhY2htZW50P1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25FZGl0QnV0dG9uQ2xpY2tlZCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIjYXR0YWNobWVudC9cIit0aGlzLm1vZGVsLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTsgXG4gICAgfVxuXG4gICAgZXZlbnRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ2NsaWNrICNsb2FkLW1vcmUtYnV0dG9uJyA6ICdvbkxvYWRNb3JlQnV0dG9uQ2xpY2snXG4gICAgICAgIH1cbiAgICB9XG5cblx0LyogbWV0aG9kcyAqL1xuXHRpbml0aWFsaXplKG9wdGlvbnMpIHtcblxuXHRcdHRoaXMuZmV0Y2hQYXJhbXMgPSB7fTtcblxuXHRcdGlmIChvcHRpb25zLmludGVydmlldyAhPSBudWxsKVxuXHRcdFx0dGhpcy5mZXRjaFBhcmFtcy5pbnRlcnZpZXcgPSBvcHRpb25zLmludGVydmlld1xuXHRcdFxuXHRcdHRoaXMuY29sbGVjdGlvbiA9IG5ldyBBdHRhY2htZW50Q29sbGVjdGlvbigpO1xuXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbi5mZXRjaCh7IGRhdGE6ICQucGFyYW0odGhpcy5mZXRjaFBhcmFtcykgfSk7XG5cblx0fVxuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF0dGFjaG1lbnRMaXN0VmlldzsiXX0=