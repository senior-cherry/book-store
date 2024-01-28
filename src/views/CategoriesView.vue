<template>
  <div class="genre-cloud">
    <h3>Жанри</h3>
    <div v-for="genre in genres" :key="genre">
      <router-link :to="{name: 'genre', params: { genre: encodeURIComponent(genre) }}">
        {{ genre }}
      </router-link>
    </div>
  </div>
</template>

<script>
import useGenres from "../composables/useGenres";
export default {
  props: ['books'],
  setup(props) {
    const { genres } = useGenres(props.books);

    return { genres }
  }
}
</script>

<style>
.genre-cloud {
  padding: 10px;
}

.genre-cloud h3 {
  border-bottom: 1px solid #eee;
  padding: 16px 8px;
  color: #444;
}

.genre-cloud div {
  display: inline-block;
  padding: 10px;
}

.genre-cloud a {
  color: #ccc;
  text-decoration: none;
}

.genre-cloud a.router-link-active {
  color: #ff8800;
  font-weight: bold;
}
</style>