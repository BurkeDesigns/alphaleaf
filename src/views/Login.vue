<template>
  <main el="main">
      <div el="section">
          <div el="input-list">
            <h2 el="title" class="center-txt" style="--color:var(--color-secondary);">Welcome Back!</h2>
            <!-- <p el="p" class="center-txt">Enter your account details below</p> -->

            <label for="username" el="input-label" style="margin-top:15px;">
              <!-- <div el="sm-txt label">Username</div> -->
              <input id="username" name="username" type="text" placeholder="My email..." el>
              <div el="sm-txt error error-color">Error message</div>
            </label>

            <label for="password" el="input-label">
              <!-- <div el="sm-txt label">Password</div> -->
              <input id="password" name="password" type="password" placeholder="My password..." el>
              <div el="sm-txt error error-color">Error message</div>
            </label>

            <button el="btn stretch" style="margin-top:15px;">Sign In</button>

            <div class="center-txt">Forgot your password?</div>
          </div>
      </div>
  </main>
</template>
<style scoped>
[el=main]{
  padding-top:30px;
  /* background-image: linear-gradient(0deg, #ffffff82, #f1f4f8), url(https://images.pexels.com/photos/2343891/pexels-photo-2343891.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260); */
    background-size: cover;
    background-position: center;
    
}
[el='input-list']{
  max-width: 350px;
  margin: auto;
  padding: 10px;
}
.center-txt{
  text-align: center;
}
</style>
