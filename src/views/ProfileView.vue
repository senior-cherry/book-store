<template>
  <nav v-if="user">
    <div>
      <p>Hello, {{user.user.value.displayName}}</p>
      <p>Currently logged in as {{user.user.value.email}}</p>
    </div>
    <button class="btn btn-primary" @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import getUser from "@/composables/getUser";
import useLogout from "@/composables/useLogout";
import AuthView from "@/views/AuthView.vue";

export default {
  components: {AuthView},
  setup() {
    const { error, logout } = useLogout();
    const user = getUser();

    const handleLogout = async () => {
      await logout();
    }

    return { handleLogout, user, error }
  }
}
</script>

<style scoped>
nav {
  padding: 20px;
  border-bottom: 1px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav p {
  margin: 2px auto;
  font-size: 16px;
}

nav p.email {
  font-size: 14px;
  color: #999;
}

nav button {
  cursor: pointer;
}
</style>