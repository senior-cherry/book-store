<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Назва: </label>
      <input type="text" v-model="title" required>
      <label>Автор: </label>
      <input type="text" v-model="author" required>
      <label>Рік: </label>
      <input type="text" v-model="year" required>
      <label>Ціна: </label>
      <input type="text" v-model="price" required>
      <label>Кількість: </label>
      <input type="number" v-model="inStock" required>
      <label>Мова: </label>
      <input type="text" v-model="language" required>
      <label>Зображення: </label>

      <label>Опис: </label>
      <textarea v-model="description" required></textarea>
      <label>Жанр/Категорія (Натисніть Enter щоб додати): </label>
      <input type="text" v-model="genre" @keydown.enter.prevent="handleKeydown">
      <div v-for="genre in genres" :key="genre" class="genre">
        {{ genre }}
      </div>
      <button class="btn btn-block btn-primary">Додати книгу</button>
    </form>
  </div>
</template>

<script>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {projectFirestore, storage, timestamp} from "@/firebase/config";

export default {
  setup() {
    const title = ref('');
    const author = ref('');
    const year = ref('');
    const price = ref('');
    const inStock = ref(0);
    const language = ref('');
    const description = ref('');
    const genre = ref('');
    const genres = ref([]);

    const router = useRouter();

    const handleKeydown = () => {
      if (!genres.value.includes(genre.value)) {
        genre.value = genre.value.replace(/\s/, '');
        genres.value.push(genre.value);
      }
      genre.value = '';
    }

    const handleSubmit = async () => {
      const book = {
        title: title.value,
        author: author.value,
        year: year.value,
        price: price.value,
        inStock: inStock.value,
        language: language.value,
        description: description.value,
        genres: genres.value,
        createdAt: timestamp()
      }

      await projectFirestore.collection('books').add(book);
      await router.push({name: 'catalog'})
    }

    return { title, author, year, price, inStock, language, description, genre, genres, handleSubmit, handleKeydown }
  }
}
</script>

<style>
form {
  max-width: 480px;
  text-align: left;
  margin: 0 auto 50px;
}

input, textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}

textarea {
  height: 160px;
}

label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  margin-bottom: 10px;
}

button {
  display: block;
  margin-top: 30px;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
  cursor: pointer;
}

.genre {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}

</style>