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
                            <input type="text" id="fname" placeholder="First Name" el="stretch">
                        </label>

                        <label for="lname" el="input">
                            <input type="text" id="lname" placeholder="Last Name" el="stretch">
                        </label>

                    </div>
                  </div>

                  <div el="input-list" style="--gap:30px;">
                      <label for="email" el="input">
                          <input type="text" id="email" placeholder="Email" el>
                      </label>
                      <label for="phone" el="input">
                          <input type="text" id="phone" placeholder="Phone" el>
                      </label>
                      <label for="msg" el="input">
                          <input type="text" id="msg" placeholder="Message" el>
                      </label>

                      <!-- <label for="textarea1" el="input">
                          <textarea name="textarea1" id="textarea1" placeholder="Message" rows="10" el></textarea>
                      </label> -->
                  </div>

                  <router-link to="/contact" el="btn stretch">send message</router-link>

                  



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
