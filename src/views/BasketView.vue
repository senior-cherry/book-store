<template>
  <div class="overflow-x-auto" v-if="user">
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
      <tr v-for="item in formattedBooks">
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
          Zemlak, Daniel and Leannon
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
</template>

<script>
import getUser from "@/composables/getUser";
import {useRouter} from "vue-router";
import {computed, ref, watchEffect} from "vue";
import getCollection from "@/composables/getCollection";
import {formatDistanceToNow} from "date-fns";
import {projectFirestore} from "@/firebase/config";
import getBooks from "@/composables/getBooks";

export default {
  setup() {
    const { user } = getUser();
    const router = useRouter();
    const { error, documents } = getCollection('basket');
    const { err, books } = getBooks('books');

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map(doc => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time }
        })
      }
    });

    const formattedBooks = computed(() => {
      if (books.value) {
        return books.value.map(book => {
              let time = formatDistanceToNow(book.createdAt.toDate());
              return { ...book, createdAt: time }
          })
      }
    });

    const processItems = () => {
      // Loop through formattedDocuments
      formattedDocuments.value.forEach(documentItem => {
        // Your logic for processing each documentItem
        console.log(documentItem);
      });

      // Loop through formattedBooks
      formattedBooks.value.forEach(bookItem => {
        // Your logic for processing each bookItem
        console.log(bookItem);
      });
    };

    // Call the function when needed
    processItems();


    if (!user) {
        router.push({ name: 'auth' });
      }

    return { user, formattedBooks, formattedDocuments }
  }
}
</script>

<style>
.table {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>