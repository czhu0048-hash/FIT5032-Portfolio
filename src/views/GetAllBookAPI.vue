<template>
<pre>{{ jsondata }}</pre>
</template>

<script>
import axios from 'axios'

export default{
    data(){
        return {
            jsondata: null,
            error: null,
        };
    },
    mounted() {
        this.getBookCountAPI();
    },
    methods: {
        async getBookCountAPI() {
            try{
                const response = await axios.get('https://getallbooks-knpz25gs3a-uc.a.run.app');
                console.log("get api")
                this.jsondata = response.data;
                this.error = null;
            }catch (error) {
                console.error('Error fetching all books:', error);
                this.error = error;
                this.count = null;
            }
        },
    }
}
</script>
