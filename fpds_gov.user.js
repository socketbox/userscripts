// ==UserScript==
// @name         fpds_gov
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.fpds.gov/ezsearch/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.5.1.slim.min.js
// ==/UserScript==

(function() {
    'use strict';
    console.log("in tprmky");
    const regex = /^javascript:getParentURL\('(.*)'\)/

    $("a[title='View']").attr("href",
            function(i, val) {
                return val.replace(regex, "https://fpds.gov" + '$1');
            })

})();