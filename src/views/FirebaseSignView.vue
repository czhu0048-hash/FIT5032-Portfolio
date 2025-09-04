<template>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email"/></p>
    <p><input type="Password" placeholder="Password" v-model="password"/></p>
    <p><button @click="register">Save to Firebase</button></p>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const email = ref("")
const password = ref("")
const router = useRouter()
const auth = getAuth()
const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
        console.log("Firebase Register Successful!")
        router.push("/FireLogin")
    }).catch((error) => {
        console.log(error.code);
    })
};
</script>