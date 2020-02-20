<template>
<main el="main">
    <div id="background">

    </div>
    <div el="section">
        <div>
            <div el="list" class="jobSearch">
                <h3 el="white">Become a Software Engineer in Test</h3>
                <!-- <p el="white75">Take a look at all of the job opportunities you could be accepting that pay an average of $120k</p> -->
                <!-- <label for="jobInput">
                    <input type="text" id="jobInput" placeholder="Job opportunities near me...">
                </label> -->
                <div class="jobResults" el="list">
                    <div el="list-column">
                        <i class="material-icons">monetization_on</i>
                        <div>
                            <div>Earn $80-120k</div>
                            <div>On average</div>
                        </div>
                    </div>
                    <div el="list-column">
                        <i class="material-icons">work</i>
                        <div>
                            <div>5,553+ Jobs</div>
                            <div>Available in VA</div>
                        </div>
                    </div>

                    <div el="list-column">
                        <i class="material-icons">business</i>
                        <div>
                            <div>Fortune 500 Companies</div>
                            <div>Are hiring</div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    </div>
    <div el="section">
        
        <div el="list-column-alt" class="banner">
            <img src="https://alphaleaf.imgix.net/assets/img/session.png?auto=format&fit=min&w=500" alt="coding" class="w250 mobile-img-full">
            <div el="list" class="card-content">
                <div>
                    <div el="status-sucess">STARTS IN 2 DAYS</div>
                </div>
                <h3 el>Join our FREE training session!</h3>
                <p el>We offer a free training session every Sunday. Join us and learn about Software Engineer in Test and find out if it's right for you.</p>
            </div>
            <div class="card-content" style="position:relative;">
                <router-link to="/enroll" el="btn-2ry">register now</router-link>
            </div>
            
        </div>
    </div>
   <!-- v-scroll="handleScroll" -->
    <div el="section">
        <div el="list" style="text-align:center;--gap:40px; padding-bottom:40px;">
            <h3 el>Our SET Program Includes</h3>
            <div class="col3-wrap">
                <div el="list-column">
                    <div>
                        <img src="../assets/icons/online.svg" alt="icon">
                        <!-- <i class="material-icons">laptop</i> -->
                    </div>
                    <div el="list" style="text-align:left;">
                        <h4 el>Online & On-Site Courses</h4>
                        <p el>Take courses in the comfort of your own home or join us on-campus for a more hands on learning experience. </p>
                    </div>
                </div>
                <div el="list-column">
                    <div>
                        <img src="../assets/icons/tools.svg" alt="icon">
                        <!-- <i class="material-icons">build</i> -->
                    </div>
                    <div el="list" style="text-align:left;">
                        <h4 el>Industry Standard Tools</h4>
                        <p el>You will use the industry standard tools to experience a real work environment.</p>
                    </div>
                </div>
                <div el="list-column">
                    <div>
                        <img src="../assets/icons/project.svg" alt="icon">
                        <!-- <i class="material-icons">business</i> -->
                    </div>
                    <div el="list" style="text-align:left;">
                        <h4 el>Project Based Environment</h4>
                        <p el>You will work on teams and report to real developers that will fix the bugs you find.</p>
                    </div>
                </div>
                <div el="list-column">
                    <div>
                        <img src="../assets/icons/learning.svg" alt="icon">
                        <!-- <i class="material-icons">done_all</i> -->
                    </div>
                    <div el="list" style="text-align:left;">
                        <h4 el>No-fluff Learning</h4>
                        <p el>Learn the skills you need for the job, not skills you will never use</p>
                    </div>
                </div>
                <div el="list-column">
                    <div>
                        <img src="../assets/icons/support.svg" alt="icon">
                        <!-- <i class="material-icons">work_outline</i> -->
                    </div>
                    <div el="list" style="text-align:left;">
                        <h4 el>Employment Assistance</h4>
                        <p el>Finding a job doesn't have to be tough, we'll guide you through the process and help find you work opportunities.</p>
                    </div>
                </div>
                <div el="list-column">
                    <div>
                        <img src="../assets/icons/idea.svg" alt="icon">
                        <!-- <i class="material-icons">access_time</i> -->
                    </div>
                    <div el="list" style="text-align:left;">
                        <h4 el>Real World Experience</h4>
                        <p el>Learn employable SET skills by contributing to real on-going projects.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div style="background-color:var(--color-light);min-height:400px;display:flex;align-items:center;">
        <div el="section">
            <div el="list-column-alt" style="text-align:center;--gap:0px; justify-content:center;">
                <div el="list" style="padding: 60px 30px;">
                    <h3 el>Alphaleaf</h3>
                    <p el>Costs $5,000</p>
                    <p el>5 month training</p>
                    <p el>On the job experience</p>
                    <p el>Senior Engineer Instructors</p>

                </div>
                <div style="display:flex;align-items:center;justify-content:center;">
                    <i class="material-icons">thumbs_up_down</i>
                </div>
                <div el="list" style="padding: 60px 30px;">
                    <h3 el>Others</h3>
                    <p el>Costs $12,000+</p>
                    <p el>7+ month training</p>
                    <p el>Student experience</p>
                    <p el>Alumni Instructors</p>
                </div>
            </div>
        </div>
    </div>

    <div style="background-color:var(--color-secondary);min-height:400px;display:flex;align-items:center;">
        <div el="section" style="padding: 60px 30px;">
            <div el="list" style="text-align:center;--gap:30px;">
                <div el="list">
                    <h3 el="white">Ready to Start?</h3>
                    <p el="white75">No prior experience required. Enroll today and start working in the field in as little as 5 months earning $80k - $120k on average!</p>
                    <div style="position:relative;"><router-link to="/enroll" el="btn-2ry">enroll today</router-link></div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div>
        <div el="section">
            <img src="../assets/img/temp_roadmap.png" alt="roadmap" style="width:100%;">
        </div>
    </div> -->

    <!-- <div>
        <div el="section" style="padding:0;">
          <div el="c">
            <img src="https://alphaleaf.imgix.net/assets/img/person-looking-at-computer.jpg?auto=format&fit=min&w=700" alt="coding">
            <div el="list" style="padding:40px;">
              <h3 el>Software Engineer in Test (SET)</h3>
              <p el>Throughout our extensive SET training program, you will learn how to design, implement, and maintain sophisticated test automation frameworks. </p>
              <div><router-link to="/contact" el="btn">contact us</router-link></div>
            </div>
          </div>
        </div>
      </div> -->
    <!-- <div style="background-color: var(--color-secondary)">
        <div el="section" style="padding:0;">
          
            <div el="list" style="padding:40px;">
              <h3 el="white">Why Alphaleaf?</h3>
                <p el="white75">Ordinary IT bootcamps can cost over $20,000 only for you to work an entry level job. Alphaleaf’s unique approach teaches you the critical tech skills that companies are hiring for today. From day one, you are immersed in a real-world project environment where you learn employable, in-demand skills that top companies want.</p>
              <p el="white75">At Alphaleaf, we believe that everyone has the right to a great career. You do not need a formal education or background - with Alphaleaf, we'll get you to your dream job in a fraction of the time and cost of a traditional program. </p>
              <div><router-link to="/contact" el="btn-2ry">Start Today</router-link></div>
            </div>
          </div>
      </div> -->

      <div>
        <div el="section" style="padding:0;">
            <div el="list" class="faq">
              <h3 el style="text-align:center;">Frequently Asked Questions</h3>

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
                content: 'Our next batch starts March 1st, 2020. Make sure you sign up before this date.'
            },
            {
                label:"I don't have an IT background, can I do it?",
                expand: false,
                content: 'Of course you can! We designed our curriculum so that anyone with the zeal to learn can aquire employable IT skills.'
            },
            {
                label:"Will I be certified?",
                expand: false,
                content: 'If you excel in our training, you should have no problem obtaining Agile Scrum Certification, Oracle Certified Associate, and Docker Associate Certification. '
            },
            {
                label:"Does Alphaleaf offer career services?",
                expand: false,
                content: 'Yes, we will provide every successful student with comprehensive career services once they land their dream IT job.'
            },
            {
                label:"What do I need to get started?",
                expand: false,
                content: 'You need a working laptop, tenacity, and a passion for testing/breaking web applications.'
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
      gsap.from('.col3-wrap img',{
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
    background-image: linear-gradient(90deg,var(--color-dark), transparent 70%), url(https://alphaleaf.imgix.net/assets/img/homepage_bg.jpeg?auto=format&w=1080);
    background-size: 1300px;
    background-position: right center;
    background-repeat: no-repeat;
}
.faq{
    padding:40px;
    --gap:40px;
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
    margin-top:300px;
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
.col3-wrap img{
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
    .faq{
    padding: 40px 20px;
    --gap:40px;
}
    #background{
        background-image: linear-gradient(90deg,var(--color-dark), transparent 70%), url(https://alphaleaf.imgix.net/assets/img/homepage_bg.jpeg?auto=format&w=700);
        background-size: cover;
        height: 350px;
    }
    .jobSearch{
        margin-top:200px;
    }
    [el=c]{
        grid-template-columns: 1fr;
    }
    .mobile-img-full{
        width: 100%;
        object-fit: cover;
        object-position: top;
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
