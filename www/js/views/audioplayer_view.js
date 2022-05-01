define(['exports', 'marionette', 'underscore', 'config', 'models/attachment_model', 'underscoreString', 'text!templates/audioplayer_tmpl.html'], function (exports, _marionette, _underscore, _config, _attachment_model, _underscoreString, _audioplayer_tmpl) {
    'use strict';

    /*
    * @Author: Lutz Reiter, Design Research Lab, Universität der Künste Berlin
    * @Date:   2016-05-04 11:38:41
    * @Last Modified by:   lutzer
    * @Last Modified time: 2016-07-13 15:05:34
    */

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _marionette2 = _interopRequireDefault(_marionette);

    var _underscore2 = _interopRequireDefault(_underscore);

    var _config2 = _interopRequireDefault(_config);

    var _attachment_model2 = _interopRequireDefault(_attachment_model);

    var _underscoreString2 = _interopRequireDefault(_underscoreString);

    var _audioplayer_tmpl2 = _interopRequireDefault(_audioplayer_tmpl);

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

    function formatTime(secs) {
        var min = Math.floor(secs / 60);
        var sec = Math.floor(secs % 60);

        //if (min < 10) {min = '0' + parseInt(min);}
        if (sec < 10) {
            sec = '0' + parseInt(sec);
        }

        return min + ':' + sec;
    }

    var AudioPlayerView = function (_Marionette$ItemView) {
        _inherits(AudioPlayerView, _Marionette$ItemView);

        function AudioPlayerView() {
            _classCallCheck(this, AudioPlayerView);

            return _possibleConstructorReturn(this, (AudioPlayerView.__proto__ || Object.getPrototypeOf(AudioPlayerView)).apply(this, arguments));
        }

        _createClass(AudioPlayerView, [{
            key: 'events',
            value: function events() {
                return {
                    'click .play-button': 'onPlayButtonClicked',
                    'mouseup .audio-seek-control': 'onAudioSeek'
                };
            }
        }, {
            key: 'initialize',
            value: function initialize(options) {

                this.model = new _attachment_model2.default({ _id: options.id });
                this.model.fetch();

                this.audio = null;

                this.listenTo(this.model, 'change', this.onModelFetched);
            }
        }, {
            key: 'onModelFetched',
            value: function onModelFetched() {
                this.render();

                if (this.audio == null) {
                    this.audio = document.createElement("audio");

                    //bind audio events
                    $(this.audio).on('timeupdate', this.onAudioTimeUpdate);
                    $(this.audio).on('play', this.onAudioPlay);
                    $(this.audio).on('pause', this.onAudioPause);
                    $(this.audio).on('loadstart', this.onAudioLoad);
                    $(this.audio).on('canplay', this.onAudioLoaded);
                }

                //create audioElement
                if (this.model.get('file')) {
                    var filesUrl = _config2.default.files_url + this.model.get('interview')._id + '/';
                    var el = $(this.audio);
                    el.attr("autoplay", "autoplay");
                    el.attr("src", filesUrl + this.model.get('file').name);
                }
            }
        }, {
            key: 'onBeforeDestroy',
            value: function onBeforeDestroy() {
                if (this.audio != null) {

                    //unbind audio events
                    $(this.audio).off('timeupdate', this.onAudioTimeUpdate);
                    $(this.audio).off('play', this.onAudioPlay);
                    $(this.audio).off('pause', this.onAudioPause);
                    $(this.audio).off('loadstart', this.onAudioLoad);
                    $(this.audio).off('canplay', this.onAudioLoaded);

                    $(this.audio).attr('src', "");
                    $(this.audio).remove();
                }
            }
        }, {
            key: 'onAudioTimeUpdate',
            value: function onAudioTimeUpdate(event) {

                var progress = event.target.currentTime / event.target.duration;
                var timeRemaining = event.target.duration - event.target.currentTime;

                var minutes = Math.floor(timeRemaining / 60);
                var seconds = Math.floor(timeRemaining % 60);

                $('.audio-player-progress-bar').width(progress * 100 + "%");
                $('#time-remaining').html("- " + formatTime(timeRemaining));
            }
        }, {
            key: 'setTimeRemaining',
            value: function setTimeRemaining() {}
        }, {
            key: 'onAudioPlay',
            value: function onAudioPlay() {
                $('.play-button').addClass('playing');
            }
        }, {
            key: 'onAudioPause',
            value: function onAudioPause() {
                $('.play-button').removeClass('playing');
            }
        }, {
            key: 'onPlayButtonClicked',
            value: function onPlayButtonClicked() {
                if (this.audio.paused) this.audio.play();else this.audio.pause();
            }
        }, {
            key: 'onAudioSeek',
            value: function onAudioSeek(event) {
                if (this.audio) {
                    var percent = event.offsetX / $(event.target).width();
                    this.audio.currentTime = percent * this.audio.duration;
                }
            }
        }, {
            key: 'onAudioLoad',
            value: function onAudioLoad() {
                $('#time-remaining').html("Loading...");
            }
        }, {
            key: 'onAudioLoaded',
            value: function onAudioLoaded(event) {
                $('#time-remaining').html("- 0:00");
                $('#time-remaining').html("- " + formatTime(event.target.duration));
            }
        }, {
            key: 'template',
            get: function get() {
                return _underscore2.default.template(_audioplayer_tmpl2.default);
            }
        }, {
            key: 'className',
            get: function get() {
                return 'audioplayer';
            }
        }, {
            key: 'templateHelpers',
            get: function get() {
                return {
                    truncate: function truncate(string) {
                        return _underscoreString2.default.truncate(string, _config2.default.stringTruncateShort);
                    }
                };
            }
        }]);

        return AudioPlayerView;
    }(_marionette2.default.ItemView);

    exports.default = AudioPlayerView;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9hdWRpb3BsYXllcl92aWV3LmpzIl0sIm5hbWVzIjpbImZvcm1hdFRpbWUiLCJzZWNzIiwibWluIiwiTWF0aCIsImZsb29yIiwic2VjIiwicGFyc2VJbnQiLCJBdWRpb1BsYXllclZpZXciLCJvcHRpb25zIiwibW9kZWwiLCJBdHRhY2htZW50TW9kZWwiLCJfaWQiLCJpZCIsImZldGNoIiwiYXVkaW8iLCJsaXN0ZW5UbyIsIm9uTW9kZWxGZXRjaGVkIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiJCIsIm9uIiwib25BdWRpb1RpbWVVcGRhdGUiLCJvbkF1ZGlvUGxheSIsIm9uQXVkaW9QYXVzZSIsIm9uQXVkaW9Mb2FkIiwib25BdWRpb0xvYWRlZCIsImdldCIsImZpbGVzVXJsIiwiQ29uZmlnIiwiZmlsZXNfdXJsIiwiZWwiLCJhdHRyIiwibmFtZSIsIm9mZiIsInJlbW92ZSIsImV2ZW50IiwicHJvZ3Jlc3MiLCJ0YXJnZXQiLCJjdXJyZW50VGltZSIsImR1cmF0aW9uIiwidGltZVJlbWFpbmluZyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwid2lkdGgiLCJodG1sIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInBhdXNlZCIsInBsYXkiLCJwYXVzZSIsInBlcmNlbnQiLCJvZmZzZXRYIiwiXyIsInRlbXBsYXRlIiwidHJ1bmNhdGUiLCJzdHJpbmciLCJfc3RyIiwic3RyaW5nVHJ1bmNhdGVTaG9ydCIsIk1hcmlvbmV0dGUiLCJJdGVtVmlldyJdLCJtYXBwaW5ncyI6IjtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBLGFBQVNBLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3RCLFlBQUlDLE1BQU1DLEtBQUtDLEtBQUwsQ0FBV0gsT0FBTyxFQUFsQixDQUFWO0FBQ0EsWUFBSUksTUFBTUYs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RixFQUFxQnlCLElBQXJCLENBQTBCLE9BQUs3QyxXQUFXb0MsTUFBTUUsTUFBTixDQUFhRSxRQUF4QixDQUEvQjtBQUNIOzs7Z0NBakhjO0FBQUUsdUJBQU9hLHFCQUFFQyxRQUFGLENBQVdBLDBCQUFYLENBQVA7QUFBNkI7OztnQ0FFOUI7QUFBRSx1QkFBTyxhQUFQO0FBQXNCOzs7Z0NBU2xCO0FBQ2xCLHVCQUFPO0FBQ0hDLDhCQUFXLGtCQUFTQyxNQUFULEVBQWlCO0FBQ3hCLCtCQUFPQywyQkFBS0YsUUFBTCxDQUFjQyxNQUFkLEVBQXFCM0IsaUJBQU82QixtQkFBNUIsQ0FBUDtBQUNIO0FBSEUsaUJBQVA7QUFLSDs7OztNQXBCeUJDLHFCQUFXQyxROztzQkF3SDFCckQsZSIsImZpbGUiOiJhdWRpb3BsYXllcl92aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vKlxuKiBAQXV0aG9yOiBMdXR6IFJlaXRlciwgRGVzaWduIFJlc2VhcmNoIExhYiwgVW5pdmVyc2l0w6R0IGRlciBLw7xuc3RlIEJlcmxpblxuKiBARGF0ZTogICAyMDE2LTA1LTA0IDExOjM4OjQxXG4qIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIGx1dHplclxuKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE2LTA3LTEzIDE1OjA1OjM0XG4qL1xuXG5pbXBvcnQgTWFyaW9uZXR0ZSBmcm9tICdtYXJpb25ldHRlJ1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSdcbmltcG9ydCBDb25maWcgZnJvbSAnY29uZmlnJztcbmltcG9ydCBBdHRhY2htZW50TW9kZWwgZnJvbSAnbW9kZWxzL2F0dGFjaG1lbnRfbW9kZWwnO1xuaW1wb3J0IF9zdHIgZnJvbSAndW5kZXJzY29yZVN0cmluZyc7XG5cbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICd0ZXh0IXRlbXBsYXRlcy9hdWRpb3BsYXllcl90bXBsLmh0bWwnO1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lKHNlY3MpIHtcbiAgICB2YXIgbWluID0gTWF0aC5mbG9vcihzZWNzIC8gNjApO1xuICAgIHZhciBzZWMgPSBNYXRoLmZsb29yKHNlY3MgJSA2MCk7XG4gICAgXG4gICAgLy9pZiAobWluIDwgMTApIHttaW4gPSAnMCcgKyBwYXJzZUludChtaW4pO31cbiAgICBpZiAoc2VjIDwgMTApIHtzZWMgPSAnMCcgKyBwYXJzZUludChzZWMpO31cblxuICAgIHJldHVybiAgbWluICsgJzonICsgc2VjO1xufVxuXG5jbGFzcyBBdWRpb1BsYXllclZpZXcgZXh0ZW5kcyBNYXJpb25ldHRlLkl0ZW1WaWV3IHtcblxuXHQvKiBwcm9wZXJ0aWVzICovXG4gICAgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gXy50ZW1wbGF0ZSh0ZW1wbGF0ZSkgfVxuXG4gICAgZ2V0IGNsYXNzTmFtZSgpIHsgcmV0dXJuICdhdWRpb3BsYXllcicgfVxuXG4gICAgZXZlbnRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ2NsaWNrIC5wbGF5LWJ1dHRvbicgOiAnb25QbGF5QnV0dG9uQ2xpY2tlZCcsXG4gICAgICAgICAgICAnbW91c2V1cCAuYXVkaW8tc2Vlay1jb250cm9sJyA6ICdvbkF1ZGlvU2VlaydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCB0ZW1wbGF0ZUhlbHBlcnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0cnVuY2F0ZSA6IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfc3RyLnRydW5jYXRlKHN0cmluZyxDb25maWcuc3RyaW5nVHJ1bmNhdGVTaG9ydClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qIG1ldGhvZHMgKi9cbiAgICBpbml0aWFsaXplKG9wdGlvbnMpIHtcblxuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IEF0dGFjaG1lbnRNb2RlbCh7IF9pZDogb3B0aW9ucy5pZH0gKTtcbiAgICAgICAgdGhpcy5tb2RlbC5mZXRjaCgpO1xuXG4gICAgICAgIHRoaXMuYXVkaW8gPSBudWxsO1xuXG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwnY2hhbmdlJyx0aGlzLm9uTW9kZWxGZXRjaGVkKTtcbiAgICB9XG5cbiAgICBvbk1vZGVsRmV0Y2hlZCgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgICAgICBpZiAodGhpcy5hdWRpbyA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpO1xuXG4gICAgICAgICAgICAvL2JpbmQgYXVkaW8gZXZlbnRzXG4gICAgICAgICAgICAkKHRoaXMuYXVkaW8pLm9uKCd0aW1ldXBkYXRlJyx0aGlzLm9uQXVkaW9UaW1lVXBkYXRlKTtcbiAgICAgICAgICAgICQodGhpcy5hdWRpbykub24oJ3BsYXknLHRoaXMub25BdWRpb1BsYXkpO1xuICAgICAgICAgICAgJCh0aGlzLmF1ZGlvKS5vbigncGF1c2UnLHRoaXMub25BdWRpb1BhdXNlKTtcbiAgICAgICAgICAgICQodGhpcy5hdWRpbykub24oJ2xvYWRzdGFydCcsdGhpcy5vbkF1ZGlvTG9hZCk7XG4gICAgICAgICAgICAkKHRoaXMuYXVkaW8pLm9uKCdjYW5wbGF5Jyx0aGlzLm9uQXVkaW9Mb2FkZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jcmVhdGUgYXVkaW9FbGVtZW50XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgnZmlsZScpKSB7XG4gICAgICAgICAgICB2YXIgZmlsZXNVcmwgPSBDb25maWcuZmlsZXNfdXJsICsgdGhpcy5tb2RlbC5nZXQoJ2ludGVydmlldycpLl9pZCArICcvJztcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcy5hdWRpbylcbiAgICAgICAgICAgIGVsLmF0dHIoXCJhdXRvcGxheVwiLFwiYXV0b3BsYXlcIik7XG4gICAgICAgICAgICBlbC5hdHRyKFwic3JjXCIsZmlsZXNVcmwgKyB0aGlzLm1vZGVsLmdldCgnZmlsZScpLm5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CZWZvcmVEZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5hdWRpbyAhPSBudWxsKSB7XG5cbiAgICAgICAgICAgIC8vdW5iaW5kIGF1ZGlvIGV2ZW50c1xuICAgICAgICAgICAgJCh0aGlzLmF1ZGlvKS5vZmYoJ3RpbWV1cGRhdGUnLHRoaXMub25BdWRpb1RpbWVVcGRhdGUpO1xuICAgICAgICAgICAgJCh0aGlzLmF1ZGlvKS5vZmYoJ3BsYXknLHRoaXMub25BdWRpb1BsYXkpO1xuICAgICAgICAgICAgJCh0aGlzLmF1ZGlvKS5vZmYoJ3BhdXNlJyx0aGlzLm9uQXVkaW9QYXVzZSk7XG4gICAgICAgICAgICAkKHRoaXMuYXVkaW8pLm9mZignbG9hZHN0YXJ0Jyx0aGlzLm9uQXVkaW9Mb2FkKTtcbiAgICAgICAgICAgICQodGhpcy5hdWRpbykub2ZmKCdjYW5wbGF5Jyx0aGlzLm9uQXVkaW9Mb2FkZWQpO1xuXG4gICAgICAgICAgICAkKHRoaXMuYXVkaW8pLmF0dHIoJ3NyYycsXCJcIik7XG4gICAgICAgICAgICAkKHRoaXMuYXVkaW8pLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BdWRpb1RpbWVVcGRhdGUoZXZlbnQpIHtcblxuICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBldmVudC50YXJnZXQuY3VycmVudFRpbWUgLyBldmVudC50YXJnZXQuZHVyYXRpb25cbiAgICAgICAgdmFyIHRpbWVSZW1haW5pbmcgPSBldmVudC50YXJnZXQuZHVyYXRpb24gLSBldmVudC50YXJnZXQuY3VycmVudFRpbWVcblxuICAgICAgICB2YXIgbWludXRlcyA9IE1hdGguZmxvb3IodGltZVJlbWFpbmluZyAvIDYwKTtcbiAgICAgICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKHRpbWVSZW1haW5pbmcgJSA2MCk7XG5cbiAgICAgICAgJCgnLmF1ZGlvLXBsYXllci1wcm9ncmVzcy1iYXInKS53aWR0aChwcm9ncmVzcyoxMDArXCIlXCIpO1xuICAgICAgICAkKCcjdGltZS1yZW1haW5pbmcnKS5odG1sKFwiLSBcIitmb3JtYXRUaW1lKHRpbWVSZW1haW5pbmcpKTtcbiAgICB9XG5cbiAgICBzZXRUaW1lUmVtYWluaW5nKCkge1xuXG4gICAgfVxuXG4gICAgb25BdWRpb1BsYXkoKSB7XG4gICAgICAgICQoJy5wbGF5LWJ1dHRvbicpLmFkZENsYXNzKCdwbGF5aW5nJyk7XG4gICAgfVxuXG4gICAgb25BdWRpb1BhdXNlKCkge1xuICAgICAgICAkKCcucGxheS1idXR0b24nKS5yZW1vdmVDbGFzcygncGxheWluZycpO1xuICAgIH1cblxuICAgIG9uUGxheUJ1dHRvbkNsaWNrZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1ZGlvLnBhdXNlZClcbiAgICAgICAgICAgIHRoaXMuYXVkaW8ucGxheSgpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLmF1ZGlvLnBhdXNlKCk7XG4gICAgfVxuXG4gICAgb25BdWRpb1NlZWsoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuYXVkaW8pIHtcbiAgICAgICAgICAgIHZhciBwZXJjZW50ID0gZXZlbnQub2Zmc2V0WCAvICQoZXZlbnQudGFyZ2V0KS53aWR0aCgpO1xuICAgICAgICAgICAgdGhpcy5hdWRpby5jdXJyZW50VGltZSA9IHBlcmNlbnQgKiB0aGlzLmF1ZGlvLmR1cmF0aW9uXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkF1ZGlvTG9hZCgpIHtcbiAgICAgICAgJCgnI3RpbWUtcmVtYWluaW5nJykuaHRtbChcIkxvYWRpbmcuLi5cIik7XG4gICAgfVxuXG4gICAgb25BdWRpb0xvYWRlZChldmVudCkge1xuICAgICAgICAkKCcjdGltZS1yZW1haW5pbmcnKS5odG1sKFwiLSAwOjAwXCIpO1xuICAgICAgICAkKCcjdGltZS1yZW1haW5pbmcnKS5odG1sKFwiLSBcIitmb3JtYXRUaW1lKGV2ZW50LnRhcmdldC5kdXJhdGlvbikpO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBdWRpb1BsYXllclZpZXciXX0=