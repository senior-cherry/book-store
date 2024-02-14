<template>
  <div class="main-wrapper" v-if="singlePost != null">
    <div class="container">
      <div class="post-container">
        <div class="post-container-left">
          <div class="img-container">
            <img :src="'/' + singlePost.image" alt="post">
          </div>
        </div>
        <div class="post-container-right">
          <span class="post-title">{{singlePost.title}}</span>
          <p class="book-description">
            {{singlePost.description}}
          </p>
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
import {formatDistanceToNow} from "date-fns";

export default {
  components: {Spinner},
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { error, documents } = getCollection('blog');

    const singlePost = computed(() => {
      if (documents.value) {
        return documents.value.find((doc) => doc.id === route.params.post)
      }
    });

    const goBack = () => {
      router.go(-1);
    }

    return { error, singlePost, goBack }
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

.post-container {
  margin: 1rem 0;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 3px;
  column-gap: 10px;
}

.post-container-left {
  padding: 20px;
}

.post-container-right {
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

.post-title {
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

.go-back {
  margin-top: 20px;
}
</style>