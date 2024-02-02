import {projectFirestore} from "@/firebase/config";
import updateAmount from "@/composables/updateAmount";
import getUser from "@/composables/getUser";

const { user } = getUser();

const deleteCollection = async (itemId, collection) => {
    try {
        const querySnapshot = await projectFirestore.collection(collection)
            .where("itemId", '==', itemId)
            .get();

        querySnapshot.forEach(async (doc) => {
            if (doc.data().userId === user.value.uid) {
                await projectFirestore.collection("basket").doc(doc.id).delete();
                await updateAmount(itemId, 1);
                console.log('Document successfully deleted!');
            }
        });
    } catch (error) {
        console.error('Error deleting document: ', error);
    }
}

export default deleteCollection;