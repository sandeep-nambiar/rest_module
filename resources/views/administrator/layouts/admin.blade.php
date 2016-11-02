<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Rest Module</title>
	@yield('header.styles')
	@yield('header.scripts')
</head>
<body class="nav-md">
	<div class="container body">
	  <div class="main_container">
	    <div class="col-md-3 left_col">
	      <div class="left_col scroll-view">
	        <div class="navbar nav_title" style="border: 0;">
	          <a href="{{ url('/administrator') }}" class="site_title"><i class="fa fa-paw"></i> <span>Rest Module</span></a>
	        </div>
	        <div class="clearfix"></div>

	        <!-- menu profile quick info -->
	        @include('administrator.partials.menuProfile')
	        <!-- /menu profile quick info -->
	        <br />
	        <!-- sidebar menu -->
	        @include('administrator.partials.sidebar')
	        <!-- /sidebar menu -->
	        <!-- /menu footer buttons -->
	        @include('administrator.partials.sidebarFooter')
	        <!-- /menu footer buttons -->
	      </div>
	    </div>
	    <!-- top navigation -->
	    @include('administrator.partials.topNavigation')
	    <!-- /top navigation -->

	    <!-- page content -->
	    <div class="right_col" role="main">
	    	@yield('content')
	    </div>
	    <!-- /page content -->

	    <!-- footer content -->
	    <footer>
	      <div class="pull-right">
	        
	      </div>
	      <div class="clearfix"></div>
	    </footer>
	    <!-- /footer content -->

	    @yield('footer.scripts')
	  </div>
	</div>
</body>
</html>