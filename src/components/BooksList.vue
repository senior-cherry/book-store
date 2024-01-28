<template>
  <Modal :isError="isError" />
  <div v-for="doc in books">
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
</template>

<script>
import getUser from "@/composables/getUser";
import addToBasket from "@/composables/addToBasket";
import updateAmount from "@/composables/updateAmount";
import {ref} from "vue";
import Modal from "@/components/Modal.vue";
export default {
  components: {Modal},
  props: ['books'],
  setup() {
    const { error, user } = getUser();
    const isError = ref(false);

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

    return { user, handleItem, isError };
  }
}
</script>