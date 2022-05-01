define(['exports', 'backbone', 'marionette', 'socketio', 'config', 'views/main_view', 'views/interview_list_view', 'views/interview_view', 'views/menu_view', 'views/audioplayer_view', 'views/tag_list_view', 'views/question_list_view', 'views/attachment_list_view', 'text!templates/header_tmpl.html'], function (exports, _backbone, _marionette, _socketio, _config, _main_view, _interview_list_view, _interview_view, _menu_view, _audioplayer_view, _tag_list_view, _question_list_view, _attachment_list_view, _header_tmpl) {
	'use strict';

	/*
 * @Author: Lutz Reiter, Design Research Lab, Universität der Künste Berlin
 * @Date:   2016-05-04 11:38:41
 * @Last Modified by:   lutzer
 * @Last Modified time: 2016-07-15 00:14:21
 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _backbone2 = _interopRequireDefault(_backbone);

	var _marionette2 = _interopRequireDefault(_marionette);

	var _socketio2 = _interopRequireDefault(_socketio);

	var _config2 = _interopRequireDefault(_config);

	var _main_view2 = _interopRequireDefault(_main_view);

	var _interview_list_view2 = _interopRequireDefault(_interview_list_view);

	var _interview_view2 = _interopRequireDefault(_interview_view);

	var _menu_view2 = _interopRequireDefault(_menu_view);

	var _audioplayer_view2 = _interopRequireDefault(_audioplayer_view);

	var _tag_list_view2 = _interopRequireDefault(_tag_list_view);

	var _question_list_view2 = _interopRequireDefault(_question_list_view);

	var _attachment_list_view2 = _interopRequireDefault(_attachment_list_view);

	var _header_tmpl2 = _interopRequireDefault(_header_tmpl);

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

	var Controller = function (_Marionette$Controlle) {
		_inherits(Controller, _Marionette$Controlle);

		function Controller(app) {
			_classCallCheck(this, Controller);

			var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));

			_this.app = app;

			app.addRegions({
				containerRegion: "#container",
				modalRegion: "#modal-container"
			});

			//register client events
			_backbone2.default.on('show:audioplayer', _this.showPlayer, _this);

			//register socket events
			var socket = (0, _socketio2.default)(_config2.default.web_socket_url);
			socket.on('interview:changed', function (data) {
				_backbone2.default.trigger('interview:changed', data);
			});
			socket.on('interview:new', function (data) {
				_backbone2.default.trigger('interview:new', data);
			});
			socket.on('interview:removed', function (data) {
				_backbone2.default.trigger('interview:new', data);
			});

			//load mainview
			_this.mainView = new _main_view2.default();
			_this.app.containerRegion.show(_this.mainView);

			return _this;
		}

		/* ROUTES */

		_createClass(Controller, [{
			key: 'showInterviewList',
			value: function showInterviewList() {

				this.mainView.headerRegion.show(new _marionette2.default.ItemView({
					template: _.template(_header_tmpl2.default)
				}));
				this.mainView.menuRegion.show(new _menu_view2.default({ highlight: '#link1' }));
				this.mainView.contentRegion.show(new _interview_list_view2.default());
			}
		}, {
			key: 'showInterview',
			value: function showInterview(id) {
				this.mainView.headerRegion.show(new _marionette2.default.ItemView({
					template: _.template(_header_tmpl2.default)
				}));
				this.mainView.menuRegion.show(new _menu_view2.default({ highlight: '#link1' }));
				this.mainView.contentRegion.show(new _interview_view2.default({ id: id }));
			}
		}, {
			key: 'showTagList',
			value: function showTagList() {
				this.mainView.headerRegion.show(new _marionette2.default.ItemView({
					template: _.template(_header_tmpl2.default)
				}));
				this.mainView.menuRegion.show(new _menu_view2.default({ highlight: '#link3' }));
				this.mainView.contentRegion.show(new _tag_list_view2.default());
			}
		}, {
			key: 'showQuestionList',
			value: function showQuestionList() {
				this.mainView.headerRegion.show(new _marionette2.default.ItemView({
					template: _.template(_header_tmpl2.default)
				}));
				this.mainView.menuRegion.show(new _menu_view2.default({ highlight: '#link2' }));
				this.mainView.contentRegion.show(new _question_list_view2.default());
			}
		}, {
			key: 'showTagTrackList',
			value: function showTagTrackList() {
				var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

				this.mainView.headerRegion.show(new _marionette2.default.ItemView({
					template: _.template(_header_tmpl2.default)
				}));
				this.mainView.menuRegion.show(new _menu_view2.default({ highlight: '#link3' }));
				this.mainView.contentRegion.show(new _attachment_list_view2.default({ tag: tag }));
			}
		}, {
			key: 'showQuestionTrackList',
			value: function showQuestionTrackList() {
				var question = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

				this.mainView.headerRegion.show(new _marionette2.default.ItemView({
					template: _.template(_header_tmpl2.default)
				}));
				this.mainView.menuRegion.show(new _menu_view2.default({ highlight: '#link2' }));
				this.mainView.contentRegion.show(new _attachment_list_view2.default({ question: question }));
			}
		}, {
			key: 'showPlayer',
			value: function showPlayer(id) {
				this.mainView.playerRegion.show(new _audioplayer_view2.default({ id: id }));
			}
		}, {
			key: 'hidePlayer',
			value: function hidePlayer() {
				this.mainView.playerRegion.reset();
			}
		}]);

		return Controller;
	}(_marionette2.default.Controller);

	;

	exports.default = Controller;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJhcHAiLCJhZGRSZWdpb25zIiwiY29udGFpbmVyUmVnaW9uIiwibW9kYWxSZWdpb24iLCJCYWNrYm9uZSIsIm9uIiwic2hvd1BsYXllciIsInNvY2tldCIsIkNvbmZpZyIsIndlYl9zb2NrZXRfdXJsIiwiZGF0YSIsInRyaWdnZXIiLCJtYWluVmlldyIsIk1haW5WaWV3Iiwic2hvdyIsImhlYWRlclJlZ2lvbiIsIk1hcmlvbmV0dGUiLCJJdGVtVmlldyIsInRlbXBsYXRlIiwiXyIsImhlYWRlclRlbXBsYXRlIiwibWVudVJlZ2lvbiIsIk1lbnVWaWV3IiwiaGlnaGxpZ2h0IiwiY29udGVudFJlZ2lvbiIsIkludGVydmlld0xpc3RWaWV3IiwiaWQiLCJJbnRlcnZpZXdWaWV3IiwiVGFnTGlzdFZpZXciLCJRdWVzdGlvbkxpc3RWaWV3IiwidGFnIiwiQXR0YWNobWVudExpc3RWaWV3IiwicXVlc3Rpb24iLCJwbGF5ZXJSZWdpb24iLCJBdWRpb1BsYXllclZpZXciLCJyZXNldCJdLCJtYXBwaW5ncyI6IjtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBdUJNQSxVOzs7QUFFSixzQkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUFBOztBQUloQixTQUFLQSxHQUFMLEdBQVdBLEdBQVg7O0FBRUFBLE9BQUlDLFVBQUosQ0FBZTtBQUNkQyxxQkFBaUIsWUFESDtBQUVkQyxpQkFBYTtBQUZDLElBQWY7O0FBS0E7QUFDQUMsc0JBQVNDLEVBQVQsQ0FBWSxrQkFBWixFQUErQixNQUFLQyxVQUFwQzs7QUFFQTtBQUNBLE9BQUlDLFNBQVMsd0JBQUlDLGlCQUFPQyxjQUFYLENBQWI7QUFDU0YsVUFBT0YsRUFBUCxDQUFVLG1CQUFWLEVBQStCLFVBQVNLLElB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SUFBekIsQ0FBOEIsSUFBSVEsbUJBQUosQ0FBYSxFQUFFQyxXQUFXLFFBQWIsRUFBYixDQUE5QjtBQUNBLFNBQUtYLFFBQUwsQ0FBY1ksYUFBZCxDQUE0QlYsSUFBNUIsQ0FBaUMsSUFBSWlCLDhCQUFKLENBQXVCLEVBQUVELEtBQUtBLEdBQVAsRUFBdkIsQ0FBakM7QUFDQTs7OzJDQUVzQztBQUFBLFFBQWpCRSxRQUFpQix1RUFBTixJQUFNOztBQUN0QyxTQUFLcEIsUUFBTCxDQUFjRyxZQUFkLENBQTJCRCxJQUEzQixDQUFnQyxJQUFJRSxxQkFBV0MsUUFBZixDQUF3QjtBQUN2REMsZUFBVUMsRUFBRUQsUUFBRixDQUFXRSxxQkFBWDtBQUQ2QyxLQUF4QixDQUFoQztBQUdBLFNBQUtSLFFBQUwsQ0FBY1MsVUFBZCxDQUF5QlAsSUFBekIsQ0FBOEIsSUFBSVEsbUJBQUosQ0FBYSxFQUFFQyxXQUFXLFFBQWIsRUFBYixDQUE5QjtBQUNBLFNBQUtYLFFBQUwsQ0FBY1ksYUFBZCxDQUE0QlYsSUFBNUIsQ0FBaUMsSUFBSWlCLDhCQUFKLENBQXVCLEVBQUVDLFVBQVVBLFFBQVosRUFBdkIsQ0FBakM7QUFDQTs7OzhCQUlVTixFLEVBQUk7QUFDZCxTQUFLZCxRQUFMLENBQWNxQixZQUFkLENBQTJCbkIsSUFBM0IsQ0FBZ0MsSUFBSW9CLDBCQUFKLENBQW9CLEVBQUVSLElBQUlBLEVBQU4sRUFBcEIsQ0FBaEM7QUFDQTs7O2dDQUVZO0FBQ1osU0FBS2QsUUFBTCxDQUFjcUIsWUFBZCxDQUEyQkUsS0FBM0I7QUFDQTs7OztHQTdGc0JuQixxQkFBV2pCLFU7O0FBK0ZuQzs7bUJBRWNBLFUiLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLypcbiogQEF1dGhvcjogTHV0eiBSZWl0ZXIsIERlc2lnbiBSZXNlYXJjaCBMYWIsIFVuaXZlcnNpdMOkdCBkZXIgS8O8bnN0ZSBCZXJsaW5cbiogQERhdGU6ICAgMjAxNi0wNS0wNCAxMTozODo0MVxuKiBATGFzdCBNb2RpZmllZCBieTogICBsdXR6ZXJcbiogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxNi0wNy0xNSAwMDoxNDoyMVxuKi9cblxuaW1wb3J0IEJhY2tib25lIGZyb20gJ2JhY2tib25lJztcbmltcG9ydCBNYXJpb25ldHRlIGZyb20gJ21hcmlvbmV0dGUnO1xuaW1wb3J0IFNJTyBmcm9tICdzb2NrZXRpbyc7XG5pbXBvcnQgQ29uZmlnIGZyb20gJ2NvbmZpZyc7XG5cbmltcG9ydCBNYWluVmlldyBmcm9tICd2aWV3cy9tYWluX3ZpZXcnO1xuaW1wb3J0IEludGVydmlld0xpc3RWaWV3IGZyb20gJ3ZpZXdzL2ludGVydmlld19saXN0X3ZpZXcnO1xuaW1wb3J0IEludGVydmlld1ZpZXcgZnJvbSAndmlld3MvaW50ZXJ2aWV3X3ZpZXcnO1xuaW1wb3J0IE1lbnVWaWV3IGZyb20gJ3ZpZXdzL21lbnVfdmlldydcbmltcG9ydCBBdWRpb1BsYXllclZpZXcgZnJvbSAndmlld3MvYXVkaW9wbGF5ZXJfdmlldyc7XG5pbXBvcnQgVGFnTGlzdFZpZXcgZnJvbSAndmlld3MvdGFnX2xpc3Rfdmlldyc7XG5pbXBvcnQgUXVlc3Rpb25MaXN0VmlldyBmcm9tICd2aWV3cy9xdWVzdGlvbl9saXN0X3ZpZXcnO1xuaW1wb3J0IEF0dGFjaG1lbnRMaXN0VmlldyBmcm9tICd2aWV3cy9hdHRhY2htZW50X2xpc3Rfdmlldyc7XG5cbmltcG9ydCBoZWFkZXJUZW1wbGF0ZSBmcm9tICd0ZXh0IXRlbXBsYXRlcy9oZWFkZXJfdG1wbC5odG1sJztcblxuY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIE1hcmlvbmV0dGUuQ29udHJvbGxlciB7XG5cdFx0XG5cdFx0Y29uc3RydWN0b3IoYXBwKSB7XG5cblx0XHRcdHN1cGVyKCk7XG5cblx0XHRcdHRoaXMuYXBwID0gYXBwO1xuXHRcdFx0XG5cdFx0XHRhcHAuYWRkUmVnaW9ucyh7XG5cdFx0XHRcdGNvbnRhaW5lclJlZ2lvbjogXCIjY29udGFpbmVyXCIsXG5cdFx0XHRcdG1vZGFsUmVnaW9uOiBcIiNtb2RhbC1jb250YWluZXJcIlxuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdC8vcmVnaXN0ZXIgY2xpZW50IGV2ZW50c1xuXHRcdFx0QmFja2JvbmUub24oJ3Nob3c6YXVkaW9wbGF5ZXInLHRoaXMuc2hvd1BsYXllciwgdGhpcyk7XG5cblx0XHRcdC8vcmVnaXN0ZXIgc29ja2V0IGV2ZW50c1xuXHRcdFx0dmFyIHNvY2tldCA9IFNJTyhDb25maWcud2ViX3NvY2tldF91cmwpO1xuICAgICAgICAgICAgc29ja2V0Lm9uKCdpbnRlcnZpZXc6Y2hhbmdlZCcsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIFx0QmFja2JvbmUudHJpZ2dlcignaW50ZXJ2aWV3OmNoYW5nZWQnLGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzb2NrZXQub24oJ2ludGVydmlldzpuZXcnLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBcdEJhY2tib25lLnRyaWdnZXIoJ2ludGVydmlldzpuZXcnLGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzb2NrZXQub24oJ2ludGVydmlldzpyZW1vdmVkJywgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgXHRCYWNrYm9uZS50cmlnZ2VyKCdpbnRlcnZpZXc6bmV3JyxkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL2xvYWQgbWFpbnZpZXdcbiAgICAgICAgICAgIHRoaXMubWFpblZpZXcgPSBuZXcgTWFpblZpZXcoKTtcbiAgICAgICAgICAgIHRoaXMuYXBwLmNvbnRhaW5lclJlZ2lvbi5zaG93KHRoaXMubWFpblZpZXcpO1xuXHRcdFx0XG5cdFx0fVxuXHRcdFx0XG5cdFx0LyogUk9VVEVTICovXG5cblx0XHRzaG93SW50ZXJ2aWV3TGlzdCgpIHtcblxuXHRcdFx0dGhpcy5tYWluVmlldy5oZWFkZXJSZWdpb24uc2hvdyhuZXcgTWFyaW9uZXR0ZS5JdGVtVmlldyh7XG5cdFx0XHRcdHRlbXBsYXRlOiBfLnRlbXBsYXRlKGhlYWRlclRlbXBsYXRlKVxuXHRcdFx0fSkpO1xuXHRcdFx0dGhpcy5tYWluVmlldy5tZW51UmVnaW9uLnNob3cobmV3IE1lbnVWaWV3KHsgaGlnaGxpZ2h0OiAnI2xpbmsxJyB9KSlcblx0XHRcdHRoaXMubWFpblZpZXcuY29udGVudFJlZ2lvbi5zaG93KG5ldyBJbnRlcnZpZXdMaXN0VmlldygpKTtcblx0XHR9XG5cblx0XHRzaG93SW50ZXJ2aWV3KGlkKSB7XG5cdFx0XHR0aGlzLm1haW5WaWV3LmhlYWRlclJlZ2lvbi5zaG93KG5ldyBNYXJpb25ldHRlLkl0ZW1WaWV3KHtcblx0XHRcdCBcdHRlbXBsYXRlOiBfLnRlbXBsYXRlKGhlYWRlclRlbXBsYXRlKVxuXHRcdFx0fSkpO1xuXHRcdFx0dGhpcy5tYWluVmlldy5tZW51UmVnaW9uLnNob3cobmV3IE1lbnVWaWV3KHsgaGlnaGxpZ2h0OiAnI2xpbmsxJyB9KSlcblx0XHRcdHRoaXMubWFpblZpZXcuY29udGVudFJlZ2lvbi5zaG93KG5ldyBJbnRlcnZpZXdWaWV3KHsgaWQ6IGlkIH0pKTtcblx0XHR9XG5cblx0XHRzaG93VGFnTGlzdCgpIHtcblx0XHRcdHRoaXMubWFpblZpZXcuaGVhZGVyUmVnaW9uLnNob3cobmV3IE1hcmlvbmV0dGUuSXRlbVZpZXcoe1xuXHRcdFx0XHR0ZW1wbGF0ZTogXy50ZW1wbGF0ZShoZWFkZXJUZW1wbGF0ZSlcblx0XHRcdH0pKTtcblx0XHRcdHRoaXMubWFpblZpZXcubWVudVJlZ2lvbi5zaG93KG5ldyBNZW51Vmlldyh7IGhpZ2hsaWdodDogJyNsaW5rMycgfSkpXG5cdFx0XHR0aGlzLm1haW5WaWV3LmNvbnRlbnRSZWdpb24uc2hvdyhuZXcgVGFnTGlzdFZpZXcoKSk7XG5cdFx0fVxuXG5cdFx0c2hvd1F1ZXN0aW9uTGlzdCgpIHtcblx0XHRcdHRoaXMubWFpblZpZXcuaGVhZGVyUmVnaW9uLnNob3cobmV3IE1hcmlvbmV0dGUuSXRlbVZpZXcoe1xuXHRcdFx0XHR0ZW1wbGF0ZTogXy50ZW1wbGF0ZShoZWFkZXJUZW1wbGF0ZSlcblx0XHRcdH0pKTtcblx0XHRcdHRoaXMubWFpblZpZXcubWVudVJlZ2lvbi5zaG93KG5ldyBNZW51Vmlldyh7IGhpZ2hsaWdodDogJyNsaW5rMicgfSkpXG5cdFx0XHR0aGlzLm1haW5WaWV3LmNvbnRlbnRSZWdpb24uc2hvdyhuZXcgUXVlc3Rpb25MaXN0VmlldygpKTtcblx0XHR9XG5cblx0XHRzaG93VGFnVHJhY2tMaXN0KHRhZyA9IG51bGwpIHtcblx0XHRcdHRoaXMubWFpblZpZXcuaGVhZGVyUmVnaW9uLnNob3cobmV3IE1hcmlvbmV0dGUuSXRlbVZpZXcoe1xuXHRcdFx0XHR0ZW1wbGF0ZTogXy50ZW1wbGF0ZShoZWFkZXJUZW1wbGF0ZSlcblx0XHRcdH0pKTtcblx0XHRcdHRoaXMubWFpblZpZXcubWVudVJlZ2lvbi5zaG93KG5ldyBNZW51Vmlldyh7IGhpZ2hsaWdodDogJyNsaW5rMycgfSkpXG5cdFx0XHR0aGlzLm1haW5WaWV3LmNvbnRlbnRSZWdpb24uc2hvdyhuZXcgQXR0YWNobWVudExpc3RWaWV3KHsgdGFnOiB0YWcgfSkpO1xuXHRcdH1cblxuXHRcdHNob3dRdWVzdGlvblRyYWNrTGlzdChxdWVzdGlvbiA9IG51bGwpIHtcblx0XHRcdHRoaXMubWFpblZpZXcuaGVhZGVyUmVnaW9uLnNob3cobmV3IE1hcmlvbmV0dGUuSXRlbVZpZXcoe1xuXHRcdFx0XHR0ZW1wbGF0ZTogXy50ZW1wbGF0ZShoZWFkZXJUZW1wbGF0ZSlcblx0XHRcdH0pKTtcblx0XHRcdHRoaXMubWFpblZpZXcubWVudVJlZ2lvbi5zaG93KG5ldyBNZW51Vmlldyh7IGhpZ2hsaWdodDogJyNsaW5rMicgfSkpXG5cdFx0XHR0aGlzLm1haW5WaWV3LmNvbnRlbnRSZWdpb24uc2hvdyhuZXcgQXR0YWNobWVudExpc3RWaWV3KHsgcXVlc3Rpb246IHF1ZXN0aW9uIH0pKTtcblx0XHR9XG5cblx0XHQvKiBBVURJTyBQTEFZRVIgKi9cblxuXHRcdHNob3dQbGF5ZXIoaWQpIHtcblx0XHRcdHRoaXMubWFpblZpZXcucGxheWVyUmVnaW9uLnNob3cobmV3IEF1ZGlvUGxheWVyVmlldyh7IGlkOiBpZCB9KSk7XG5cdFx0fVxuXG5cdFx0aGlkZVBsYXllcigpIHtcblx0XHRcdHRoaXMubWFpblZpZXcucGxheWVyUmVnaW9uLnJlc2V0KCk7XG5cdFx0fVxuXHRcdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlclxuXHQiXX0=