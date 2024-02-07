<template>
  <div class="blog">
    <div v-if="formattedDocuments" v-for="doc in formattedDocuments">
      <div class="blog-post">
        <div class="blog-post-img">
          <img :src="doc.image" alt="image">
        </div>
        <div class="blog-post-info">
          <div class="blog-post-date">
            <span>{{doc.createdAt}}</span>
          </div>
          <h1 class="blog-post-title">
            {{doc.title}}
          </h1>
          <p class="blog-post-text">
            {{doc.description}}
          </p>
        </div>
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/Spinner.vue";
import getCollection from "@/composables/getCollection";
import {computed} from "vue";
import {formatDistanceToNow} from "date-fns";

export default {
  components: {Spinner},
  setup() {
    const { error, documents } = getCollection('blog');

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map(doc => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time }
        })
      }
    });

    return { formattedDocuments }
  }
}
</script>

<style scoped>
body {
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
}

img {
  width: 100%;
}

.blog {
  margin-top: 15vh;
  margin-left: 50%;
  transform: translateX(-50%);
  width: 70%;
}

.blog-post {
  width: 100%;
  max-width: 98rem;
  padding: 5rem;
  box-shadow: 0 1.4rem 8rem;
  display: flex;
  align-items: center;
  border-radius: .8rem;
  margin: 5vh 0 5vh 0;
}

.blog-post-img {
  min-width: 25rem;
  max-width: 25rem;
  height: 20rem;
  transform: translateX(-8rem);
  position: relative;
}

.blog-post-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: .8rem;
}

.blog-post-date span {
  display: block;
  font-size: 1.6rem;
  font-weight: 600;
  margin: .5rem 0;
}

.blog-post-title {
  font-size: 2.5rem;
  margin: 1.5rem 0 2rem;
  text-transform: uppercase;
}

.blog-post-text {
  margin-bottom: 3rem;
  font-size: 1.4rem;
}

@media screen and  (max-width: 1068px) {
  .blog {
    margin-top: 20vh;
  }

  .blog-post {
    max-width: 80rem;
  }

  .blog-post-img {
    min-width: 30rem;
    max-width: 30rem;
  }
}

@media screen and (max-width: 868px) {
  .blog {
    margin-top: 25vh;
  }

  .blog-post {
    max-width: 70rem;
    margin: 10vh 0 10vh 0;
  }
}

@media screen and (max-width: 768px) {
  .blog {
    margin-top: 30vh;
  }

  .blog-post {
    padding: 2.5rem;
    flex-direction: column;
    margin: 18vh 0 15vh 0;
  }

  .blog-post-img {
    min-width: 100%;
    max-width: 100%;
    transform: translate(0, -8rem);
  }
}
</style>