var elixir = require('laravel-elixir');
/*elixir(function(mix) {
    mix.sass('app.scss');
});*/
elixir(function(mix) {
	/**
	 * Common CSS Files
	 */
	mix.sass("custom.scss",'./resources/assets/temp/administrator/theme.css')
    	.styles([
	    	"./resources/assets/vendors/bootstrap/dist/css/bootstrap.min.css",
	    	"./resources/assets/vendors/font-awesome/css/font-awesome.min.css",
	    	"./resources/assets/vendors/nprogress/nprogress.css",
            "./resources/assets/vendors/lobibox/dist/css/lobibox.css",
            "./resources/assets/vendors/bootstrap-wysihtml5/bootstrap-wysihtml5.css",
	    ],'./resources/assets/temp/administrator/css/basic.css')
	    .styles([
	    	"./resources/assets/temp/administrator/css/basic.css",
	    	"./resources/assets/temp/administrator/theme.css",
	    ], "./public/assets/admin/css/libs.css");

    /**
     * Login CSS
     */
    mix.styles([
            "./resources/assets/temp/administrator/css/basic.css",
            "libs/animate.min.css",
            "./resources/assets/temp/administrator/theme.css"
        ], "./public/assets/admin/css/login-libs.css");

    mix.styles([
            "./resources/assets/temp/administrator/css/basic.css",
            "./node_modules/cropperjs/dist/cropper.min.css",
            "./resources/assets/temp/administrator/theme.css"
        ], "./public/assets/admin/css/profile-libs.css");
    //mix.copy(['./node_modules/cropperjs/dist/src'

    /**
     * Dashboard CSS
     */
    mix.styles([
            "./resources/assets/temp/administrator/css/basic.css",
            "./resources/assets/vendors/iCheck/skins/flat/green.css",
            "./resources/assets/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css",
            "./resources/assets/temp/administrator/theme.css"
        ], "./public/assets/admin/css/dashboard-libs.css");
    /**
     * Dynamic List Items
     */
    mix.styles([
            "./resources/assets/vendors/switchery/dist/switchery.min.css",
    		"./resources/assets/temp/administrator/css/basic.css",
    		"./resources/assets/vendors/iCheck/skins/flat/green.css",
    		"./resources/assets/vendors/datatables.net-bs/css/dataTables.bootstrap.min.css",
    		"./resources/assets/vendors/datatables.net-buttons-bs/css/buttons.bootstrap.min.css",
    		"./resources/assets/vendors/datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.min.css",
    		"./resources/assets/vendors/datatables.net-scroller-bs/css/scroller.bootstrap.min.css",
    		"./resources/assets/temp/administrator/theme.css"
    	], "./public/assets/admin/css/list-libs.css");
/**
 * Client styles
 */
mix.styles([
            "./resources/assets/vendors/datatables.net-bs/css/dataTables.bootstrap.min.css",
            "./resources/assets/vendors/datatables.net-buttons-bs/css/buttons.bootstrap.min.css",
            "./resources/assets/vendors/datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.min.css",
            "./resources/assets/vendors/datatables.net-scroller-bs/css/scroller.bootstrap.min.css"
        ], "./public/assets/client/css/data-tables.css");
/**  -----------------------Javascripts File--------------------------------------- */
 	/**
 	 * Common Javascript Files
 	 */
    mix.scripts([
	    	"./resources/assets/vendors/jquery/dist/jquery.min.js",
	    	"./resources/assets/vendors/bootstrap/dist/js/bootstrap.min.js",
	    	"./resources/assets/vendors/fastclick/lib/fastclick.js",
	    	"./resources/assets/vendors/nprogress/nprogress.js",
            "./resources/assets/vendors/lobibox/dist/js/lobibox.min.js" ,	
	    ],"./resources/assets/temp/administrator/js/basic.js")
    	.scripts([
    		"./resources/assets/temp/administrator/js/basic.js",
    		"libs/custom.js"
    	],"public/assets/admin/js/libs.js");
    /**
     * Dashboard Javascript Files
     */
    mix.scripts([
    		"./resources/assets/temp/administrator/js/basic.js",
    		"./resources/assets/vendors/Chart.js/dist/Chart.min.js",
    		"./resources/assets/vendors/gauge.js/dist/gauge.min.js",
    		"./resources/assets/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js",
    		"./resources/assets/vendors/iCheck/icheck.min.js",
    		"./resources/assets/vendors/skycons/skycons.js",
    		"./resources/assets/vendors/Flot/jquery.flot.js",
    		"./resources/assets/vendors/Flot/jquery.flot.pie.js",
    		"./resources/assets/vendors/Flot/jquery.flot.time.js",
    		"./resources/assets/vendors/Flot/jquery.flot.stack.js",
    		"./resources/assets/vendors/Flot/jquery.flot.resize.js",
    		"./resources/assets/js/libs/flot/jquery.flot.orderBars.js",
    		"./resources/assets/js/libs/flot/date.js",
    		"./resources/assets/js/libs/flot/jquery.flot.spline.js",
    		"./resources/assets/js/libs/flot/curvedLines.js",
    		"./resources/assets/vendors/jqvmap/dist/jquery.vmap.js",
    		"./resources/assets/vendors/jqvmap/dist/maps/jquery.vmap.world.js",
    		"./resources/assets/vendors/jqvmap/examples/js/jquery.vmap.sampledata.js",
    		"./resources/assets/js/libs/moment/moment.min.js",
    		"./resources/assets/js/libs/datepicker/daterangepicker.js",
    		"libs/custom.min.js",
    		"./resources/assets/js/libs/customDashboard.js"
    	], "public/assets/admin/js/dashboard-libs.js");
    /**
     * Dynamic List Item Javascript
     */
    mix.scripts([
    		"./resources/assets/temp/administrator/js/basic.js",
    		"./resources/assets/vendors/datatables.net/js/jquery.dataTables.min.js",
            "./resources/assets/vendors/datatables.net-bs/js/dataTables.bootstrap.min.js",
    		"./resources/assets/vendors/datatables.net-buttons/js/dataTables.buttons.min.js",
    		"./resources/assets/vendors/datatables.net-buttons-bs/js/buttons.bootstrap.min.js",
    		"./resources/assets/vendors/datatables.net-buttons/js/buttons.flash.min.js",
    		"./resources/assets/vendors/datatables.net-buttons/js/buttons.html5.min.js",
    		"./resources/assets/vendors/datatables.net-buttons/js/buttons.print.min.js",
    		"./resources/assets/vendors/datatables.net-fixedheader/js/dataTables.fixedHeader.min.js",
    		"./resources/assets/vendors/datatables.net-keytable/js/dataTables.keyTable.min.js",
    		"./resources/assets/vendors/datatables.net-responsive/js/dataTables.responsive.min.js",
    		"./resources/assets/vendors/datatables.net-responsive-bs/js/responsive.bootstrap.js",
    		"./resources/assets/vendors/datatables.net-scroller/js/datatables.scroller.min.js",
    		"./resources/assets/vendors/jszip/dist/jszip.min.js",
    		"./resources/assets/vendors/pdfmake/build/pdfmake.min.js",
    		"./resources/assets/vendors/pdfmake/build/vfs_fonts.js",
            "./resources/assets/vendors/switchery/dist/switchery.min.js",
    		"libs/custom.min.js",
    		"./resources/assets/js/libs/customList.js"
    	], "public/assets/admin/js/list-libs.js");
    /**
     * Form Scripts With Validation
     */
    mix.scripts([
            "./resources/assets/temp/administrator/js/basic.js",
            "./resources/assets/vendors/validator/validator.js",
            "libs/custom.min.js",
            "libs/customForm.js",
            "./resources/assets/js/libs/customFormValidation.js",
            "./resources/assets/vendors/bootstrap-wysihtml5/wysihtml5-0.3.0.js",
            "./resources/assets/vendors/bootstrap-wysihtml5/bootstrap-wysihtml5.js" 
        ], "public/assets/admin/js/form-libs.js");
    /**
     * Profile scripts
     */
     mix.scripts([
            "./resources/assets/temp/administrator/js/basic.js",
            "./resources/assets/vendors/raphael/raphael.min.js",
            "./resources/assets/vendors/morris.js/morris.min.js",
            "./resources/assets/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js",
            "./node_modules/cropperjs/dist/cropper.min.js",
           // "./node_modules/fstream/lib/file-reader.js",
            "libs/custom.min.js"
        ], "public/assets/admin/js/profile-libs.js");
     /**
      * Client scripts
      */
      mix.scripts([
            "./resources/assets/vendors/jquery/dist/jquery.min.js",
            "./resources/assets/vendors/datatables.net/js/jquery.dataTables.min.js",
            "./resources/assets/vendors/datatables.net-bs/js/dataTables.bootstrap.min.js",
            "./resources/assets/vendors/datatables.net-buttons/js/dataTables.buttons.min.js",
            "./resources/assets/vendors/datatables.net-buttons-bs/js/buttons.bootstrap.min.js",
            "./resources/assets/vendors/datatables.net-buttons/js/buttons.flash.min.js",
            "./resources/assets/vendors/datatables.net-buttons/js/buttons.html5.min.js",
            "./resources/assets/vendors/datatables.net-buttons/js/buttons.print.min.js",
            "./resources/assets/vendors/datatables.net-fixedheader/js/dataTables.fixedHeader.min.js",
            "./resources/assets/vendors/datatables.net-keytable/js/dataTables.keyTable.min.js",
            "./resources/assets/vendors/datatables.net-responsive/js/dataTables.responsive.min.js",
            "./resources/assets/vendors/datatables.net-responsive-bs/js/responsive.bootstrap.js",
            "./resources/assets/vendors/datatables.net-scroller/js/datatables.scroller.min.js",
        ], "public/assets/client/js/data-tables.js");
    /**
     * Creating elixer versions
     */
    mix.version([
    	"assets/admin/css/login-libs.css",
        "assets/admin/js/libs.js",
        "assets/admin/css/libs.css",
    	"assets/admin/css/dashboard-libs.css",
    	"assets/admin/js/dashboard-libs.js",
        "assets/admin/css/list-libs.css",
        "assets/admin/js/list-libs.js",
        "assets/admin/js/form-libs.js",
        "assets/admin/js/profile-libs.js",
    	"assets/admin/css/profile-libs.css",
        "assets/client/css/data-tables.css",
        "assets/client/js/data-tables.js",
    ]);
});