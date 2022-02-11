define(['exports', 'backbone', 'config'], function (exports, _backbone, _config) {
	'use strict';

	/*
 * @Author: Lutz Reiter, Design Research Lab, Universität der Künste Berlin
 * @Date:   2016-05-04 11:38:41
 * @Last Modified by:   lutzer
 * @Last Modified time: 2016-07-11 19:01:22
 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _backbone2 = _interopRequireDefault(_backbone);

	var _config2 = _interopRequireDefault(_config);

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

	var InterviewModel = function (_Backbone$Model) {
		_inherits(InterviewModel, _Backbone$Model);

		function InterviewModel() {
			_classCallCheck(this, InterviewModel);

			return _possibleConstructorReturn(this, (InterviewModel.__proto__ || Object.getPrototypeOf(InterviewModel)).apply(this, arguments));
		}

		_createClass(InterviewModel, [{
			key: 'parse',
			value: function parse(response) {
				var data = response.interview;
				if (_.isEmpty(data)) return data;
				if (_.has(response, 'attachments')) data.attachments = response.attachments;
				return data;
			}
		}, {
			key: 'save',
			value: function save(attrs, options) {
				attrs = _.omit(attrs, 'attachments');
				return _backbone2.default.Model.prototype.save.call(this, attrs, options);
			}
		}, {
			key: 'urlRoot',
			get: function get() {
				return _config2.default['web_service_url'] + "interviews";
			}
		}, {
			key: 'idAttribute',
			get: function get() {
				return '_id';
			}
		}, {
			key: 'defaults',
			get: function get() {
				return {
					image: false,
					text: '',
					name: '',
					role: '',
					attachments: [],
					createdAt: 0
				};
			}
		}]);

		return InterviewModel;
	}(_backbone2.default.Model);

	exports.default = InterviewModel;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvaW50ZXJ2aWV3X21vZGVsLmpzIl0sIm5hbWVzIjpbIkludGVydmlld01vZGVsIiwicmVzcG9uc2UiLCJkYXRhIiwiaW50ZXJ2aWV3IiwiXyIsImlzRW1wdHkiLCJoYXMiLCJhdHRhY2htZW50cyIsImF0dHJzIiwib3B0aW9ucyIsIm9taXQiLCJCYWNrYm9uZSIsIk1vZGVsIiwicHJvdG90eXBlIiwic2F2ZSIsImNhbGwiLCJDb25maWciLCJpbWFnZSIsInRleHQiLCJuYW1lIiwicm9sZSIsImNyZWF0ZWRBdCJdLCJtYXBwaW5ncyI6IjtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FVTUEsYzs7Ozs7Ozs7Ozs7eUJBaUJDQyxRLEVBQVU7QUFDZixRQUFJQyxPQUFPRCxTQUFTRSxTQUFwQjtBQUNBLFFBQUlDLEVBQUVDLE9BQUYsQ0FBVUgsSUFBVixDQUFKLEVBQ0MsT0FBT0EsSUFBUDtBQUNELFFBQUlFLEVBQUVFLEdBQUYsQ0FBTUwsUUFBTixFQUFlLGFBQWYsQ0FBSixFQUNDQyxLQUFLSyxXQUFMLEdBQW1CTixTQUFTTSxXQUE1QjtBQUNLLFdBQU9MLElBQVA7QUFDTjs7O3dCQUVPTSxLLEVBQU9DLE8sRUFBUztBQUNqQkQsWUFBUUosRUFBRU0sSUFBRixDQUFPRixLQUFQLEVBQWEsYUFBYixDQUFSO0FBQ0EsV0FBT0csbUJBQVNDLEtBQVQsQ0FBZUMsU0FBZixDQUF5QkMsSUFBekIsQ0FBOEJDLElBQTlCLENBQW1DLElBQW5DLEVBQXlDUCxLQUF6QyxFQUFnREMsT0FBaEQsQ0FBUDtBQUNIOzs7dUJBM0JVO0FBQUUsV0FBT08saUJBQU8saUJBQVAsSUFBMEIsWUFBakM7QUFBK0M7Ozt1QkFFN0M7QUFBRSxXQUFPLEtBQVA7QUFBYzs7O3VCQUVuQjtBQUNkLFdBQU87QUFDSEMsWUFBTyxLQURKO0FBRUhDLFdBQU0sRUFGSDtBQUdIQyxXQUFNLEVBSEg7QUFJSEMsV0FBTSxFQUpIO0FBS0hiLGtCQUFhLEVBTFY7QUFNSGMsZ0JBQVc7QUFOUixLQUFQO0FBUUE7Ozs7R0FmMkJWLG1CQUFTQyxLOzttQkFnQ3ZCWixjIiwiZmlsZSI6ImludGVydmlld19tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLypcbiogQEF1dGhvcjogTHV0eiBSZWl0ZXIsIERlc2lnbiBSZXNlYXJjaCBMYWIsIFVuaXZlcnNpdMOkdCBkZXIgS8O8bnN0ZSBCZXJsaW5cbiogQERhdGU6ICAgMjAxNi0wNS0wNCAxMTozODo0MVxuKiBATGFzdCBNb2RpZmllZCBieTogICBsdXR6ZXJcbiogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxNi0wNy0xMSAxOTowMToyMlxuKi9cblxuaW1wb3J0IEJhY2tib25lIGZyb20gJ2JhY2tib25lJztcbmltcG9ydCBDb25maWcgZnJvbSAnY29uZmlnJztcblxuY2xhc3MgSW50ZXJ2aWV3TW9kZWwgZXh0ZW5kcyBCYWNrYm9uZS5Nb2RlbCB7XG5cblx0Z2V0IHVybFJvb3QoKSB7IHJldHVybiBDb25maWdbJ3dlYl9zZXJ2aWNlX3VybCddK1wiaW50ZXJ2aWV3c1wiIH1cblxuXHRnZXQgaWRBdHRyaWJ1dGUoKSB7IHJldHVybiAnX2lkJyB9XG5cblx0Z2V0IGRlZmF1bHRzKCkgeyBcblx0XHRyZXR1cm4ge1xuXHQgICAgXHRpbWFnZTogZmFsc2UsXG5cdCAgICBcdHRleHQ6ICcnLFxuXHQgICAgXHRuYW1lOiAnJyxcblx0ICAgIFx0cm9sZTogJycsXG5cdCAgICBcdGF0dGFjaG1lbnRzOiBbXSxcblx0ICAgIFx0Y3JlYXRlZEF0OiAwXG5cdFx0fVxuXHR9XG5cblx0cGFyc2UocmVzcG9uc2UpIHtcblx0XHR2YXIgZGF0YSA9IHJlc3BvbnNlLmludGVydmlldztcblx0XHRpZiAoXy5pc0VtcHR5KGRhdGEpKVxuXHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0aWYgKF8uaGFzKHJlc3BvbnNlLCdhdHRhY2htZW50cycpKVxuXHRcdFx0ZGF0YS5hdHRhY2htZW50cyA9IHJlc3BvbnNlLmF0dGFjaG1lbnRzO1xuICAgICAgICByZXR1cm4gZGF0YTtcblx0fVxuXG4gICAgc2F2ZShhdHRycywgb3B0aW9ucykge1xuICAgICAgICBhdHRycyA9IF8ub21pdChhdHRycywnYXR0YWNobWVudHMnKTtcbiAgICAgICAgcmV0dXJuIEJhY2tib25lLk1vZGVsLnByb3RvdHlwZS5zYXZlLmNhbGwodGhpcywgYXR0cnMsIG9wdGlvbnMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJ2aWV3TW9kZWwiXX0=