define(['exports', 'marionette', 'underscore', 'jquery', 'config', 'views/interview_item_view', 'models/interview_collection', 'models/interview_model', 'text!templates/interview_list_tmpl.html'], function (exports, _marionette, _underscore, _jquery, _config, _interview_item_view, _interview_collection, _interview_model, _interview_list_tmpl) {
    'use strict';

    /*
    * @Author: Lutz Reiter, Design Research Lab, Universität der Künste Berlin
    * @Date:   2016-05-04 11:38:41
    * @Last Modified by:   lutzer
    * @Last Modified time: 2016-07-14 12:00:04
    */

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _marionette2 = _interopRequireDefault(_marionette);

    var _underscore2 = _interopRequireDefault(_underscore);

    var _jquery2 = _interopRequireDefault(_jquery);

    var _config2 = _interopRequireDefault(_config);

    var _interview_item_view2 = _interopRequireDefault(_interview_item_view);

    var _interview_collection2 = _interopRequireDefault(_interview_collection);

    var _interview_model2 = _interopRequireDefault(_interview_model);

    var _interview_list_tmpl2 = _interopRequireDefault(_interview_list_tmpl);

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

    var SubmissionListView = function (_Marionette$Composite) {
        _inherits(SubmissionListView, _Marionette$Composite);

        function SubmissionListView() {
            _classCallCheck(this, SubmissionListView);

            return _possibleConstructorReturn(this, (SubmissionListView.__proto__ || Object.getPrototypeOf(SubmissionListView)).apply(this, arguments));
        }

        _createClass(SubmissionListView, [{
            key: 'childEvents',
            value: function childEvents() {
                return {
                    'show-details': 'onChildShowDetails'
                };
            }
        }, {
            key: 'events',
            value: function events() {
                return {
                    'click #load-more-button': 'onLoadMoreButtonClick'
                };
            }
        }, {
            key: 'initialize',
            value: function initialize(options) {

                this.fetchParams = {};

                if (options.tag != null) this.fetchParams.tag = options.tag;

                this.collection = new _interview_collection2.default();

                this.listenTo(this.collection, 'sync', this.hideSpinner);
                this.listenTo(this.collection, 'fetching', this.showSpinner);

                this.listenTo(Backbone, 'interview:changed', this.onInterviewChanged);
                this.listenTo(Backbone, 'interview:new', this.onInterviewAdded);
                this.listenTo(Backbone, 'interview:removed', this.OnInterviewRemoved);

                this.collection.getFirstPage(this.fetchParams);
            }
        }, {
            key: 'onAttach',
            value: function onAttach() {
                var _this2 = this;

                //bind scroll handler
                this.winowScrollListener = _underscore2.default.throttle(function () {
                    _this2.onWindowScroll();
                }, 500);
                (0, _jquery2.default)(window).on('scroll', this.winowScrollListener);
            }
        }, {
            key: 'onBeforeDestroy',
            value: function onBeforeDestroy() {
                //unbind scroll handler
                (0, _jquery2.default)(window).off("scroll", this.winowScrollListener);
            }
        }, {
            key: 'onInterviewChanged',
            value: function onInterviewChanged(data) {
                var model = this.collection.get(data._id);
                if (model) model.fetch();
            }
        }, {
            key: 'onInterviewAdded',
            value: function onInterviewAdded(data) {
                //console.log(data);
                var interview = new _interview_model2.default(data);
                interview.fetch();
                // add to front of collection
                this.collection.add(interview, { at: 0 });
            }
        }, {
            key: 'onInterviewRemoved',
            value: function onInterviewRemoved(data) {
                //console.log(data);
                this.collection.remove(data);
            }
        }, {
            key: 'onLoadMoreButtonClick',
            value: function onLoadMoreButtonClick(event) {
                event.preventDefault();
                this.collection.getNextPage(this.fetchParams);
            }
        }, {
            key: 'onWindowScroll',
            value: function onWindowScroll() {

                var scrollPos = (0, _jquery2.default)(window).scrollTop();
                var triggerPos = (0, _jquery2.default)(document).height() - (0, _jquery2.default)(window).height() * 1.2;

                if (scrollPos > triggerPos) {
                    this.collection.getNextPage(this.fetchParams);
                }
            }
        }, {
            key: 'showSpinner',
            value: function showSpinner() {
                this.$('#fetch-spinner').removeClass('hidden');
            }
        }, {
            key: 'hideSpinner',
            value: function hideSpinner() {
                this.$('#fetch-spinner').addClass('hidden');
            }
        }, {
            key: 'template',
            get: function get() {
                return _underscore2.default.template(_interview_list_tmpl2.default);
            }
        }, {
            key: 'className',
            get: function get() {
                return 'composite-view';
            }
        }, {
            key: 'childViewContainer',
            get: function get() {
                return '#interview-list';
            }
        }, {
            key: 'childView',
            get: function get() {
                return _interview_item_view2.default;
            }
        }]);

        return SubmissionListView;
    }(_marionette2.default.CompositeView);

    ;

    exports.default = SubmissionListView;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9pbnRlcnZpZXdfbGlzdF92aWV3LmpzIl0sIm5hbWVzIjpbIlN1Ym1pc3Npb25MaXN0VmlldyIsIm9wdGlvbnMiLCJmZXRjaFBhcmFtcyIsInRhZyIsImNvbGxlY3Rpb24iLCJJbnRlcnZpZXdDb2xsZWN0aW9uIiwibGlzdGVuVG8iLCJoaWRlU3Bpbm5lciIsInNob3dTcGlubmVyIiwiQmFja2JvbmUiLCJvbkludGVydmlld0NoYW5nZWQiLCJvbkludGVydmlld0FkZGVkIiwiT25JbnRlcnZpZXdSZW1vdmVkIiwiZ2V0Rmlyc3RQYWdlIiwid2lub3dTY3JvbGxMaXN0ZW5lciIsIl8iLCJ0aHJvdHRsZSIsIm9uV2luZG93U2Nyb2xsIiwid2luZG93Iiwib24iLCJvZmYiLCJkYXRhIiwibW9kZWwiLCJnZXQiLCJfaWQiLCJmZXRjaCIsImludGVydmlldyIsIkludGVydmlld01vZGVsIiwiYWRkIiwiYXQiLCJyZW1vdmUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZ2V0TmV4dFBhZ2UiLCJzY3JvbGxQb3MiLCJzY3JvbGxUb3AiLCJ0cmlnZ2VyUG9zIiwiZG9jdW1lbnQiLCJoZWlnaHQiLCIkIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInRlbXBsYXRlIiwiSW50ZXJ2aWV3SXRlbVZpZXciLCJNYXJpb25ldHRlIiwiQ29tcG9zaXRlVmlldyJdLCJtYXBwaW5ncyI6IjtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFpQk1BLGtCOzs7Ozs7Ozs7OzswQ0FXUztBQUNWLHVCQUFPO0FBQ04sb0NBQWlCO0FBRFgsaUJBQVA7QUFHQTs7O3FDQUVRO0FBQ0wsdUJBQU87QUFDSCwrQ0FBNEI7QUFEekIsaUJBQVA7QUFHSDs7O3VDQUdPQyxPLEVBQVM7O0FBRW5CLHFCQUFLQyxXQUFMLEdBQW1CLEVBQW5COztBQUVB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bnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vKlxuKiBAQXV0aG9yOiBMdXR6IFJlaXRlciwgRGVzaWduIFJlc2VhcmNoIExhYiwgVW5pdmVyc2l0w6R0IGRlciBLw7xuc3RlIEJlcmxpblxuKiBARGF0ZTogICAyMDE2LTA1LTA0IDExOjM4OjQxXG4qIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIGx1dHplclxuKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE2LTA3LTE0IDEyOjAwOjA0XG4qL1xuXG5pbXBvcnQgTWFyaW9uZXR0ZSBmcm9tICdtYXJpb25ldHRlJztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb25maWcgZnJvbSAnY29uZmlnJztcbmltcG9ydCBJbnRlcnZpZXdJdGVtVmlldyBmcm9tICd2aWV3cy9pbnRlcnZpZXdfaXRlbV92aWV3JztcbmltcG9ydCBJbnRlcnZpZXdDb2xsZWN0aW9uIGZyb20gJ21vZGVscy9pbnRlcnZpZXdfY29sbGVjdGlvbic7XG5pbXBvcnQgSW50ZXJ2aWV3TW9kZWwgZnJvbSAnbW9kZWxzL2ludGVydmlld19tb2RlbCc7XG5cbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICd0ZXh0IXRlbXBsYXRlcy9pbnRlcnZpZXdfbGlzdF90bXBsLmh0bWwnO1xuXG5jbGFzcyBTdWJtaXNzaW9uTGlzdFZpZXcgZXh0ZW5kcyBNYXJpb25ldHRlLkNvbXBvc2l0ZVZpZXcge1xuXG5cdC8qIHByb3BlcnRpZXMgKi9cblx0Z2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gXy50ZW1wbGF0ZSh0ZW1wbGF0ZSkgfVxuXG5cdGdldCBjbGFzc05hbWUoKSB7IHJldHVybiAnY29tcG9zaXRlLXZpZXcnIH1cblxuXHRnZXQgY2hpbGRWaWV3Q29udGFpbmVyKCkgeyByZXR1cm4gJyNpbnRlcnZpZXctbGlzdCcgfVxuXG5cdGdldCBjaGlsZFZpZXcoKSB7IHJldHVybiBJbnRlcnZpZXdJdGVtVmlldyB9XG5cblx0Y2hpbGRFdmVudHMoKSB7XG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHQnc2hvdy1kZXRhaWxzJyA6ICdvbkNoaWxkU2hvd0RldGFpbHMnLFxuICAgIFx0fVxuICAgIH1cblxuICAgIGV2ZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdjbGljayAjbG9hZC1tb3JlLWJ1dHRvbicgOiAnb25Mb2FkTW9yZUJ1dHRvbkNsaWNrJ1xuICAgICAgICB9XG4gICAgfVxuXG5cdC8qIG1ldGhvZHMgKi9cblx0aW5pdGlhbGl6ZShvcHRpb25zKSB7XG5cblx0XHR0aGlzLmZldGNoUGFyYW1zID0ge307XG5cblx0XHRpZiAob3B0aW9ucy50YWcgIT0gbnVsbClcblx0XHRcdHRoaXMuZmV0Y2hQYXJhbXMudGFnID0gb3B0aW9ucy50YWdcblx0XHRcblx0XHR0aGlzLmNvbGxlY3Rpb24gPSBuZXcgSW50ZXJ2aWV3Q29sbGVjdGlvbigpO1xuXG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5jb2xsZWN0aW9uLCdzeW5jJyx0aGlzLmhpZGVTcGlubmVyKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLmNvbGxlY3Rpb24sJ2ZldGNoaW5nJyx0aGlzLnNob3dTcGlubmVyKTtcblxuICAgICAgICB0aGlzLmxpc3RlblRvKEJhY2tib25lLCdpbnRlcnZpZXc6Y2hhbmdlZCcsIHRoaXMub25JbnRlcnZpZXdDaGFuZ2VkKTtcbiAgICAgICAgdGhpcy5saXN0ZW5UbyhCYWNrYm9uZSwnaW50ZXJ2aWV3Om5ldycsIHRoaXMub25JbnRlcnZpZXdBZGRlZCk7XG4gICAgICAgIHRoaXMubGlzdGVuVG8oQmFja2JvbmUsJ2ludGVydmlldzpyZW1vdmVkJywgdGhpcy5PbkludGVydmlld1JlbW92ZWQpO1xuXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbi5nZXRGaXJzdFBhZ2UodGhpcy5mZXRjaFBhcmFtcyk7XG5cdH1cblxuICAgIG9uQXR0YWNoKCkge1xuICAgICAgICAvL2JpbmQgc2Nyb2xsIGhhbmRsZXJcbiAgICAgICAgdGhpcy53aW5vd1Njcm9sbExpc3RlbmVyID0gIF8udGhyb3R0bGUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbldpbmRvd1Njcm9sbCgpO1xuICAgICAgICB9LDUwMCk7XG4gICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJyx0aGlzLndpbm93U2Nyb2xsTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIG9uQmVmb3JlRGVzdHJveSgpIHtcbiAgICAgICAgLy91bmJpbmQgc2Nyb2xsIGhhbmRsZXJcbiAgICAgICAgJCh3aW5kb3cpLm9mZihcInNjcm9sbFwiLCB0aGlzLndpbm93U2Nyb2xsTGlzdGVuZXIpO1xuICAgIH1cblxuXG5cdC8vIHVwZGF0ZSBtb2RlbCBvbiBkYXRhIGNoYW5nZVxuICAgIG9uSW50ZXJ2aWV3Q2hhbmdlZChkYXRhKSB7XG4gICAgXHR2YXIgbW9kZWwgPSB0aGlzLmNvbGxlY3Rpb24uZ2V0KGRhdGEuX2lkKTtcbiAgICBcdGlmIChtb2RlbClcbiAgICBcdFx0bW9kZWwuZmV0Y2goKTtcbiAgICB9XG5cbiAgICBvbkludGVydmlld0FkZGVkKGRhdGEpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICBcdHZhciBpbnRlcnZpZXcgPSBuZXcgSW50ZXJ2aWV3TW9kZWwoZGF0YSk7XG4gICAgXHRpbnRlcnZpZXcuZmV0Y2goKTtcbiAgICBcdCAvLyBhZGQgdG8gZnJvbnQgb2YgY29sbGVjdGlvblxuXHRcdHRoaXMuY29sbGVjdGlvbi5hZGQoaW50ZXJ2aWV3LCB7IGF0OiAwfSk7XG4gICAgfVxuXG4gICAgb25JbnRlcnZpZXdSZW1vdmVkKGRhdGEpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uLnJlbW92ZShkYXRhKTtcbiAgICB9XG5cbiAgICBvbkxvYWRNb3JlQnV0dG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uLmdldE5leHRQYWdlKHRoaXMuZmV0Y2hQYXJhbXMpO1xuICAgIH1cblxuICAgIG9uV2luZG93U2Nyb2xsKCkge1xuXG4gICAgICAgIHZhciBzY3JvbGxQb3MgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIHZhciB0cmlnZ2VyUG9zID0gICQoZG9jdW1lbnQpLmhlaWdodCgpIC0gJCh3aW5kb3cpLmhlaWdodCgpICogMS4yO1xuXG4gICAgICAgIGlmIChzY3JvbGxQb3MgPiB0cmlnZ2VyUG9zKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb24uZ2V0TmV4dFBhZ2UodGhpcy5mZXRjaFBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93U3Bpbm5lcigpIHtcbiAgICAgICAgdGhpcy4kKCcjZmV0Y2gtc3Bpbm5lcicpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICB9XG4gICAgXG4gICAgaGlkZVNwaW5uZXIoKSB7XG4gICAgICAgIHRoaXMuJCgnI2ZldGNoLXNwaW5uZXInKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgfVxuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN1Ym1pc3Npb25MaXN0VmlldyJdfQ==