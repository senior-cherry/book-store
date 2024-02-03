<template>
  <div class="main-wrapper" v-if="singleBook != null">
    <div class="container">
      <div class="book-container">
        <div class="book-container-left">
          <div class="img-container">
            <img :src="'/' + singleBook.image" alt="book">
          </div>
        </div>
        <div class="book-container-right">
          <span class="book-title">{{singleBook.title}}</span>
          <span>Автор: {{singleBook.author}}</span>
          <span>Рік випуску: {{singleBook.year}}</span>
          <span>Мова: {{singleBook.language}}</span>
          <span class="text-primary">{{singleBook.price}} UAH</span>
          <p class="book-description">
            {{singleBook.description}}
          </p>
          <div class="badge badge-success" v-if="singleBook.inStock > 5">В наявності</div>
          <div class="badge badge-warning" v-else-if="singleBook.inStock <= 5 && singleBook.inStock > 0">Закінчується</div>
          <div class="badge badge-error" v-else>Немає в наявності</div>
          <p><button class="btn btn-primary go-back" @click="goBack">Повернутися</button></p>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import getCollection from "@/composables/getCollection";
import {computed} from "vue";
import Spinner from "@/components/Spinner.vue";

export default {
  components: {Spinner},
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { error, documents } = getCollection('books');

    const singleBook = computed(() => {
      if (documents.value) {
        return documents.value.find((doc) => doc.id === route.params.book)
      }
    });

    const goBack = () => {
      router.go(-1);
    }

    return { error, singleBook, goBack }
  }
}
</script>

<style>
img {
  width: 100%;
  display: block;
}

.main-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
}

.book-container {
  margin: 1rem 0;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 3px;
  column-gap: 10px;
}

.book-container-left {
  padding: 20px;
}

.book-container-right {
  padding: 20px;
  line-height: 1.6;
}

.img-container img {
  width: 500px;
  height: 430px;
  margin: 0 auto;
}

.book-container-right span {
  display: block;
}

.book-title {
  font-size: 26px;
  margin-bottom: 22px;
  font-weight: 700;
  letter-spacing: 1px;
  opacity: 0.9;
}

.book-description {
  line-height: 1.6;
  font-weight: 300;
  opacity: 0.9;
  margin-top: 22px;
}

.badge {
  margin-top: 20px;
}

.go-back {
  margin-top: 20px;
}
</style>