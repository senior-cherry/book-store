<template>
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

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map(doc => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          let title;
          let author;

          if (doc.title.length > 20) {
            title = doc.title.substring(0, 20) + '....';
          } else {
            title = doc.title;
          }

          if (doc.author.length > 20) {
            author = doc.author.substring(0, 20) + '....';
          } else {
            author = doc.author;
          }

          return { ...doc, createdAt: time, title: title, author: author }
        })
      }
    });

    return { error, formattedDocuments, user, documents }
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