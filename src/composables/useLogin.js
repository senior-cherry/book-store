import { ref } from "vue";
import { projectAuth } from "@/firebase/config";

const error = ref(null);

const login = async (email, password) => {
    error.value = null;

    try {
        const res = await projectAuth.signInWithEmailAndPassword(email, password);
    } catch (err) {
        error.value = "Некоректно введені дані"
    }
}

const useLogin = () => {
    return { error, login }
}

export default useLogin;