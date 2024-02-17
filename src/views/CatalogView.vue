<template>
  <Modal :isError="isError" />
  <CategoriesView :books="formattedDocuments" v-if="formattedDocuments" />
  <div class="books" v-if="formattedDocuments">
    <BooksList :books="formattedDocuments" />
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
          let title;
          if (doc.title.length > 20) {
            title = doc.title.substring(0, 20) + '....';
          } else {
            title = doc.title;
          }
          return { ...doc, createdAt: time, title: title }
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
  margin: 0 50px 50px;
}
</style>