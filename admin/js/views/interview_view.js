define(['exports', 'backbone', 'marionette', 'underscore', 'config', 'models/interview_model', 'views/attachment_list_view', 'utils', 'text!templates/interview_tmpl.html'], function (exports, _backbone, _marionette, _underscore, _config, _interview_model, _attachment_list_view, _utils, _interview_tmpl) {
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

    var _interview_model2 = _interopRequireDefault(_interview_model);

    var _attachment_list_view2 = _interopRequireDefault(_attachment_list_view);

    var _utils2 = _interopRequireDefault(_utils);

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

    var InterviewView = function (_Marionette$LayoutVie) {
        _inherits(InterviewView, _Marionette$LayoutVie);

        function InterviewView() {
            _classCallCheck(this, InterviewView);

            return _possibleConstructorReturn(this, (InterviewView.__proto__ || Object.getPrototypeOf(InterviewView)).apply(this, arguments));
        }

        _createClass(InterviewView, [{
            key: 'regions',
            value: function regions() {
                return {
                    attachments: '#interview-attachments'
                };
            }
        }, {
            key: 'events',
            value: function events() {
                return {
                    'click #saveButton': 'onSaveButtonClicked',
                    'click #deleteButton': 'onDeleteButtonClicked',
                    'click #add-attachment-button': 'onAddAttachmentButtonClicked',
                    'change #input-upload-file': 'onFileInputChanged'
                };
            }
        }, {
            key: 'initialize',
            value: function initialize(options) {

                if (_underscore2.default.has(options, 'new')) {
                    this.model = new _interview_model2.default();
                    this.options.id = false;
                } else {
                    this.model = new _interview_model2.default({ _id: options.id });
                    this.model.fetch();
                }

                //listen to model events
                this.listenTo(this.model, 'change', this.render);
            }
        }, {
            key: 'onRender',
            value: function onRender() {
                this.getRegion('attachments').show(new _attachment_list_view2.default({ interview: this.options.id }));
            }
        }, {
            key: 'onSaveButtonClicked',
            value: function onSaveButtonClicked() {
                var _this2 = this;

                this.saveModel(function (error) {
                    if (error) alert(error);else window.location.href = "#interview/" + _this2.model.id;
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
            key: 'onAddAttachmentButtonClicked',
            value: function onAddAttachmentButtonClicked() {
                window.location.href = '#attachment/add/' + this.options.id;
            }
        }, {
            key: 'onFileInputChanged',
            value: function onFileInputChanged() {
                var _this3 = this;

                var uploadUrl = _config2.default.web_service_url + 'upload/image/' + this.model.id;

                var data = new FormData();
                data.append('file', self.$('#input-upload-file')[0].files[0]);

                _utils2.default.uploadFile(data, uploadUrl, function (error) {
                    if (error) alert("ERROR: " + error);else alert("File was successfully uploaded");
                    _this3.model.fetch();
                });
            }
        }, {
            key: 'saveModel',
            value: function saveModel(callback) {
                this.model.set({
                    name: this.$("#input-name").val(),
                    role: this.$("#input-role").val(),
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
                    isNew: this.model.isNew()
                };
            }
        }]);

        return InterviewView;
    }(_marionette2.default.LayoutView);

    exports.default = InterviewView;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9pbnRlcnZpZXdfdmlldy5qcyJdLCJuYW1lcyI6WyJJbnRlcnZpZXdWaWV3IiwiYXR0YWNobWVudHMiLCJvcHRpb25zIiwiXyIsImhhcyIsIm1vZGVsIiwiSW50ZXJ2aWV3TW9kZWwiLCJpZCIsIl9pZCIsImZldGNoIiwibGlzdGVuVG8iLCJyZW5kZXIiLCJnZXRSZWdpb24iLCJzaG93IiwiQXR0YWNobWVudExpc3RWaWV3IiwiaW50ZXJ2aWV3Iiwic2F2ZU1vZGVsIiwiZXJyb3IiLCJhbGVydCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNvbmZpcm0iLCJkZXN0cm95IiwidXBsb2FkVXJsIiwiQ29uZmlnIiwid2ViX3NlcnZpY2VfdXJsIiwiZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwic2VsZiIsIiQiLCJmaWxlcyIsInV0aWxzIiwidXBsb2FkRmlsZSIsImNhbGxiYWNrIiwic2V0IiwibmFtZSIsInZhbCIsInJvbGUiLCJ0ZXh0Iiwic2F2ZSIsInN1Y2Nlc3MiLCJ0ZW1wbGF0ZSIsImZpbGVzVXJsIiwiZmlsZXNfdXJsIiwiZ2V0IiwiaXNOZXciLCJNYXJpb25ldHRlIiwiTGF5b3V0VmlldyJdLCJtYXBwaW5ncyI6IjtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFpQk1BLGE7Ozs7Ozs7Ozs7O3NDQWNPO0FBQ1AsdUJBQU87QUFDTEMsaUNBQWM7QUFEVCxpQkFBUDtBQUdEOzs7cUNBRVE7QUFDUCx1QkFBTztBQUNMLHlDQUFzQixxQkFEakI7QUFFTCwyQ0FBd0IsdUJBRm5CO0FBR0wsb0RBQWlDLDhCQUg1QjtBQUlMLGlEQUE4QjtBQUp6QixpQkFBUDtBQU1EOzs7dUNBR1VDLE8sRUFBUzs7QUFFaEIsb0JBQUlDLHFCQUFFQyxHQUFGLENBQU1GLE9BQU4sRUFBZSxLQUFmLENBQUosRUFBMkI7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QUlDOzs7O01BWnVCQyxxQkFBV0MsVTs7c0JBdUd4QmpELGEiLCJmaWxlIjoiaW50ZXJ2aWV3X3ZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qXG4qIEBBdXRob3I6IEx1dHogUmVpdGVyLCBEZXNpZ24gUmVzZWFyY2ggTGFiLCBVbml2ZXJzaXTDpHQgZGVyIEvDvG5zdGUgQmVybGluXG4qIEBEYXRlOiAgIDIwMTYtMDUtMDQgMTE6Mzg6NDFcbiogQExhc3QgTW9kaWZpZWQgYnk6ICAgbHV0emVyXG4qIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTYtMDctMTUgMTQ6NDQ6MzJcbiovXG5cbmltcG9ydCBCYWNrYm9uZSBmcm9tICdiYWNrYm9uZSc7XG5pbXBvcnQgTWFyaW9uZXR0ZSBmcm9tICdtYXJpb25ldHRlJztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0IENvbmZpZyBmcm9tICdjb25maWcnO1xuaW1wb3J0IEludGVydmlld01vZGVsIGZyb20gJ21vZGVscy9pbnRlcnZpZXdfbW9kZWwnO1xuaW1wb3J0IEF0dGFjaG1lbnRMaXN0VmlldyBmcm9tICd2aWV3cy9hdHRhY2htZW50X2xpc3Rfdmlldyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAndXRpbHMnO1xuXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAndGV4dCF0ZW1wbGF0ZXMvaW50ZXJ2aWV3X3RtcGwuaHRtbCc7XG5cbmNsYXNzIEludGVydmlld1ZpZXcgZXh0ZW5kcyBNYXJpb25ldHRlLkxheW91dFZpZXcge1xuXG5cdC8qIHByb3BlcnRpZXMgKi9cbiAgIFx0Z2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gXy50ZW1wbGF0ZSh0ZW1wbGF0ZSkgfVxuXG4gICAgZ2V0IGNsYXNzTmFtZSgpIHsgcmV0dXJuICdzaW5nbGV2aWV3JyB9XG5cbiAgICBnZXQgdGVtcGxhdGVIZWxwZXJzKCkge1xuXHRcdCAgcmV0dXJuIHtcblx0XHQgICAgZmlsZXNVcmwgOiBDb25maWcuZmlsZXNfdXJsICsgdGhpcy5tb2RlbC5nZXQoJ19pZCcpICsgJy8nLFxuICAgICAgICAgICAgaXNOZXcgOiB0aGlzLm1vZGVsLmlzTmV3KClcbiAgICAgIH1cbiAgICB9XG5cbiAgIHJlZ2lvbnMoKSB7IFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXR0YWNobWVudHMgOiAnI2ludGVydmlldy1hdHRhY2htZW50cydcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnY2xpY2sgI3NhdmVCdXR0b24nIDogJ29uU2F2ZUJ1dHRvbkNsaWNrZWQnLFxuICAgICAgICAnY2xpY2sgI2RlbGV0ZUJ1dHRvbicgOiAnb25EZWxldGVCdXR0b25DbGlja2VkJyxcbiAgICAgICAgJ2NsaWNrICNhZGQtYXR0YWNobWVudC1idXR0b24nIDogJ29uQWRkQXR0YWNobWVudEJ1dHRvbkNsaWNrZWQnLFxuICAgICAgICAnY2hhbmdlICNpbnB1dC11cGxvYWQtZmlsZScgOiAnb25GaWxlSW5wdXRDaGFuZ2VkJ1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIG1ldGhvZHMgKi9cbiAgICBpbml0aWFsaXplKG9wdGlvbnMpIHtcblxuICAgICAgICBpZiAoXy5oYXMob3B0aW9ucywgJ25ldycpKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gbmV3IEludGVydmlld01vZGVsKCk7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaWQgPSBmYWxzZTtcbiAgICAgICAgfSAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gbmV3IEludGVydmlld01vZGVsKHsgX2lkOiBvcHRpb25zLmlkIH0pO1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5mZXRjaCgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL2xpc3RlbiB0byBtb2RlbCBldmVudHNcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCdjaGFuZ2UnLHRoaXMucmVuZGVyKTtcbiAgICB9XG5cbiAgICBvblJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5nZXRSZWdpb24oJ2F0dGFjaG1lbnRzJykuc2hvdyggbmV3IEF0dGFjaG1lbnRMaXN0Vmlldyh7IGludGVydmlldyA6IHRoaXMub3B0aW9ucy5pZCB9KSApO1xuICAgIH1cblxuICAgIG9uU2F2ZUJ1dHRvbkNsaWNrZWQoKSB7XG4gICAgICAgIHRoaXMuc2F2ZU1vZGVsKCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcilcbiAgICAgICAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIjaW50ZXJ2aWV3L1wiK3RoaXMubW9kZWwuaWQ7XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25EZWxldGVCdXR0b25DbGlja2VkKCkge1xuICAgICAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIGludGVydmlldz9cIikpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZGVzdHJveSgpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCIjXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkFkZEF0dGFjaG1lbnRCdXR0b25DbGlja2VkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjYXR0YWNobWVudC9hZGQvJyArIHRoaXMub3B0aW9ucy5pZDtcbiAgICB9XG5cbiAgICBvbkZpbGVJbnB1dENoYW5nZWQoKSB7XG4gICAgICAgIHZhciB1cGxvYWRVcmwgPSBDb25maWcud2ViX3NlcnZpY2VfdXJsICsgJ3VwbG9hZC9pbWFnZS8nICsgdGhpcy5tb2RlbC5pZDtcblxuICAgICAgICB2YXIgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIHNlbGYuJCgnI2lucHV0LXVwbG9hZC1maWxlJylbMF0uZmlsZXNbMF0pO1xuXG4gICAgICAgIHV0aWxzLnVwbG9hZEZpbGUoZGF0YSwgdXBsb2FkVXJsLCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcilcbiAgICAgICAgICAgICAgICBhbGVydChcIkVSUk9SOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBhbGVydChcIkZpbGUgd2FzIHN1Y2Nlc3NmdWxseSB1cGxvYWRlZFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLmZldGNoKCk7XG4gICAgICAgIH0pOyAgIFxuICAgIH1cblxuICAgIHNhdmVNb2RlbChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm1vZGVsLnNldCh7IFxuICAgICAgICAgICAgbmFtZSA6IHRoaXMuJChcIiNpbnB1dC1uYW1lXCIpLnZhbCgpLFxuICAgICAgICAgICAgcm9sZSA6IHRoaXMuJChcIiNpbnB1dC1yb2xlXCIpLnZhbCgpLFxuICAgICAgICAgICAgdGV4dCA6IHRoaXMuJChcIiNpbnB1dC10ZXh0XCIpLnZhbCgpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubW9kZWwuc2F2ZShudWxsLCB7XG4gICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcnZpZXdWaWV3Il19