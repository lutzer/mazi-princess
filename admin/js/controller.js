define(['exports', 'backbone', 'marionette', 'config', 'views/main_view', 'views/menu_view', 'views/interview_list_view', 'views/interview_view', 'views/attachment_list_view', 'views/attachment_view'], function (exports, _backbone, _marionette, _config, _main_view, _menu_view, _interview_list_view, _interview_view, _attachment_list_view, _attachment_view) {
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

	var _config2 = _interopRequireDefault(_config);

	var _main_view2 = _interopRequireDefault(_main_view);

	var _menu_view2 = _interopRequireDefault(_menu_view);

	var _interview_list_view2 = _interopRequireDefault(_interview_list_view);

	var _interview_view2 = _interopRequireDefault(_interview_view);

	var _attachment_list_view2 = _interopRequireDefault(_attachment_list_view);

	var _attachment_view2 = _interopRequireDefault(_attachment_view);

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

			//load mainview
			_this.mainView = new _main_view2.default();
			_this.app.containerRegion.show(_this.mainView);

			return _this;
		}

		_createClass(Controller, [{
			key: 'checkLogin',
			value: function checkLogin() {}
		}, {
			key: 'showInterviewList',
			value: function showInterviewList() {

				this.mainView.menuRegion.show(new _menu_view2.default({ highlight: '#link1' }));
				this.mainView.contentRegion.show(new _interview_list_view2.default());
			}
		}, {
			key: 'editInterview',
			value: function editInterview(id) {
				this.mainView.menuRegion.show(new _menu_view2.default({ highlight: '#link1' }));
				this.mainView.contentRegion.show(new _interview_view2.default({ id: id }));
			}
		}, {
			key: 'newInterview',
			value: function newInterview(id) {
				this.mainView.menuRegion.show(new _menu_view2.default({ highlight: '#link1' }));
				this.mainView.contentRegion.show(new _interview_view2.default({ new: true }));
			}
		}, {
			key: 'showAttachmentList',
			value: function showAttachmentList() {
				var forInterview = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

				this.mainView.menuRegion.show(new _menu_view2.default({ highlight: '#link2' }));
				this.mainView.contentRegion.show(new _attachment_list_view2.default({ interview: forInterview }));
			}
		}, {
			key: 'editAttachment',
			value: function editAttachment(id) {
				this.mainView.menuRegion.show(new _menu_view2.default({ highlight: '#link2' }));
				this.mainView.contentRegion.show(new _attachment_view2.default({ id: id }));
			}
		}, {
			key: 'addAttachment',
			value: function addAttachment(forInterview) {
				this.mainView.menuRegion.show(new _menu_view2.default({ highlight: '#link2' }));
				this.mainView.contentRegion.show(new _attachment_view2.default({ interview: forInterview, new: true }));
			}
		}]);

		return Controller;
	}(_marionette2.default.Controller);

	;

	exports.default = Controller;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJhcHAiLCJhZGRSZWdpb25zIiwiY29udGFpbmVyUmVnaW9uIiwibW9kYWxSZWdpb24iLCJtYWluVmlldyIsIk1haW5WaWV3Iiwic2hvdyIsIm1lbnVSZWdpb24iLCJNZW51VmlldyIsImhpZ2hsaWdodCIsImNvbnRlbnRSZWdpb24iLCJJbnRlcnZpZXdMaXN0VmlldyIsImlkIiwiSW50ZXJ2aWV3VmlldyIsIm5ldyIsImZvckludGVydmlldyIsIkF0dGFjaG1lbnRMaXN0VmlldyIsImludGVydmlldyIsIkF0dGFjaG1lbnRWaWV3IiwiTWFyaW9uZXR0ZSJdLCJtYXBwaW5ncyI6IjtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWtCTUEsVTs7O0FBRUosc0JBQVlDLEdBQVosRUFBaUI7QUFBQTs7QUFBQTs7QUFJaEIsU0FBS0EsR0FBTCxHQUFXQSxHQUFYOztBQUVBQSxPQUFJQyxVQUFKLENBQWU7QUFDZEMscUJBQWlCLFlBREg7QUFFZEMsaUJBQWE7QUFGQyxJQUFmOztBQUtTO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixJQUFJQyxtQkFBSixFQUFoQjtBQUNBLFNBQUtMLEdBQUwsQ0FBU0UsZUFBVCxDQUF5QkksSUFBekIsQ0FBOEIsTUFBS0YsUUFBbkM7O0FBYk87QUFlaEI7Ozs7Z0NBRVksQ0FFWjs7O3VDQUltQjs7QUFFbkIsU0FBS0EsUUFBTCxDQUFjRyxVQUFkLENBQXlCRCxJQUF6QixDQUE4QixJQUFJRSxtQkFBSixDQUFhLEVBQUVDLFdBQVcsUUFBYixFQUFiLENBQTlCO0FBQ0EsU0FBS0wsUUFBTCxDQUFjTSxhQUFkLENBQTRCSixJQUE1QixDQUFpQyxJQUFJSyw2QkFBSixFQUFqQztBQUNBOzs7aUNBRWFDLEUsRUFBSTtBQUNqQixTQUFLUixRQUFMLENBQWNHLFVBQWQsQ0FBeUJELElBQXpCLENBQThCLElBQUlFLG1CQUFKLENBQWEsRUFBRUMsV0FBVyxRQUFiLEVBQWIsQ0FBOUI7QUFDQSxTQUFLTCxRQUFMLENBQWNNLGFBQWQsQ0FBNEJKLElBQTVCLENBQWlDLElBQUlPLHdCQUFKLENBQWtCLEVBQUVELElBQUlBLEVBQU4sRUFBbEIsQ0FBakM7QUFDQTs7O2dDQUVZQSxFLEVBQUk7QUFDaEIsU0FBS1IsUUFBTCxDQUFjRyxVQUFkLENBQXlCRCxJQUF6QixDQUE4QixJQUFJRSxtQkFBSixDQUFhLEVBQUVDLFdBQVcsUUFBYixFQUFiLENBQTlCO0FBQ0EsU0FBS0wsUUFBTCxDQUFjTSxhQUFkLENBQTRCSixJQUE1QixDQUFpQyxJQUFJTyx3QkFBSixDQUFrQixFQUFFQyxLQUFLLElBQVAsRUFBbEIsQ0FBakM7QUFDQTs7O3dDQUV1QztBQUFBLFFBQXJCQyxZQUFxQix1RUFBTixJQUFNOztBQUN2QyxTQUFLWCxRQUFMLENBQWNHLFVBQWQsQ0FBeUJELElBQXpCLENBQThCLElBQUlFLG1CQUFKLENBQWEsRUFBRUMsV0FBVyxRQUFiLEVBQWIsQ0FBOUI7QUFDQSxTQUFLTCxRQUFMLENBQWNNLGFBQWQsQ0FBNEJKLElBQTVCLENBQWlDLElBQUlVLDhCQUFKLENBQXVCLEVBQUVDLFdBQVlGLFlBQWQsRUFBdkIsQ0FBakM7QUFDQTs7O2tDQUVjSCxFLEVBQUk7QUFDbEIsU0FBS1IsUUFBTCxDQUFjRyxVQUFkLENBQXlCRCxJQUF6QixDQUE4QixJQUFJRSxtQkFBSixDQUFhLEVBQUVDLFdBQVcsUUFBYixFQUFiLENBQTlCO0FBQ0EsU0FBS0wsUUFBTCxDQUFjTSxhQUFkLENBQTRCSixJQUE1QixDQUFpQyxJQUFJWSx5QkFBSixDQUFtQixFQUFFTixJQUFJQSxFQUFOLEVBQW5CLENBQWpDO0FBQ0E7OztpQ0FFYUcsWSxFQUFjO0FBQzNCLFNBQUtYLFFBQUwsQ0FBY0csVUFBZCxDQUF5QkQsSUFBekIsQ0FBOEIsSUFBSUUsbUJBQUosQ0FBYSxFQUFFQyxXQUFXLFFBQWIsRUFBYixDQUE5QjtBQUNBLFNBQUtMLFFBQUwsQ0FBY00sYUFBZCxDQUE0QkosSUFBNUIsQ0FBaUMsSUFBSVkseUJBQUosQ0FBbUIsRUFBRUQsV0FBV0YsWUFBYixFQUEyQkQsS0FBTSxJQUFqQyxFQUFuQixDQUFqQztBQUNBOzs7O0dBdERzQksscUJBQVdwQixVOztBQXdEbkM7O21CQUVjQSxVIiwiZmlsZSI6ImNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qXG4qIEBBdXRob3I6IEx1dHogUmVpdGVyLCBEZXNpZ24gUmVzZWFyY2ggTGFiLCBVbml2ZXJzaXTDpHQgZGVyIEvDvG5zdGUgQmVybGluXG4qIEBEYXRlOiAgIDIwMTYtMDUtMDQgMTE6Mzg6NDFcbiogQExhc3QgTW9kaWZpZWQgYnk6ICAgbHV0emVyXG4qIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTYtMDctMTUgMDA6MTQ6MjFcbiovXG5cbmltcG9ydCBCYWNrYm9uZSBmcm9tICdiYWNrYm9uZSc7XG5pbXBvcnQgTWFyaW9uZXR0ZSBmcm9tICdtYXJpb25ldHRlJztcbmltcG9ydCBDb25maWcgZnJvbSAnY29uZmlnJztcblxuaW1wb3J0IE1haW5WaWV3IGZyb20gJ3ZpZXdzL21haW5fdmlldyc7XG5pbXBvcnQgTWVudVZpZXcgZnJvbSAndmlld3MvbWVudV92aWV3JztcbmltcG9ydCBJbnRlcnZpZXdMaXN0VmlldyBmcm9tICd2aWV3cy9pbnRlcnZpZXdfbGlzdF92aWV3JztcbmltcG9ydCBJbnRlcnZpZXdWaWV3IGZyb20gXCJ2aWV3cy9pbnRlcnZpZXdfdmlld1wiO1xuaW1wb3J0IEF0dGFjaG1lbnRMaXN0VmlldyBmcm9tICd2aWV3cy9hdHRhY2htZW50X2xpc3Rfdmlldyc7XG5pbXBvcnQgQXR0YWNobWVudFZpZXcgZnJvbSBcInZpZXdzL2F0dGFjaG1lbnRfdmlld1wiO1xuXG5jbGFzcyBDb250cm9sbGVyIGV4dGVuZHMgTWFyaW9uZXR0ZS5Db250cm9sbGVyIHtcblx0XHRcblx0XHRjb25zdHJ1Y3RvcihhcHApIHtcblxuXHRcdFx0c3VwZXIoKTtcblxuXHRcdFx0dGhpcy5hcHAgPSBhcHA7XG5cdFx0XHRcblx0XHRcdGFwcC5hZGRSZWdpb25zKHtcblx0XHRcdFx0Y29udGFpbmVyUmVnaW9uOiBcIiNjb250YWluZXJcIixcblx0XHRcdFx0bW9kYWxSZWdpb246IFwiI21vZGFsLWNvbnRhaW5lclwiXG5cdFx0XHR9KTtcblx0XHRcdFxuICAgICAgICAgICAgLy9sb2FkIG1haW52aWV3XG4gICAgICAgICAgICB0aGlzLm1haW5WaWV3ID0gbmV3IE1haW5WaWV3KCk7XG4gICAgICAgICAgICB0aGlzLmFwcC5jb250YWluZXJSZWdpb24uc2hvdyh0aGlzLm1haW5WaWV3KTtcblx0XHRcdFxuXHRcdH1cblxuXHRcdGNoZWNrTG9naW4oKSB7XG5cblx0XHR9XG5cdFx0XHRcblx0XHQvKiBST1VURVMgKi9cblxuXHRcdHNob3dJbnRlcnZpZXdMaXN0KCkge1xuXG5cdFx0XHR0aGlzLm1haW5WaWV3Lm1lbnVSZWdpb24uc2hvdyhuZXcgTWVudVZpZXcoeyBoaWdobGlnaHQ6ICcjbGluazEnIH0pKVxuXHRcdFx0dGhpcy5tYWluVmlldy5jb250ZW50UmVnaW9uLnNob3cobmV3IEludGVydmlld0xpc3RWaWV3KCkpO1xuXHRcdH1cblxuXHRcdGVkaXRJbnRlcnZpZXcoaWQpIHtcblx0XHRcdHRoaXMubWFpblZpZXcubWVudVJlZ2lvbi5zaG93KG5ldyBNZW51Vmlldyh7IGhpZ2hsaWdodDogJyNsaW5rMScgfSkpXG5cdFx0XHR0aGlzLm1haW5WaWV3LmNvbnRlbnRSZWdpb24uc2hvdyhuZXcgSW50ZXJ2aWV3Vmlldyh7IGlkOiBpZCB9KSk7XG5cdFx0fVxuXG5cdFx0bmV3SW50ZXJ2aWV3KGlkKSB7XG5cdFx0XHR0aGlzLm1haW5WaWV3Lm1lbnVSZWdpb24uc2hvdyhuZXcgTWVudVZpZXcoeyBoaWdobGlnaHQ6ICcjbGluazEnIH0pKVxuXHRcdFx0dGhpcy5tYWluVmlldy5jb250ZW50UmVnaW9uLnNob3cobmV3IEludGVydmlld1ZpZXcoeyBuZXc6IHRydWUgfSkpO1xuXHRcdH1cblxuXHRcdHNob3dBdHRhY2htZW50TGlzdChmb3JJbnRlcnZpZXcgPSBudWxsKSB7XHRcblx0XHRcdHRoaXMubWFpblZpZXcubWVudVJlZ2lvbi5zaG93KG5ldyBNZW51Vmlldyh7IGhpZ2hsaWdodDogJyNsaW5rMicgfSkpXG5cdFx0XHR0aGlzLm1haW5WaWV3LmNvbnRlbnRSZWdpb24uc2hvdyhuZXcgQXR0YWNobWVudExpc3RWaWV3KHsgaW50ZXJ2aWV3IDogZm9ySW50ZXJ2aWV3fSkpO1xuXHRcdH1cblxuXHRcdGVkaXRBdHRhY2htZW50KGlkKSB7XG5cdFx0XHR0aGlzLm1haW5WaWV3Lm1lbnVSZWdpb24uc2hvdyhuZXcgTWVudVZpZXcoeyBoaWdobGlnaHQ6ICcjbGluazInIH0pKVxuXHRcdFx0dGhpcy5tYWluVmlldy5jb250ZW50UmVnaW9uLnNob3cobmV3IEF0dGFjaG1lbnRWaWV3KHsgaWQ6IGlkIH0pKTtcblx0XHR9XG5cblx0XHRhZGRBdHRhY2htZW50KGZvckludGVydmlldykge1xuXHRcdFx0dGhpcy5tYWluVmlldy5tZW51UmVnaW9uLnNob3cobmV3IE1lbnVWaWV3KHsgaGlnaGxpZ2h0OiAnI2xpbmsyJyB9KSlcblx0XHRcdHRoaXMubWFpblZpZXcuY29udGVudFJlZ2lvbi5zaG93KG5ldyBBdHRhY2htZW50Vmlldyh7IGludGVydmlldzogZm9ySW50ZXJ2aWV3LCBuZXcgOiB0cnVlIH0pKTtcblx0XHR9XG5cdFx0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyXG5cdCJdfQ==