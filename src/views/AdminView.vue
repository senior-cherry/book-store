<template>
  <div v-if="isAdmin">
    <h1>Admin</h1>
  </div>
</template>

<script>
import getUser from "@/composables/getUser";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

export default {
setup() {
  const { user } = getUser();
  let isAdmin = ref(false);
  const router = useRouter();

  onMounted(() => {
    if (!user || (user && user.value.email !== 'serenitybooks@gmail.com')) {
      router.push({ name: 'auth' });
    } else {
      isAdmin.value = true;
    }
  });

  return { isAdmin }
}
}
</script>

<style>

</style>