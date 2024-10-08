import {ref} from "vue";

const useGenres = (books) => {
        const genres = ref([]);
        const genreSet = new Set();

    (books ?? []).forEach(book => {
                book.genres.forEach(genre => genreSet.add(genre));
            });

        genres.value = [...genreSet]

        return { genres }
}

export default useGenres;