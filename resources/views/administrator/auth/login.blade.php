<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Travista Admin! | Login</title>

    <link rel="stylesheet" href="{{ elixir('assets/admin/css/login-libs.css') }}">
  </head>

  <body class="login">
    <div>

      <div class="login_wrapper">
        <div class="@if (count($errors)>0) animate  shake @endif form login_form">
          <section class="login_content">
            <form action="{{ route('admin.login') }}" method="POST">
              {!! csrf_field() !!}
              <h1>Login Form</h1>
              @include('administrator.partials.admin-flash')
              <div>
                <input type="text" name="username" class="form-control" placeholder="Username" />
              </div>
              <div>
                <input type="password" name="password" class="form-control" placeholder="Password" required="" />
              </div>
              <div>
                <button class="btn btn-default submit" type="submit">Log in</button>
                <a class="reset_pass" href="{{ route('admin.resetPassword') }}">Lost your password?</a>
              </div>

              <div class="clearfix"></div>

              <div class="separator">
                <div class="clearfix"></div>
                <br />
                <div>
                  <h1><i class="fa fa-paw"></i> Rest Module</h1>
                  <p>©2016 All Rights Reserved. Privacy and Terms</p>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  </body>
</html>