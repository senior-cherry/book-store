<template>
  <div class="main-wrapper" v-if="singlePost != null">
         
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
  border: none;
}

.post-container {
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
  float: right;
}

.go-back {
  margin-top: 20px;
}
</style>