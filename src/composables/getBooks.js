import {ref, watchEffect} from "vue";
import { projectFirestore } from "@/firebase/config";

const getBooks = (collection) => {
    const books = ref(null);
    const err = ref(null);

    let collectionRef = projectFirestore.collection(collection)
        .orderBy('createdAt', 'desc');

    const unsub = collectionRef.onSnapshot((snap) => {
        let results = []
        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })
        books.value = results;
        err.value = null;
    }, () => {
        books.value = null;
        err.value = "Could not fetch data";
    });

    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub())
    })

    return { books, err }
}

export default getBooks;