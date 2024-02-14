<template>
  <div class="welcome container">
    <div v-if="showLogin">
      <h2>Увійти</h2>
      <LoginForm @login="authComplete" />
      <p>Немає аккаунту? <span @click="showLogin = false">Зареєструватися</span></p>
    </div>
    <div v-else>
      <h2>Зареєструватися</h2>
      <SignupForm />
      <p>Вже зареєстровані? <span @click="showLogin = true">Увійти</span></p>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import SignupForm from "@/components/SignupForm.vue";
import {ref} from "vue";
import {useRouter} from "vue-router";

export default {
  components: {SignupForm, LoginForm},
  setup() {
    const showLogin = ref(true);
    const router = useRouter();

    const authComplete = async () => {
      await router.push({ name: 'profile' })
    }

    return { showLogin, authComplete }
  }
}
</script>

<style>
.welcome.container {
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
  margin: 20px 75px;
  cursor: pointer;
  width: 150px;
}
</style>