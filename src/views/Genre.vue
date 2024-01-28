<template>
  <div class="genre">
    <div v-if="error">{{ error }}</div>
    <div v-if="formattedDocuments !== null" class="layout">
      <BooksList :books="formattedDocuments" />
      <CategoriesView :books="formattedDocuments" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import {useRoute} from "vue-router";
import CategoriesView from "@/views/CategoriesView.vue";
import BooksList from "@/components/BooksList.vue";
import Spinner from "@/components/Spinner.vue";
import {computed} from "vue";
import {formatDistanceToNow} from "date-fns";
import getCollection from "@/composables/getCollection";

export default {
  components: {CategoriesView, BooksList, Spinner},
  setup() {
    const route = useRoute();
    const { error, documents } = getCollection('books');

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.filter((doc) => doc.genres.includes(route.params.genre))
      }
    });

    return { error, documents , formattedDocuments }
  }
}
</script>

<style>

</style>