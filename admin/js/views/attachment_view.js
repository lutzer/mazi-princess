define(['exports', 'backbone', 'marionette', 'underscore', 'config', 'models/attachment_model', 'utils', './audiorecorder_view', 'text!templates/attachment_tmpl.html'], function (exports, _backbone, _marionette, _underscore, _config, _attachment_model, _utils, _audiorecorder_view, _attachment_tmpl) {
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

    var _config2 = _interopRequireDefault(_config);

    var _attachment_model2 = _interopRequireDefault(_attachment_model);

    var _utils2 = _interopRequireDefault(_utils);

    var _audiorecorder_view2 = _interopRequireDefault(_audiorecorder_view);

    var _attachment_tmpl2 = _interopRequireDefault(_attachment_tmpl);

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

    var AttachmentView = function (_Marionette$LayoutVie) {
        _inherits(AttachmentView, _Marionette$LayoutVie);

        function AttachmentView() {
            _classCallCheck(this, AttachmentView);

            return _possibleConstructorReturn(this, (AttachmentView.__proto__ || Object.getPrototypeOf(AttachmentView)).apply(this, arguments));
        }

        _createClass(AttachmentView, [{
            key: 'regions',
            value: function regions() {
                return {
                    audiorecorder: '#audio-recorder'
                };
            }
        }, {
            key: 'onRender',
            value: function onRender() {
                if (!this.model.isNew()) this.getRegion('audiorecorder').show(new _audiorecorder_view2.default());
            }
        }, {
            key: 'events',
            value: function events() {
                return {
                    'click #saveButton': 'onSaveButtonClicked',
                    'click #deleteButton': 'onDeleteButtonClicked',
                    'change #input-upload-file': 'onFileInputChanged'
                };
            }
        }, {
            key: 'initialize',
            value: function initialize(options) {
                if (_underscore2.default.has(options, 'interview') && _underscore2.default.has(options, 'new')) {
                    this.model = new _attachment_model2.default({ interview: options.interview });
                    this.options.id = false;
                } else {
                    this.model = new _attachment_model2.default({ _id: options.id });
                    this.model.fetch();
                }

                //listen to model events
                this.listenTo(this.model, 'change', this.render);
            }
        }, {
            key: 'onSaveButtonClicked',
            value: function onSaveButtonClicked() {

                this.saveModel(function (error) {
                    if (error) alert(error);
                });
            }
        }, {
            key: 'onDeleteButtonClicked',
            value: function onDeleteButtonClicked() {
                if (confirm("Are you sure you want to delete the interview?")) {
                    this.model.destroy();
                    window.location.href = "#";
                }
            }
        }, {
            key: 'onFileInputChanged',
            value: function onFileInputChanged() {
                var _this2 = this;

                var uploadUrl = _config2.default.web_service_url + 'upload/attachment/' + this.model.id;

                var data = new FormData();
                data.append('file', self.$('#input-upload-file')[0].files[0]);

                console.log(data);

                _utils2.default.uploadFile(data, uploadUrl, function (error) {
                    if (error) alert("ERROR: " + error);else alert("File was successfully uploaded");
                    _this2.model.fetch();
                });
            }
        }, {
            key: 'onChildviewSaveRecording',
            value: function onChildviewSaveRecording(view, file) {
                var _this3 = this;

                var uploadUrl = _config2.default.web_service_url + 'upload/attachment/' + this.model.id;

                console.log(file);
                var data = new FormData();
                data.append('file', file);

                _utils2.default.uploadFile(data, uploadUrl, function (error) {
                    if (error) alert("ERROR: " + error);else alert("File was successfully uploaded");
                    _this3.model.fetch();
                });
            }
        }, {
            key: 'saveModel',
            value: function saveModel(callback) {
                this.model.set({
                    tags: this.$("#input-tags").val().split(" "),
                    text: this.$("#input-text").val()
                });

                this.model.save(null, {
                    success: function success() {
                        callback();
                    },
                    error: function error(_error) {
                        callback(_error);
                    }
                });
            }
        }, {
            key: 'template',
            get: function get() {
                return _underscore2.default.template(_attachment_tmpl2.default);
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
                    fileDir: _config2.default.files_url,
                    isNew: this.model.isNew()
                };
            }
        }]);

        return AttachmentView;
    }(_marionette2.default.LayoutView);

    exports.default = AttachmentView;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9hdHRhY2htZW50X3ZpZXcuanMiXSwibmFtZXMiOlsiQXR0YWNobWVudFZpZXciLCJhdWRpb3JlY29yZGVyIiwibW9kZWwiLCJpc05ldyIsImdldFJlZ2lvbiIsInNob3ciLCJBdWRpb1JlY29yZGVyVmlldyIsIm9wdGlvbnMiLCJfIiwiaGFzIiwiQXR0YWNobWVudE1vZGVsIiwiaW50ZXJ2aWV3IiwiaWQiLCJfaWQiLCJmZXRjaCIsImxpc3RlblRvIiwicmVuZGVyIiwic2F2ZU1vZGVsIiwiZXJyb3IiLCJhbGVydCIsImNvbmZpcm0iLCJkZXN0cm95Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidXBsb2FkVXJsIiwiQ29uZmlnIiwid2ViX3NlcnZpY2VfdXJsIiwiZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwic2VsZiIsIiQiLCJmaWxlcyIsImNvbnNvbGUiLCJsb2ciLCJ1dGlscyIsInVwbG9hZEZpbGUiLCJ2aWV3IiwiZmlsZSIsImNhbGxiYWNrIiwic2V0IiwidGFncyIsInZhbCIsInNwbGl0IiwidGV4dCIsInNhdmUiLCJzdWNjZXNzIiwidGVtcGxhdGUiLCJmaWxlRGlyIiwiZmlsZXNfdXJsIiwiTWFyaW9uZXR0ZSIsIkxheW91dFZpZXciXSwibWFwcGluZ3MiOiI7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBaUJNQSxjOzs7Ozs7Ozs7OztzQ0FjUTtBQUNOLHVCQUFPO0FBQ0hDLG1DQUFnQjtBQURiLGlCQUFQO0FBR0g7Ozt1Q0FFVTtBQUNQLG9CQUFJLENBQUMsS0FBS0MsS0FBTCxDQUFXQyxLQUFYLEVBQUwsRUFDSSxLQUFLQyxTQUFMLENBQWUsZUFBZixFQUFnQ0MsSUFBaEMsQ0FBc0MsSUFBSUMsNEJBQUosRUFBdEM7QUFDUDs7O3FDQUlRO0FBQ1AsdUJBQU87QUFDTCx5Q0FBc0Is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SWxCdEIsMkJBQU8sZUFBQ0EsTUFBRCxFQUFXO0FBQ2RzQixpQ0FBU3RCLE1BQVQ7QUFDSDtBQU5pQixpQkFBdEI7QUFRSDs7O2dDQTVHYztBQUFFLHVCQUFPVixxQkFBRXdDLFFBQUYsQ0FBV0EseUJBQVgsQ0FBUDtBQUE2Qjs7O2dDQUU5QjtBQUFFLHVCQUFPLFlBQVA7QUFBcUI7OztnQ0FFakI7QUFDdEIsdUJBQU87QUFDTEMsNkJBQVV2QixpQkFBT3dCLFNBRFo7QUFFQy9DLDJCQUFRLEtBQUtELEtBQUwsQ0FBV0MsS0FBWDtBQUZULGlCQUFQO0FBSUM7Ozs7TUFad0JnRCxxQkFBV0MsVTs7c0JBbUh6QnBELGMiLCJmaWxlIjoiYXR0YWNobWVudF92aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vKlxuKiBAQXV0aG9yOiBMdXR6IFJlaXRlciwgRGVzaWduIFJlc2VhcmNoIExhYiwgVW5pdmVyc2l0w6R0IGRlciBLw7xuc3RlIEJlcmxpblxuKiBARGF0ZTogICAyMDE2LTA1LTA0IDExOjM4OjQxXG4qIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIGx1dHplclxuKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE2LTA3LTE1IDE0OjQ0OjMyXG4qL1xuXG5pbXBvcnQgQmFja2JvbmUgZnJvbSAnYmFja2JvbmUnO1xuaW1wb3J0IE1hcmlvbmV0dGUgZnJvbSAnbWFyaW9uZXR0ZSc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCBDb25maWcgZnJvbSAnY29uZmlnJztcbmltcG9ydCBBdHRhY2htZW50TW9kZWwgZnJvbSAnbW9kZWxzL2F0dGFjaG1lbnRfbW9kZWwnO1xuaW1wb3J0IHV0aWxzIGZyb20gJ3V0aWxzJztcbmltcG9ydCBBdWRpb1JlY29yZGVyVmlldyBmcm9tICcuL2F1ZGlvcmVjb3JkZXJfdmlldyc7XG5cbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICd0ZXh0IXRlbXBsYXRlcy9hdHRhY2htZW50X3RtcGwuaHRtbCc7XG5cbmNsYXNzIEF0dGFjaG1lbnRWaWV3IGV4dGVuZHMgTWFyaW9uZXR0ZS5MYXlvdXRWaWV3IHtcblxuXHQvKiBwcm9wZXJ0aWVzICovXG4gICBcdGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIF8udGVtcGxhdGUodGVtcGxhdGUpIH1cblxuICAgIGdldCBjbGFzc05hbWUoKSB7IHJldHVybiAnc2luZ2xldmlldycgfVxuXG4gICAgZ2V0IHRlbXBsYXRlSGVscGVycygpIHtcblx0XHQgIHJldHVybiB7XG5cdFx0ICAgIGZpbGVEaXIgOiBDb25maWcuZmlsZXNfdXJsLFxuICAgICAgICAgICAgaXNOZXcgOiB0aGlzLm1vZGVsLmlzTmV3KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpb25zKCkgeyBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGF1ZGlvcmVjb3JkZXIgOiAnI2F1ZGlvLXJlY29yZGVyJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25SZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5tb2RlbC5pc05ldygpKVxuICAgICAgICAgICAgdGhpcy5nZXRSZWdpb24oJ2F1ZGlvcmVjb3JkZXInKS5zaG93KCBuZXcgQXVkaW9SZWNvcmRlclZpZXcoKSApO1xuICAgIH1cblxuICAgXG5cbiAgICBldmVudHMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnY2xpY2sgI3NhdmVCdXR0b24nIDogJ29uU2F2ZUJ1dHRvbkNsaWNrZWQnLFxuICAgICAgICAnY2xpY2sgI2RlbGV0ZUJ1dHRvbicgOiAnb25EZWxldGVCdXR0b25DbGlja2VkJyxcbiAgICAgICAgJ2NoYW5nZSAjaW5wdXQtdXBsb2FkLWZpbGUnIDogJ29uRmlsZUlucHV0Q2hhbmdlZCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBtZXRob2RzICovXG4gICAgaW5pdGlhbGl6ZShvcHRpb25zKSB7XG4gICAgICAgIGlmIChfLmhhcyhvcHRpb25zLCAnaW50ZXJ2aWV3JykgJiYgXy5oYXMob3B0aW9ucywgJ25ldycpKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gbmV3IEF0dGFjaG1lbnRNb2RlbCh7IGludGVydmlldyA6IG9wdGlvbnMuaW50ZXJ2aWV3IH0pO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlkID0gZmFsc2U7XG4gICAgICAgIH0gIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBBdHRhY2htZW50TW9kZWwoeyBfaWQ6IG9wdGlvbnMuaWQgfSk7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmZldGNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vbGlzdGVuIHRvIG1vZGVsIGV2ZW50c1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsJ2NoYW5nZScsdGhpcy5yZW5kZXIpO1xuICAgIH1cblxuICAgIG9uU2F2ZUJ1dHRvbkNsaWNrZWQoKSB7XG4gICAgICAgXG4gICAgICAgIHRoaXMuc2F2ZU1vZGVsKCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcilcbiAgICAgICAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRGVsZXRlQnV0dG9uQ2xpY2tlZCgpIHtcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSBpbnRlcnZpZXc/XCIpKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiI1wiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25GaWxlSW5wdXRDaGFuZ2VkKCkge1xuICAgICAgICB2YXIgdXBsb2FkVXJsID0gQ29uZmlnLndlYl9zZXJ2aWNlX3VybCArICd1cGxvYWQvYXR0YWNobWVudC8nICsgdGhpcy5tb2RlbC5pZDtcblxuICAgICAgICB2YXIgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgc2VsZi4kKCcjaW5wdXQtdXBsb2FkLWZpbGUnKVswXS5maWxlc1swXSlcblxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICB1dGlscy51cGxvYWRGaWxlKGRhdGEsIHVwbG9hZFVybCwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFUlJPUjogXCIgKyBlcnJvcik7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJGaWxlIHdhcyBzdWNjZXNzZnVsbHkgdXBsb2FkZWRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5mZXRjaCgpO1xuICAgICAgICB9KTsgICBcbiAgICB9XG5cbiAgICBvbkNoaWxkdmlld1NhdmVSZWNvcmRpbmcodmlldywgZmlsZSkge1xuICAgICAgICB2YXIgdXBsb2FkVXJsID0gQ29uZmlnLndlYl9zZXJ2aWNlX3VybCArICd1cGxvYWQvYXR0YWNobWVudC8nICsgdGhpcy5tb2RlbC5pZDtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGUpO1xuICAgICAgICB2YXIgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSlcblxuICAgICAgICB1dGlscy51cGxvYWRGaWxlKGRhdGEsIHVwbG9hZFVybCwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFUlJPUjogXCIgKyBlcnJvcik7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJGaWxlIHdhcyBzdWNjZXNzZnVsbHkgdXBsb2FkZWRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5mZXRjaCgpO1xuICAgICAgICB9KTsgICBcbiAgICB9XG5cbiAgICBzYXZlTW9kZWwoY2FsbGJhY2spIHtcbiAgICAgICAgIHRoaXMubW9kZWwuc2V0KHsgXG4gICAgICAgICAgICB0YWdzIDogdGhpcy4kKFwiI2lucHV0LXRhZ3NcIikudmFsKCkuc3BsaXQoXCIgXCIpLFxuICAgICAgICAgICAgdGV4dCA6IHRoaXMuJChcIiNpbnB1dC10ZXh0XCIpLnZhbCgpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubW9kZWwuc2F2ZShudWxsLCB7XG4gICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBBdHRhY2htZW50VmlldyJdfQ==