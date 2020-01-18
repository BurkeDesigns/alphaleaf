<template>
  <div>
      <div el="section">
        <div el="card" style="justify-content: space-between; align-items:center;">
            <div el="list">
                <div el="title">SDET Course - $4,500</div>
                <div el="p lg-txt">
                    Software Development Engineers in Test (SDET) identify areas within a program that require adjustment. These areas include programmatic flaws and/or end user experiences that require developer attention. Throughout our course you'll use industry standard tools in test automation for application quality control. You'll be one step closer to getting the job of your dreams. 
                </div>
                <div el="list-column" style="--gap:10px;margin-top:20px;">
                    <router-link to="/enroll" el="btn">Enroll</router-link>
                    <!-- <button el="btn-2ry">Enroll</button> -->
                </div>
            </div>
            <img src="../assets/img/illustration-2.png" alt="" el="flex-img">
        </div>
    </div>
    <div el="section">
        <div el="title">What You'll Learn</div>
        <div el="list-column" style="padding-left: 20px;border-left: 2px solid;margin-left:20px;margin-top:30px;">
            <div el="list">
                <div el="sm-title">SCRUM</div>
                <div el="p lg-txt">
                    Praesent consectetur eu augue ut vehicula. Sed fermentum mattis ante nec blandit. Cras pretium quis arcu at malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum eget ante congue est faucibus porttitor. Cras libero ex, ultricies et placerat quis, rhoncus sed purus. Aenean dictum nisi orci, a suscipit purus efficitur a. Nulla sed ligula congue, pulvinar ex eget, porttitor orci.
                </div>
            </div>
            <div el="list">
                <div el="sm-title">JAVA Basics</div>
                <div el="p lg-txt">
                    Praesent consectetur eu augue ut vehicula. Sed fermentum mattis ante nec blandit. Cras pretium quis arcu at malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum eget ante congue est faucibus porttitor. Cras libero ex, ultricies et placerat quis, rhoncus sed purus. Aenean dictum nisi orci, a suscipit purus efficitur a. Nulla sed ligula congue, pulvinar ex eget, porttitor orci.
                </div>
            </div>
            <div el="list">
                <div el="sm-title">SQL</div>
                <div el="p lg-txt">
                    Praesent consectetur eu augue ut vehicula. Sed fermentum mattis ante nec blandit. Cras pretium quis arcu at malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum eget ante congue est faucibus porttitor. Cras libero ex, ultricies et placerat quis, rhoncus sed purus. Aenean dictum nisi orci, a suscipit purus efficitur a. Nulla sed ligula congue, pulvinar ex eget, porttitor orci.
                </div>
            </div>
            <div el="list">
                <div el="sm-title">API</div>
                <div el="p lg-txt">
                    Praesent consectetur eu augue ut vehicula. Sed fermentum mattis ante nec blandit. Cras pretium quis arcu at malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum eget ante congue est faucibus porttitor. Cras libero ex, ultricies et placerat quis, rhoncus sed purus. Aenean dictum nisi orci, a suscipit purus efficitur a. Nulla sed ligula congue, pulvinar ex eget, porttitor orci.
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<style scoped>
[el~="sm-title"]:after {
    content: "";
    height: 10px;
    width: 10px;
    border-radius: 100px;
    border: 2px solid #000;
    position: absolute;
    top: 20%;
    background-color: #fff;
    left: -28px;
}
</style>
