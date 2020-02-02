<template>
  <main el="main">
      <div el="section">
        <div el="list" style="grid-gap:30px;padding:30px 0;">

          <div el="list">
            <h3 el>Alphaleaf School</h3>
            <p el>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae volutpat massa. Sed sit amet metus eget nunc egestas semper. Donec tincidunt luctus eros et euismod. Praesent porttitor accumsan ipsum nec tincidunt. Nullam vitae sem ex. In pretium aliquam nulla, aliquet molestie magna lobortis id. 
            </p>
            <div>
              <router-link to="/courses" el="btn">view programs</router-link>
            </div>

          </div>

          <div el="card" style="justify-content: space-between; align-items:center;">
            <img src="https://leap.mediumra.re/assets/img/inner-2.jpg" alt="" el="flex-img">
            <div el="list">
                <h3 el>Our Mission</h3>
                <p el>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna mi, scelerisque interdum sagittis a, accumsan a ipsum. Morbi ullamcorper sollicitudin imperdiet. Nam vitae pharetra nisi. Nam commodo vulputate lectus sed pulvinar. Aliquam nec venenatis erat. Nulla facilisi.
                </p>
                <p el>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna mi, scelerisque interdum sagittis a, accumsan a ipsum. Morbi ullamcorper sollicitudin imperdiet. Nam vitae pharetra nisi. Nam commodo vulputate lectus sed pulvinar. Aliquam nec venenatis erat. </p>
                <!-- <div el="list-column" style="--gap:10px;margin-top:20px;">
                    <router-link to="/about" el="btn">Learn More</router-link>
                    <router-link to="/about" el="btn-2ry">Enroll</router-link>
                </div> -->
            </div>
          </div>

        </div>

          



      </div>
      <div style="background-color:var(--color-secondary);">
        <div el="section" style="padding:0;">
          <div el="c">
            <img src="https://alphaleaf.imgix.net/assets/img/girl-looking.jpg?auto=format">
            <div el="list" style="padding:40px;">
              <h3 el="white">How can Alphaleaf's programs help?</h3>
              <p el="white75">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna mi, scelerisque interdum sagittis a, accumsan a ipsum. Morbi ullamcorper sollicitudin imperdiet. Nam vitae pharetra nisi. Nam commodo vulputate lectus sed pulvinar. Aliquam nec venenatis erat. Nulla facilisi. Mauris tincidunt massa vitae urna efficitur eleifend. Phasellus quam urna, rutrum ac vestibulum eget, mattis id tortor. Aliquam porta laoreet tincidunt. </p>
              <div><router-link to="/contact" el="btn-2ry">contact us</router-link></div>
            </div>
          </div>
        </div>
      </div>


      <div el="section" style="min-height:300px;display:flex;align-items:center;">
        <div el="list">
            <h3 el>Leadership Team</h3>
            <p el>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae volutpat massa. Sed sit amet metus eget nunc egestas semper. Donec tincidunt luctus eros et euismod. Praesent porttitor accumsan ipsum nec tincidunt. Nullam vitae sem ex. In pretium aliquam nulla, aliquet molestie magna lobortis id. 
            </p>

          </div>

      </div>

      <div style="background-color:var(--color-light);">
        <div el="section" style="padding:0;">
          <div el="c">
            
            <div el="list" style="padding:40px;">
              <h3 el>Follow us on...</h3>
              <div class="socialList">
                <img src="https://alphaleaf.imgix.net/assets/img/facebook.png?auto=format" alt="" class="socialmedia facebook">
                <img src="https://alphaleaf.imgix.net/assets/img/youtube.png?auto=format" alt="" class="socialmedia youtube">
                <img src="https://alphaleaf.imgix.net/assets/img/instagram.png?auto=format" alt="" class="socialmedia instagram">
              </div>
            </div>
            <img src="https://alphaleaf.imgix.net/assets/img/social-media.jpg?auto=format">

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
[el="card"]{
  grid-gap:30px;
  padding: 30px;
    border-radius: 8px;
    background-color: var(--color-light);
}
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
@media(max-width:800px){
  [el=c]{
    grid-template-columns: 1fr;
  }
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
}
</style>
