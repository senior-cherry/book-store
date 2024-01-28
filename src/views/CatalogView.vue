<template>
  <dialog id="alert_modal" class="modal">
    <div class="modal-box bg-transparent">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <div role="alert" class="alert alert-success" v-if="!isError">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Your purchase has been confirmed!</span>
      </div>
      <div role="alert" class="alert alert-error" v-else>
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Error! Task failed successfully.</span>
      </div>
    </div>
  </dialog>
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
            <button class="btn btn-primary" @click="handleItem(doc.id)" v-if="user && doc.inStock > 0" :id="doc.id">В кошик</button>
            <button class="btn btn-primary btn-disabled" v-else>В кошик</button>
          </div>
        </div>
      </div>
    </div>
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
import addToBasket from "@/composables/addToBasket";
import updateAmount from "@/composables/updateAmount";
import CategoriesView from "@/views/CategoriesView.vue";

export default {
  components: {CategoriesView, Spinner},
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
      const btn = document.getElementById(id);
      if (!isError.value) {
        if (btn.textContent === "В кошику") {
          btn.textContent = "В кошик";
          await updateAmount(id, 1);
        } else {
          btn.textContent = "В кошику";
          await updateAmount(id, -1);
        }
      }
      document.getElementById('alert_modal').showModal();
    }


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