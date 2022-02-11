define(['exports', 'marionette', 'underscore', 'mime-types', 'text!templates/audiorecorder_tmpl.html'], function (exports, _marionette, _underscore, _mimeTypes, _audiorecorder_tmpl) {
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

  var _mimeTypes2 = _interopRequireDefault(_mimeTypes);

  var _audiorecorder_tmpl2 = _interopRequireDefault(_audiorecorder_tmpl);

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

  async function getMediaRecorder() {
    var stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    return new MediaRecorder(stream);
  }

  function sleep(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }

  var AudioRecorderView = function (_Marionette$ItemView) {
    _inherits(AudioRecorderView, _Marionette$ItemView);

    function AudioRecorderView() {
      _classCallCheck(this, AudioRecorderView);

      return _possibleConstructorReturn(this, (AudioRecorderView.__proto__ || Object.getPrototypeOf(AudioRecorderView)).apply(this, arguments));
    }

    _createClass(AudioRecorderView, [{
      key: 'events',
      value: function events() {
        return {
          'click #recorder-recordButton': 'onRecordButtonClicked',
          'click #recorder-stopButton': 'onStopButtonClicked',
          'click #recorder-deleteButton': 'onDeleteButtonClicked',
          'click #recorder-saveButton': 'onSaveButtonClicked'

        };
      }
    }, {
      key: 'initialize',
      value: function initialize(options) {
        this.recorder = null;
        this.blob = null;
      }
    }, {
      key: 'onRecordButtonClicked',
      value: async function onRecordButtonClicked() {
        var _this2 = this;

        if (this.recorder) return;

        this.recorder = await getMediaRecorder();
        this.recorder.start();

        var audioChunks = [];
        this.recorder.ondataavailable = function (e) {
          audioChunks.push(e.data);
        };

        this.recorder.onstop = function () {
          _this2.blob = new Blob(audioChunks, { 'type': 'audio/ogg; codecs=opus' });
          var audioUrl = window.URL.createObjectURL(_this2.blob);
          _this2.$("#recorder-audio-player")[0].src = audioUrl;
        };
      }
    }, {
      key: 'onStopButtonClicked',
      value: function onStopButtonClicked() {
        if (this.recorder) this.recorder.stop();
      }
    }, {
      key: 'onDeleteButtonClicked',
      value: function onDeleteButtonClicked() {
        this.blob = null;
        this.recorder = null;
        this.$("#recorder-audio-player")[0].src = null;
      }
    }, {
      key: 'onSaveButtonClicked',
      value: function onSaveButtonClicked() {
        var filename = 'audio.' + _mimeTypes2.default.extension(this.recorder.mimeType);
        var file = new File([this.blob], filename, { type: this.recorder.mimeType });
        this.triggerMethod('saveRecording', file);
        this.recorder = null;
      }
    }, {
      key: 'template',
      get: function get() {
        return _underscore2.default.template(_audiorecorder_tmpl2.default);
      }
    }, {
      key: 'className',
      get: function get() {
        return 'audio-recorder';
      }
    }]);

    return AudioRecorderView;
  }(_marionette2.default.ItemView);

  exports.default = AudioRecorderView;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9hdWRpb3JlY29yZGVyX3ZpZXcuanMiXSwibmFtZXMiOlsiZ2V0TWVkaWFSZWNvcmRlciIsInN0cmVhbSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwiTWVkaWFSZWNvcmRlciIsInNsZWVwIiwibXMiLCJQcm9taXNlIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJBdWRpb1JlY29yZGVyVmlldyIsIm9wdGlvbnMiLCJyZWNvcmRlciIsImJsb2IiLCJzdGFydCIsImF1ZGlvQ2h1bmtzIiwib25kYXRhYXZhaWxhYmxlIiwiZSIsInB1c2giLCJkYXRhIiwib25zdG9wIiwiQmxvYiIsImF1ZGlvVXJsIiwid2luZG93IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiJCIsInNyYyIsInN0b3AiLCJmaWxlbmFtZSIsIm1pbWUiLCJleHRlbnNpb24iLCJtaW1lVHlwZSIsImZpbGUiLCJGaWxlIiwidHlwZSIsInRyaWdnZXJNZXRob2QiLCJfIiwidGVtcGxhdGUiLCJNYXJpb25ldHRlIiwiSXRlbVZpZXciXSwibWFwcGluZ3MiOiI7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBLGlCQUFlQSxnQkFBZixHQUFrQztBQUNoQyxRQUFJQyxTQUFTLE1BQU1DLFVBQVVDLFlBQVYsQ0FBdUJDLFlBQXZCLENBQXFDLEVBQUVDLE9BQU8sSUFBVCxFQUFyQyxDQUFuQjtBQUNBLFdBQU8sSUFBSUMsYUFBSixDQUFrQkwsTUFBbEIsQ0FBUDtBQUNEOztBQUVELFdBQVNNLEtBQVQsQ0FBZUMsRUFBZixFQUFtQjtBQUNqQixXQUFPLElBQUlDLE9BQUosQ0FBWTtBQUFBLGFBQVdDLFdBQVdDLE9BQVgsRUFBb0JILEVBQXBCLENBQVg7QUFBQSxLQUFaLENBQVA7QUFDRDs7TUFFS0ksaUI7Ozs7Ozs7Ozs7OytCQU9PO0FBQ1AsZUFBTztBQUNMLDBDQUFpQyx1QkFENUI7QUFFTCx3Q0FBK0IscUJBRjFCO0FBR0wsMENBQWlDLHVCQUg1QjtBQUlMLHdDQUErQjs7QUFKMUIsU0FBUDtBQU9EOzs7aUNBR1VDLE8sRUFBUztBQUNsQixhQUFLQyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsYUFBS0MsSUFBTCxHQUFZLElBQVo7QUFDRDs7O29EQUU2QjtBQUFBOztBQUM1QixZQUFJLEtBQUtELFFBQVQsRUFDRTs7QUFFRixhQUFLQSxRQUFMLEdBQWdCLE1BQU1kLGtCQUF0QjtBQUNBLGFBQUtjLFFBQUwsQ0FBY0UsS0FBZDs7QUFFQSxZQUFJQyxjQUFjLEVBQWxCO0FBQ0EsYUFBS0gsUUFBTCxDQUFjSSxlQUFkLEdBQWdDLFVBQUNDLENBQUQsRUFBTztBQUNyQ0Ysc0JBQVlHLElBQVosQ0FBaUJELEVBQUVFLElBQW5CO0FBQ0QsU0FGRDs7QUFJQSxhQUFLUCxRQUFMLENBQWNRLE1BQWQsR0FBdUIsWUFBTTtBQUMzQixpQkFBS1AsSUFBTCxHQUFZLElBQUlRLElBQUosQ0FBU04sV0FBVCxFQUFzQixFQUFFLFFBQVMsd0JBQVgsRUFBdEIsQ0FBWjtBQUNBLGNBQU1PLFdBQVdDLE9BQU9DLEdBQVAsQ0FBV0MsZUFBWCxDQUEyQixPQUFLWixJQUFoQyxDQUFqQjtBQUNBLGlCQUFLYSxDQUFMLENBQU8sd0JBQVAsRUFBaUMsQ0FBakMsRUFBb0NDLEdBQXBDLEdBQTBDTCxRQUExQztBQUNELFNBSkQ7QUFLRDs7OzRDQUVxQjtBQUNwQixZQUFJLEtBQUtWLFFBQVQsRUFDRSxLQUFLQSxRQUFMLENBQWNnQixJQUFkO0FBQ0g7Ozs4Q0FFdUI7QUFDdEIsYUFBS2YsSUFBTCxHQUFZLElBQVo7QUFDQSxhQUFLRCxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsYUFBS2MsQ0FBTCxDQUFPLHdCQUFQLEVBQWlDLENBQWpDLEVBQW9DQyxHQUFwQyxHQUEwQyxJQUExQztBQUNEOzs7NENBRXFCO0FBQ3BCLFlBQUlFLHNCQUFvQkMsb0JBQUtDLFNBQUwsQ0FBZSxLQUFLbkIsUUFBTCxDQUFjb0IsUUFBN0IsQ0FBeEI7QUFDQSxZQUFJQyxPQUFPLElBQUlDLElBQUosQ0FBUyxDQUFDLEtBQUtyQixJQUFOLENBQVQsRUFBc0JnQixRQUF0QixFQUFnQyxFQUFFTSxNQUFNLEtBQUt2QixRQUFMLENBQWNvQixRQUF0QixFQUFoQyxDQUFYO0FBQ0EsYUFBS0ksYUFBTCxDQUFtQixlQUFuQixFQUFvQ0gsSUFBcEM7QUFDQSxhQUFLckIsUUFBTCxHQUFnQixJQUFoQjtBQUNEOzs7MEJBdkRjO0FBQUUsZUFBT3lCLHFCQUFFQyxRQUFGLENBQVdBLDRCQUFYLENBQVA7QUFBNkI7OzswQkFFOUI7QUFBRSxlQUFPLGdCQUFQO0FBQXlCOzs7O0lBTGZDLHFCQUFXQyxROztvQkE4RDVCOUIsaUIiLCJmaWxlIjoiYXVkaW9yZWNvcmRlcl92aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vKlxuKiBAQXV0aG9yOiBMdXR6IFJlaXRlciwgRGVzaWduIFJlc2VhcmNoIExhYiwgVW5pdmVyc2l0w6R0IGRlciBLw7xuc3RlIEJlcmxpblxuKiBARGF0ZTogICAyMDE2LTA1LTA0IDExOjM4OjQxXG4qIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIGx1dHplclxuKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE2LTA3LTA4IDAwOjQwOjI2XG4qL1xuXG5pbXBvcnQgTWFyaW9uZXR0ZSBmcm9tICdtYXJpb25ldHRlJ1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSdcbmltcG9ydCBtaW1lIGZyb20gJ21pbWUtdHlwZXMnXG5cbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICd0ZXh0IXRlbXBsYXRlcy9hdWRpb3JlY29yZGVyX3RtcGwuaHRtbCc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldE1lZGlhUmVjb3JkZXIoKSB7XG4gIGxldCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSAoeyBhdWRpbzogdHJ1ZSB9KVxuICByZXR1cm4gbmV3IE1lZGlhUmVjb3JkZXIoc3RyZWFtKTtcbn1cblxuZnVuY3Rpb24gc2xlZXAobXMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuXG5jbGFzcyBBdWRpb1JlY29yZGVyVmlldyBleHRlbmRzIE1hcmlvbmV0dGUuSXRlbVZpZXcge1xuXG5cdCAgLyogcHJvcGVydGllcyAqL1xuICAgIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIF8udGVtcGxhdGUodGVtcGxhdGUpIH1cblxuICAgIGdldCBjbGFzc05hbWUoKSB7IHJldHVybiAnYXVkaW8tcmVjb3JkZXInIH1cblxuICAgIGV2ZW50cygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdjbGljayAjcmVjb3JkZXItcmVjb3JkQnV0dG9uJyA6ICdvblJlY29yZEJ1dHRvbkNsaWNrZWQnLFxuICAgICAgICAnY2xpY2sgI3JlY29yZGVyLXN0b3BCdXR0b24nIDogJ29uU3RvcEJ1dHRvbkNsaWNrZWQnLFxuICAgICAgICAnY2xpY2sgI3JlY29yZGVyLWRlbGV0ZUJ1dHRvbicgOiAnb25EZWxldGVCdXR0b25DbGlja2VkJyxcbiAgICAgICAgJ2NsaWNrICNyZWNvcmRlci1zYXZlQnV0dG9uJyA6ICdvblNhdmVCdXR0b25DbGlja2VkJyxcblxuICAgICAgfVxuICAgIH1cblxuICAgIC8qIG1ldGhvZHMgKi9cbiAgICBpbml0aWFsaXplKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMucmVjb3JkZXIgPSBudWxsO1xuICAgICAgdGhpcy5ibG9iID0gbnVsbDtcbiAgICB9XG5cbiAgICBhc3luYyBvblJlY29yZEJ1dHRvbkNsaWNrZWQoKSB7XG4gICAgICBpZiAodGhpcy5yZWNvcmRlcilcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICB0aGlzLnJlY29yZGVyID0gYXdhaXQgZ2V0TWVkaWFSZWNvcmRlcigpO1xuICAgICAgdGhpcy5yZWNvcmRlci5zdGFydCgpO1xuXG4gICAgICBsZXQgYXVkaW9DaHVua3MgPSBbXTtcbiAgICAgIHRoaXMucmVjb3JkZXIub25kYXRhYXZhaWxhYmxlID0gKGUpID0+IHtcbiAgICAgICAgYXVkaW9DaHVua3MucHVzaChlLmRhdGEpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJlY29yZGVyLm9uc3RvcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5ibG9iID0gbmV3IEJsb2IoYXVkaW9DaHVua3MsIHsgJ3R5cGUnIDogJ2F1ZGlvL29nZzsgY29kZWNzPW9wdXMnIH0pO1xuICAgICAgICBjb25zdCBhdWRpb1VybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuYmxvYik7XG4gICAgICAgIHRoaXMuJChcIiNyZWNvcmRlci1hdWRpby1wbGF5ZXJcIilbMF0uc3JjID0gYXVkaW9Vcmw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb25TdG9wQnV0dG9uQ2xpY2tlZCgpIHtcbiAgICAgIGlmICh0aGlzLnJlY29yZGVyKVxuICAgICAgICB0aGlzLnJlY29yZGVyLnN0b3AoKTtcbiAgICB9XG5cbiAgICBvbkRlbGV0ZUJ1dHRvbkNsaWNrZWQoKSB7XG4gICAgICB0aGlzLmJsb2IgPSBudWxsO1xuICAgICAgdGhpcy5yZWNvcmRlciA9IG51bGw7XG4gICAgICB0aGlzLiQoXCIjcmVjb3JkZXItYXVkaW8tcGxheWVyXCIpWzBdLnNyYyA9IG51bGw7XG4gICAgfVxuXG4gICAgb25TYXZlQnV0dG9uQ2xpY2tlZCgpIHtcbiAgICAgIHZhciBmaWxlbmFtZSA9IGBhdWRpby4ke21pbWUuZXh0ZW5zaW9uKHRoaXMucmVjb3JkZXIubWltZVR5cGUpfWA7XG4gICAgICBsZXQgZmlsZSA9IG5ldyBGaWxlKFt0aGlzLmJsb2JdLCBmaWxlbmFtZSwgeyB0eXBlOiB0aGlzLnJlY29yZGVyLm1pbWVUeXBlIH0pO1xuICAgICAgdGhpcy50cmlnZ2VyTWV0aG9kKCdzYXZlUmVjb3JkaW5nJywgZmlsZSk7XG4gICAgICB0aGlzLnJlY29yZGVyID0gbnVsbDtcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvUmVjb3JkZXJWaWV3Il19