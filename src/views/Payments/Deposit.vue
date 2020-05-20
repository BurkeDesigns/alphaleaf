<template>
  <main el="main">


            <div el="section">
                <div el="list">
                    <h3 el>SET Course Deposit</h3>
                    <p>Please submit your refundable course deposit below. This step is required in order to offical start your training.</p>
                    <CourseDeposit />
                </div>
            </div>

          


  </main>
</template>

<script>
// import firebase from "firebase";
import CourseDeposit from '@/components/CourseDeposit.vue'

export default {
    name: 'deposit',
    components: {
        CourseDeposit
    },
    data(){
        return {
            loading: false,
            
        }
    },
    methods: {
        
    },
}



</script>

<style scoped>




</style>
