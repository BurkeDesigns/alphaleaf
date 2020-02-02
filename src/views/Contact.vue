<template>
  <main el="main">
      <div style="background-color:var(--color-light);min-height:600px;position:absolute;top:0;left:0;width:100%;"></div>
      <div el="section" style="padding-top:50px;">
        <div el="list" style="grid-gap:30px;">

          <div el="list">
            <h3 el>Get In Touch With Us</h3>
            <p el>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna mi, scelerisque interdum sagittis a, accumsan a ipsum. Morbi ullamcorper sollicitudin imperdiet. Nam vitae pharetra nisi. Nam commodo vulputate lectus sed pulvinar. Aliquam nec venenatis erat. Nulla facilisi. Mauris tincidunt massa vitae urna efficitur eleifend. Phasellus quam urna, rutrum ac vestibulum eget, mattis id tortor. Aliquam porta laoreet tincidunt. 
            </p>

          </div>


          <!-- <div el="list">
            <h1 el="title">Our Community</h1>
            <div el="p lg-txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae volutpat massa. Sed sit amet metus eget nunc egestas semper. Donec tincidunt luctus eros et euismod. Praesent porttitor accumsan ipsum nec tincidunt. Nullam vitae sem ex. In pretium aliquam nulla, aliquet molestie magna lobortis id. 
            </div>

          </div>

          <img src="../assets/img/map.jpg" alt=""> -->

        </div>
      </div>


            <div el="section">
              <div el="c">
                <div el="list" class="form">
                  <!-- FORM HERE -->
                  <h3 el="white">How can we help?</h3>
                  <div el="list-column">

                        <div el="input-list">
                          <label for="fname" el="input">
                              <input type="text" id="fname" placeholder="First Name" el>
                          </label>
                      </div>

                      <div el="input-list">
                          <label for="lname" el="input">
                              <input type="text" id="lname" placeholder="Last Name" el>
                          </label>
                      </div>

                  </div>

                  <div el="input-list">
                      <label for="email" el="input">
                          <input type="text" id="email" placeholder="Email" el>
                      </label>

                      <label for="textarea1" el="input">
                          <textarea name="textarea1" id="textarea1" placeholder="Message" rows="10" el></textarea>
                      </label>
                  </div>

                  <router-link to="/contact" el="btn-2ry">submit request</router-link>

                  



                </div>
                <div el="list" style="padding:40px;">
                  <h3 el>Follow us on...</h3>
                  <div class="socialList">
                    <img src="https://alphaleaf.imgix.net/assets/img/facebook.png?auto=format" alt="facebook" class="socialmedia facebook">
                    <img src="https://alphaleaf.imgix.net/assets/img/youtube.png?auto=format" alt="youtube" class="socialmedia youtube">
                    <img src="https://alphaleaf.imgix.net/assets/img/instagram.png?auto=format" alt="instagram" class="socialmedia instagram">
                  </div>
                </div>
                

              </div>
            </div>
         

        <div el="section">
        <div el="list" style="grid-gap:30px;">

          


          



          <div el="grid">
            
            <div el="list">
                <h2 el>Visit</h2>
                <div el="link-icon"><i class="material-icons">room</i>43893 Churchill Glen Dr, Chantilly, VA</div>
            </div>

            <div el="list">
                <h2 el>Email</h2>
                <div el="link-icon"><i class="material-icons">email</i>info@alphaleaf.tech</div>
            </div>

            <div el="list">
                <h2 el>Call</h2>
                <div el="link-icon"><i class="material-icons">phone</i>571-232-7661</div>
            </div>

            
          </div>


        



        </div>

          



      </div>

          


  </main>
</template>



<style scoped>
[el~="flex-img"]{
  border-radius:8px;
  object-fit: cover;
}
[el="grid"]{
  display: grid;
    grid-auto-flow: column;
    grid-gap: 40px;
    padding: 30px;
    background-color: #f1f1f1;
    border-radius: 8px;
    align-items: center;
    justify-content: space-evenly;
    min-height:250px;
}
[el="grid"] [el="title"]{}
/* img{
  display: block;
  width:100%;
  height:500px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
      border: 5px solid rgba(0,0,0,0.1);
} */


[el=c]{
  display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    min-height: 400px;
}
[el=c] > img{
  display:block;
  width:100%;
  height:100%;
  min-height:250px;
  object-fit: cover;
  object-position: center;
}
img.socialmedia {
    height: 120px;
    filter:drop-shadow(0 3px 8px rgba(0,0,0,0.2));
    transition:0.3s;
    cursor: pointer;
    user-select: none;
}
img.socialmedia:hover{
  transform:scale(1.2);
  filter:drop-shadow(0 5px 10px rgba(0,0,0,0.4));
  z-index:3;
}
.socialList{
  display: grid;
    grid-template-columns: 220px 1fr;
    grid-template-rows: 60px 50px;
    padding-bottom: 80px;
}
.youtube{
  z-index:2;
  grid-row: 2;
  margin-left:95px;
}
label{
  position:relative;
}
textarea{
  /* width:100%; */
    position:relative;

}
@media(max-width:800px){
  .socialList{
      grid-template-columns: 130px 1fr;
      grid-template-rows: 50px 50px;
      padding-bottom: 40px;
  }
  .youtube{
    margin-left:50px;
  }
  img.socialmedia {
      height: 80px;
      filter:drop-shadow(0 3px 8px rgba(0,0,0,0.2));
      transition:0.3s;
      cursor: pointer;
      user-select: none;
  }
  [el=c]{
    grid-template-columns: 1fr;
  }
  [el="grid"]{
    grid-auto-flow: row;
  }

}


.form{
  background-color: var(--color-secondary);
    padding: 30px;
    border-radius: 8px;
    position:relative;
}


</style>
