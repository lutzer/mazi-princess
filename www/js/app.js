define(['exports', 'jquery', 'backbone', 'marionette', 'controller'], function (exports, _jquery, _backbone, _marionette, _controller) {
	'use strict';

	/*
 * @Author: Lutz Reiter, Design Research Lab, Universität der Künste Berlin
 * @Date:   2016-05-04 11:38:41
 * @Last Modified by:   lutzer
 * @Last Modified time: 2016-07-15 00:15:39
 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _jquery2 = _interopRequireDefault(_jquery);

	var _backbone2 = _interopRequireDefault(_backbone);

	var _marionette2 = _interopRequireDefault(_marionette);

	var _controller2 = _interopRequireDefault(_controller);

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

	var App = function (_Backbone$Marionette$) {
		_inherits(App, _Backbone$Marionette$);

		function App() {
			_classCallCheck(this, App);

			var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

			//add app initializer
			_this.addInitializer(function (options) {
				_backbone2.default.history.start();

				// support cross origin sharing
				_jquery2.default.support.cors = true;

				_marionette2.default.Behaviors.behaviorsLookup = function () {
					return window.Behaviors;
				};
			});

			//init router
			_this.Router = new _marionette2.default.AppRouter({
				controller: new _controller2.default(_this),
				appRoutes: {
					'interview/:id': 'showInterview',
					'tags': 'showTagList',
					'tags/:tag': 'showTagTrackList',
					'questions': 'showQuestionList',
					'question/:question': 'showQuestionTrackList',
					'*actions': 'showInterviewList'
				}
			});
			return _this;
		}

		return App;
	}(_backbone2.default.Marionette.Application);

	exports.default = App;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiQXBwIiwiYWRkSW5pdGlhbGl6ZXIiLCJvcHRpb25zIiwiQmFja2JvbmUiLCJoaXN0b3J5Iiwic3RhcnQiLCIkIiwic3VwcG9ydCIsImNvcnMiLCJNYXJpb25ldHRlIiwiQmVoYXZpb3JzIiwiYmVoYXZpb3JzTG9va3VwIiwid2luZG93IiwiUm91dGVyIiwiQXBwUm91dGVyIiwiY29udHJvbGxlciIsIkNvbnRyb2xsZXIiLCJhcHBSb3V0ZXMiLCJBcHBsaWNhdGlvbiJdLCJtYXBwaW5ncyI6IjtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBWU1BLEc7OztBQUVMLGlCQUFjO0FBQUE7O0FBQUE7O0FBR2I7QUFDQSxTQUFLQyxjQUFMLENBQXFCLFVBQVNDLE9BQVQsRUFBaUI7QUFDbkNDLHVCQUFTQyxPQUFULENBQWlCQyxLQUFqQjs7QUFFQTtBQUNBQyxxQkFBRUMsT0FBRixDQUFVQyxJQUFWLEdBQWUsSUFBZjs7QUFFQUMseUJBQVdDLFNBQVgsQ0FBcUJDLGVBQXJCLEdBQXVDLFlBQVc7QUFDOUMsWUFBT0MsT0FBT0YsU0FBZDtBQUNILEtBRkQ7QUFJRixJQVZEOztBQVlBO0FBQ0EsU0FBS0csTUFBTCxHQUFjLElBQUlKLHFCQUFXSyxTQUFmLENBQXlCO0FBQ3RDQyxnQkFBWSxJQUFJQyxvQkFBSixPQUQwQjtBQUV0Q0MsZUFBVztBQUNWLHNCQUFrQixlQURSO0FBRVYsYUFBUyxhQUZDO0FBR1Ysa0JBQWMsa0JBSEo7QUFJVixrQkFBYyxrQkFKSjtBQUtWLDJCQUF1Qix1QkFMYjtBQU1WLGlCQUFZO0FBTkY7QUFGMkIsSUFBekIsQ0FBZDtBQWpCYTtBQTRCYjs7O0dBOUJnQmQsbUJBQVNNLFVBQVQsQ0FBb0JTLFc7O21CQWlDdkJsQixHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLypcbiogQEF1dGhvcjogTHV0eiBSZWl0ZXIsIERlc2lnbiBSZXNlYXJjaCBMYWIsIFVuaXZlcnNpdMOkdCBkZXIgS8O8bnN0ZSBCZXJsaW5cbiogQERhdGU6ICAgMjAxNi0wNS0wNCAxMTozODo0MVxuKiBATGFzdCBNb2RpZmllZCBieTogICBsdXR6ZXJcbiogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxNi0wNy0xNSAwMDoxNTozOVxuKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBCYWNrYm9uZSBmcm9tICdiYWNrYm9uZSc7XG5pbXBvcnQgTWFyaW9uZXR0ZSBmcm9tICdtYXJpb25ldHRlJztcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJ2NvbnRyb2xsZXInO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBCYWNrYm9uZS5NYXJpb25ldHRlLkFwcGxpY2F0aW9uIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0Ly9hZGQgYXBwIGluaXRpYWxpemVyXG5cdFx0dGhpcy5hZGRJbml0aWFsaXplciggZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0XHQgIEJhY2tib25lLmhpc3Rvcnkuc3RhcnQoKTtcblx0XHRcdCAgXG5cdFx0XHQgIC8vIHN1cHBvcnQgY3Jvc3Mgb3JpZ2luIHNoYXJpbmdcblx0XHRcdCAgJC5zdXBwb3J0LmNvcnM9dHJ1ZTtcblx0XHRcdCAgXG5cdFx0XHQgIE1hcmlvbmV0dGUuQmVoYXZpb3JzLmJlaGF2aW9yc0xvb2t1cCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0ICAgICAgcmV0dXJuIHdpbmRvdy5CZWhhdmlvcnM7XG5cdFx0XHQgIH1cblx0XHRcdCAgXG5cdFx0fSk7XG5cblx0XHQvL2luaXQgcm91dGVyXG5cdFx0dGhpcy5Sb3V0ZXIgPSBuZXcgTWFyaW9uZXR0ZS5BcHBSb3V0ZXIoe1xuXHRcdFx0Y29udHJvbGxlcjogbmV3IENvbnRyb2xsZXIodGhpcyksXG5cdFx0XHRhcHBSb3V0ZXM6IHtcblx0XHRcdFx0J2ludGVydmlldy86aWQnIDogJ3Nob3dJbnRlcnZpZXcnLFxuXHRcdFx0XHQndGFncycgOiAnc2hvd1RhZ0xpc3QnLFxuXHRcdFx0XHQndGFncy86dGFnJyA6ICdzaG93VGFnVHJhY2tMaXN0Jyxcblx0XHRcdFx0J3F1ZXN0aW9ucycgOiAnc2hvd1F1ZXN0aW9uTGlzdCcsXG5cdFx0XHRcdCdxdWVzdGlvbi86cXVlc3Rpb24nIDogJ3Nob3dRdWVzdGlvblRyYWNrTGlzdCcsXG5cdFx0XHRcdCcqYWN0aW9ucyc6ICdzaG93SW50ZXJ2aWV3TGlzdCdcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0=