define(['exports', 'marionette', 'underscore', 'models/attachment_collection', 'views/attachment_item_view', 'text!templates/attachment_list_tmpl.html'], function (exports, _marionette, _underscore, _attachment_collection, _attachment_item_view, _attachment_list_tmpl) {
    'use strict';

    /*
    * @Author: Lutz Reiter, Design Research Lab, Universität der Künste Berlin
    * @Date:   2016-05-04 11:38:41
    * @Last Modified by:   lutzer
    * @Last Modified time: 2016-07-15 00:35:19
    */

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _marionette2 = _interopRequireDefault(_marionette);

    var _underscore2 = _interopRequireDefault(_underscore);

    var _attachment_collection2 = _interopRequireDefault(_attachment_collection);

    var _attachment_item_view2 = _interopRequireDefault(_attachment_item_view);

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

    var TagListView = function (_Marionette$Composite) {
        _inherits(TagListView, _Marionette$Composite);

        function TagListView() {
            _classCallCheck(this, TagListView);

            return _possibleConstructorReturn(this, (TagListView.__proto__ || Object.getPrototypeOf(TagListView)).apply(this, arguments));
        }

        _createClass(TagListView, [{
            key: 'events',
            value: function events() {
                return {
                    'click .attachment': 'onAttachmentClicked',
                    'click .play-button': 'onPlayButtonClicked'
                };
            }
        }, {
            key: 'initialize',
            value: function initialize(options) {

                this.options = options;

                this.collection = new _attachment_collection2.default();

                if (_underscore2.default.has(options, 'tag')) this.collection.fetch({ data: $.param({ tag: options.tag }) });

                if (_underscore2.default.has(options, 'question')) this.collection.fetch({ data: $.param({ text: options.question }) });

                // setup collection events
                this.listenTo(this.collection, 'sync', this.onCollectionLoaded);
            }
        }, {
            key: 'onAttachmentClicked',
            value: function onAttachmentClicked(event) {
                $(event.target).toggleClass("expand");
            }
        }, {
            key: 'onPlayButtonClicked',
            value: function onPlayButtonClicked(e) {
                var attachmentId = e.target.attributes['data-id'].value;
                Backbone.trigger('show:audioplayer', attachmentId);
            }
        }, {
            key: 'tagName',
            get: function get() {
                return 'div';
            }
        }, {
            key: 'childView',
            get: function get() {
                return _attachment_item_view2.default;
            }
        }, {
            key: 'template',
            get: function get() {
                return _underscore2.default.template(_attachment_list_tmpl2.default);
            }
        }, {
            key: 'templateHelpers',
            get: function get() {
                var _this2 = this;

                return {
                    searchString: function searchString() {
                        if (_underscore2.default.has(_this2.options, 'tag')) return '#' + _this2.options.tag;else if (_underscore2.default.has(_this2.options, 'question')) return _this2.options.question;else return "nothing";
                    }
                };
            }
        }, {
            key: 'childViewContainer',
            get: function get() {
                return '#attachment-list';
            }
        }]);

        return TagListView;
    }(_marionette2.default.CompositeView);

    exports.default = TagListView;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9hdHRhY2htZW50X2xpc3Rfdmlldy5qcyJdLCJuYW1lcyI6WyJUYWdMaXN0VmlldyIsIm9wdGlvbnMiLCJjb2xsZWN0aW9uIiwiQXR0YWNobWVudENvbGxlY3Rpb24iLCJfIiwiaGFzIiwiZmV0Y2giLCJkYXRhIiwiJCIsInBhcmFtIiwidGFnIiwidGV4dCIsInF1ZXN0aW9uIiwibGlzdGVuVG8iLCJvbkNvbGxlY3Rpb25Mb2FkZWQiLCJldmVudCIsInRhcmdldCIsInRvZ2dsZUNsYXNzIiwiZSIsImF0dGFjaG1lbnRJZCIsImF0dHJpYnV0ZXMiLCJ2YWx1ZSIsIkJhY2tib25lIiwidHJpZ2dlciIsIkF0dGFjaG1lbnRJdGVtVmlldyIsInRlbXBsYXRlIiwic2VhcmNoU3RyaW5nIiwiTWFyaW9uZXR0ZSIsIkNvbXBvc2l0ZVZpZXciXSwibWFwcGluZ3MiOiI7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBY01BLFc7Ozs7Ozs7Ozs7O3FDQTRCTztBQUNQLHVCQUFPO0FBQ0wseUNBQXNCLHFCQURqQjtBQUVMLDBDQUF1QjtBQUZsQixpQkFBUDtBQUlEOzs7dUNBS1VDLE8sRUFBUzs7QUFFaEIscUJBQUtBLE9BQUwsR0FBZUEsT0FBZjs7QUFFQSxxQkFBS0MsVUFBTCxHQUFrQixJQUFJQywrQkFBSixFQUFsQjs7QUFFQSxvQkFBSUMscUJBQUVDLEdBQUYsQ0FBTUosT0FBTixFQUFjLEtBQWQsQ0FBSixFQUNJLEtBQUtDLFVBQUwsQ0FBZ0JJLEtBQWhCLENBQXNCLEVBQUVDLE1BQU1DLEVBQUVDLEtBQUYsQ0FBUSxFQUFFQyxLQUFNVCxRQUFRUyxHQUFoQixFQUFSLENBQVIsRUFBdEI7O0FBRUosb0JBQUlOLHFCQUFFQyxHQUFGLENBQU1KLE9BQU4sRUFBYyxVQUFkLENBQUosRUFDSSxLQUFLQyxVQUFMLENBQWdCSSxLQUFoQixDQUFzQixFQUFFQyxNQUFNQyxFQUFFQyxLQUFGLENBQVEsRUFBRUUsTUFBT1YsUUFBUVcsUUFBakIsRUFBUixDQUFSLEVBQXRCOztBQUVKO0FBQ0EscUJBQUtDLFFBQUwsQ0FBYyxLQUFLWCxVQUFuQixFQUE4QixNQUE5QixFQUFxQyxLQUFLWSxrQkFBMUM7QUFDSDs7O2dEQUVtQkMsSyxFQUFPO0FBQ3pCUCxrQkFBRU8sTUFBTUMsTUFBUixFQUFnQkMsV0FBaEIsQ0FBNEIsUUFBNUI7QUFDRDs7O2dEQUVtQkMsQyxFQUFHO0FBQ25CLG9CQUFJQyxlQUFlRCxFQUFFRixNQUFGLENBQVNJLFVBQVQsQ0FBb0IsU0FBcEIsRUFBK0JDLEtBQWxEO0FBQ0FDLHlCQUFTQyxPQUFULENBQWlCLGtCQUFqQixFQUFvQ0osWUFBcEM7QUFDSDs7O2dDQXZEYTtBQUFFLHVCQUFPLEtBQVA7QUFBYzs7O2dDQUVkO0FBQ1osdUJBQU9LLDhCQUFQO0FBQ0g7OztnQ0FFYztBQUNYLHVCQUFPcEIscUJBQUVxQixRQUFGLENBQVdBLDhCQUFYLENBQVA7QUFDSDs7O2dDQUVxQjtBQUFBOztBQUNsQix1QkFBTztBQUNIQyxrQ0FBZSx3QkFBTTtBQUNqQiw0QkFBSXRCLHFCQUFFQyxHQUFGLENBQU0sT0FBS0osT0FBWCxFQUFtQixLQUFuQixDQUFKLEVBQ0ksT0FBTyxNQUFJLE9BQUtBLE9BQUwsQ0FBYVMsR0FBeEIsQ0FESixLQUVLLElBQUlOLHFCQUFFQyxHQUFGLENBQU0sT0FBS0osT0FBWCxFQUFtQixVQUFuQixDQUFKLEVBQ0QsT0FBTyxPQUFLQSxPQUFMLENBQWFXLFFBQXBCLENBREMsS0FFQSxPQUFPLFNBQVA7QUFDUjtBQVBFLGlCQUFQO0FBU0g7OztnQ0FTd0I7QUFBRSx1QkFBTyxrQkFBUDtBQUEyQjs7OztNQW5DaENlLHFCQUFXQyxhOztzQkFnRXRCNUIsVyIsImZpbGUiOiJhdHRhY2htZW50X2xpc3Rfdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLypcbiogQEF1dGhvcjogTHV0eiBSZWl0ZXIsIERlc2lnbiBSZXNlYXJjaCBMYWIsIFVuaXZlcnNpdMOkdCBkZXIgS8O8bnN0ZSBCZXJsaW5cbiogQERhdGU6ICAgMjAxNi0wNS0wNCAxMTozODo0MVxuKiBATGFzdCBNb2RpZmllZCBieTogICBsdXR6ZXJcbiogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxNi0wNy0xNSAwMDozNToxOVxuKi9cblxuaW1wb3J0IE1hcmlvbmV0dGUgZnJvbSAnbWFyaW9uZXR0ZSc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCBBdHRhY2htZW50Q29sbGVjdGlvbiBmcm9tICdtb2RlbHMvYXR0YWNobWVudF9jb2xsZWN0aW9uJztcbmltcG9ydCBBdHRhY2htZW50SXRlbVZpZXcgZnJvbSAndmlld3MvYXR0YWNobWVudF9pdGVtX3ZpZXcnO1xuXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAndGV4dCF0ZW1wbGF0ZXMvYXR0YWNobWVudF9saXN0X3RtcGwuaHRtbCc7XG5cbmNsYXNzIFRhZ0xpc3RWaWV3IGV4dGVuZHMgTWFyaW9uZXR0ZS5Db21wb3NpdGVWaWV3IHtcblxuXHQvKiBwcm9wZXJ0aWVzICovXG5cbiAgICAvL2dldCBjbGFzc05hbWUoKSB7IHJldHVybiAndHJhY2stbGlzdCcgfVxuXG4gICAgZ2V0IHRhZ05hbWUoKSB7IHJldHVybiAnZGl2JyB9XG5cbiAgICBnZXQgY2hpbGRWaWV3KCkgeyBcbiAgICAgICAgcmV0dXJuIEF0dGFjaG1lbnRJdGVtVmlldztcbiAgICB9XG5cbiAgICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgICAgIHJldHVybiBfLnRlbXBsYXRlKHRlbXBsYXRlKVxuICAgIH1cblxuICAgIGdldCB0ZW1wbGF0ZUhlbHBlcnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZWFyY2hTdHJpbmcgOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKF8uaGFzKHRoaXMub3B0aW9ucywndGFnJykpIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyMnK3RoaXMub3B0aW9ucy50YWc7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoXy5oYXModGhpcy5vcHRpb25zLCdxdWVzdGlvbicpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnF1ZXN0aW9uO1xuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIFwibm90aGluZ1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnY2xpY2sgLmF0dGFjaG1lbnQnIDogJ29uQXR0YWNobWVudENsaWNrZWQnLFxuICAgICAgICAnY2xpY2sgLnBsYXktYnV0dG9uJyA6ICdvblBsYXlCdXR0b25DbGlja2VkJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBjaGlsZFZpZXdDb250YWluZXIoKSB7IHJldHVybiAnI2F0dGFjaG1lbnQtbGlzdCcgfVxuXG4gICAgLyogbWV0aG9kcyAqL1xuICAgIGluaXRpYWxpemUob3B0aW9ucykge1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcblxuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSBuZXcgQXR0YWNobWVudENvbGxlY3Rpb24oKTtcblxuICAgICAgICBpZiAoXy5oYXMob3B0aW9ucywndGFnJykpXG4gICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb24uZmV0Y2goeyBkYXRhOiAkLnBhcmFtKHsgdGFnIDogb3B0aW9ucy50YWd9KcKgfSk7XG5cbiAgICAgICAgaWYgKF8uaGFzKG9wdGlvbnMsJ3F1ZXN0aW9uJykpXG4gICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb24uZmV0Y2goeyBkYXRhOiAkLnBhcmFtKHsgdGV4dCA6IG9wdGlvbnMucXVlc3Rpb259KcKgfSk7XG5cbiAgICAgICAgLy8gc2V0dXAgY29sbGVjdGlvbiBldmVudHNcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLmNvbGxlY3Rpb24sJ3N5bmMnLHRoaXMub25Db2xsZWN0aW9uTG9hZGVkKVxuICAgIH1cblxuICAgIG9uQXR0YWNobWVudENsaWNrZWQoZXZlbnQpIHtcbiAgICAgICQoZXZlbnQudGFyZ2V0KS50b2dnbGVDbGFzcyhcImV4cGFuZFwiKTtcbiAgICB9XG5cbiAgICBvblBsYXlCdXR0b25DbGlja2VkKGUpIHtcbiAgICAgICAgdmFyIGF0dGFjaG1lbnRJZCA9IGUudGFyZ2V0LmF0dHJpYnV0ZXNbJ2RhdGEtaWQnXS52YWx1ZVxuICAgICAgICBCYWNrYm9uZS50cmlnZ2VyKCdzaG93OmF1ZGlvcGxheWVyJyxhdHRhY2htZW50SWQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFnTGlzdFZpZXciXX0=