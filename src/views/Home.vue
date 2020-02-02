<template>
<main el="main">
    <div id="background">

    </div>
    <div el="section">
        <div>
            <div el="list" class="jobSearch">
                <h3 el="white">Learn SDET & earn ~$120k/yr after 5 months!</h3>
                <p el="white75">Take a look at all of the job opportunities you could be accepting that pay an average of $120k</p>
                <label for="jobInput">
                    <input type="text" id="jobInput" placeholder="Job opportunities near me...">
                </label>
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
            <img src="https://alphaleaf.imgix.net/assets/img/code-glasses.jpeg?auto=format&fit=min&w=400" alt="coding" class="w250 mobile-img-full">
            <div el="list" class="card-content">
                <div>
                    <div el="status-sucess">get $500 off</div>
                </div>
                <h3 el>Become a Software Engineer in Test this Year!</h3>
                <p el>Enroll today and start working in the field in as little as 5 months!</p>
            </div>
            <div class="card-content" style="position:relative;">
                <router-link to="/courses" el="btn-2ry">learn more</router-link>
            </div>
            
        </div>
    </div>
   <!-- v-scroll="handleScroll" -->
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
                <div style="position:relative;"><router-link to="/enroll" el="btn-2ry">enroll today</router-link></div>
            </div>
        </div>
    </div>

    <div>
        <div el="section" style="padding:0;">
          <div el="c">
            <img src="https://alphaleaf.imgix.net/assets/img/person-looking-at-computer.jpg?auto=format&fit=min&w=700">
            <div el="list" style="padding:40px;">
              <h3 el>Software Engineer in Test (SDET)</h3>
              <p el>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna mi, scelerisque interdum sagittis a, accumsan a ipsum. Morbi ullamcorper sollicitudin imperdiet. Nam vitae pharetra nisi. Nam commodo vulputate lectus sed pulvinar. Aliquam nec venenatis erat. Nulla facilisi. Mauris tincidunt massa vitae urna efficitur eleifend. Phasellus quam urna, rutrum ac vestibulum eget, mattis id tortor. Aliquam porta laoreet tincidunt. </p>
              <div><router-link to="/contact" el="btn">contact us</router-link></div>
            </div>
          </div>
        </div>
      </div>

      <div style="background-color:var(--color-light);">
        <div el="section" style="padding:0;">
            <div el="list" style="padding:40px;--gap:40px;">
              <h3 el style="text-align:center;">How can Alphaleaf's programs help?</h3>

                <div class="accordian-list">
                    <div el="list" v-for="(item, index) in faq" @click="toggleAccordian(item)" :key="index">
                        <div>
                            {{item.label}}
                            <i class="material-icons">keyboard_arrow_down</i>
                        </div>
                        <p v-if="item.expand" el>{{item.content}}</p>
                    </div>
                    
                </div>


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
  data(){
      return{
        faq:[
            {
                label:'When can I start?',
                expand: false,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna mi, scelerisque interdum sagittis a, accumsan a ipsum. Morbi ullamcorper sollicitudin imperdiet. Nam vitae pharetra nisi. Nam commodo vulputate lectus sed pulvinar. Aliquam nec venenatis erat.'
            },
            {
                label:"I don't have an IT background, can I do it?",
                expand: false,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna mi, scelerisque interdum sagittis a, accumsan a ipsum. Morbi ullamcorper sollicitudin imperdiet. Nam vitae pharetra nisi. Nam commodo vulputate lectus sed pulvinar. Aliquam nec venenatis erat.'
            },
            {
                label:"What will it cost me?",
                expand: false,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna mi, scelerisque interdum sagittis a, accumsan a ipsum. Morbi ullamcorper sollicitudin imperdiet. Nam vitae pharetra nisi. Nam commodo vulputate lectus sed pulvinar. Aliquam nec venenatis erat.'
            },
            {
                label:"Do you guarantee job placement?",
                expand: false,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna mi, scelerisque interdum sagittis a, accumsan a ipsum. Morbi ullamcorper sollicitudin imperdiet. Nam vitae pharetra nisi. Nam commodo vulputate lectus sed pulvinar. Aliquam nec venenatis erat.'
            },
        ]
      }
  },
  methods:{
      toggleAccordian(item){
          item.expand = !item.expand;
      },
      gsap(selector, options){
            gsap.to(selector, options);
        },
        handleScroll: function (evt, el) {
            
            if (window.scrollY > 50) {
                gsap.to(el, {
                    y: -10,
                    duration:1,
                    opacity: 1,
                    ease: 'sine.out'
                })
            }
            return window.scrollY > 100
        }
  },
  directives: {
      scroll: {
            // directive definition
            inserted: function (el, binding) {
                let f = function (evt) {
                    if (binding.value(evt, el)) {
                        window.removeEventListener('scroll', f)
                    }
                };
                window.addEventListener('scroll', f);
            }
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
    background-image: linear-gradient(90deg,var(--color-dark), transparent 70%), url(https://alphaleaf.imgix.net/assets/img/laptop.jpg?auto=format);
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
    width:100%;
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

.accordian-list{
  display: grid;
    grid-gap: 10px;
    max-width: 700px;
    grid-template-columns: 1fr;
    margin: auto;
    width: 100%;
  
}
.accordian-list > * > *:first-child{
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
}
.accordian-list > *{
  --border:1px solid rgba(0,0,0,0.25);
  padding:15px;
  border-radius:4px;
  position:relative;
  --bg-color:#fff;
}

@media(max-width:800px){
    [el=c]{
    grid-template-columns: 1fr;
  }
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
    [el ~='btn'],
    [el|='btn']{
        width:100%;
        /* max-width: calc(100% - 60px); */
    }
}

</style>
