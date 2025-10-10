<template>
    <div class="container">
        <h1>Book Management</h1>
    </div>
    <div class="container">
        <form @submit.prevent="addBook">
            <div class="main-box">
                <div>
                    <label for="isbn">ISBN:</label>
                    <input type="text" v-model="isbnAdd" id="isbn" required />
                </div>
                <div>
                    <label for="name">Name:</label>
                    <input type="text" v-model="nameAdd" id="name" required />
                </div>
                <button type="submit">Add Book</button>
            </div>
        </form>
    </div>

    <div class="container">
        <form @submit.prevent="deleteBook">
            <div class="main-box">
                <div>
                    <label for="isbn">ISBN:</label>
                    <input type="text" v-model="isbnDelete" id="isbn" required />
                </div>
                <button type="submit">Delete Book</button>
            </div>
        </form>
    </div>

    <div class="container">
        <form @submit.prevent="updateBook">
            <div class="main-box">
                <div>
                    <label for="isbnQuery">ISBN to Update:</label>
                    <input type="text" v-model="isbnQuery" id="isbnQuery" required />
                </div>
                <div>
                    <label for="nameNew">New Name:</label>
                    <input type="text" v-model="nameNew" id="nameNew" required />
                </div>
                <button type="submit">Update Book</button>
            </div>
        </form>
    </div>

    <div class="container">
      <BookList/>
    </div>
</template>

<script>
import { ref } from 'vue';
import db from '../firebase/init.js';
import { collection, addDoc, deleteDoc, doc, query, where, getDocs, updateDoc } from 'firebase/firestore';
import BookList from '../components/BookList.vue';

export default {
    setup() {
        const isbnAdd = ref('');
        const nameAdd = ref('');
        const isbnDelete = ref('');
        const isbnQuery = ref('');
        const nameNew = ref('');

        const addBook = async () => {
            try {
                const isbnNumber = Number(isbnAdd.value);
                if (isNaN(isbnNumber)) {
                    alert('ISBN must be a valid number');
                    return;
                }
                const capitalizedName = nameAdd.value.toUpperCase();
                await addDoc(collection(db, 'books'), {
                    isbn: isbnNumber,
                    name: capitalizedName
                });
                isbnAdd.value = '';
                nameAdd.value = '';
                alert("Book added successfully!")
            } catch (e) {
                console.error(`Error while trying to add book: ${e}`)
            }
        }

        const deleteBook = async () => {
            try {
                const isbnNumber = Number(isbnDelete.value);
                if (isNaN(isbnNumber)) {
                    alert('ISBN must be a valid number');
                    return;
                }

                // Query for documents with matching ISBN
                const q = query(collection(db, "books"), where("isbn", "==", isbnNumber));
                const querySnapshot = await getDocs(q);

                if (querySnapshot.empty) {
                    alert('No book found with that ISBN');
                    return;
                }

                // Delete all matching documents
                querySnapshot.forEach(async (document) => {
                    await deleteDoc(doc(db, "books", document.id));
                });

                isbnDelete.value = '';
                alert("Book deleted successfully!")
            } catch (e) {
                console.error(`Error while trying to delete book: ${e}`)
            }
        }

        const updateBook = async () => {
            try {
                const isbnNumber = Number(isbnQuery.value);
                if (isNaN(isbnNumber)) {
                    alert('ISBN must be a valid number');
                    return;
                }

              if (!nameNew.value.trim()) {
                alert('New book name is required');
                return;
              }

                // Query for documents with matching ISBN
                const q = query(collection(db, "books"), where("isbn", "==", isbnNumber));
                const querySnapshot = await getDocs(q);

                if (querySnapshot.empty) {
                    alert('No book found with that ISBN');
                    return;
                }

                // Delete all matching documents
              querySnapshot.forEach(async (document) => {
                await updateDoc(doc(db, "books", document.id), {
                  name: nameNew.value
                });
              });

              isbnQuery.value = '';
              nameNew.value = '';
              alert("Book updated successfully!")

            } catch (e) {
              console.error(`Error while trying to update book: ${e}`)
            }
        }

        return {
            isbnAdd,
            nameAdd,
            isbnDelete,
            isbnQuery,
            nameNew,
            addBook,
            deleteBook,
            updateBook
        };
    },
    components: {
        BookList
    }
};
</script>

<style>
.container {
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    padding: 30px;
    margin: 20px auto;
    max-width: 600px;
    background-color: #f8f9fa;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.container h1 {
    margin-bottom: 25px;
    text-align: center;
    color: #333;
}

.main-box {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
}

.main-box div {
    margin-bottom: 15px;
}

.main-box label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
}

.main-box input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.main-box button {
    background-color: #007bff;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
}

.main-box button:hover {
    background-color: #0056b3;
}
</style>
