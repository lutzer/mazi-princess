define(['exports', 'backbone', 'marionette', 'underscore', 'moment', 'config', 'models/interview_model', 'models/attachment_collection', 'underscoreString', 'views/attachment_item_view', 'text!templates/interview_tmpl.html', 'moment_en_gb'], function (exports, _backbone, _marionette, _underscore, _moment, _config, _interview_model, _attachment_collection, _underscoreString, _attachment_item_view, _interview_tmpl) {
  'use strict';

  /*
  * @Author: Lutz Reiter, Design Research Lab, Universität der Künste Berlin
  * @Date:   2016-05-04 11:38:41
  * @Last Modified by:   lutzer
  * @Last Modified time: 2016-07-15 14:44:32
  */

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _backbone2 = _interopRequireDefault(_backbone);

  var _marionette2 = _interopRequireDefault(_marionette);

  var _underscore2 = _interopRequireDefault(_underscore);

  var _moment2 = _interopRequireDefault(_moment);

  var _config2 = _interopRequireDefault(_config);

  var _interview_model2 = _interopRequireDefault(_interview_model);

  var _attachment_collection2 = _interopRequireDefault(_attachment_collection);

  var _underscoreString2 = _interopRequireDefault(_underscoreString);

  var _attachment_item_view2 = _interopRequireDefault(_attachment_item_view);

  var _interview_tmpl2 = _interopRequireDefault(_interview_tmpl);

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

  var InterviewView = function (_Marionette$Composite) {
    _inherits(InterviewView, _Marionette$Composite);

    function InterviewView() {
      _classCallCheck(this, InterviewView);

      return _possibleConstructorReturn(this, (InterviewView.__proto__ || Object.getPrototypeOf(InterviewView)).apply(this, arguments));
    }

    _createClass(InterviewView, [{
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
        this.model = new _interview_model2.default({ _id: options.id });
        this.model.fetch();

        this.collection = new _attachment_collection2.default();

        //listen to model events
        this.listenTo(this.model, 'change', this.onModelChanged);
      }
    }, {
      key: 'onModelChanged',
      value: function onModelChanged() {
        this.collection.reset(this.model.get('attachments'));
        this.render();
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
        _backbone2.default.trigger('show:audioplayer', attachmentId);
      }
    }, {
      key: 'template',
      get: function get() {
        return _underscore2.default.template(_interview_tmpl2.default);
      }
    }, {
      key: 'className',
      get: function get() {
        return 'singleview';
      }
    }, {
      key: 'templateHelpers',
      get: function get() {
        return {
          filesUrl: _config2.default.files_url + this.model.get('_id') + '/',
          formatDate: function formatDate(date) {
            return (0, _moment2.default)(date).format("D.M.YYYY");
          },
          truncate: function truncate(string) {
            return _underscoreString2.default.truncate(string, _config2.default.stringTruncateShort);
          }
        };
      }
    }, {
      key: 'childViewContainer',
      get: function get() {
        return '#attachment-list';
      }
    }, {
      key: 'childView',
      get: function get() {
        return _attachment_item_view2.default;
      }
    }, {
      key: 'childViewOptions',
      get: function get() {
        return {
          interviewName: this.model.get('name')
        };
      }
    }]);

    return InterviewView;
  }(_marionette2.default.CompositeView);

  exports.default = InterviewView;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9pbnRlcnZpZXdfdmlldy5qcyJdLCJuYW1lcyI6WyJJbnRlcnZpZXdWaWV3Iiwib3B0aW9ucyIsIm1vZGVsIiwiSW50ZXJ2aWV3TW9kZWwiLCJfaWQiLCJpZCIsImZldGNoIiwiY29sbGVjdGlvbiIsIkF0dGFjaG1lbnRDb2xsZWN0aW9uIiwibGlzdGVuVG8iLCJvbk1vZGVsQ2hhbmdlZCIsInJlc2V0IiwiZ2V0IiwicmVuZGVyIiwiZXZlbnQiLCIkIiwidGFyZ2V0IiwidG9nZ2xlQ2xhc3MiLCJlIiwiYXR0YWNobWVudElkIiwiYXR0cmlidXRlcyIsInZhbHVlIiwiQmFja2JvbmUiLCJ0cmlnZ2VyIiwiXyIsInRlbXBsYXRlIiwiZmlsZXNVcmwiLCJDb25maWciLCJmaWxlc191cmwiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImZvcm1hdCIsInRydW5jYXRlIiwic3RyaW5nIiwiX3N0ciIsInN0cmluZ1RydW5jYXRlU2hvcnQiLCJBdHRhY2htZW50SXRlbVZpZXciLCJpbnRlcnZpZXdOYW1lIiwiTWFyaW9uZXR0ZSIsIkNvbXBvc2l0ZVZpZXciXSwibWFwcGluZ3MiOiI7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQXFCTUEsYTs7Ozs7Ozs7Ozs7K0JBbUJPO0FBQ1AsZUFBTztBQUNMLCtCQUFzQixxQkFEakI7QUFFTCxnQ0FBdUI7QUFGbEIsU0FBUDtBQUlEOzs7aUNBYVVDLE8sRUFBUztBQUNoQixhQUFLQyxLQUFMLEdBQWEsSUFBSUMseUJBQUosQ0FBbUIsRUFBRUMsS0FBS0gsUUFBUUksRUFBZixFQUFuQixDQUFiO0FBQ0EsYUFBS0gsS0FBTCxDQUFXSSxLQUFYOztBQUVBLGFBQUtDLFVBQUwsR0FBa0IsSUFBSUMsK0JBQUosRUFBbEI7O0FBRUE7QUFDQSxhQUFLQyxRQUFMLENBQWMsS0FBS1AsS0FBbkIsRUFBeUIsUUFBekIsRUFBbUMsS0FBS1EsY0FBeEM7QUFDSDs7O3VDQUdnQjtBQUNiLGFBQUtILFVBQUwsQ0FBZ0JJLEtBQWhCLENBQXNCLEtBQUtULEtBQUwsQ0FBV1UsR0FBWCxDQUFlLGFBQWYsQ0FBdEI7QUFDQSxhQUFLQyxNQUFMO0FBQ0g7OzswQ0FFbUJDLEssRUFBTztBQUN6QkMsVUFBRUQsTUFBTUUsTUFBUixFQUFnQkMsV0FBaEIsQ0FBNEIsUUFBNUI7QUFDRDs7OzBDQUVtQkMsQyxFQUFHO0FBQ25CLFlBQUlDLGVBQWVELEVBQUVGLE1BQUYsQ0FBU0ksVUFBVCxDQUFvQixTQUFwQixFQUErQkMsS0FBbEQ7QUFDQUMsMkJBQVNDLE9BQVQsQ0FBaUIsa0JBQWpCLEVBQW9DSixZQUFwQztBQUNIOzs7MEJBekRjO0FBQUUsZUFBT0sscUJBQUVDLFFBQUYsQ0FBV0Esd0JBQVgsQ0FBUDtBQUE2Qjs7OzBCQUU5QjtBQUFFLGVBQU8sWUFBUDtBQUFxQjs7OzBCQUVqQjtBQUN0QixlQUFPO0FBQ0xDLG9CQUFXQyxpQkFBT0MsU0FBUCxHQUFtQixLQUFLMUIsS0FBTCxDQUFXVSxHQUFYLENBQWUsS0FBZixDQUFuQixHQUEyQyxHQURqRDtBQUVIaUIsc0JBQWEsb0JBQVNDLElBQVQsRUFBZTtBQUMxQixtQkFBTyxzQkFBT0EsSUFBUCxFQUFhQyxNQUFiLENBQW9CLFVBQXBCLENBQVA7QUFDRCxXQUpFO0FBS0hDLG9CQUFXLGtCQUFTQyxNQUFULEVBQWlCO0FBQzFCLG1CQUFPQywyQkFBS0YsUUFBTCxDQUFjQyxNQUFkLEVBQXFCTixpQkFBT1EsbUJBQTVCLENBQVA7QUFDRDtBQVBFLFNBQVA7QUFTQzs7OzBCQVN3QjtBQUFFLGVBQU8sa0JBQVA7QUFBMkI7OzswQkFFdEM7QUFBRSxlQUFPQyw4QkFBUDtBQUEyQjs7OzBCQUV0QjtBQUNuQixlQUFPO0FBQ0hDLHlCQUFnQixLQUFLbkMsS0FBTCxDQUFXVSxHQUFYLENBQWUsTUFBZjtBQURiLFNBQVA7QUFHSDs7OztJQWxDdUIwQixxQkFBV0MsYTs7b0JBaUV4QnZDLGEiLCJmaWxlIjoiaW50ZXJ2aWV3X3ZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qXG4qIEBBdXRob3I6IEx1dHogUmVpdGVyLCBEZXNpZ24gUmVzZWFyY2ggTGFiLCBVbml2ZXJzaXTDpHQgZGVyIEvDvG5zdGUgQmVybGluXG4qIEBEYXRlOiAgIDIwMTYtMDUtMDQgMTE6Mzg6NDFcbiogQExhc3QgTW9kaWZpZWQgYnk6ICAgbHV0emVyXG4qIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTYtMDctMTUgMTQ6NDQ6MzJcbiovXG5cbmltcG9ydCBCYWNrYm9uZSBmcm9tICdiYWNrYm9uZSc7XG5pbXBvcnQgTWFyaW9uZXR0ZSBmcm9tICdtYXJpb25ldHRlJztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnXG5pbXBvcnQgTW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgJ21vbWVudF9lbl9nYic7XG5pbXBvcnQgQ29uZmlnIGZyb20gJ2NvbmZpZyc7XG5pbXBvcnQgSW50ZXJ2aWV3TW9kZWwgZnJvbSAnbW9kZWxzL2ludGVydmlld19tb2RlbCc7XG5pbXBvcnQgQXR0YWNobWVudENvbGxlY3Rpb24gZnJvbSAnbW9kZWxzL2F0dGFjaG1lbnRfY29sbGVjdGlvbic7XG5pbXBvcnQgX3N0ciBmcm9tICd1bmRlcnNjb3JlU3RyaW5nJztcblxuaW1wb3J0IEF0dGFjaG1lbnRJdGVtVmlldyBmcm9tICd2aWV3cy9hdHRhY2htZW50X2l0ZW1fdmlldyc7XG5cbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICd0ZXh0IXRlbXBsYXRlcy9pbnRlcnZpZXdfdG1wbC5odG1sJztcblxuY2xhc3MgSW50ZXJ2aWV3VmlldyBleHRlbmRzIE1hcmlvbmV0dGUuQ29tcG9zaXRlVmlldyB7XG5cblx0LyogcHJvcGVydGllcyAqL1xuICAgXHRnZXQgdGVtcGxhdGUoKSB7IHJldHVybiBfLnRlbXBsYXRlKHRlbXBsYXRlKSB9XG5cbiAgICBnZXQgY2xhc3NOYW1lKCkgeyByZXR1cm4gJ3NpbmdsZXZpZXcnIH1cblxuICAgIGdldCB0ZW1wbGF0ZUhlbHBlcnMoKSB7XG5cdFx0ICByZXR1cm4ge1xuXHRcdCAgICBmaWxlc1VybCA6IENvbmZpZy5maWxlc191cmwgKyB0aGlzLm1vZGVsLmdldCgnX2lkJykgKyAnLycsXG4gICAgICAgIGZvcm1hdERhdGUgOiBmdW5jdGlvbihkYXRlKSB7XG4gICAgICAgICAgcmV0dXJuIE1vbWVudChkYXRlKS5mb3JtYXQoXCJELk0uWVlZWVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgdHJ1bmNhdGUgOiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgICAgICByZXR1cm4gX3N0ci50cnVuY2F0ZShzdHJpbmcsQ29uZmlnLnN0cmluZ1RydW5jYXRlU2hvcnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnY2xpY2sgLmF0dGFjaG1lbnQnIDogJ29uQXR0YWNobWVudENsaWNrZWQnLFxuICAgICAgICAnY2xpY2sgLnBsYXktYnV0dG9uJyA6ICdvblBsYXlCdXR0b25DbGlja2VkJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBjaGlsZFZpZXdDb250YWluZXIoKSB7IHJldHVybiAnI2F0dGFjaG1lbnQtbGlzdCcgfVxuXG4gICAgZ2V0IGNoaWxkVmlldygpIHsgcmV0dXJuIEF0dGFjaG1lbnRJdGVtVmlldyB9XG5cbiAgICBnZXQgY2hpbGRWaWV3T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGludGVydmlld05hbWUgOiB0aGlzLm1vZGVsLmdldCgnbmFtZScpXG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgLyogbWV0aG9kcyAqL1xuICAgIGluaXRpYWxpemUob3B0aW9ucykge1xuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IEludGVydmlld01vZGVsKHsgX2lkOiBvcHRpb25zLmlkIH0pO1xuICAgICAgICB0aGlzLm1vZGVsLmZldGNoKCk7XG5cbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gbmV3IEF0dGFjaG1lbnRDb2xsZWN0aW9uKCk7XG4gICAgICAgIFxuICAgICAgICAvL2xpc3RlbiB0byBtb2RlbCBldmVudHNcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCdjaGFuZ2UnLCB0aGlzLm9uTW9kZWxDaGFuZ2VkKTtcbiAgICB9XG5cblxuICAgIG9uTW9kZWxDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24ucmVzZXQodGhpcy5tb2RlbC5nZXQoJ2F0dGFjaG1lbnRzJykpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIG9uQXR0YWNobWVudENsaWNrZWQoZXZlbnQpIHtcbiAgICAgICQoZXZlbnQudGFyZ2V0KS50b2dnbGVDbGFzcyhcImV4cGFuZFwiKTtcbiAgICB9XG5cbiAgICBvblBsYXlCdXR0b25DbGlja2VkKGUpIHtcbiAgICAgICAgdmFyIGF0dGFjaG1lbnRJZCA9IGUudGFyZ2V0LmF0dHJpYnV0ZXNbJ2RhdGEtaWQnXS52YWx1ZVxuICAgICAgICBCYWNrYm9uZS50cmlnZ2VyKCdzaG93OmF1ZGlvcGxheWVyJyxhdHRhY2htZW50SWQpO1xuICAgIH1cblxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcnZpZXdWaWV3Il19