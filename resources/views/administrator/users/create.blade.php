@extends('administrator.layouts.admin')
@section('header.styles')
	<link rel="stylesheet" href="{{ elixir('assets/admin/css/libs.css') }}">
@stop
@section('content')
	<div class="">
	  <div class="page-title">
	    <div class="title_left">
	      <h3>Travel API</h3>
	    </div>
	  </div>
	  <div class="clearfix"></div>
	  @include('administrator.partials.admin-flash')
	  <div class="row">
	    <div class="col-md-12 col-sm-12 col-xs-12">
	      <div class="x_panel">
	        <div class="x_title">
	          <h2>Create API</h2>
	          <div class="clearfix"></div>
	        </div>
	        <div class="x_content">
				<form class="form-horizontal" role="form" method="POST" action="{{ route('clientUserStore') }}">
                        {{ csrf_field() }}

                        <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                            <label for="name" class="col-md-4 control-label">Name</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control" name="name" value="{{ old('name') }}">

                                @if ($errors->has('name'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                            <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}">

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                            <label for="password" class="col-md-4 control-label">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" name="password">

                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
                            <label for="password-confirm" class="col-md-4 control-label">Confirm Password</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation">

                                @if ($errors->has('password_confirmation'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password_confirmation') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    <i class="fa fa-btn fa-user"></i> Register
                                </button>
                            </div>
                        </div>
                    </form>
				{!! Form::close() !!}
	        </div>
	      </div>
	    </div>
	  </div>
	</div>
@stop
@section('footer.scripts')
	<script src="{{ elixir('assets/admin/js/form-libs.js') }}"></script>
@stop