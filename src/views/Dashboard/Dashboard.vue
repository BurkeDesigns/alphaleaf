<template>
  <main el="main">


            <div el="section">
                <div style='max-width: 1600px'><div style='position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;'><iframe width="1600" height="900" src="https://web.microsoftstream.com/embed/channel/4472722d-fad6-4e1a-bfc4-840c18420cdc?sort=date" allowfullscreen style='border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;'></iframe></div></div>
            </div>

          


  </main>
</template>

<script>
// import firebase from "firebase";


export default {
    name: 'contact',
    data(){
        return {
            loading: false,
            contact:{
                fname: '',
                lname:'',
                email:'',
                phone:'',
                msg:''
            }
        }
    },
    methods: {
        validateForm(){
            var x = this;
            
            if(
                x.contact.fname != ''
                && x.contact.lname != ''
                && x.contact.email != ''
                && x.contact.phone != ''
                //&& x.contact.msg != ''
            ){
                return true;
            }else{
                return false;
            }
        },
        validateEmail(){
            var patt = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return patt.test(this.contact.email);
        },
        sendMessage(){
            var x = this;
            if(!x.validateForm()){
                alert('You must fill out all required information before a submission can be completed.');
                return;
            }
            if(!x.validateEmail()){
                alert('Your email address is incorrect. Please check your entered email address and try again.');
                return;
            }
            const data = { 
                fname:  x.contact.fname,
                lname: x.contact.lname,
                email: x.contact.email,
                phone: x.contact.phone,
                msg: x.contact.msg
            };
            x.loading = true;
            fetch('https://us-central1-alphaleaf-uat.cloudfunctions.net/addMessage', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then(response => response.text())
            .then((data) => {
                x.loading = false;
                console.log('Success:', data);
                alert('Thank you for your submission. We will get back to you as soon as possible.');
                x.resetForm();
            }).catch((error) => {
                x.loading = false;
                alert('We were unable to recieve your request. Please check your internet connection and try again.');
                console.error('Error:', error);
            });
        },
        resetForm(){
            this.contact.fname = '';
            this.contact.lname = '';
            this.contact.email = '';
            this.contact.phone = '';
            this.contact.msg = '';
        }
    },
}



</script>

<style scoped>

.map{
    border-radius:4px;
    height:360px;
    object-fit: cover;
    object-position: center;
    box-shadow: 0 3px 10px rgba(0,0,0,0.2);
}
.lg-bold{
    font-size: x-large;
    font-weight: var(--font-bold);
}
[el~="flex-img"]{
  border-radius:8px;
  object-fit: cover;
}


/* img{
  display: block;
  width:100%;
  height:500px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
      border: 5px solid rgba(0,0,0,0.1);
} */



label{
  position:relative;
}
textarea{
  position:relative;
}
@media(max-width:800px){
 .title{
    font-size:var(--font-h2);
}

}


.form{
  /* background-color: var(--color-secondary); */
    padding: 10px;
    /* border-radius: 8px; */
    position:relative;
    margin:auto;
    max-width:600px;
}


</style>
