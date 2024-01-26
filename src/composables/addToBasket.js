import useCollection from "@/composables/useCollection";
import {ref} from "vue";
import {timestamp} from "@/firebase/config";

const { addDoc, error } = useCollection('basket');

let isError = ref(false);

const addToBasket = async (id, user) => {
    const item = {
        customer: user.value.displayName,
        id: id,
        amount: 1,
        createdAt: timestamp()
    }

    await addDoc(item);
    isError = error.value;

    return isError;
}

export default addToBasket;