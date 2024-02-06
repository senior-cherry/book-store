<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Назва: </label>
      <input type="text" v-model="title" required>
      <label>Зображення: </label>
      <input type="file" class="file-input file-input-bordered file-input-primary w-full max-w-xs" @change="handleFile" alt="image" required />
      <label>Опис: </label>
      <textarea v-model="description" required></textarea>
      <button class="btn btn-block btn-primary">Додати пост</button>
    </form>
  </div>
</template>

<script>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {projectFirestore, storage, timestamp} from "@/firebase/config";
import useCollection from "@/composables/useCollection";

export default {
  setup() {
    const title = ref('');
    const image = ref('');
    const description = ref('');

    const router = useRouter();

    const { addDoc, error } = useCollection('blog');

    const handleFile = (event) => {
      image.value = event.target.files[0].name;
      console.log(event.target.files[0].name)
    }

    const handleSubmit = async () => {
      const post = {
        title: title.value,
        image: image.value,
        description: description.value,
        createdAt: timestamp()
      }

      await addDoc(post);
      if (!error.value) {
        await router.push({name: 'blog'})
      }
    }

    return { title, image, description, handleSubmit, handleFile }
  }
}
</script>

<style>
form {
  max-width: 480px;

  text-align: left;
  margin: 0 auto 50px;
}

input, textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}

textarea {
  height: 160px;
}

label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  margin-bottom: 10px;
}

button {
  display: block;
  margin-top: 30px;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
  cursor: pointer;
}

.genre {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}

</style>