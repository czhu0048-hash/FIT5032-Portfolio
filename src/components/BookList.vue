<template>
    <div>
        <h1>Books with ISBN > 1000</h1>
        <ul>
            <li v-for="book in books" :key="book.id">
                {{ book.name }} - ISBN: {{ book.isbn }}
            </li>
        </ul>
    </div>
</template>

<script>
import { collection, getDocs, query, where } from 'firebase/firestore';
import { ref } from 'vue';
import db from '../firebase/init';
import { onMounted } from 'vue';

export default{
    setup(){
        const books = ref([]);

        const fetchBooks = async () =>{
            try{
                const q = query(collection(db,'books'), where('isbn', '>', 1000));
                const querySnapshot = await getDocs(q);
                const booksArray = [];
                querySnapshot.forEach((doc) => {
                    booksArray.push({id: doc.id, ...doc.data()});
                });
                books.value = booksArray;
            }catch(e){
                console.error(`Error fetching books: ${e}`)
            }
        };

        onMounted(()=>{
            fetchBooks();
        })

        return {
            books
        };
    }
}
</script>
