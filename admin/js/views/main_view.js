define(['exports', 'marionette', 'underscore', 'text!templates/main_tmpl.html'], function (exports, _marionette, _underscore, _main_tmpl) {
    'use strict';

    /*
    * @Author: Lutz Reiter, Design Research Lab, Universität der Künste Berlin
    * @Date:   2016-05-04 11:38:41
    * @Last Modified by:   lutzer
    * @Last Modified time: 2016-07-08 00:40:26
    */

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _marionette2 = _interopRequireDefault(_marionette);

    var _underscore2 = _interopRequireDefault(_underscore);

    var _main_tmpl2 = _interopRequireDefault(_main_tmpl);

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

    var MainView = function (_Marionette$LayoutVie) {
        _inherits(MainView, _Marionette$LayoutVie);

        function MainView() {
            _classCallCheck(this, MainView);

            return _possibleConstructorReturn(this, (MainView.__proto__ || Object.getPrototypeOf(MainView)).apply(this, arguments));
        }

        _createClass(MainView, [{
            key: 'regions',
            value: function regions() {
                return {
                    menuRegion: '#menu',
                    contentRegion: '#content'
                };
            }
        }, {
            key: 'initialize',
            value: function initialize(options) {}
        }, {
            key: 'template',
            get: function get() {
                return _underscore2.default.template(_main_tmpl2.default);
            }
        }, {
            key: 'className',
            get: function get() {
                return 'page';
            }
        }]);

        return MainView;
    }(_marionette2.default.LayoutView);

    exports.default = MainView;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9tYWluX3ZpZXcuanMiXSwibmFtZXMiOlsiTWFpblZpZXciLCJtZW51UmVnaW9uIiwiY29udGVudFJlZ2lvbiIsIm9wdGlvbnMiLCJfIiwidGVtcGxhdGUiLCJNYXJpb25ldHRlIiwiTGF5b3V0VmlldyJdLCJtYXBwaW5ncyI6IjtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQVlNQSxROzs7Ozs7Ozs7OztzQ0FPUTtBQUFFLHVCQUFPO0FBQ2ZDLGdDQUFZLE9BREc7QUFFbEJDLG1DQUFlO0FBRkcsaUJBQVA7QUFHVjs7O3VDQUdTQyxPLEVBQVMsQ0FFbkI7OztnQ0FaYztBQUFFLHVCQUFPQyxxQkFBRUMsUUFBRixDQUFXQSxtQkFBWCxDQUFQO0FBQTZCOzs7Z0NBRTlCO0FBQUUsdUJBQU8sTUFBUDtBQUFlOzs7O01BTGRDLHFCQUFXQyxVOztzQkFtQm5CUCxRIiwiZmlsZSI6Im1haW5fdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLypcbiogQEF1dGhvcjogTHV0eiBSZWl0ZXIsIERlc2lnbiBSZXNlYXJjaCBMYWIsIFVuaXZlcnNpdMOkdCBkZXIgS8O8bnN0ZSBCZXJsaW5cbiogQERhdGU6ICAgMjAxNi0wNS0wNCAxMTozODo0MVxuKiBATGFzdCBNb2RpZmllZCBieTogICBsdXR6ZXJcbiogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxNi0wNy0wOCAwMDo0MDoyNlxuKi9cblxuaW1wb3J0IE1hcmlvbmV0dGUgZnJvbSAnbWFyaW9uZXR0ZSdcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnXG5cbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICd0ZXh0IXRlbXBsYXRlcy9tYWluX3RtcGwuaHRtbCc7XG5cbmNsYXNzIE1haW5WaWV3IGV4dGVuZHMgTWFyaW9uZXR0ZS5MYXlvdXRWaWV3IHtcblxuXHQvKiBwcm9wZXJ0aWVzICovXG4gICAgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gXy50ZW1wbGF0ZSh0ZW1wbGF0ZSkgfVxuXG4gICAgZ2V0IGNsYXNzTmFtZSgpIHsgcmV0dXJuICdwYWdlJyB9XG5cbiAgICByZWdpb25zKCkgeyByZXR1cm4ge1xuICAgICAgICBtZW51UmVnaW9uOiAnI21lbnUnLFxuICAgIFx0Y29udGVudFJlZ2lvbjogJyNjb250ZW50J1xuICAgIH19XG5cbiAgICAvKiBtZXRob2RzICovXG4gICAgaW5pdGlhbGl6ZShvcHRpb25zKSB7XG5cbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5WaWV3Il19