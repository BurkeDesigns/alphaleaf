<template>
  <main el="main">
      <div el="section">
        <div el="list" style="grid-gap:30px;">

          <div el="list">
            <h1 el="title">Get In Touch</h1>
            <div el="p lg-txt">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.  
            </div>

          </div>

          <div el="grid">
            
            <div el="list">
                <div el="title">Visit</div>
                <div el="link-icon"><i class="material-icons">room</i>43893 Churchill Glen Dr, Chantilly, VA</div>
            </div>

            <div el="list">
                <div el="title">Email</div>
                <div el="link-icon"><i class="material-icons">email</i>info@alphaleaf.tech</div>
            </div>

            <div el="list">
                <div el="title">Call</div>
                <div el="link-icon"><i class="material-icons">phone</i>571-232-7661</div>
            </div>

            
          </div>


          <div el="list">
            <h1 el="title">Our Community</h1>
            <div el="p lg-txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae volutpat massa. Sed sit amet metus eget nunc egestas semper. Donec tincidunt luctus eros et euismod. Praesent porttitor accumsan ipsum nec tincidunt. Nullam vitae sem ex. In pretium aliquam nulla, aliquet molestie magna lobortis id. 
            </div>

          </div>

          <img src="../assets/img/map.jpg" alt="">


        



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
img{
  display: block;
  width:100%;
  height:500px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
      border: 5px solid rgba(0,0,0,0.1);
}


</style>
