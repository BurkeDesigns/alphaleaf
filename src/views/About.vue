<template>
  <main el="main">
      <div el="section">
        <div el="list" style="grid-gap:30px;">

          <div el="list">
            <h1 el="title">About Us</h1>
            <div el="p lg-txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae volutpat massa. Sed sit amet metus eget nunc egestas semper. Donec tincidunt luctus eros et euismod. Praesent porttitor accumsan ipsum nec tincidunt. Nullam vitae sem ex. In pretium aliquam nulla, aliquet molestie magna lobortis id. 
            </div>

          </div>

          <div el="card" style="justify-content: space-between; align-items:center;">
            <img src="https://leap.mediumra.re/assets/img/inner-2.jpg" alt="" el="flex-img">
            <div el="list">
                <div el="title">Our Mission</div>
                <div el="p lg-txt">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.
                  <br><br>
                  Cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.    
                </div>
                <!-- <div el="list-column" style="--gap:10px;margin-top:20px;">
                    <router-link to="/about" el="btn">Learn More</router-link>
                    <router-link to="/about" el="btn-2ry">Enroll</router-link>
                </div> -->
            </div>
          </div>


          <div el="list">
            <h1 el="title">Leadership Team</h1>
            <div el="p lg-txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae volutpat massa. Sed sit amet metus eget nunc egestas semper. Donec tincidunt luctus eros et euismod. Praesent porttitor accumsan ipsum nec tincidunt. Nullam vitae sem ex. In pretium aliquam nulla, aliquet molestie magna lobortis id. 
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
[el="card"]{
  grid-gap:30px;
  padding: 30px;
    border-radius: 8px;
    background-color: #f1f1f1;
}
</style>
