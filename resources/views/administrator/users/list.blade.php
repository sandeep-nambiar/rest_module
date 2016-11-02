@extends('administrator.layouts.admin')
@section('header.styles')
	<link rel="stylesheet" href="{{ elixir('assets/admin/css/list-libs.css') }}">
@stop
@section('content')
	<div class="">
	  <div class="page-title">
	    <div class="title_left">
	      <h3>Client Users </h3>
	    </div>
	    <div class="title_right">
	      @include('administrator.partials/search')
	    </div>
	  </div>
	  <div class="clearfix"></div>
	  @include('administrator.partials.admin-flash')
	  <div class="row">
	    <div class="col-md-12 col-sm-12 col-xs-12">
	      <div class="x_panel">
	        <div class="x_title">
	          <h2>Users List</h2>
	          <div class="clearfix"></div>
	        </div>
	        <div class="x_content table-responsive">
	          <table id="datatable" class="table table-striped table-bordered">
	            <thead>
	              <tr>
	              	<th>Name</th>
	                <th>Email</th>
	                <th>ID</th>
	                <th>Action</th>
	              </tr>
	            </thead>
	            <tbody>
	           		@foreach($users as $all)
		              <tr>
		              	<td>{{ $all->name }}</td>
		                <td>{{ $all->email }}</td>
		                <td>{{ $all->id }}</td>
		                <td><a href="javascript:;" onclick="return confirmationBox(this,'/administrator/users/{{$all->id}}/delete','Delete Confirmation','Are you sure you want to delete')" class="actionLink" title="Delete API" ><i class="fa fa-trash-o"></i></a>&nbsp;</td>
		              </tr>
					@endforeach
	            </tbody>
	          </table>
	        </div>
	      </div>
	    </div>
	  </div>
	</div>
@stop
@section('footer.scripts')
	<script src="{{ elixir('assets/admin/js/list-libs.js') }}"></script>
@stop