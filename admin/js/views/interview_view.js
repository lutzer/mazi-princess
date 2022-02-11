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
                _utils2.default.uploadFile(self.$('#input-upload-file'), uploadUrl, function (error) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9pbnRlcnZpZXdfdmlldy5qcyJdLCJuYW1lcyI6WyJJbnRlcnZpZXdWaWV3IiwiYXR0YWNobWVudHMiLCJvcHRpb25zIiwiXyIsImhhcyIsIm1vZGVsIiwiSW50ZXJ2aWV3TW9kZWwiLCJpZCIsIl9pZCIsImZldGNoIiwibGlzdGVuVG8iLCJyZW5kZXIiLCJnZXRSZWdpb24iLCJzaG93IiwiQXR0YWNobWVudExpc3RWaWV3IiwiaW50ZXJ2aWV3Iiwic2F2ZU1vZGVsIiwiZXJyb3IiLCJhbGVydCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNvbmZpcm0iLCJkZXN0cm95IiwidXBsb2FkVXJsIiwiQ29uZmlnIiwid2ViX3NlcnZpY2VfdXJsIiwidXRpbHMiLCJ1cGxvYWRGaWxlIiwic2VsZiIsIiQiLCJjYWxsYmFjayIsInNldCIsIm5hbWUiLCJ2YWwiLCJyb2xlIiwidGV4dCIsInNhdmUiLCJzdWNjZXNzIiwidGVtcGxhdGUiLCJmaWxlc1VybCIsImZpbGVzX3VybCIsImdldCIsImlzTmV3IiwiTWFyaW9uZXR0ZSIsIkxheW91dFZpZXciXSwibWFwcGluZ3MiOiI7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBaUJNQSxhOzs7Ozs7Ozs7OztzQ0FjTztBQUNQLHVCQUFPO0FBQ0xDLGlDQUFjO0FBRFQsaUJBQVA7QUFHRDs7O3FDQUVRO0FBQ1AsdUJBQU87QUFDTCx5Q0FBc0IscUJBRGpCO0FBRUwsMkNBQXdCLHVCQUZuQjtBQUdMLG9EQUFpQyw4QkFINUI7QUFJTCxpREFBOEI7QUFKekIsaUJBQVA7QUFNRDs7O3VDQUdVQyxPLEVBQVM7O0FBRWhCLG9CQUFJQyxxQkFBRUMsR0FBRixDQUFNRixPQUFOLEVBQWUsS0FBZixDQUFKLEVBQTJCO0FBQ3ZCLHlCQUFLRyxLQUFMLEdBQWEsSUFBSUMseUJBQUosRUFBYjtBQUNBLHlCQUFLSixPQUFMLENBQWFLLEVBQWIsR0FBa0IsS0FBbEI7QUFDSCxpQkFIRCxNQUdRO0FBQ0oseUJBQUtGLEtBQUwsR0FBYSxJQUFJQyx5QkFBSixDQUFtQixFQUFFRSxLQUFLTixRQUFRSyxFQUFmLEVBQW5CLENBQWI7QUFDQSx5QkFBS0YsS0FBTCxDQUFXSSxLQUFYO0FBQ0g7O0FBRUQ7QUFDQSxxQkFBS0MsUUFBTCxDQUFjLEtBQUtMLEtBQW5CLEVBQXlCLFFBQXpCLEVBQWtDLEtBQUtNLE1BQXZDO0FBQ0g7Ozt1Q0FFVTtBQUNQLHFCQUFLQyxTQUFMLENBQWUsYUFBZixFQUE4QkMsSUFBOUIsQ0FBb0MsSUFBSUMsOEJBQUosQ0FBdUIsRUFBRUMsV0FBWSxLQUFLYixPQUFMLENBQWFLLEVBQTNCLEVBQXZCLENBQXBDO0FBQ0g7OztrREFFcUI7QUFBQTs7QUFDbEIscUJBQUtTLFNBQUwsQ0FBZ0IsVUFBQ0MsS0FBRCxFQUFXO0FBQ3ZCLHdCQUFJQSxLQUFKLEVBQ0lDLE1BQU1ELEtBQU4sRUFESixLQUdJRSxPQUFPQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixnQkFBYyxPQUFLaEIsS0FBTCxDQUFXRSxFQUFoRDtBQUVQLGlCQU5EO0FBT0g7OztvREFFdUI7QUFDcEIsb0JBQUllLFFBQVEsZ0RBQVIsQ0FBSixFQUErRDtBQUMzRCx5QkFBS2pCLEtBQUwsQ0FBV2tCLE9BQVg7QUFDQUosMkJBQU9DLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXFCLEdBQXJCO0FBQ0g7QUFDSjs7OzJEQUU4QjtBQUMzQkYsdUJBQU9DLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLHFCQUFxQixLQUFLbkIsT0FBTCxDQUFhSyxFQUF6RDtBQUNIOzs7aURBRW9CO0FBQUE7O0FBRWpCLG9CQUFJaUIsWUFBWUMsaUJBQU9DLGVBQVAsR0FBeUIsZUFBekIsR0FBMkMsS0FBS3JCLEtBQUwsQ0FBV0UsRUFBdEU7QUFDQW9CLGdDQUFNQyxVQUFOLENBQWlCQyxLQUFLQyxDQUFMLENBQU8sb0JBQVAsQ0FBakIsRUFBK0NOLFNBQS9DLEVBQTBELFVBQUNQLEtBQUQsRUFBVztBQUNqRSx3QkFBSUEsS0FBSixFQUNJQyxNQUFNLFlBQVlELEtBQWxCLEVBREosS0FHSUMsTUFBTSxnQ0FBTjtBQUNBLDJCQUFLYixLQUFMLENBQVdJLEtBQVg7QUFDUCxpQkFORDtBQU9IOzs7c0NBRVNzQixRLEVBQVU7QUFDaEIscUJBQUsxQixLQUFMLENBQVcyQixHQUFYLENBQWU7QUFDWEMsMEJBQU8sS0FBS0gsQ0FBTCxDQUFPLGFBQVAsRUFBc0JJLEdBQXRCLEVBREk7QUFFWEMsMEJBQU8sS0FBS0wsQ0FBTCxDQUFPLGFBQVAsRUFBc0JJLEdBQXRCLEVBRkk7QUFHWEUsMEJBQU8sS0FBS04sQ0FBTCxDQUFPLGFBQVAsRUFBc0JJLEdBQXRCO0FBSEksaUJBQWY7O0FBTUEscUJBQUs3QixLQUFMLENBQVdnQyxJQUFYLENBQWdCLElBQWhCLEVBQXNCO0FBQ2xCQyw2QkFBUyxtQkFBTTtBQUNYUDtBQUNILHFCQUhpQjtBQUlsQmQsMkJBQU8sZUFBQ0EsTUFBRCxFQUFXO0FBQ2RjLGlDQUFTZCxNQUFUO0FBQ0g7QUFOaUIsaUJBQXRCO0FBUUg7OztnQ0E3RmM7QUFBRSx1QkFBT2QscUJBQUVvQyxRQUFGLENBQVdBLHdCQUFYLENBQVA7QUFBNkI7OztnQ0FFOUI7QUFBRSx1QkFBTyxZQUFQO0FBQXFCOzs7Z0NBRWpCO0FBQ3RCLHVCQUFPO0FBQ0xDLDhCQUFXZixpQkFBT2dCLFNBQVAsR0FBbUIsS0FBS3BDLEtBQUwsQ0FBV3FDLEdBQVgsQ0FBZSxLQUFmLENBQW5CLEdBQTJDLEdBRGpEO0FBRUNDLDJCQUFRLEtBQUt0QyxLQUFMLENBQVdzQyxLQUFYO0FBRlQsaUJBQVA7QUFJQzs7OztNQVp1QkMscUJBQVdDLFU7O3NCQW9HeEI3QyxhIiwiZmlsZSI6ImludGVydmlld192aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vKlxuKiBAQXV0aG9yOiBMdXR6IFJlaXRlciwgRGVzaWduIFJlc2VhcmNoIExhYiwgVW5pdmVyc2l0w6R0IGRlciBLw7xuc3RlIEJlcmxpblxuKiBARGF0ZTogICAyMDE2LTA1LTA0IDExOjM4OjQxXG4qIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIGx1dHplclxuKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE2LTA3LTE1IDE0OjQ0OjMyXG4qL1xuXG5pbXBvcnQgQmFja2JvbmUgZnJvbSAnYmFja2JvbmUnO1xuaW1wb3J0IE1hcmlvbmV0dGUgZnJvbSAnbWFyaW9uZXR0ZSc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCBDb25maWcgZnJvbSAnY29uZmlnJztcbmltcG9ydCBJbnRlcnZpZXdNb2RlbCBmcm9tICdtb2RlbHMvaW50ZXJ2aWV3X21vZGVsJztcbmltcG9ydCBBdHRhY2htZW50TGlzdFZpZXcgZnJvbSAndmlld3MvYXR0YWNobWVudF9saXN0X3ZpZXcnO1xuaW1wb3J0IHV0aWxzIGZyb20gJ3V0aWxzJztcblxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJ3RleHQhdGVtcGxhdGVzL2ludGVydmlld190bXBsLmh0bWwnO1xuXG5jbGFzcyBJbnRlcnZpZXdWaWV3IGV4dGVuZHMgTWFyaW9uZXR0ZS5MYXlvdXRWaWV3IHtcblxuXHQvKiBwcm9wZXJ0aWVzICovXG4gICBcdGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIF8udGVtcGxhdGUodGVtcGxhdGUpIH1cblxuICAgIGdldCBjbGFzc05hbWUoKSB7IHJldHVybiAnc2luZ2xldmlldycgfVxuXG4gICAgZ2V0IHRlbXBsYXRlSGVscGVycygpIHtcblx0XHQgIHJldHVybiB7XG5cdFx0ICAgIGZpbGVzVXJsIDogQ29uZmlnLmZpbGVzX3VybCArIHRoaXMubW9kZWwuZ2V0KCdfaWQnKSArICcvJyxcbiAgICAgICAgICAgIGlzTmV3IDogdGhpcy5tb2RlbC5pc05ldygpXG4gICAgICB9XG4gICAgfVxuXG4gICByZWdpb25zKCkgeyBcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGF0dGFjaG1lbnRzIDogJyNpbnRlcnZpZXctYXR0YWNobWVudHMnXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ2NsaWNrICNzYXZlQnV0dG9uJyA6ICdvblNhdmVCdXR0b25DbGlja2VkJyxcbiAgICAgICAgJ2NsaWNrICNkZWxldGVCdXR0b24nIDogJ29uRGVsZXRlQnV0dG9uQ2xpY2tlZCcsXG4gICAgICAgICdjbGljayAjYWRkLWF0dGFjaG1lbnQtYnV0dG9uJyA6ICdvbkFkZEF0dGFjaG1lbnRCdXR0b25DbGlja2VkJyxcbiAgICAgICAgJ2NoYW5nZSAjaW5wdXQtdXBsb2FkLWZpbGUnIDogJ29uRmlsZUlucHV0Q2hhbmdlZCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBtZXRob2RzICovXG4gICAgaW5pdGlhbGl6ZShvcHRpb25zKSB7XG5cbiAgICAgICAgaWYgKF8uaGFzKG9wdGlvbnMsICduZXcnKSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBJbnRlcnZpZXdNb2RlbCgpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlkID0gZmFsc2U7XG4gICAgICAgIH0gIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBJbnRlcnZpZXdNb2RlbCh7IF9pZDogb3B0aW9ucy5pZCB9KTtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZmV0Y2goKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy9saXN0ZW4gdG8gbW9kZWwgZXZlbnRzXG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwnY2hhbmdlJyx0aGlzLnJlbmRlcik7XG4gICAgfVxuXG4gICAgb25SZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuZ2V0UmVnaW9uKCdhdHRhY2htZW50cycpLnNob3coIG5ldyBBdHRhY2htZW50TGlzdFZpZXcoeyBpbnRlcnZpZXcgOiB0aGlzLm9wdGlvbnMuaWQgfSkgKTtcbiAgICB9XG5cbiAgICBvblNhdmVCdXR0b25DbGlja2VkKCkge1xuICAgICAgICB0aGlzLnNhdmVNb2RlbCggKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpXG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiI2ludGVydmlldy9cIit0aGlzLm1vZGVsLmlkO1xuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRGVsZXRlQnV0dG9uQ2xpY2tlZCgpIHtcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSBpbnRlcnZpZXc/XCIpKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiI1wiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BZGRBdHRhY2htZW50QnV0dG9uQ2xpY2tlZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnI2F0dGFjaG1lbnQvYWRkLycgKyB0aGlzLm9wdGlvbnMuaWQ7XG4gICAgfVxuXG4gICAgb25GaWxlSW5wdXRDaGFuZ2VkKCkge1xuXG4gICAgICAgIHZhciB1cGxvYWRVcmwgPSBDb25maWcud2ViX3NlcnZpY2VfdXJsICsgJ3VwbG9hZC9pbWFnZS8nICsgdGhpcy5tb2RlbC5pZDtcbiAgICAgICAgdXRpbHMudXBsb2FkRmlsZShzZWxmLiQoJyNpbnB1dC11cGxvYWQtZmlsZScpLCB1cGxvYWRVcmwsIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKVxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRVJST1I6IFwiICsgZXJyb3IpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRmlsZSB3YXMgc3VjY2Vzc2Z1bGx5IHVwbG9hZGVkXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuZmV0Y2goKTtcbiAgICAgICAgfSk7ICAgXG4gICAgfVxuXG4gICAgc2F2ZU1vZGVsKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMubW9kZWwuc2V0KHsgXG4gICAgICAgICAgICBuYW1lIDogdGhpcy4kKFwiI2lucHV0LW5hbWVcIikudmFsKCksXG4gICAgICAgICAgICByb2xlIDogdGhpcy4kKFwiI2lucHV0LXJvbGVcIikudmFsKCksXG4gICAgICAgICAgICB0ZXh0IDogdGhpcy4kKFwiI2lucHV0LXRleHRcIikudmFsKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tb2RlbC5zYXZlKG51bGwsIHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVydmlld1ZpZXciXX0=