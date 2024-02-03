<template>
    <div v-if="error">{{ error }}</div>
  <CategoriesView :books="documents" v-if="documents" />
    <div v-if="formattedDocuments !== null" class="layout">
      <BooksList :books="formattedDocuments" />
    </div>
    <div v-else>
      <Spinner />
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
.layout {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 1.5em;
  padding: 2em 0;
  margin: 0 50px 50px;
}
</style>