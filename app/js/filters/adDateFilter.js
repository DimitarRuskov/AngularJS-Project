'use strict';

adsApp.filter('date', function() {
    return function(input) {
        var date = Date.parse(input);
        var dateString = date.format("dd-m-yy");
        return dateString;
    }
});