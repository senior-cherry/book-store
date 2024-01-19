<template>
<div v-for="doc in formattedDocuments" class="books">
  <div class="card glass w-96 bg-base-100 shadow-xl">
    <figure><img :src="doc.image" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">{{doc.title}}</h2>
      <p>{{doc.author}}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {computed, ref} from "vue";
import { formatDistanceToNow } from "date-fns";
import getCollection from "@/composables/getCollection";

export default {
  setup() {
    const { error, documents } = getCollection('books');

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map(doc => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time }
        })
      }
    });

    return { error, formattedDocuments }
  }
}
</script>

<style>
.books {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 1.5em;
  padding: 2em 0;
  margin: 25px 50px;
}
</style>