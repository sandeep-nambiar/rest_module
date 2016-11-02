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
            <form>
              <h1> Reset Password </h1>
              <div>
                <input type="email" class="form-control" placeholder="Enter Your Email ID" required="" />
              </div>
              <div>
                <a class="btn btn-default submit" href="index.html">Send Reset Link</a>
              </div>

              <div class="clearfix"></div>

              <div class="separator">
                <p class="change_link">Know your Password?
                  <a href="{{ route('admin.login') }}" class="to_register"> Sign In </a>
                </p>
                <div class="clearfix"></div>
                <br />
                <div>
                  <h1><i class="fa fa-paw"></i> Travysta!</h1>
                  <p>©2016 All Rights Reserved. Travysta! is a Bootstrap 3 template. Privacy and Terms</p>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  </body>
</html>