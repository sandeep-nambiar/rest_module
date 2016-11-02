/**
 * Basic vendor Files
 * These Vendor files will be loaded as primary for all pages
 */

var $ = require("jquery");

require("bootstrap-webpack");

require("slick-carousel");
require("../../node_modules/slick-carousel/slick/slick.scss");

require("flatpickr");
require("../../node_modules/flatpickr/dist/flatpickr.airbnb.min.css");

require("webui-popover");
require("../../node_modules/webui-popover/dist/jquery.webui-popover.min.css");

require("./client/vendors/touchspin/jquery.bootstrap-touchspin.min.css");
require("./client/vendors/touchspin/jquery.bootstrap-touchspin.min.js");

require("./vendors/lobibox/dist/css/lobibox.min.css");
require("./vendors/lobibox/dist/js/lobibox.min.js");

require("./client/js/travysta.js");

/**
 * User script Files
 */
require('./client/js/script.js');

/**
 * Loading Sass stylesheets
 */
require("./client/style.config");