<template>
  <div class="books" v-if="formattedDocuments">
    <div v-for="doc in formattedDocuments">
      <div class="card glass w-96 bg-base-100 shadow-xl" style="max-height: 600px; margin-top: 50px">
        <figure><img :src="doc.image" alt="Shoes" style="width: 384px; height: 320px" /></figure>
        <div class="card-body text-center">
          <p class="title">{{doc.title}}</p>
          <p>Автор: {{doc.author}}</p>
          <p>Рік: {{doc.year}}</p>
          <p>Ціна: {{doc.price}}</p>
          <p>Мова: {{doc.language}}</p>
          <p><div class="badge badge-success" v-if="doc.inStock > 5">В наявності</div>
          <div class="badge badge-warning" v-else-if="doc.inStock <= 5 && doc.inStock > 0">Закінчується</div>
          <div class="badge badge-error" v-else>Немає в наявності</div></p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary" v-if="user && doc.inStock > 0">В кошик</button>
            <button class="btn btn-primary btn-disabled" v-else>В кошик</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import {computed} from "vue";
import { formatDistanceToNow } from "date-fns";
import getCollection from "@/composables/getCollection";
import Spinner from "@/components/Spinner.vue";
import getUser from "@/composables/getUser";

export default {
  components: {Spinner},
  setup() {
    const { error, documents } = getCollection('books');
    const { user } = getUser();

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map(doc => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time }
        })
      }
    });

    return { error, formattedDocuments, user }
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

.title {
  font-size: 20px;
  font-weight: 600;
}
</style>