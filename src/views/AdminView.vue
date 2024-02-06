<template>
  <div v-if="isAdmin">
    <div class="collapse border border-base-300 bg-base-200">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">
        Редагувати базу книжок
      </div>
      <div class="collapse-content">
        <button class="btn btn-primary">
          <router-link :to="{ name: 'create' }">Додати</router-link>
        </button>
        <div class="overflow-x-auto" v-if="formattedDocuments">
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
            <tr v-for="item in formattedDocuments">
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
                <button class="btn btn-error" @click="handleDeleteBook(item.id)">Видалити</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div v-else>
          <Spinner />
        </div>
      </div>
    </div>
    <div class="collapse border border-base-300 bg-base-200">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">
        Редагувати базу блогу
      </div>
      <div class="collapse-content">
        <button class="btn btn-primary">
          <router-link :to="{ name: 'createPost' }">Додати</router-link>
        </button>
        <div class="overflow-x-auto" v-if="formattedPosts">
          <table class="table">
            <thead>
            <tr>
              <th>Зображення</th>
              <th>Назва</th>
              <th>Дата</th>
              <th>Опис</th>
              <th>Дії</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="post in formattedPosts">
              <td>
                <div class="flex items-center gap-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img :src="post.image" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span>{{post.title}}</span>
              </td>
              <td>
                <span>{{post.createdAt}}</span>
              </td>
              <td>
                <span>{{post.description}}</span>
              </td>
              <td>
                <button class="btn btn-error" @click="handleDeletePost(post.id)">Видалити</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div v-else>
          <Spinner />
        </div>
      </div>
      </div>
    </div>
</template>

<script>
import getUser from "@/composables/getUser";
import {computed, onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import Spinner from "@/components/Spinner.vue";
import {formatDistanceToNow} from "date-fns";
import getCollection from "@/composables/getCollection";
import deleteCollection from "@/composables/deleteCollection";
import {projectFirestore} from "@/firebase/config";
import getPosts from "@/composables/getPosts";

export default {
  components: {Spinner},
  setup() {
    const { user } = getUser();
    let isAdmin = ref(false);
    const router = useRouter();

    const { error, documents } = getCollection('books');
    const { err, posts } = getPosts('blog');

    onMounted(() => {
      if (!user || (user && user.value.email !== 'serenitybooks@gmail.com')) {
        router.push({ name: 'auth' });
      } else {
        isAdmin.value = true;
      }
    });

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map(doc => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time }
        })
      }
    });

    const formattedPosts = computed(() => {
      if (posts.value) {
        return posts.value.map(post => {
          let time = formatDistanceToNow(post.createdAt.toDate());
          return { ...post, createdAt: time }
        })
      }
    })

    const handleDeleteBook = async (itemId) => {
      await projectFirestore.collection('books').doc(itemId).delete();
    }

    const handleDeletePost = async (postId) => {
      await projectFirestore.collection('blog').doc(postId).delete();
    }

    return { isAdmin, formattedDocuments, handleDeleteBook, formattedPosts, handleDeletePost }
  }
}
</script>

<style>
.collapse {
  width: 95%;
  margin: 2%;
}

.collapse-title {
  padding-top: 25px;
}
</style>