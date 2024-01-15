<template>
  <div class="home">
    <div class="hero min-h-screen">
      <img src="../assets/banner.webp" alt="banner">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Ласкаво просимо у світ книжок!</h1>
          <p class="mb-5">Вітаємо вас у нашому книжковому універсумі, де кожна обкладинка стає воротами у захопливий світ пригод, знань та відкриттів.
            Serenity Books - це місце, де книги не просто чекають на читача, але саме шукають свого власника.</p>
          <router-link to="/about">
            <button class="btn btn-primary">
            Перейти до каталогу
          </button>
          </router-link>
        </div>
      </div>
    </div>

  <div class="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative">
    <div class="flex flex-col md:flex-row gap-2">
      <div class="flex flex-1 flex-col gap-2">
        <div class="flex flex-1 flex-col">
          <img class="object-cover h-full" src="../assets/christie.jpg" alt="christie">
        </div>
        <div class="hidden md:flex flex-1 flex-row gap-2">
          <div class="flex flex-1 flex-col">
            <img class="object-cover h-full" src="../assets/hound.jpg" alt="hound">
          </div>
          <div class="hidden md:flex flex-1 flex-col">
            <img class="object-cover h-full" src="../assets/stitch.jpg" alt="stitch">
          </div>
        </div>
      </div>
      <div class="flex flex-1 flex-col gap-2">
        <div class="hidden md:flex flex-1 flex-row gap-2">
          <div class="flex flex-1 flex-col">
            <img class="object-cover h-full" src="../assets/harry.jpg" alt="harry">
          </div>
          <div class="hidden md:flex flex-1 flex-col">
            <img class="object-cover h-full" src="../assets/ratatouille.jpg" alt="ratatouille">
          </div>
        </div>
        <div class="flex flex-1 flex-col">
          <img class="object-cover h-full" src="../assets/harry2.jpg" alt="harry">
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>
