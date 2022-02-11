define(['exports', 'marionette', 'underscore', 'jquery', 'config', 'models/interview_collection', 'text!templates/interview_list_tmpl.html', 'text!templates/interview_item_tmpl.html'], function (exports, _marionette, _underscore, _jquery, _config, _interview_collection, _interview_list_tmpl, _interview_item_tmpl) {
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

    var _interview_collection2 = _interopRequireDefault(_interview_collection);

    var _interview_list_tmpl2 = _interopRequireDefault(_interview_list_tmpl);

    var _interview_item_tmpl2 = _interopRequireDefault(_interview_item_tmpl);

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

    var InterviewListView = function (_Marionette$Composite) {
        _inherits(InterviewListView, _Marionette$Composite);

        function InterviewListView() {
            _classCallCheck(this, InterviewListView);

            return _possibleConstructorReturn(this, (InterviewListView.__proto__ || Object.getPrototypeOf(InterviewListView)).apply(this, arguments));
        }

        _createClass(InterviewListView, [{
            key: 'events',
            value: function events() {
                return {
                    'click #load-more-button': 'onLoadMoreButtonClick',
                    'click #add-interview-button': 'onAddInterviewButtonClick'
                };
            }
        }, {
            key: 'initialize',
            value: function initialize(options) {

                this.fetchParams = {};

                if (options.tag != null) this.fetchParams.tag = options.tag;

                this.collection = new _interview_collection2.default();

                this.collection.fetch();
            }
        }, {
            key: 'onAddInterviewButtonClick',
            value: function onAddInterviewButtonClick() {
                window.location.href = '#interview/new';
            }
        }, {
            key: 'template',
            get: function get() {
                return _underscore2.default.template(_interview_list_tmpl2.default);
            }
        }, {
            key: 'className',
            get: function get() {
                return 'composite-view';
            }
        }, {
            key: 'childViewContainer',
            get: function get() {
                return '#interview-list';
            }
        }, {
            key: 'childView',
            get: function get() {
                return _marionette2.default.ItemView.extend({
                    template: _underscore2.default.template(_interview_item_tmpl2.default),
                    className: 'attachment',
                    tagName: 'li',
                    events: {
                        'click #deleteButton': 'onDeleteButtonClicked',
                        'click #editButton': 'onEditButtonClicked'
                    },
                    onDeleteButtonClicked: function onDeleteButtonClicked() {
                        if (confirm("Are you sure you want to delete the interview?")) {
                            this.model.destroy();
                        }
                    },
                    onEditButtonClicked: function onEditButtonClicked() {
                        window.location.href = "#interview/" + this.model.id;
                    }
                });
            }
        }]);

        return InterviewListView;
    }(_marionette2.default.CompositeView);

    ;

    exports.default = InterviewListView;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9pbnRlcnZpZXdfbGlzdF92aWV3LmpzIl0sIm5hbWVzIjpbIkludGVydmlld0xpc3RWaWV3Iiwib3B0aW9ucyIsImZldGNoUGFyYW1zIiwidGFnIiwiY29sbGVjdGlvbiIsIkludGVydmlld0NvbGxlY3Rpb24iLCJmZXRjaCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIl8iLCJ0ZW1wbGF0ZSIsIk1hcmlvbmV0dGUiLCJJdGVtVmlldyIsImV4dGVuZCIsIml0ZW1UZW1wbGF0ZSIsImNsYXNzTmFtZSIsInRhZ05hbWUiLCJldmVudHMiLCJvbkRlbGV0ZUJ1dHRvbkNsaWNrZWQiLCJjb25maXJtIiwibW9kZWwiLCJkZXN0cm95Iiwib25FZGl0QnV0dG9uQ2xpY2tlZCIsImlkIiwiQ29tcG9zaXRlVmlldyJdLCJtYXBwaW5ncyI6IjtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBZ0JNQSxpQjs7Ozs7Ozs7Ozs7cUNBNkJPO0FBQ0wsdUJBQU87QUFDSCwrQ0FBNEIsdUJBRHpCO0FBRUgsbURBQWdDO0FBRjdCLGlCQUFQO0FBSUg7Ozt1Q0FHT0MsTyxFQUFTOztBQUVuQixxQkFBS0MsV0FBTCxHQUFtQixFQUFuQjs7QUFFQSxvQkFBSUQsUUFBUUUsR0FBUixJQUFlLElBQW5CLEVBQ0MsS0FBS0QsV0FBTCxDQUFpQkMsR0FBakIsR0FBdUJGLFFBQVFFLEdBQS9COztBQUVELHFCQUFLQyxVQUFMLEdBQWtCLElBQUlDLDhCQUFKLEVBQWxCOztBQUVNLHFCQUFLRCxVQUFMLENBQWdCRSxLQUFoQjtBQUNOOzs7d0RBRThCO0FBQ3hCQyx1QkFBT0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsZ0JBQXZCO0FBQ0g7OztnQ0FoRFc7QUFBRSx1QkFBT0MscUJBQUVDLFFBQUYsQ0FBV0EsNkJBQVgsQ0FBUDtBQUE2Qjs7O2dDQUU5QjtBQUFFLHVCQUFPLGdCQUFQO0FBQXlCOzs7Z0NBRWxCO0FBQUUsdUJBQU8saUJBQVA7QUFBMEI7OztnQ0FFckM7QUFDVCx1QkFBT0MscUJBQVdDLFFBQVgsQ0FBb0JDLE1BQXBCLENBQTJCO0FBQzlCSCw4QkFBVUQscUJBQUVDLFFBQUYsQ0FBV0ksNkJBQVgsQ0FEb0I7QUFFOUJDLCtCQUFZLFlBRmtCO0FBRzlCQyw2QkFBVSxJQUhvQjtBQUk5QkMsNEJBQVM7QUFDTCwrQ0FBd0IsdUJBRG5CO0FBRUwsNkNBQXNCO0FBRmpCLHFCQUpxQjtBQVE5QkMsMkNBQXdCLGlDQUFXO0FBQy9CLDRCQUFJQyxRQUFRLGdEQUFSLENBQUosRUFBK0Q7QUFDM0QsaUNBQUtDLEtBQUwsQ0FBV0MsT0FBWDtBQUNIO0FBQ0oscUJBWjZCO0FBYTlCQyx5Q0FBc0IsK0JBQVc7QUFDN0JoQiwrQkFBT0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsZ0JBQWMsS0FBS1ksS0FBTCxDQUFXRyxFQUFoRDtBQUNIO0FBZjZCLGlCQUEzQixDQUFQO0FBaUJIOzs7O01BM0IyQloscUJBQVdhLGE7O0FBc0QxQzs7c0JBRWN6QixpQiIsImZpbGUiOiJpbnRlcnZpZXdfbGlzdF92aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vKlxuKiBAQXV0aG9yOiBMdXR6IFJlaXRlciwgRGVzaWduIFJlc2VhcmNoIExhYiwgVW5pdmVyc2l0w6R0IGRlciBLw7xuc3RlIEJlcmxpblxuKiBARGF0ZTogICAyMDE2LTA1LTA0IDExOjM4OjQxXG4qIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIGx1dHplclxuKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE2LTA3LTE0IDEyOjAwOjA0XG4qL1xuXG5pbXBvcnQgTWFyaW9uZXR0ZSBmcm9tICdtYXJpb25ldHRlJztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb25maWcgZnJvbSAnY29uZmlnJztcbmltcG9ydCBJbnRlcnZpZXdDb2xsZWN0aW9uIGZyb20gJ21vZGVscy9pbnRlcnZpZXdfY29sbGVjdGlvbic7XG5cbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICd0ZXh0IXRlbXBsYXRlcy9pbnRlcnZpZXdfbGlzdF90bXBsLmh0bWwnO1xuaW1wb3J0IGl0ZW1UZW1wbGF0ZSBmcm9tICd0ZXh0IXRlbXBsYXRlcy9pbnRlcnZpZXdfaXRlbV90bXBsLmh0bWwnO1xuXG5jbGFzcyBJbnRlcnZpZXdMaXN0VmlldyBleHRlbmRzIE1hcmlvbmV0dGUuQ29tcG9zaXRlVmlldyB7XG5cblx0LyogcHJvcGVydGllcyAqL1xuXHRnZXQgdGVtcGxhdGUoKSB7IHJldHVybiBfLnRlbXBsYXRlKHRlbXBsYXRlKSB9XG5cblx0Z2V0IGNsYXNzTmFtZSgpIHsgcmV0dXJuICdjb21wb3NpdGUtdmlldycgfVxuXG5cdGdldCBjaGlsZFZpZXdDb250YWluZXIoKSB7IHJldHVybiAnI2ludGVydmlldy1saXN0JyB9XG5cblx0Z2V0IGNoaWxkVmlldygpIHsgXG4gICAgICAgIHJldHVybiBNYXJpb25ldHRlLkl0ZW1WaWV3LmV4dGVuZCh7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogXy50ZW1wbGF0ZShpdGVtVGVtcGxhdGUpLFxuICAgICAgICAgICAgY2xhc3NOYW1lIDogJ2F0dGFjaG1lbnQnLFxuICAgICAgICAgICAgdGFnTmFtZSA6ICdsaScsXG4gICAgICAgICAgICBldmVudHMgOiB7XG4gICAgICAgICAgICAgICAgJ2NsaWNrICNkZWxldGVCdXR0b24nIDogJ29uRGVsZXRlQnV0dG9uQ2xpY2tlZCcsXG4gICAgICAgICAgICAgICAgJ2NsaWNrICNlZGl0QnV0dG9uJyA6ICdvbkVkaXRCdXR0b25DbGlja2VkJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRGVsZXRlQnV0dG9uQ2xpY2tlZCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgaW50ZXJ2aWV3P1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25FZGl0QnV0dG9uQ2xpY2tlZCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIjaW50ZXJ2aWV3L1wiK3RoaXMubW9kZWwuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pOyBcbiAgICB9XG5cbiAgICBldmVudHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnY2xpY2sgI2xvYWQtbW9yZS1idXR0b24nIDogJ29uTG9hZE1vcmVCdXR0b25DbGljaycsXG4gICAgICAgICAgICAnY2xpY2sgI2FkZC1pbnRlcnZpZXctYnV0dG9uJyA6ICdvbkFkZEludGVydmlld0J1dHRvbkNsaWNrJ1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qIG1ldGhvZHMgKi9cblx0aW5pdGlhbGl6ZShvcHRpb25zKSB7XG5cblx0XHR0aGlzLmZldGNoUGFyYW1zID0ge307XG5cblx0XHRpZiAob3B0aW9ucy50YWcgIT0gbnVsbClcblx0XHRcdHRoaXMuZmV0Y2hQYXJhbXMudGFnID0gb3B0aW9ucy50YWdcblx0XHRcblx0XHR0aGlzLmNvbGxlY3Rpb24gPSBuZXcgSW50ZXJ2aWV3Q29sbGVjdGlvbigpO1xuXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbi5mZXRjaCgpO1xuXHR9XG5cbiAgICBvbkFkZEludGVydmlld0J1dHRvbkNsaWNrKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjaW50ZXJ2aWV3L25ldyc7XG4gICAgfVxuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEludGVydmlld0xpc3RWaWV3OyJdfQ==