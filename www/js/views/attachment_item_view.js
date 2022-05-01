define(['exports', 'marionette', 'underscore', 'config', 'text!templates/attachment_item_tmpl.html'], function (exports, _marionette, _underscore, _config, _attachment_item_tmpl) {
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

    var _config2 = _interopRequireDefault(_config);

    var _attachment_item_tmpl2 = _interopRequireDefault(_attachment_item_tmpl);

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

    var AttachmentItemView = function (_Marionette$ItemView) {
        _inherits(AttachmentItemView, _Marionette$ItemView);

        function AttachmentItemView() {
            _classCallCheck(this, AttachmentItemView);

            return _possibleConstructorReturn(this, (AttachmentItemView.__proto__ || Object.getPrototypeOf(AttachmentItemView)).apply(this, arguments));
        }

        _createClass(AttachmentItemView, [{
            key: 'initialize',
            value: function initialize(options) {}
        }, {
            key: 'className',
            get: function get() {
                return 'attachment';
            }
        }, {
            key: 'template',
            get: function get() {
                return _underscore2.default.template(_attachment_item_tmpl2.default);
            }
        }, {
            key: 'templateHelpers',
            get: function get() {
                var _this2 = this;

                return {
                    getfileDir: function getfileDir() {
                        var interview = _this2.model.get('interview');
                        if (_underscore2.default.has(interview, '_id')) return _config2.default.files_url + interview._id + '/';else return _config2.default.files_url + interview + '/';
                    },
                    getFileType: function getFileType() {
                        if (_this2.model.get("file")) {
                            var extension = _this2.model.get("file").name.split('.').pop();
                            if (_underscore2.default.contains(['wav', 'mp3'], extension)) return 'audio';else return 'other';
                        } else {
                            return "none";
                        }
                    },
                    getInterviewName: function getInterviewName() {
                        var interview = _this2.model.get('interview');
                        if (_underscore2.default.has(interview, 'name')) return interview.name;else if (_underscore2.default.has(_this2.options, 'interviewName')) return _this2.options.interviewName;else return "";
                    }
                };
            }
        }]);

        return AttachmentItemView;
    }(_marionette2.default.ItemView);

    exports.default = AttachmentItemView;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9hdHRhY2htZW50X2l0ZW1fdmlldy5qcyJdLCJuYW1lcyI6WyJBdHRhY2htZW50SXRlbVZpZXciLCJvcHRpb25zIiwiXyIsInRlbXBsYXRlIiwiZ2V0ZmlsZURpciIsImludGVydmlldyIsIm1vZGVsIiwiZ2V0IiwiaGFzIiwiQ29uZmlnIiwiZmlsZXNfdXJsIiwiX2lkIiwiZ2V0RmlsZVR5cGUiLCJleHRlbnNpb24iLCJuYW1lIiwic3BsaXQiLCJwb3AiLCJjb250YWlucyIsImdldEludGVydmlld05hbWUiLCJpbnRlcnZpZXdOYW1lIiwiTWFyaW9uZXR0ZSIsIkl0ZW1WaWV3Il0sIm1hcHBpbmdzIjoiO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFhTUEsa0I7Ozs7Ozs7Ozs7O3VDQTBDU0MsTyxFQUFTLENBRW5COzs7Z0NBeENlO0FBQUUsdUJBQU8sWUFBUDtBQUFxQjs7O2dDQUV4QjtBQUNYLHVCQUFPQyxxQkFBRUMsUUFBRixDQUFXQSw4QkFBWCxDQUFQO0FBQ0g7OztnQ0FFcUI7QUFBQTs7QUFDbEIsdUJBQU87QUFDSEMsZ0NBQWEsc0JBQU07QUFDZiw0QkFBSUMsWUFBWSxPQUFLQyxLQUFMLENBQVdDLEdBQVgsQ0FBZSxXQUFmLENBQWhCO0FBQ0EsNEJBQUlMLHFCQUFFTSxHQUFGLENBQU1ILFNBQU4sRUFBZ0IsS0FBaEIsQ0FBSixFQUNJLE9BQU9JLGlCQUFPQyxTQUFQLEdBQW1CTCxVQUFVTSxHQUE3QixHQUFtQyxHQUExQyxDQURKLEtBR0ksT0FBT0YsaUJBQU9DLFNBQVAsR0FBbUJMLFNBQW5CLEdBQStCLEdBQXRDO0FBQ1AscUJBUEU7QUFRSE8saUNBQWMsdUJBQU07QUFDaEIsNEJBQUksT0FBS04sS0FBTCxDQUFXQyxHQUFYLENBQWUsTUFBZixDQUFKLEVBQTRCO0FBQ3hCLGdDQUFJTSxZQUFZLE9BQUtQLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLE1BQWYsRUFBdUJPLElBQXZCLENBQTRCQyxLQUE1QixDQUFrQyxHQUFsQyxFQUF1Q0MsR0FBdkMsRUFBaEI7QUFDQSxnQ0FBSWQscUJBQUVlLFFBQUYsQ0FBVyxDQUFDLEtBQUQsRUFBTyxLQUFQLENBQVgsRUFBeUJKLFNBQXpCLENBQUosRUFDSSxPQUFPLE9BQVAsQ0FESixLQUdJLE9BQU8sT0FBUDtBQUNQLHlCQU5ELE1BTU87QUFDSCxtQ0FBTyxNQUFQO0FBQ0g7QUFDSixxQkFsQkU7QUFtQkhLLHNDQUFtQiw0QkFBTTtBQUNyQiw0QkFBSWIsWUFBWSxPQUFLQyxLQUFMLENBQVdDLEdBQVgsQ0FBZSxXQUFmLENBQWhCO0FBQ0EsNEJBQUlMLHFCQUFFTSxHQUFGLENBQU1ILFNBQU4sRUFBZ0IsTUFBaEIsQ0FBSixFQUNJLE9BQU9BLFVBQVVTLElBQWpCLENBREosS0FFSyxJQUFJWixxQkFBRU0sR0FBRixDQUFNLE9BQUtQLE9BQVgsRUFBbUIsZUFBbkIsQ0FBSixFQUNELE9BQU8sT0FBS0EsT0FBTCxDQUFha0IsYUFBcEIsQ0FEQyxLQUdELE9BQU8sRUFBUDtBQUNQO0FBM0JFLGlCQUFQO0FBNkJIOzs7O01BeEM0QkMscUJBQVdDLFE7O3NCQStDN0JyQixrQiIsImZpbGUiOiJhdHRhY2htZW50X2l0ZW1fdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLypcbiogQEF1dGhvcjogTHV0eiBSZWl0ZXIsIERlc2lnbiBSZXNlYXJjaCBMYWIsIFVuaXZlcnNpdMOkdCBkZXIgS8O8bnN0ZSBCZXJsaW5cbiogQERhdGU6ICAgMjAxNi0wNS0wNCAxMTozODo0MVxuKiBATGFzdCBNb2RpZmllZCBieTogICBsdXR6ZXJcbiogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxNi0wNy0xNSAwMDozNToxOVxuKi9cblxuaW1wb3J0IE1hcmlvbmV0dGUgZnJvbSAnbWFyaW9uZXR0ZSc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCBDb25maWcgZnJvbSAnY29uZmlnJztcblxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJ3RleHQhdGVtcGxhdGVzL2F0dGFjaG1lbnRfaXRlbV90bXBsLmh0bWwnO1xuXG5jbGFzcyBBdHRhY2htZW50SXRlbVZpZXcgZXh0ZW5kcyBNYXJpb25ldHRlLkl0ZW1WaWV3IHtcblxuXHQvKiBwcm9wZXJ0aWVzICovXG5cbiAgICBnZXQgY2xhc3NOYW1lKCkgeyByZXR1cm4gJ2F0dGFjaG1lbnQnIH1cblxuICAgIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIF8udGVtcGxhdGUodGVtcGxhdGUpXG4gICAgfVxuXG4gICAgZ2V0IHRlbXBsYXRlSGVscGVycygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldGZpbGVEaXIgOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGludGVydmlldyA9IHRoaXMubW9kZWwuZ2V0KCdpbnRlcnZpZXcnKTtcbiAgICAgICAgICAgICAgICBpZiAoXy5oYXMoaW50ZXJ2aWV3LCdfaWQnKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIENvbmZpZy5maWxlc191cmwgKyBpbnRlcnZpZXcuX2lkICsgJy8nO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIENvbmZpZy5maWxlc191cmwgKyBpbnRlcnZpZXcgKyAnLyc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0RmlsZVR5cGUgOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW9kZWwuZ2V0KFwiZmlsZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXh0ZW5zaW9uID0gdGhpcy5tb2RlbC5nZXQoXCJmaWxlXCIpLm5hbWUuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8uY29udGFpbnMoWyd3YXYnLCdtcDMnXSxleHRlbnNpb24pKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhdWRpbydcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdvdGhlcidcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJub25lXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0SW50ZXJ2aWV3TmFtZSA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJ2aWV3ID0gdGhpcy5tb2RlbC5nZXQoJ2ludGVydmlldycpO1xuICAgICAgICAgICAgICAgIGlmIChfLmhhcyhpbnRlcnZpZXcsJ25hbWUnKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGludGVydmlldy5uYW1lO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKF8uaGFzKHRoaXMub3B0aW9ucywnaW50ZXJ2aWV3TmFtZScpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmludGVydmlld05hbWU7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIlxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRpYWxpemUob3B0aW9ucykge1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdHRhY2htZW50SXRlbVZpZXciXX0=