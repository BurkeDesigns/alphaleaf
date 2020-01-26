<template>
<main el="main">
    <div id="background">

    </div>
    <div el="section">
        <div>
            <div el="list" class="jobSearch">
                <h3 el="white">Learn SDET & earn ~$120k/yr after 5 months!</h3>
                <p el="white75">Take a look at all of the job opportunities you could be accepting that pay an average of $120k</p>
                <input type="text" placeholder="Job opportunities near me...">
                <div class="jobResults" el="list">
                    <div el="list-column">
                        <i class="material-icons">work_outline</i>
                        <div>
                            <div>4,250+ Jobs</div>
                            <div>Found in VA</div>
                        </div>
                    </div>

                    <div el="list-column">
                        <i class="material-icons">business</i>
                        <div>
                            <div>Fortune 500 Companies</div>
                            <div>Are hiring in VA</div>
                        </div>
                    </div>
                    <div style="text-align:right;">
                        <div el="link-icon" style="--color:#fff;">
                            See job openings
                            <i class="material-icons">arrow_forward</i>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
        <!-- <div el="card" style="justify-content: space-between; align-items:center;">
            <div el="list">
                <div el="title">Become an SDET Developer</div>
                <div el="p lg-txt">
                    Earn up to <b>140k</b> per year as an SDET engineer without a degree after 5 months of training
                </div>
                <div el="list-column" style="--gap:10px;margin-top:20px;">
                    <router-link to="/about" el="btn">Learn More</router-link>
                    <router-link to="/enroll" el="btn-2ry">Get Started</router-link>
                </div>
            </div>
            <img src="../assets/img/illustration-2.png" alt="" el="flex-img">
        </div> -->
    </div>
    <div el="section">
        
        <div el="list-column-alt" class="banner">
            <img src="../assets/img/code-glasses.jpeg" class="w250 mobile-img-full">
            <div el="list" class="card-content">
                <div>
                    <div el="status-sucess">get $500 off</div>
                </div>
                <h3 el>Become a Software Engineer in Test this Year!</h3>
                <p el>Enroll today and start working in the field in as little as 5 months!</p>
            </div>
            <div class="card-content">
                <router-link to="/courses" el="btn-2ry">learn more</router-link>
            </div>
            
        </div>
    </div>
   
    <div el="section">
        <div el="list" style="text-align:center;--gap:40px; padding-bottom:40px;">
            <h3 el>Our SDET Program Includes</h3>
            <div class="col3-wrap">
                <div el="list-column">
                    <div>
                        <i class="material-icons">laptop</i>
                    </div>
                    <div el="list" style="text-align:left;">
                        <h4 el>Online & On-Site Courses</h4>
                        <p el>Take courses in the comfort of your own home or join us on-campus for a more hands on learning experience. </p>
                    </div>
                </div>
                <div el="list-column">
                    <div>
                        <i class="material-icons">build</i>
                    </div>
                    <div el="list" style="text-align:left;">
                        <h4 el>Industry Standard Tools</h4>
                        <p el>Learn how to use the most popular tools available to open the doors for a larger pool of job openings</p>
                    </div>
                </div>
                <div el="list-column">
                    <div>
                        <i class="material-icons">business</i>
                    </div>
                    <div el="list" style="text-align:left;">
                        <h4 el>Project Based Environment</h4>
                        <p el>You'll work on teams and report to real developers that will fix the bugs you find.</p>
                    </div>
                </div>
                <div el="list-column">
                    <div>
                        <i class="material-icons">done_all</i>
                    </div>
                    <div el="list" style="text-align:left;">
                        <h4 el>No-fluff Learning</h4>
                        <p el>Learn the skills you need for the job, not skills you'll never use</p>
                    </div>
                </div>
                <div el="list-column">
                    <div>
                        <i class="material-icons">work_outline</i>
                    </div>
                    <div el="list" style="text-align:left;">
                        <h4 el>Employment Assistance</h4>
                        <p el>Finding a job doesn't have to be tough, we'll guide you through the process and help find you work opportunities.</p>
                    </div>
                </div>
                <div el="list-column">
                    <div>
                        <i class="material-icons">access_time</i>
                    </div>
                    <div el="list" style="text-align:left;">
                        <h4 el>Real World Experience</h4>
                        <p el>Students will learn essential SDET skills by contributing to real on-going projects.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style="background-color:var(--color-secondary);min-height:400px;display:flex;align-items:center;">
        <div el="section">
            <div el="list" style="text-align:center;">
                <h3 el="white">Ready to Start?</h3>
                <p el="white75">Enroll today and start working in the field in as little as 5 months earning up to $120k/yr!</p>
                <div><router-link to="/enroll" el="btn-2ry">enroll today</router-link></div>
            </div>
        </div>
    </div>
    
   
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</main>
</template>
<script>
import { gsap } from "gsap";
export default {
  name: 'home',
  components: {
  },
  methods:{
      gsap(selector, options){
            gsap.to(selector, options);
        }
  },
  mounted(){
      gsap.from('.jobSearch', {
          opacity: 0,
          x:-300,
          duration:1.5,
          ease:'power3'
      });
      gsap.from('.col3-wrap i',{
          opacity:0,
          x:-100,
          duration:0.5,
          rotation:-180,
          stagger: 0.2,
          ease: 'power3'
      })
  }
}
</script>
<style>
#background{
    height: 500px;
    width: 100%;
    position: absolute;
    background-color: var(--color-dark);
    background-image: linear-gradient(90deg,var(--color-dark), transparent 70%), url(../assets/img/laptop.jpg);
    background-size: 1300px;
    background-position: right center;
    background-repeat: no-repeat;
}
.jobSearch{
    --display:inline-grid;
    border-radius:8px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.2);
    --padding:30px;
    --color:#fff;
    --bg-color:var(--color-secondary);
    --hover-bg-color:var(--color-secondary);
    --pressed-bg-color:var(--color-secondary);
    margin-top:200px;
    max-width: 550px;
}
.jobSearch input{
    padding: 0 20px;
    height: 40px;
    display: flex;
    align-items: center;
    border: 0;
    border-radius: 4px;
    color: var(--color-dark);
    -webkit-text-fill-color: currentColor;
    box-shadow: 0 3px 6px rgba(0,0,0,0.2);
}
.card-content{
    padding:30px;
    display: grid;
    align-items: center;
    
}
.w250{
    width:250px;
}

.banner{
    --gap:0;
    border-radius: 8px;
    overflow: hidden;
    --bg-color: var(--color-light);
    grid-template-columns: max-content 1fr 250px;
}
.col3-wrap{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    justify-content: center;
}
.col3-wrap i{
    font-size: 35px;
    width: 70px;
    height: 70px;
    display: flex;
    box-shadow: 0 3px 10px rgba(0,0,0,0.2);
    border-radius: 100%;
    align-items: center;
    justify-content: center;
}

@media(max-width:800px){
    .mobile-img-full{
        width: 100%;
        object-fit: cover;
        object-position: bottom;
        height: 250px;
    }
    .banner{
        grid-template-columns:unset;
    }
    .card-content{
        padding:20px;
    }
    .col3-wrap{
        grid-template-columns: repeat(2, 1fr);
    }
}
@media(max-width:600px){
    .col3-wrap{
        grid-template-columns: 1fr;
    }
}

</style>
