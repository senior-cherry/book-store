<template>
  <div class="overflow-x-auto" v-if="user && formattedItems">
    <table class="table">
      <thead>
      <tr>
        <th>Зображення</th>
        <th>Назва</th>
        <th>Автор</th>
        <th>Рік</th>
        <th>Мова</th>
        <th>Ціна</th>
        <th>Дії</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in formattedItems">
        <td>
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img :src="item.image" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          <span>{{item.title}}</span>
        </td>
        <td>
          <span>{{item.author}}</span>
        </td>
        <td>
          <span>{{item.year}}</span>
        </td>
        <td>
          <span>{{item.language}}</span>
        </td>
        <td>
          <span>{{item.price}} UAH</span>
        </td>
        <td>
          <button class="btn btn-error" @click="handleClick(item.id)">Видалити</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getUser from "@/composables/getUser";
import {useRouter} from "vue-router";
import {computed} from "vue";
import getCollection from "@/composables/getCollection";
import {formatDistanceToNow} from "date-fns";
import getBooks from "@/composables/getBooks";
import Spinner from "@/components/Spinner.vue";
import deleteCollection from "@/composables/deleteCollection";

export default {
  components: {Spinner},
  setup() {
    const { user } = getUser();
    const router = useRouter();
    const { error, documents } = getCollection('basket');
    const { err, books } = getBooks('books');

    const formattedItems = computed(() => {
      if (!books.value || !documents.value) {
        return null;
      }

      return books.value.flatMap(book => {
        const matchingDoc = documents.value.find(doc => book.id === doc.itemId && doc.customer === user.value.displayName);

        if (matchingDoc) {
          const time = formatDistanceToNow(book.createdAt.toDate());
          return { ...book, createdAt: time };
        }
        return null;
      }).filter(item => item !== null);
    });

    const handleClick = async (itemId) => {
      await deleteCollection(itemId, "basket");
    }

    if (!user) {
        router.push({ name: 'auth' });
      }

    return { user, formattedItems, handleClick }
  }
}
</script>

<style>
.table {
  margin-top: 50px;
  margin-bottom: 50px;
}

.table td .btn {
  margin-bottom: 28px;
}
</style>