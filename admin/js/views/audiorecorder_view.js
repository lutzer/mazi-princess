define(['exports', 'marionette', 'underscore', 'text!templates/audiorecorder_tmpl.html'], function (exports, _marionette, _underscore, _audiorecorder_tmpl) {
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

  var RecordingStates = {
    init: 'init',
    recording: 'recording',
    stopped: 'stopped',
    hidden: 'hidden'
  };

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
        this.state = RecordingStates.init;

        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia()) {
          this.state = RecordingStates.hidden;
        }
      }
    }, {
      key: 'onRecordButtonClicked',
      value: async function onRecordButtonClicked() {
        var _this2 = this;

        if (this.recorder) return;

        this.state = RecordingStates.recording;

        this.recorder = await getMediaRecorder();
        this.recorder.start();

        var audioChunks = [];
        this.recorder.ondataavailable = function (e) {
          audioChunks.push(e.data);
        };

        this.recorder.onstop = function () {
          _this2.state = RecordingStates.stopped;
          _this2.render();

          _this2.blob = new Blob(audioChunks);
          var audioUrl = window.URL.createObjectURL(_this2.blob);
          _this2.$("#recorder-audio-player")[0].src = audioUrl;
        };

        this.render();
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

        this.state = RecordingStates.init;
        this.render();
      }
    }, {
      key: 'onSaveButtonClicked',
      value: function onSaveButtonClicked() {

        var filename = 'audiofile';
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
    }, {
      key: 'templateHelpers',
      get: function get() {
        return {
          state: this.state
        };
      }
    }]);

    return AudioRecorderView;
  }(_marionette2.default.ItemView);

  exports.default = AudioRecorderView;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9hdWRpb3JlY29yZGVyX3ZpZXcuanMiXSwibmFtZXMiOlsiZ2V0TWVkaWFSZWNvcmRlciIsInN0cmVhbSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwiTWVkaWFSZWNvcmRlciIsInNsZWVwIiwibXMiLCJQcm9taXNlIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJSZWNvcmRpbmdTdGF0ZXMiLCJpbml0IiwicmVjb3JkaW5nIiwic3RvcHBlZCIsImhpZGRlbiIsIkF1ZGlvUmVjb3JkZXJWaWV3Iiwib3B0aW9ucyIsInJlY29yZGVyIiwiYmxvYiIsInN0YXRlIiwic3RhcnQiLCJhdWRpb0NodW5rcyIsIm9uZGF0YWF2YWlsYWJsZSIsImUiLCJwdXNoIiwiZGF0YSIsIm9uc3RvcCIsInJlbmRlciIsIkJsb2IiLCJhdWRpb1VybCIsIndpbmRvdyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIiQiLCJzcmMiLCJzdG9wIiwiZmlsZW5hbWUiLCJmaWxlIiwiRmlsZSIsInR5cGUiLCJtaW1lVHlwZSIsInRyaWdnZXJNZXRob2QiLCJfIiwidGVtcGxhdGUiLCJNYXJpb25ldHRlIiwiSXRlbVZpZXciXSwibWFwcGluZ3MiOiI7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQSxpQkFBZUEsZ0JBQWYsR0FBa0M7QUFDaEMsUUFBSUMsU0FBUyxNQUFNQyxVQUFVQyxZQUFWLENBQXVCQyxZQUF2QixDQUFxQyxFQUFFQyxPQUFPLElBQVQsRUFBckMsQ0FBbkI7QUFDQSxXQUFPLElBQUlDLGFBQUosQ0FBa0JMLE1BQWxCLENBQVA7QUFDRDs7QUFFRCxXQUFTTSxLQUFULENBQWVDLEVBQWYsRUFBbUI7QUFDakIsV0FBTyxJQUFJQyxPQUFKLENBQVk7QUFBQSxhQUFXQyxXQUFXQyxPQUFYLEVBQW9CSCxFQUFwQixDQUFYO0FBQUEsS0FBWixDQUFQO0FBQ0Q7O0FBRUQsTUFBTUksa0JBQWtCO0FBQ3RCQyxVQUFPLE1BRGU7QUFFdEJDLGVBQVcsV0FGVztBQUd0QkMsYUFBUyxTQUhhO0FBSXRCQyxZQUFRO0FBSmMsR0FBeEI7O01BT01DLGlCOzs7Ozs7Ozs7OzsrQkFPTztBQUNQLGVBQU87QUFDTCwwQ0FBaUMsdUJBRDVCO0FBRUwsd0NBQStCLHFCQUYxQjtBQUdMLDBDQUFpQyx1QkFINUI7QUFJTCx3Q0FBK0I7O0FBSjFCLFNBQVA7QUFPRDs7O2lDQVNVQyxPLEVBQVM7QUFDbEIsYUFBS0MsUUFBTCxHQUFnQixJQUFoQjtBQUNBLGFBQUtDLElBQUwsR0FBWSxJQUFaO0FBQ0EsYUFBS0MsS0FBTCxHQUFhVCxnQkFBZ0JDLElBQTdCOztBQUVBLFlBQUksQ0FBQ1gsVUFBVUMsWUFBWCxJQUEyQixDQUFDRCxVQUFVQyxZQUFWLENBQXVCQyxZQUF2QixFQUFoQyxFQUF1RTtBQUNyRSxlQUFLaUIsS0FBTCxHQUFhVCxnQkFBZ0JJLE1BQTdCO0FBQ0Q7QUFDRjs7O29EQUU2QjtBQUFBOztBQUM1QixZQUFJLEtBQUtHLFFBQVQsRUFDRTs7QUFFRixhQUFLRSxLQUFMLEdBQWFULGdCQUFnQkUsU0FBN0I7O0FBRUEsYUFBS0ssUUFBTCxHQUFnQixNQUFNbkIsa0JBQXRCO0FBQ0EsYUFBS21CLFFBQUwsQ0FBY0csS0FBZDs7QUFFQSxZQUFJQyxjQUFjLEVBQWxCO0FBQ0EsYUFBS0osUUFBTCxDQUFjSyxlQUFkLEdBQWdDLFVBQUNDLENBQUQsRUFBTztBQUNyQ0Ysc0JBQVlHLElBQVosQ0FBaUJELEVBQUVFLElBQW5CO0FBQ0QsU0FGRDs7QUFJQSxhQUFLUixRQUFMLENBQWNTLE1BQWQsR0FBdUIsWUFBTTtBQUMzQixpQkFBS1AsS0FBTCxHQUFhVCxnQkFBZ0JHLE9BQTdCO0FBQ0EsaUJBQUtjLE1BQUw7O0FBRUEsaUJBQUtULElBQUwsR0FBWSxJQUFJVSxJQUFKLENBQVNQLFdBQVQsQ0FBWjtBQUNBLGNBQU1RLFdBQVdDLE9BQU9DLEdBQVAsQ0FBV0MsZUFBWCxDQUEyQixPQUFLZCxJQUFoQyxDQUFqQjtBQUNBLGlCQUFLZSxDQUFMLENBQU8sd0JBQVAsRUFBaUMsQ0FBakMsRUFBb0NDLEdBQXBDLEdBQTBDTCxRQUExQztBQUNELFNBUEQ7O0FBU0EsYUFBS0YsTUFBTDtBQUNEOzs7NENBRXFCO0FBQ3BCLFlBQUksS0FBS1YsUUFBVCxFQUNFLEtBQUtBLFFBQUwsQ0FBY2tCLElBQWQ7QUFDSDs7OzhDQUV1QjtBQUN0QixhQUFLakIsSUFBTCxHQUFZLElBQVo7QUFDQSxhQUFLRCxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsYUFBS2dCLENBQUwsQ0FBTyx3QkFBUCxFQUFpQyxDQUFqQyxFQUFvQ0MsR0FBcEMsR0FBMEMsSUFBMUM7O0FBRUEsYUFBS2YsS0FBTCxHQUFhVCxnQkFBZ0JDLElBQTdCO0FBQ0EsYUFBS2dCLE1BQUw7QUFDRDs7OzRDQUVxQjs7QUFFcEIsWUFBSVMsc0JBQUo7QUFDQSxZQUFJQyxPQUFPLElBQUlDLElBQUosQ0FBUyxDQUFDLEtBQUtwQixJQUFOLENBQVQsRUFBc0JrQixRQUF0QixFQUFnQyxFQUFFRyxNQUFNLEtBQUt0QixRQUFMLENBQWN1QixRQUF0QixFQUFoQyxDQUFYO0FBQ0EsYUFBS0MsYUFBTCxDQUFtQixlQUFuQixFQUFvQ0osSUFBcEM7QUFDQSxhQUFLcEIsUUFBTCxHQUFnQixJQUFoQjtBQUNEOzs7MEJBN0VjO0FBQUUsZUFBT3lCLHFCQUFFQyxRQUFGLENBQVdBLDRCQUFYLENBQVA7QUFBNkI7OzswQkFFOUI7QUFBRSxlQUFPLGdCQUFQO0FBQXlCOzs7MEJBWXJCO0FBQ3RCLGVBQU87QUFDTHhCLGlCQUFPLEtBQUtBO0FBRFAsU0FBUDtBQUdDOzs7O0lBckIyQnlCLHFCQUFXQyxROztvQkFvRjVCOUIsaUIiLCJmaWxlIjoiYXVkaW9yZWNvcmRlcl92aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vKlxuKiBAQXV0aG9yOiBMdXR6IFJlaXRlciwgRGVzaWduIFJlc2VhcmNoIExhYiwgVW5pdmVyc2l0w6R0IGRlciBLw7xuc3RlIEJlcmxpblxuKiBARGF0ZTogICAyMDE2LTA1LTA0IDExOjM4OjQxXG4qIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIGx1dHplclxuKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE2LTA3LTA4IDAwOjQwOjI2XG4qL1xuXG5pbXBvcnQgTWFyaW9uZXR0ZSBmcm9tICdtYXJpb25ldHRlJ1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSdcblxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJ3RleHQhdGVtcGxhdGVzL2F1ZGlvcmVjb3JkZXJfdG1wbC5odG1sJztcblxuYXN5bmMgZnVuY3Rpb24gZ2V0TWVkaWFSZWNvcmRlcigpIHtcbiAgbGV0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhICh7IGF1ZGlvOiB0cnVlIH0pXG4gIHJldHVybiBuZXcgTWVkaWFSZWNvcmRlcihzdHJlYW0pO1xufVxuXG5mdW5jdGlvbiBzbGVlcChtcykge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbmNvbnN0IFJlY29yZGluZ1N0YXRlcyA9IHtcbiAgaW5pdCA6ICdpbml0JyxcbiAgcmVjb3JkaW5nOiAncmVjb3JkaW5nJyxcbiAgc3RvcHBlZDogJ3N0b3BwZWQnLFxuICBoaWRkZW46ICdoaWRkZW4nXG59XG5cbmNsYXNzIEF1ZGlvUmVjb3JkZXJWaWV3IGV4dGVuZHMgTWFyaW9uZXR0ZS5JdGVtVmlldyB7XG5cblx0ICAvKiBwcm9wZXJ0aWVzICovXG4gICAgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gXy50ZW1wbGF0ZSh0ZW1wbGF0ZSkgfVxuXG4gICAgZ2V0IGNsYXNzTmFtZSgpIHsgcmV0dXJuICdhdWRpby1yZWNvcmRlcicgfVxuXG4gICAgZXZlbnRzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ2NsaWNrICNyZWNvcmRlci1yZWNvcmRCdXR0b24nIDogJ29uUmVjb3JkQnV0dG9uQ2xpY2tlZCcsXG4gICAgICAgICdjbGljayAjcmVjb3JkZXItc3RvcEJ1dHRvbicgOiAnb25TdG9wQnV0dG9uQ2xpY2tlZCcsXG4gICAgICAgICdjbGljayAjcmVjb3JkZXItZGVsZXRlQnV0dG9uJyA6ICdvbkRlbGV0ZUJ1dHRvbkNsaWNrZWQnLFxuICAgICAgICAnY2xpY2sgI3JlY29yZGVyLXNhdmVCdXR0b24nIDogJ29uU2F2ZUJ1dHRvbkNsaWNrZWQnLFxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHRlbXBsYXRlSGVscGVycygpIHtcblx0XHQgIHJldHVybiB7XG5cdFx0ICAgIHN0YXRlOiB0aGlzLnN0YXRlXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogbWV0aG9kcyAqL1xuICAgIGluaXRpYWxpemUob3B0aW9ucykge1xuICAgICAgdGhpcy5yZWNvcmRlciA9IG51bGw7XG4gICAgICB0aGlzLmJsb2IgPSBudWxsO1xuICAgICAgdGhpcy5zdGF0ZSA9IFJlY29yZGluZ1N0YXRlcy5pbml0O1xuXG4gICAgICBpZiAoIW5hdmlnYXRvci5tZWRpYURldmljZXMgfHwgIW5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKCkpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFJlY29yZGluZ1N0YXRlcy5oaWRkZW5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBvblJlY29yZEJ1dHRvbkNsaWNrZWQoKSB7XG4gICAgICBpZiAodGhpcy5yZWNvcmRlcilcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICB0aGlzLnN0YXRlID0gUmVjb3JkaW5nU3RhdGVzLnJlY29yZGluZztcblxuICAgICAgdGhpcy5yZWNvcmRlciA9IGF3YWl0IGdldE1lZGlhUmVjb3JkZXIoKTtcbiAgICAgIHRoaXMucmVjb3JkZXIuc3RhcnQoKTtcblxuICAgICAgbGV0IGF1ZGlvQ2h1bmtzID0gW107XG4gICAgICB0aGlzLnJlY29yZGVyLm9uZGF0YWF2YWlsYWJsZSA9IChlKSA9PiB7XG4gICAgICAgIGF1ZGlvQ2h1bmtzLnB1c2goZS5kYXRhKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZWNvcmRlci5vbnN0b3AgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBSZWNvcmRpbmdTdGF0ZXMuc3RvcHBlZDtcbiAgICAgICAgdGhpcy5yZW5kZXIoKVxuXG4gICAgICAgIHRoaXMuYmxvYiA9IG5ldyBCbG9iKGF1ZGlvQ2h1bmtzKTtcbiAgICAgICAgY29uc3QgYXVkaW9VcmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLmJsb2IpO1xuICAgICAgICB0aGlzLiQoXCIjcmVjb3JkZXItYXVkaW8tcGxheWVyXCIpWzBdLnNyYyA9IGF1ZGlvVXJsO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJlbmRlcigpXG4gICAgfVxuXG4gICAgb25TdG9wQnV0dG9uQ2xpY2tlZCgpIHtcbiAgICAgIGlmICh0aGlzLnJlY29yZGVyKVxuICAgICAgICB0aGlzLnJlY29yZGVyLnN0b3AoKTtcbiAgICB9XG5cbiAgICBvbkRlbGV0ZUJ1dHRvbkNsaWNrZWQoKSB7XG4gICAgICB0aGlzLmJsb2IgPSBudWxsO1xuICAgICAgdGhpcy5yZWNvcmRlciA9IG51bGw7XG4gICAgICB0aGlzLiQoXCIjcmVjb3JkZXItYXVkaW8tcGxheWVyXCIpWzBdLnNyYyA9IG51bGw7XG5cbiAgICAgIHRoaXMuc3RhdGUgPSBSZWNvcmRpbmdTdGF0ZXMuaW5pdDtcbiAgICAgIHRoaXMucmVuZGVyKClcbiAgICB9XG5cbiAgICBvblNhdmVCdXR0b25DbGlja2VkKCkge1xuXG4gICAgICB2YXIgZmlsZW5hbWUgPSBgYXVkaW9maWxlYDtcbiAgICAgIGxldCBmaWxlID0gbmV3IEZpbGUoW3RoaXMuYmxvYl0sIGZpbGVuYW1lLCB7IHR5cGU6IHRoaXMucmVjb3JkZXIubWltZVR5cGUgfSk7XG4gICAgICB0aGlzLnRyaWdnZXJNZXRob2QoJ3NhdmVSZWNvcmRpbmcnLCBmaWxlKTtcbiAgICAgIHRoaXMucmVjb3JkZXIgPSBudWxsO1xuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXVkaW9SZWNvcmRlclZpZXciXX0=