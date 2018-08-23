"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _reactDom = require("react-dom");

var ReactDOM = _interopRequireWildcard(_reactDom);

var _styles = require("@material-ui/core/styles");

var _Popover = require("@material-ui/core/Popover");

var _Popover2 = _interopRequireDefault(_Popover);

var _Dialog = require("@material-ui/core/Dialog");

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FormControl = require("@material-ui/core/FormControl");

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormHelperText = require("@material-ui/core/FormHelperText");

var _FormHelperText2 = _interopRequireDefault(_FormHelperText);

var _Input = require("@material-ui/core/Input");

var _Input2 = _interopRequireDefault(_Input);

var _InputLabel = require("@material-ui/core/InputLabel");

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _InputAdornment = require("@material-ui/core/InputAdornment");

var _InputAdornment2 = _interopRequireDefault(_InputAdornment);

var _IconButton = require("@material-ui/core/IconButton");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _AccessTime = require("@material-ui/icons/AccessTime");

var _AccessTime2 = _interopRequireDefault(_AccessTime);

var _date = require("./date");

var DateUtil = _interopRequireWildcard(_date);

var _clock = require("./clock");

var _clock2 = _interopRequireDefault(_clock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var classnames = require('classnames');

var styles = function styles(theme) {
    return {
        label: {
            maxWidth: '100%',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        formControl: {
            cursor: 'pointer'
        },
        input: {
            width: '180px',
            maxWidth: '100%',
            height: '19px',
            padding: '6px 0 7px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        }
    };
};
var TimeFormatInput = /** @class */function (_super) {
    __extends(TimeFormatInput, _super);
    function TimeFormatInput(props) {
        var _this = _super.call(this, props) || this;
        _this.action = {};
        _this.onFocus = function (focus) {
            _this.setState({ focus: focus });
        };
        _this.toggleShowClock = function () {
            var clockShow = _this.state.clockShow;
            _this.setState({ clockShow: !clockShow });
        };
        _this.closeClock = function () {
            _this.setState({ clockShow: false });
        };
        var now = new Date();
        var date = new Date(now.getTime());
        var min = props.min,
            max = props.max;
        if (max && now.getTime() > max.getTime()) {
            date = new Date(max.getTime());
        } else if (min && now.getTime() < min.getTime()) {
            date = new Date(min.getTime());
        }
        _this.state = {
            focus: false,
            clockShow: false
        };
        return _this;
    }
    TimeFormatInput.prototype.componentDidMount = function () {
        var _this = this;
        window.addEventListener('click', function (event) {
            if ([_this.input, _this.clock].reduce(function (contain, next) {
                return contain && (!next || next.compareDocumentPosition(event.target) < 16);
            }, true)) {
                _this.closeClock();
            }
        });
    };
    TimeFormatInput.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            name = _a.name,
            label = _a.label,
            value = _a.value,
            onChange = _a.onChange,
            selectableMinutesInterval = _a.selectableMinutesInterval,
            anchorOrigin = _a.anchorOrigin,
            transformOrigin = _a.transformOrigin,
            disabled = _a.disabled,
            error = _a.error,
            fullWidth = _a.fullWidth,
            dialog = _a.dialog,
            okToConfirm = _a.okToConfirm,
            endIcon = _a.endIcon,
            className = _a.className,
            InputLabelProps = _a.InputLabelProps,
            InputProps = _a.InputProps,
            FormHelperTextProps = _a.FormHelperTextProps,
            ClockProps = _a.ClockProps,
            classes = _a.classes;
        var _b = this.state,
            focus = _b.focus,
            clockShow = _b.clockShow;
        return [React.createElement("div", { key: 'date-input', className: className, ref: function ref(input) {
                return _this.input = ReactDOM.findDOMNode(input);
            } }, React.createElement(_FormControl2.default, { className: classes.formControl, disabled: disabled, onClick: this.toggleShowClock, error: error !== undefined, fullWidth: true }, label && React.createElement(_InputLabel2.default, __assign({ shrink: focus || clockShow || value !== undefined, htmlFor: name }, __assign({}, InputLabelProps, { classes: InputLabelProps && InputLabelProps.classes ? __assign({ root: classes.label }, InputLabelProps.classes) : { root: classes.label } })), label), React.createElement(_Input2.default, __assign({ name: name, value: value ? DateUtil.format(value, 'h:mm a').toUpperCase() : "\xA0", onFocus: function onFocus() {
                return _this.onFocus(true);
            }, onBlur: function onBlur() {
                return _this.onFocus(false);
            }, inputComponent: function inputComponent(_a) {
                var value = _a.value;
                return React.createElement("div", { className: classes.input }, value);
            }, endAdornment: React.createElement(_InputAdornment2.default, { position: 'end' }, React.createElement(_IconButton2.default, { onMouseDown: function onMouseDown(event) {
                    return event.preventDefault();
                } }, endIcon ? endIcon : React.createElement(_AccessTime2.default, null))) }, InputProps)), error && React.createElement(_FormHelperText2.default, __assign({ error: true }, FormHelperTextProps), error))), dialog ? React.createElement(_Dialog2.default, { key: 'date-dialog', open: clockShow, onClose: this.closeClock }, React.createElement(_clock2.default, __assign({ ref: function ref(clock) {
                return _this.clock = ReactDOM.findDOMNode(clock);
            }, value: value, onChange: onChange, selectableMinutesInterval: selectableMinutesInterval, closeClock: this.closeClock, okToConfirm: okToConfirm }, ClockProps))) : React.createElement(_Popover2.default, { key: 'date-popover', open: clockShow, onEntered: function onEntered() {
                if (_this.action.resize) _this.action.resize();
            }, anchorOrigin: anchorOrigin, transformOrigin: transformOrigin, anchorEl: this.input }, React.createElement(_clock2.default, __assign({ action: function action(_action) {
                return _this.action.resize = _action.resize;
            }, ref: function ref(clock) {
                return _this.clock = ReactDOM.findDOMNode(clock);
            }, value: value, onChange: onChange, selectableMinutesInterval: selectableMinutesInterval, closeClock: this.closeClock, okToConfirm: okToConfirm }, ClockProps)))];
    };
    TimeFormatInput = __decorate([(0, _styles.withStyles)(styles)], TimeFormatInput);
    return TimeFormatInput;
}(React.Component);
exports.default = TimeFormatInput;
//# sourceMappingURL=timepicker.js.map