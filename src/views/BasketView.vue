<template>
  <div class="overflow-x-auto" v-if="user && formattedItems">
    <table class="table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
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
            <div>
              <div class="font-bold"></div>
              <div class="text-sm opacity-50">{{item.title}}</div>
            </div>
          </div>
        </td>
        <td>
          {{item.amount}}
          <br/>
          <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button class="btn btn-ghost btn-xs">details</button>
        </th>
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


    if (!user) {
        router.push({ name: 'auth' });
      }

    return { user, formattedItems }
  }
}
</script>

<style>
.table {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>