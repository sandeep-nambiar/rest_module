<div class="profile">
  <div class="profile_pic">
    <img src="{{ url('/').'/images/'.$adminUser->picture }}" alt="..." class="img-circle profile_img">
  </div>
  <div class="profile_info">
    <span>Welcome,</span>
    <h2>{{ $adminUser->name }}</h2>
  </div>
</div>