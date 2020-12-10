<template>
<div class="register">
  <div class="section">
    <div class="container">
      <div class="media is-pulled-right">
        <div class="media-content"><span class="has-text-center">Connect With:</span><br/>
          <div class="field is-grouped">
            <div class="control">
              <button class="button githubSignin"><span class="github-icon icon"><i class="fab fa-github"></i></span>
                <p>Sign In</p>
              </button>
            </div>
            <div class="control">
              <button class="button githubSignin"><span class="github-icon icon"><i class="fab fa-google"></i></span>
                <p>Sign In</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <b-button class="button is-medium" tag="router-link" :to=" { path: '/' }"><i class="fas fa-arrow-left"></i></b-button>
      <div class="title mt-4 has-text-centered">Login</div>
      <form id="register-form">
        <div class="field">
          <label class="label" for="username">Username</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="Username" name="username"/><span class="icon is-left"><i class="fas fa-user"></i></span>
          </div>
          <label class="label" for="email">Email</label>
          <div class="control has-icons-left">
            <input class="input" type="email" placeholder="Email" name="email"/><span class="icon is-left"><i class="fas fa-envelope-square"></i></span>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-success is-medium mt-4" type="submit">Login</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Login'
  }
</script>


<style scoped>
.column {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
.row-one {
  padding-top: 13px;
}
form .field {
  margin: auto;
  max-width: 740px;
}

</style>