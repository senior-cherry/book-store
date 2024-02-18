<template>
  <div class="hero min-h-screen" style="background-image: url('notFound.jpg');">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-9xl font-bold">404</h1>
        <p class="mb-5">Page not found</p>
          <router-link :to="{ name: 'home' }">
            <button class="btn btn-primary">Back to Home</button>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

