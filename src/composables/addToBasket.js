import useCollection from "@/composables/useCollection";
import {ref} from "vue";

const { addDoc, error } = useCollection('basket');

let isError = ref(false);

const addToBasket = async (id, user) => {
    const item = {
        customer: user.value.displayName,
        id: id
    }

    await addDoc(item);
    isError = error.value;
    return isError;
}

export default addToBasket;