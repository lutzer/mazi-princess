define(['exports', 'backbone', 'underscore', 'models/interview_model', 'config', 'utils'], function (exports, _backbone, _underscore, _interview_model, _config, _utils) {
	'use strict';

	/*
 * @Author: Lutz Reiter, Design Research Lab, Universität der Künste Berlin
 * @Date:   2016-05-04 11:38:41
 * @Last Modified by:   lutzer
 * @Last Modified time: 2016-07-07 22:07:43
 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _backbone2 = _interopRequireDefault(_backbone);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _interview_model2 = _interopRequireDefault(_interview_model);

	var _config2 = _interopRequireDefault(_config);

	var _utils2 = _interopRequireDefault(_utils);

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

	var InterviewCollection = function (_Backbone$Collection) {
		_inherits(InterviewCollection, _Backbone$Collection);

		function InterviewCollection() {
			_classCallCheck(this, InterviewCollection);

			var _this = _possibleConstructorReturn(this, (InterviewCollection.__proto__ || Object.getPrototypeOf(InterviewCollection)).call(this));

			_this.paginate = {
				totalRecords: false,
				page: 0,
				recordsPerPage: _config2.default.recordsPerPage
			};
			return _this;
		}

		_createClass(InterviewCollection, [{
			key: 'parse',
			value: function parse(response) {
				this.paginate.totalRecords = response.total_records;
				return response.docs;
			}
		}, {
			key: 'fetch',
			value: function fetch(options) {
				this.trigger('fetching');
				return _backbone2.default.Collection.prototype.fetch.call(this, options);
			}
		}, {
			key: 'getFirstPage',
			value: function getFirstPage() {
				var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


				var paginateOptions = {
					skip: 0,
					limit: this.paginate.recordsPerPage
				};

				this.fetch({ data: _utils2.default.encodeQueryParameters(_underscore2.default.extend(options, paginateOptions)) });
			}
		}, {
			key: 'getNextPage',
			value: function getNextPage(options) {

				if (this.paginate.recordsPerPage * this.paginate.page > this.paginate.totalRecords) return;

				this.paginate.page++;

				var paginateOptions = {
					skip: this.paginate.recordsPerPage * this.paginate.page,
					limit: this.paginate.recordsPerPage
				};

				this.fetch({ remove: false, data: _utils2.default.encodeQueryParameters(_underscore2.default.extend(options, paginateOptions)) });
			}
		}, {
			key: 'model',
			get: function get() {
				return _interview_model2.default;
			}
		}, {
			key: 'url',
			get: function get() {
				return _config2.default['web_service_url'] + "interviews";
			}
		}]);

		return InterviewCollection;
	}(_backbone2.default.Collection);

	;

	exports.default = InterviewCollection;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvaW50ZXJ2aWV3X2NvbGxlY3Rpb24uanMiXSwibmFtZXMiOlsiSW50ZXJ2aWV3Q29sbGVjdGlvbiIsInBhZ2luYXRlIiwidG90YWxSZWNvcmRzIiwicGFnZSIsInJlY29yZHNQZXJQYWdlIiwiQ29uZmlnIiwicmVzcG9uc2UiLCJ0b3RhbF9yZWNvcmRzIiwiZG9jcyIsIm9wdGlvbnMiLCJ0cmlnZ2VyIiwiQmFja2JvbmUiLCJDb2xsZWN0aW9uIiwicHJvdG90eXBlIiwiZmV0Y2giLCJjYWxsIiwicGFnaW5hdGVPcHRpb25zIiwic2tpcCIsImxpbWl0IiwiZGF0YSIsIlV0aWxzIiwiZW5jb2RlUXVlcnlQYXJhbWV0ZXJzIiwiXyIsImV4dGVuZCIsInJlbW92ZSIsIkludGVydmlld01vZGVsIl0sIm1hcHBpbmdzIjoiO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWFNQSxtQjs7O0FBRUwsaUNBQWM7QUFBQTs7QUFBQTs7QUFHYixTQUFLQyxRQUFMLEdBQWdCO0FBQ2ZDLGtCQUFlLEtBREE7QUFFZkMsVUFBTyxDQUZRO0FBR2ZDLG9CQUFpQkMsaUJBQU9EO0FBSFQsSUFBaEI7QUFIYTtBQVFiOzs7O3lCQU1LRSxRLEVBQVU7QUFDZixTQUFLTCxRQUFMLENBQWNDLFlBQWQsR0FBNkJJLFNBQVNDLGFBQXRDO0FBQ00sV0FBT0QsU0FBU0UsSUFBaEI7QUFDTjs7O3lCQUVLQyxPLEVBQVM7QUFDZCxTQUFLQyxPQUFMLENBQWEsVUFBYjtBQUNBLFdBQU9DLG1CQUFTQyxVQUFULENBQW9CQyxTQUFwQixDQUE4QkMsS0FBOUIsQ0FBb0NDLElBQXBDLENBQXlDLElBQXpDLEVBQThDTixPQUE5QyxDQUFQO0FBQ0c7OztrQ0FFcUI7QUFBQSxRQUFaQSxPQUFZLHVFQUFKLEVBQUk7OztBQUV4QixRQUFJTyxrQkFBa0I7QUFDckJDLFdBQU0sQ0FEZTtBQUVyQkMsWUFBTyxLQUFLakIsUUFBTCxDQUFjRztBQUZBLEtBQXRCOztBQUtBLFNBQUtVLEtBQUwsQ0FBVyxFQUFFSyxNQUFPQyxnQkFBTUMscUJBQU4sQ0FBNEJDLHFCQUFFQyxNQUFGLENBQVNkLE9BQVQsRUFBaUJPLGVBQWpCLENBQTVCLENBQVQsRUFBWDtBQUNBOzs7K0JBRVdQLE8sRUFBUzs7QUFFcEIsUUFBSSxLQUFLUixRQUFMLENBQWNHLGNBQWQsR0FBK0IsS0FBS0gsUUFBTCxDQUFjRSxJQUE3QyxHQUFvRCxLQUFLRixRQUFMLENBQWNDLFlBQXRFLEVBQ0M7O0FBRUQsU0FBS0QsUUFBTCxDQUFjRSxJQUFkOztBQUVBLFFBQUlhLGtCQUFrQjtBQUNyQkMsV0FBTSxLQUFLaEIsUUFBTCxDQUFjRyxjQUFkLEdBQStCLEtBQUtILFFBQUwsQ0FBY0UsSUFEOUI7QUFFckJlLFlBQU8sS0FBS2pCLFFBQUwsQ0FBY0c7QUFGQSxLQUF0Qjs7QUFLQSxTQUFLVSxLQUFMLENBQVcsRUFBRVUsUUFBUSxLQUFWLEVBQWlCTCxNQUFPQyxnQkFBTUMscUJBQU4sQ0FBNEJDLHFCQUFFQyxNQUFGLENBQVNkLE9BQVQsRUFBaUJPLGVBQWpCLENBQTVCLENBQXhCLEVBQVg7QUFDQTs7O3VCQXJDVztBQUFFLFdBQU9TLHlCQUFQO0FBQXVCOzs7dUJBRTNCO0FBQUUsV0FBT3BCLGlCQUFPLGlCQUFQLElBQTBCLFlBQWpDO0FBQStDOzs7O0dBZDFCTSxtQkFBU0MsVTs7QUFtRDFDOzttQkFFY1osbUIiLCJmaWxlIjoiaW50ZXJ2aWV3X2NvbGxlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qXG4qIEBBdXRob3I6IEx1dHogUmVpdGVyLCBEZXNpZ24gUmVzZWFyY2ggTGFiLCBVbml2ZXJzaXTDpHQgZGVyIEvDvG5zdGUgQmVybGluXG4qIEBEYXRlOiAgIDIwMTYtMDUtMDQgMTE6Mzg6NDFcbiogQExhc3QgTW9kaWZpZWQgYnk6ICAgbHV0emVyXG4qIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTYtMDctMDcgMjI6MDc6NDNcbiovXG5cbmltcG9ydCBCYWNrYm9uZSBmcm9tICdiYWNrYm9uZSc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCBJbnRlcnZpZXdNb2RlbCBmcm9tICdtb2RlbHMvaW50ZXJ2aWV3X21vZGVsJztcbmltcG9ydCBDb25maWcgZnJvbSAnY29uZmlnJztcbmltcG9ydCBVdGlscyBmcm9tICd1dGlscyc7XG5cbmNsYXNzIEludGVydmlld0NvbGxlY3Rpb24gZXh0ZW5kcyBCYWNrYm9uZS5Db2xsZWN0aW9uIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5wYWdpbmF0ZSA9IHtcblx0XHRcdHRvdGFsUmVjb3JkcyA6IGZhbHNlLFxuXHRcdFx0cGFnZSA6IDAsXG5cdFx0XHRyZWNvcmRzUGVyUGFnZSA6IENvbmZpZy5yZWNvcmRzUGVyUGFnZVxuXHRcdH1cblx0fVxuXG5cdGdldCBtb2RlbCgpIHsgcmV0dXJuIEludGVydmlld01vZGVsIH1cblxuXHRnZXQgdXJsKCkgeyByZXR1cm4gQ29uZmlnWyd3ZWJfc2VydmljZV91cmwnXStcImludGVydmlld3NcIiB9XG5cblx0cGFyc2UocmVzcG9uc2UpIHtcblx0XHR0aGlzLnBhZ2luYXRlLnRvdGFsUmVjb3JkcyA9IHJlc3BvbnNlLnRvdGFsX3JlY29yZHM7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kb2NzO1xuXHR9XG5cblx0ZmV0Y2gob3B0aW9ucykge1xuXHRcdHRoaXMudHJpZ2dlcignZmV0Y2hpbmcnKTtcblx0XHRyZXR1cm4gQmFja2JvbmUuQ29sbGVjdGlvbi5wcm90b3R5cGUuZmV0Y2guY2FsbCh0aGlzLG9wdGlvbnMpOyAgICAgIFxuICAgIH1cblxuXHRnZXRGaXJzdFBhZ2Uob3B0aW9ucz17fSkge1xuXG5cdFx0dmFyIHBhZ2luYXRlT3B0aW9ucyA9IHtcblx0XHRcdHNraXA6IDAsXG5cdFx0XHRsaW1pdDogdGhpcy5wYWdpbmF0ZS5yZWNvcmRzUGVyUGFnZVxuXHRcdH1cblxuXHRcdHRoaXMuZmV0Y2goeyBkYXRhIDogVXRpbHMuZW5jb2RlUXVlcnlQYXJhbWV0ZXJzKF8uZXh0ZW5kKG9wdGlvbnMscGFnaW5hdGVPcHRpb25zKSkgfSk7XG5cdH1cblxuXHRnZXROZXh0UGFnZShvcHRpb25zKSB7XG5cblx0XHRpZiAodGhpcy5wYWdpbmF0ZS5yZWNvcmRzUGVyUGFnZSAqIHRoaXMucGFnaW5hdGUucGFnZSA+IHRoaXMucGFnaW5hdGUudG90YWxSZWNvcmRzKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0dGhpcy5wYWdpbmF0ZS5wYWdlICsrO1xuXG5cdFx0dmFyIHBhZ2luYXRlT3B0aW9ucyA9IHtcblx0XHRcdHNraXA6IHRoaXMucGFnaW5hdGUucmVjb3Jkc1BlclBhZ2UgKiB0aGlzLnBhZ2luYXRlLnBhZ2UsXG5cdFx0XHRsaW1pdDogdGhpcy5wYWdpbmF0ZS5yZWNvcmRzUGVyUGFnZVxuXHRcdH1cblxuXHRcdHRoaXMuZmV0Y2goeyByZW1vdmU6IGZhbHNlLCBkYXRhIDogVXRpbHMuZW5jb2RlUXVlcnlQYXJhbWV0ZXJzKF8uZXh0ZW5kKG9wdGlvbnMscGFnaW5hdGVPcHRpb25zKSkgfSk7XG5cdH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJ2aWV3Q29sbGVjdGlvbiJdfQ==