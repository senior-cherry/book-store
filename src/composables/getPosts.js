import {ref, watchEffect} from "vue";
import { projectFirestore } from "@/firebase/config";

const getPosts = (collection) => {
    const posts = ref(null);
    const err = ref(null);

    let collectionRef = projectFirestore.collection(collection)
        .orderBy('createdAt', 'desc');

    const unsub = collectionRef.onSnapshot((snap) => {
        let results = []
        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })
        posts.value = results;
        err.value = null;
    }, () => {
        posts.value = null;
        err.value = "Could not fetch data";
    });

    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub())
    })

    return { posts, err }
}

export default getPosts;