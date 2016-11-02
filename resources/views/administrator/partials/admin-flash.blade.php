@if(Session::has('adminFlashMsg'))
	<div class="alert alertClose alert-{{Session::get('adminFlashStatus')}} alert-dismissible" role="alert">
		<button type="button" class="close" data-dismiss="alert" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		</button>
		{{Session::get('adminFlashMsg')}}
	</div>
	<script>$( ".alertClose" ).delay( 4000 ).slideUp( 400 );</script>
@endif
<!-- Validation flash message -->
@if($errors->any())
<div class="alert alertClose alert-danger alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <ul class="list-unstyled">
  @foreach($errors->all() as $error)
    <li>{{$error}}</li>
  @endforeach
  </ul>
</div>
@endif