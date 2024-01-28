import {projectFirestore} from "@/firebase/config";

const updateAmount = async (id, num) => {
        projectFirestore.collection('books')
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    const currentFieldValue = doc.data().inStock;
                    const newFieldValue = currentFieldValue + num

                    projectFirestore.collection('books')
                        .doc(id)
                        .update({
                            inStock: newFieldValue,
                        })
                        .then(() => {
                            console.log('Field value decreased successfully');
                        })
                        .catch((error) => {
                            console.error('Error decreasing field value:', error);
                        });
                } else {
                    console.error('Document does not exist');
                }
            })
            .catch((error) => {
                console.error('Error fetching document:', error);
            });
    }

export default updateAmount;