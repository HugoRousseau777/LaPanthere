/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */ !function(e){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e("undefined"!=typeof module&&module.exports?require("jquery"):jQuery)}(function(e){"use strict";var n="ontouchstart"in window;window.navigator.msPointerEnabled&&window.navigator.pointerEnabled,window.navigator.pointerEnabled||window.navigator.msPointerEnabled,e.fn.swipe=function(n){var l=e(this),t=l.data("TouchSwipe");if(t&&"string"==typeof n){if(t[n])return t[n].apply(t,Array.prototype.slice.call(arguments,1));e.error("Method "+n+" does not exist on jQuery.swipe")}else if(t&&"object"==typeof n)t.option.apply(t,arguments);else if(!(t||"object"!=typeof n&&n))return init.apply(this,arguments);return l},e.fn.swipe.version="1.6.18",e.fn.swipe.defaults={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0},e.fn.swipe.phases={PHASE_START:"start",PHASE_MOVE:"move",PHASE_END:"end",PHASE_CANCEL:"cancel"},e.fn.swipe.directions={LEFT:"left",RIGHT:"right",UP:"up",DOWN:"down",IN:"in",OUT:"out"},e.fn.swipe.pageScroll={NONE:"none",HORIZONTAL:"horizontal",VERTICAL:"vertical",AUTO:"auto"},e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:"all"}});