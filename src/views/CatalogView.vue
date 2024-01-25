<template>
  <div id="alert-2" class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert" v-if="!isError">
    <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <span class="sr-only">Info</span>
    <div class="ms-3 text-sm font-medium">
      A simple info alert with an <a href="#" class="font-semibold underline hover:no-underline">example link</a>. Give it a click if you like.
    </div>
    <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-2" aria-label="Close">
      <span class="sr-only">Close</span>
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
    </button>
  </div>
  <div id="alert-3" class="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert" v-else>
    <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <span class="sr-only">Info</span>
    <div class="ms-3 text-sm font-medium">
      A simple info alert with an <a href="#" class="font-semibold underline hover:no-underline">example link</a>. Give it a click if you like.
    </div>
    <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-3" aria-label="Close">
      <span class="sr-only">Close</span>
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
    </button>
  </div>
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
            <button class="btn btn-primary" @click="handleItem(doc.id)" v-if="user && doc.inStock > 0">В кошик</button>
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
import {computed, onMounted, ref} from "vue";
import {formatDistanceToNow} from "date-fns";
import getCollection from "@/composables/getCollection";
import Spinner from "@/components/Spinner.vue";
import getUser from "@/composables/getUser";
import addToBasket from "@/composables/addToBasket";

export default {
  components: {Spinner},
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

    const handleItem = async (id) => {
      isError.value = await addToBasket(id, user);
    }

    onMounted(() => {
      document.getElementById('alert-2').style.display = 'none';
      document.getElementById('alert-3').style.display = 'none';
    })

    return { error, formattedDocuments, user, handleItem, isError }
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