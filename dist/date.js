'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var fillInDigit = exports.fillInDigit = function fillInDigit(number, digit) {
    var max = Math.pow(10, digit);
    var clean = (number % max).toString();
    while (clean.length < digit) {
        clean = '0' + clean;
    }return clean;
};
var month = exports.month = [{
    short: 'Jan',
    long: 'January'
}, {
    short: 'Feb',
    long: 'February'
}, {
    short: 'Mar',
    long: 'March'
}, {
    short: 'Apr',
    long: 'April'
}, {
    short: 'May',
    long: 'May'
}, {
    short: 'Jun',
    long: 'June'
}, {
    short: 'Jul',
    long: 'July'
}, {
    short: 'Aug',
    long: 'August'
}, {
    short: 'Sep',
    long: 'September'
}, {
    short: 'Oct',
    long: 'October'
}, {
    short: 'Nov',
    long: 'November'
}, {
    short: 'Dec',
    long: 'December'
}];
var day = exports.day = [{
    short: 'Sun',
    long: 'Sunday'
}, {
    short: 'Mon',
    long: 'Monday'
}, {
    short: 'Tue',
    long: 'Tuesday'
}, {
    short: 'Wed',
    long: 'Wednesday'
}, {
    short: 'Thu',
    long: 'Thursday'
}, {
    short: 'Fri',
    long: 'Friday'
}, {
    short: 'Sat',
    long: 'Saturday'
}];
var format = exports.format = function format(date, _format) {
    return [[{
        keyword: 'mm',
        word: fillInDigit(date.getMinutes(), 2)
    }, {
        keyword: 'm',
        word: date.getMinutes().toString()
    }], [{
        keyword: 'HH',
        word: fillInDigit(date.getHours(), 2)
    }, {
        keyword: 'H',
        word: date.getHours().toString()
    }], [{
        keyword: 'hh',
        word: fillInDigit(date.getHours() > 12 ? date.getHours() - 12 : date.getHours() === 0 ? 12 : date.getHours(), 2)
    }, {
        keyword: 'h',
        word: (date.getHours() > 12 ? date.getHours() - 12 : date.getHours() === 0 ? 12 : date.getHours()).toString()
    }], [{
        keyword: 'a',
        word: date.getHours() >= 12 ? 'pm' : 'am'
    }], [{
        keyword: 'dd',
        word: fillInDigit(date.getDate(), 2)
    }, {
        keyword: 'd',
        word: date.getDate().toString()
    }], [{
        keyword: 'MMMM',
        word: month[date.getMonth()].long
    }, {
        keyword: 'MMM',
        word: month[date.getMonth()].short
    }, {
        keyword: 'MM',
        word: fillInDigit(date.getMonth() + 1, 2)
    }, {
        keyword: 'M',
        word: (date.getMonth() + 1).toString()
    }], [{
        keyword: 'yyyy',
        word: fillInDigit(date.getFullYear(), 4)
    }, {
        keyword: 'yy',
        word: fillInDigit(date.getFullYear(), 2)
    }], [{
        keyword: 'EEE',
        word: day[date.getDay()].short
    }, {
        keyword: 'EEEE',
        word: day[date.getDay()].long
    }]].reduce(function (dateString, formattings) {
        var foundFormatting = formattings.find(function (formatting) {
            return dateString.includes(formatting.keyword);
        });
        if (foundFormatting) {
            return dateString.replace(foundFormatting.keyword, foundFormatting.word);
        } else {
            return dateString;
        }
    }, _format);
};
var sameDay = exports.sameDay = function sameDay(dateA, dateB) {
    if (dateA !== undefined && dateB !== undefined) {
        return dateA.getDate() === dateB.getDate() && dateA.getMonth() === dateB.getMonth() && dateA.getFullYear() === dateB.getFullYear();
    } else {
        return false;
    }
};
//# sourceMappingURL=date.js.map