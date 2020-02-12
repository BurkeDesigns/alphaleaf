<template>
  <div>
    <div el="section">
        <div el="list" style="padding:30px;--gap:45px;">
            <div el="list-column-alt">
                <div el="list">
                    <h3 el>Software Engineer in Test</h3>
                    <p el>Throughout our extensive SET training program, you'll learn how to design, implement, and maintain sophisticated test automation frameworks.</p>
                    <div>
                        <router-link to="/enroll" el="btn">enroll</router-link>
                    </div>
                    <hr el>
                    <div class="col3-wrap" style="padding-bottom: 30px;">
                    <div el="list-column">
                        <div>
                            <i class="material-icons">access_time</i>
                        </div>
                        <div el="list" style="text-align:left;--gap:8px;">
                            <p el="bold" style="--color:var(--color-dark);">Estimated Time</p>
                            <p el>5 months</p>
                        </div>
                    </div>
                    <div el="list-column">
                        <div>
                            <i class="material-icons">calendar_today</i>
                        </div>
                        <div el="list" style="text-align:left;--gap:8px;">
                            <p el="bold" style="--color:var(--color-dark);">Classes Start On</p>
                            <p el>March 1, 2020 @7pm</p>
                        </div>
                    </div>
                    <div el="list-column">
                        <div>
                            <i class="material-icons">info</i>
                        </div>
                        <div el="list" style="text-align:left;--gap:8px;">
                            <p el="bold" style="--color:var(--color-dark);">Prior programming experience not required</p>
                        </div>
                    </div>


                </div>





                </div>
                <div>
                    <img src="https://alphaleaf.imgix.net/assets/img/coding-help.jpg?auto=format&w=400&fit=min" alt="coding" style="border-radius:8px;" class="courseImg">
                </div>
            </div>
            <div el="list">
                <h4 el>Prerequisite Knowledge</h4>
                <p el>To enroll in our extensive SET training, you do not need any prior programming experience.  However, you will need lots of tenacity and a passion for testing web applications.  Our carefully designed curriculum will give you everything you need to succeed in a real work environment, but the motivation and drive must come from within yourself to land on your dream IT career. </p>
            </div>
            <div el="list">
                <h4 el>What You'll Learn</h4>
                <div el="list" class="timeline">
                    <div el="list" style="--gap:8px;">
                        <h4 el>Agile</h4>
                        <p el>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna mi, scelerisque interdum sagittis a, accumsan a ipsum. Morbi ullamcorper sollicitudin imperdiet. Nam vitae pharetra nisi. Nam commodo vulputate lectus sed pulvinar. Aliquam nec venenatis erat. Nulla facilisi. Mauris tincidunt massa vitae urna efficitur eleifend. Phasellus quam urna, rutrum ac vestibulum eget, mattis id tortor. Aliquam porta laoreet tincidunt. </p>
                    </div>
                    <div el="list" style="--gap:8px;">
                        <h4 el>Programming</h4>
                        <p el>Core of any test automation is solid programming skills and knowledge set.  You will acquire advanced and practical Java programming skills based on carefully crafted curriculum that enhance your professional potential.  At the end of this training, all of our students will be ready for OCA Java examination. </p>
                    </div>
                    <div el="list" style="--gap:8px;">
                        <h4 el>Automation</h4>
                        <p el>Browser automation is the most intimate part of your SET career.  There is where you will put your programming skills in use.  We will guarantee you that you will be learning cutting edge automation skill set utilizing most in-demand tools, more importantly, you will fall in love with browser automation. It is super fun. </p>
                    </div>
                    <div el="list" style="--gap:8px;">
                        <h4 el>Back-end & API Testing</h4>
                        <p el>Database and API is the backbone of modern web applications. You will learn SQL and API testings by doing.  With an access to industry level cloud database and API services for your training, you will acquire advance skill-sets that is very attractive in the market.</p>
                    </div>
                    <div el="list" style="--gap:8px;">
                        <h4 el>Simulation</h4>
                        <p el>All of our students go through this mandatory 2 weeks of real-work simulation.  This is where students put their hard earned skill set to use by forming up a development team with actual developers to tackle real software crafting.  You will be amazed how this simulation is close to the real working environment once you land on your IT career. </p>
                    </div>



                </div>
            </div>
        </div>
        
    </div>
    <div style="min-height:400px;background-image: linear-gradient(130deg, #292E33, #525C65); display:flex;align-items:center;">
        <div el="section">
            <div el="list-column-alt" style="justify-content:space-around;--gap:30px; padding:30px 0;">
                <div el="list" style="align-content:center;">
                    <h3 el="white">Just a few of the top companies that hire SET...</h3>
                    <p el="white75">You don't need a college degree to start your career in SET making an average of $80k - $120k.</p>
                    <div>
                        <router-link to="/enroll" el="btn">learn more</router-link>
                    </div>
                </div>
                <div>
                    <img src="https://alphaleaf.imgix.net/assets/img/companies.png?auto=format" alt="top companies" style="width: 280px;margin: auto;">
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<style scoped>
.timeline{
    padding-left: 10px;
}
.timeline > *{
    padding-left: 20px;
    position: relative;
}
.timeline > *:not(:last-child):after{
    content: '';
    width: 2px;
    background-color: var(--color-secondary);
    left: 0;
    top: 28px;
    height: 80%;
    position: absolute;
}
.timeline > *:before{
    content:'';
    width:15px;
    height:15px;
    border-radius: 100%;
    border:2px solid var(--color-secondary);
    background-color:var(--color-secondary);
    left:0;
    top:2px;
    position: absolute;
    transform: translateX(-50%);
    z-index:1;
}
.col3-wrap{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    justify-content: center;
}
.col3-wrap i{
    font-size: 25px;
    width: 50px;
    height: 50px;
    display: flex;
    box-shadow: 0 3px 10px rgba(0,0,0,0.2);
    border-radius: 100%;
    align-items: center;
    justify-content: center;
}
.courseImg{
    width:100%;
    max-width:400px;
}

@media(max-width:800px){
    
    .col3-wrap{
        grid-template-columns: repeat(2, 1fr);
    }
    .courseImg{
        width:100%;
    }
}
@media(max-width:600px){
    .col3-wrap{
        grid-template-columns: 1fr;
    }
}
</style>
