define(['exports', 'backbone', 'config'], function (exports, _backbone, _config) {
	'use strict';

	/*
 * @Author: Lutz Reiter, Design Research Lab, Universität der Künste Berlin
 * @Date:   2016-05-04 11:38:41
 * @Last Modified by:   lutzer
 * @Last Modified time: 2016-07-15 00:26:37
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

	var AttachmentModel = function (_Backbone$Model) {
		_inherits(AttachmentModel, _Backbone$Model);

		function AttachmentModel() {
			_classCallCheck(this, AttachmentModel);

			return _possibleConstructorReturn(this, (AttachmentModel.__proto__ || Object.getPrototypeOf(AttachmentModel)).apply(this, arguments));
		}

		_createClass(AttachmentModel, [{
			key: 'save',
			value: function save(attrs, options) {
				attrs = _.omit(attrs, 'interview');
				return _backbone2.default.Model.prototype.save.call(this, attrs, options);
			}
		}, {
			key: 'urlRoot',
			get: function get() {
				return _config2.default['web_service_url'] + "attachments";
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
					file: false,
					text: '',
					tags: [],
					interview: false
				};
			}
		}]);

		return AttachmentModel;
	}(_backbone2.default.Model);

	exports.default = AttachmentModel;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvYXR0YWNobWVudF9tb2RlbC5qcyJdLCJuYW1lcyI6WyJBdHRhY2htZW50TW9kZWwiLCJhdHRycyIsIm9wdGlvbnMiLCJfIiwib21pdCIsIkJhY2tib25lIiwiTW9kZWwiLCJwcm90b3R5cGUiLCJzYXZlIiwiY2FsbCIsIkNvbmZpZyIsImZpbGUiLCJ0ZXh0IiwidGFncyIsImludGVydmlldyJdLCJtYXBwaW5ncyI6IjtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FVTUEsZTs7Ozs7Ozs7Ozs7d0JBZUFDLEssRUFBT0MsTyxFQUFTO0FBQ2RELFlBQVFFLEVBQUVDLElBQUYsQ0FBT0gsS0FBUCxFQUFhLFdBQWIsQ0FBUjtBQUNBLFdBQU9JLG1CQUFTQyxLQUFULENBQWVDLFNBQWYsQ0FBeUJDLElBQXpCLENBQThCQyxJQUE5QixDQUFtQyxJQUFuQyxFQUF5Q1IsS0FBekMsRUFBZ0RDLE9BQWhELENBQVA7QUFDSDs7O3VCQWhCVTtBQUFFLFdBQU9RLGlCQUFPLGlCQUFQLElBQTBCLGFBQWpDO0FBQWdEOzs7dUJBRTlDO0FBQUUsV0FBTyxLQUFQO0FBQWM7Ozt1QkFFbkI7QUFDZCxXQUFPO0FBQ0hDLFdBQU0sS0FESDtBQUVIQyxXQUFNLEVBRkg7QUFHSEMsV0FBTSxFQUhIO0FBSUhDLGdCQUFZO0FBSlQsS0FBUDtBQU1BOzs7O0dBYjRCVCxtQkFBU0MsSzs7bUJBcUJ4Qk4sZSIsImZpbGUiOiJhdHRhY2htZW50X21vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vKlxuKiBAQXV0aG9yOiBMdXR6IFJlaXRlciwgRGVzaWduIFJlc2VhcmNoIExhYiwgVW5pdmVyc2l0w6R0IGRlciBLw7xuc3RlIEJlcmxpblxuKiBARGF0ZTogICAyMDE2LTA1LTA0IDExOjM4OjQxXG4qIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIGx1dHplclxuKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE2LTA3LTE1IDAwOjI2OjM3XG4qL1xuXG5pbXBvcnQgQmFja2JvbmUgZnJvbSAnYmFja2JvbmUnO1xuaW1wb3J0IENvbmZpZyBmcm9tICdjb25maWcnO1xuXG5jbGFzcyBBdHRhY2htZW50TW9kZWwgZXh0ZW5kcyBCYWNrYm9uZS5Nb2RlbCB7XG5cblx0Z2V0IHVybFJvb3QoKSB7IHJldHVybiBDb25maWdbJ3dlYl9zZXJ2aWNlX3VybCddK1wiYXR0YWNobWVudHNcIiB9XG5cblx0Z2V0IGlkQXR0cmlidXRlKCkgeyByZXR1cm4gJ19pZCcgfVxuXG5cdGdldCBkZWZhdWx0cygpIHsgXG5cdFx0cmV0dXJuIHtcblx0ICAgIFx0ZmlsZTogZmFsc2UsXG5cdCAgICBcdHRleHQ6ICcnLFxuXHQgICAgXHR0YWdzOiBbXSxcblx0ICAgIFx0aW50ZXJ2aWV3IDogZmFsc2Vcblx0XHR9XG5cdH1cblxuXHRzYXZlKGF0dHJzLCBvcHRpb25zKSB7XG4gICAgICAgIGF0dHJzID0gXy5vbWl0KGF0dHJzLCdpbnRlcnZpZXcnKTtcbiAgICAgICAgcmV0dXJuIEJhY2tib25lLk1vZGVsLnByb3RvdHlwZS5zYXZlLmNhbGwodGhpcywgYXR0cnMsIG9wdGlvbnMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXR0YWNobWVudE1vZGVsIl19