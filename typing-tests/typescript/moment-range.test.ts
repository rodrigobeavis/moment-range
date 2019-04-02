import * as M from 'moment';
import {DateRange, extendMoment} from 'moment-range';

const moment = extendMoment(M);


//-----------------------------------------------------------------------------
// Typescript Tests
//-----------------------------------------------------------------------------

moment.range(new Date(), new Date());
moment.range(moment(), moment());
moment.range(moment(), new Date());
moment.range(new Date(), moment());
moment.range([new Date(), new Date()]);
moment.range([moment(), moment()]);
moment.range([moment(), new Date()]);
moment.range([new Date(), moment()]);
moment.range('year');
moment.range();

moment.rangeFromInterval('day');
moment.rangeFromInterval('day', 3);
moment.rangeFromInterval('day', 3, moment());

moment.rangeFromISOString('2015-01-17T09:50:04+03:00/2015-04-17T08:29:55-04:00');
moment.rangeFromISOString('2007-03-01T13:00:00Z/P1Y2M10DT2H30M');
moment.rangeFromISOString('P1Y2M10DT2H30M/2008-05-11T15:30:00Z');
moment.parseZoneRange('2015-01-17T09:50:04+03:00/2015-04-17T08:29:55-04:00'); // DEPRECATED 4.0.0

moment().isRange(moment.range('hour'));

moment().within(moment.range('hour'));

new DateRange(new Date(), new Date());
new DateRange(moment(), moment());
new DateRange(moment(), new Date());
new DateRange(new Date(), moment());
new DateRange([new Date(), new Date()]);
new DateRange([moment(), moment()]);
new DateRange([moment(), new Date()]);
new DateRange([new Date(), moment()]);
new DateRange('year');
new DateRange();

// Adjacent
const range001 = new DateRange('year');
range001.adjacent(new DateRange('month'));

// Add
const range002 = new DateRange('day');
range002.add(new DateRange('month'));

// By
const range003 = new DateRange('year');
range003.by('months');
range003.by('months', {excludeEnd: true});
range003.by('months', {exclusive: true}); // DEPRECATED 4.0.0
range003.by('months', {step: 2});
range003.by('months', {excludeEnd: true, step: 2});
range003.by('months', {exclusive: true, step: 2}); // DEPRECATED 4.0.0

// By Range
const range004 = new DateRange('year');
range004.byRange(new DateRange('month'));
range004.byRange(new DateRange('month'), {excludeEnd: true});
range004.byRange(new DateRange('month'), {exclusive: true}); // DEPRECATED 4.0.0

// Center
const range005 = new DateRange('year');
range005.center();

// Clone
const range006 = new DateRange('year');
range006.clone();

// Contains
const range007 = new DateRange('year');
range007.contains(new Date());
range007.contains(new DateRange('day'));
range007.contains(moment());
range007.contains(new Date(), {excludeStart: true});
range007.contains(new DateRange('day'), {excludeStart: true});
range007.contains(moment(), {excludeStart: true});
range007.contains(new Date(), {excludeEnd: true});
range007.contains(new DateRange('day'), {excludeEnd: true});
range007.contains(moment(), {excludeEnd: true});
range007.contains(new Date(), {excludeStart: true, excludeEnd: true});
range007.contains(new DateRange('day'), {excludeStart: true, excludeEnd: true});
range007.contains(moment(), {excludeStart: true, excludeEnd: true});
range007.contains(new Date(), {exclusive: true}); // DEPRECATED 4.0.0
range007.contains(new DateRange('day'), {exclusive: true}); // DEPRECATED 4.0.0
range007.contains(moment(), {exclusive: true}); // DEPRECATED 4.0.0

// Diff
const range008 = new DateRange('year');
range008.diff();
range008.diff('month');
range008.diff('month', true);

// Duration
const range009 = new DateRange('year');
range009.duration();
range009.duration('month');
range009.duration('month', true);

// Intersect
const range010 = new DateRange('year');
range010.intersect(new DateRange('month'));

// Is Equal
const range011 = new DateRange('year');
range011.isEqual(new DateRange('month'));

// Is Same
const range012 = new DateRange('year');
range012.isSame(new DateRange('month'));

// Overlaps
const range013 = new DateRange('year');
range013.overlaps(new DateRange('month'));
range013.overlaps(new DateRange('month'), {adjacent: true});

// Reverse By
const range014 = new DateRange('year');
range014.reverseBy('months');
range014.reverseBy('months', {excludeStart: true});
range014.reverseBy('months', {exclusive: true}); // DEPRECATED 4.0.0
range014.reverseBy('months', {step: 2});
range014.reverseBy('months', {excludeStart: true, step: 2});
range014.reverseBy('months', {exclusive: true, step: 2}); // DEPRECATED 4.0.0

// Reverse By Range
const range015 = new DateRange('year');
range015.reverseByRange(new DateRange('month'));
range015.reverseByRange(new DateRange('month'), {excludeStart: true});
range015.reverseByRange(new DateRange('month'), {exclusive: true}); // DEPRECATED 4.0.0

// SnapTo
const range016 = new DateRange('year');
range016.snapTo('month');

// Subtract
const range017 = new DateRange('year');
range017.subtract(new DateRange('month'));

// To Date
const range018 = new DateRange('year');
range018.toDate();

// To String
const range019 = new DateRange('year');
range019.toString();
range019 + '';

// Value Of
const range020 = new DateRange('year');
range020.valueOf();
// range019 + 1;

// Access to moment methods
moment.duration();
moment.HTML5_FMT.DATE;
