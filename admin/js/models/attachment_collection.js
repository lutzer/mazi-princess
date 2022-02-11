define(['exports', 'backbone', 'config', 'models/attachment_model'], function (exports, _backbone, _config, _attachment_model) {
	'use strict';

	/*
 * @Author: Lutz Reiter, Design Research Lab, Universität der Künste Berlin
 * @Date:   2016-05-04 11:38:41
 * @Last Modified by:   lutzer
 * @Last Modified time: 2016-07-15 00:17:03
 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _backbone2 = _interopRequireDefault(_backbone);

	var _config2 = _interopRequireDefault(_config);

	var _attachment_model2 = _interopRequireDefault(_attachment_model);

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

	var AttachmentCollection = function (_Backbone$Collection) {
		_inherits(AttachmentCollection, _Backbone$Collection);

		function AttachmentCollection() {
			_classCallCheck(this, AttachmentCollection);

			return _possibleConstructorReturn(this, (AttachmentCollection.__proto__ || Object.getPrototypeOf(AttachmentCollection)).apply(this, arguments));
		}

		_createClass(AttachmentCollection, [{
			key: 'url',
			get: function get() {
				return _config2.default['web_service_url'] + "attachments";
			}
		}, {
			key: 'model',
			get: function get() {
				return _attachment_model2.default;
			}
		}]);

		return AttachmentCollection;
	}(_backbone2.default.Collection);

	;

	exports.default = AttachmentCollection;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvYXR0YWNobWVudF9jb2xsZWN0aW9uLmpzIl0sIm5hbWVzIjpbIkF0dGFjaG1lbnRDb2xsZWN0aW9uIiwiQ29uZmlnIiwiQXR0YWNobWVudE1vZGVsIiwiQmFja2JvbmUiLCJDb2xsZWN0aW9uIl0sIm1hcHBpbmdzIjoiO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBV01BLG9COzs7Ozs7Ozs7Ozt1QkFFSztBQUFFLFdBQU9DLGlCQUFPLGlCQUFQLElBQTBCLGFBQWpDO0FBQWdEOzs7dUJBRWhEO0FBQUUsV0FBT0MsMEJBQVA7QUFBd0I7Ozs7R0FKSkMsbUJBQVNDLFU7O0FBSzNDOzttQkFFY0osb0IiLCJmaWxlIjoiYXR0YWNobWVudF9jb2xsZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vKlxuKiBAQXV0aG9yOiBMdXR6IFJlaXRlciwgRGVzaWduIFJlc2VhcmNoIExhYiwgVW5pdmVyc2l0w6R0IGRlciBLw7xuc3RlIEJlcmxpblxuKiBARGF0ZTogICAyMDE2LTA1LTA0IDExOjM4OjQxXG4qIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIGx1dHplclxuKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE2LTA3LTE1IDAwOjE3OjAzXG4qL1xuXG5pbXBvcnQgQmFja2JvbmUgZnJvbSAnYmFja2JvbmUnO1xuaW1wb3J0IENvbmZpZyBmcm9tICdjb25maWcnO1xuaW1wb3J0IEF0dGFjaG1lbnRNb2RlbCBmcm9tICdtb2RlbHMvYXR0YWNobWVudF9tb2RlbCc7XG5cbmNsYXNzIEF0dGFjaG1lbnRDb2xsZWN0aW9uIGV4dGVuZHMgQmFja2JvbmUuQ29sbGVjdGlvbiB7XG5cblx0Z2V0IHVybCgpIHsgcmV0dXJuIENvbmZpZ1snd2ViX3NlcnZpY2VfdXJsJ10rXCJhdHRhY2htZW50c1wiIH1cblxuXHRnZXQgbW9kZWwoKSB7IHJldHVybiBBdHRhY2htZW50TW9kZWwgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXR0YWNobWVudENvbGxlY3Rpb24iXX0=