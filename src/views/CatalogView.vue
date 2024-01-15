<template>
  <!-- Open the modal using ID.showModal() method -->
  <button class="btn" onclick="my_modal_1.showModal()">open modal</button>
  <dialog id="my_modal_1" class="modal">
    <div class="modal-box">
      <div class="welcome container">
        <p>Welcome</p>
        <div v-if="showLogin">
          <h2>Login</h2>
          <LoginForm />
          <p>No account yet? <span>Signup</span> instead</p>
        </div>
        <div v-else>
          <h2>Sign up</h2>
          <SignupForm />
          <p>Already registered? <span>Login</span> instead</p>
        </div>
      </div>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import SignupForm from "@/components/SignupForm.vue";
import {ref} from "vue";

export default {
  components: {SignupForm, LoginForm},
  setup() {
    const showLogin = ref(true);
    return {showLogin}
  }
}
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}

.welcome form {
  width: 300px;
  margin: 20px auto;
}

.welcome label {
  display: block;
  margin: 20px 0 10px;
}

.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}

.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}

.welcome button {
  margin: 20px auto;
  cursor: pointer;
}
</style>