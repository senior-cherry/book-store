<template>
  <Modal :isError="isError" />
  <div class="books" v-if="formattedDocuments">
    <BooksList :books="formattedDocuments" />
    <CategoriesView :books="formattedDocuments" />
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import {computed, ref} from "vue";
import {formatDistanceToNow} from "date-fns";
import getCollection from "@/composables/getCollection";
import Spinner from "@/components/Spinner.vue";
import getUser from "@/composables/getUser";
import CategoriesView from "@/views/CategoriesView.vue";
import BooksList from "@/components/BooksList.vue";
import Modal from "@/components/Modal.vue";

export default {
  components: {Modal, BooksList, CategoriesView, Spinner},
  setup() {
    const { error, documents } = getCollection('books');
    const { user } = getUser();
    const isError = ref(false);

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map(doc => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time }
        })
      }
    });

    return { error, formattedDocuments, user, isError, documents }
  }
}

</script>

<style>
.books {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 1.5em;
  padding: 2em 0;
  margin: 50px 50px;
}

</style>