#wxCourse
convenient online study
##Date polyfill
This is a polyfill for implementing the HTML5 `<input type="date">` element in browsers that do not currently support it.
If the script detects that the browser doesn't support `<input type="date">`, it will search for these elements and replace them with a jQuery UI datepicker to select the date. The date selection is stored in a hidden form field and submitted with the form in the standard format.
##Dependencies
This script requires [jQuery](http://jquery.com/), [jQuery UI](http://jqueryui.com/), and [Modernizr](http://www.modernizr.com/).
