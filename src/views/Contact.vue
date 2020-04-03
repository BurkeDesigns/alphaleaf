<template>
  <main el="main">


            <div el="section">
              <div el="list" class="form" style="--gap:50px;padding-top:70px;">
                  <!-- FORM HERE -->
                  <h1 el="center-txt" style="--color:var(--color-secondary);" class="title">Let's Talk! Contact Alphaleaf</h1>
                  <div el="list-column-alt">
                      <div el="list" style="--gap:5px">
                          <h4 el style="--color:var(--color-65);">Call us</h4>
                          <div class="lg-bold">+1 (202) 790 3893</div>
                      </div>
                      <div el="list" style="--gap:5px">
                          <h4 el style="--color:var(--color-65);">or send us an email</h4>
                          <div class="lg-bold">info@alphaleaf.tech</div>
                      </div>
                      
                  </div>
                  <div el="input-list">
                    <div el="list-column" style="grid-template-columns: 1fr 1fr;">

                            
                        <label for="fname" el="input">
                            <input type="text" id="fname" placeholder="First Name" el="stretch" v-model="contact.fname">
                        </label>

                        <label for="lname" el="input">
                            <input type="text" id="lname" placeholder="Last Name" el="stretch" v-model="contact.lname">
                        </label>

                    </div>
                  </div>

                  <div el="input-list" style="--gap:30px;">
                      <label for="email" el="input">
                          <input type="text" id="email" placeholder="Email" el v-model="contact.email">
                      </label>
                      <label for="phone" el="input">
                          <input type="text" id="phone" placeholder="Phone" el v-model="contact.phone">
                      </label>
                      <label for="msg" el="input">
                          <input type="text" id="msg" placeholder="Message" el v-model="contact.msg">
                      </label>

                      <!-- <label for="textarea1" el="input">
                          <textarea name="textarea1" id="textarea1" placeholder="Message" rows="10" el></textarea>
                      </label> -->
                  </div>

                  <div el="btn stretch" @click="sendMessage">
                    <span v-if="!loading">send message</span>
                    <span v-else>sending...</span>
                  </div>

                  



                </div>
            </div>
         

        <div el="section" style="padding:30px;">
            <div el="list">
                <h4 el style="--color:var(--color-black);">Come visit us</h4>
                <div el="list" style="--gap:4px;">
                    <a href="http://maps.google.com/?q=12750 Fair Lakes Cir, Fairfax, VA 22033" el="link" target="_blank">12750 Fair Lakes Cir, Fairfax, VA 22033</a>
                    <p el>Mon, Tue, Wed: 5pm - 10pm</p>
                    <p el>Sun: 10am - 4pm</p>
                </div>
                <a href="http://maps.google.com/?q=12750 Fair Lakes Cir, Fairfax, VA 22033" target="_blank">
                    <img src="../assets/img/maps.png" alt="location" el="stretch" class="map">
                </a>
            </div>
            
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
