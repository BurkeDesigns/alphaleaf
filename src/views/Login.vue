<template>
  <main el="main">
      <div el="section">
          <div el="input-list">
            <h2 el="title" class="center-txt" style="--color:var(--color-secondary);">Welcome Back!</h2>
            <!-- <p el="p" class="center-txt">Enter your account details below</p> -->

            <label for="username" el="input-label" style="margin-top:15px;">
              <div el="sm-txt label">Username</div>
              <input id="username" name="username" type="text" placeholder="My email..." el>
              <div el="sm-txt error error-color">Error message</div>
            </label>

            <label for="password" el="input-label">
              <div el="sm-txt label">Password</div>
              <input id="password" name="password" type="password" placeholder="My password..." el>
              <div el="sm-txt error error-color">Error message</div>
            </label>

            <button el="btn stretch" style="margin-top:15px;" @click="setError">Sign In</button>
            

            
            <!-- <img src="../assets/img/google/btn_google_signin_light_normal_web@2x.png" style="height: 50px; filter: drop-shadow(0px 3px 6px rgba(0,0,0,0.2)); margin: auto;" alt="Google Sign In" @click="socialLogin"> -->

            <!-- <div class="center-txt">Forgot your password?</div> -->
            <!-- <div class="center"><div el="link" @click="logout">Logout</div></div> -->
          </div>
          <div el="sm-txt error error-color" style="max-width: 350px; margin: auto; padding: 10px;" v-if="error != ''">{{error}}</div>
      </div>
  </main>
</template>
<script>
import firebase from "firebase";


export default {
    name: 'login',
    components:{
    },
    data(){
        return {
            email:'',
            password:'',
            user:null,
            error:''
        }
    },
    methods: {
      login(){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() =>{
          this.$router.replace('home');

        }).catch((err)=>{
          alert('Oops. '+err.message);
        })
      },
      socialLogin(){
        var x = this;
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) =>{

          var db = firebase.firestore(),
              user = result.user,
              docRef = db.collection("users").doc(user.uid);

          docRef.get().then(function(doc) {
              if (doc.exists) {
                var data = doc.data();
                  if(data.authorizedUser == true){
                    //alert('Authorized User!');
                    x.setUser(data);
                    x.$router.replace('/');
                  }else{

                    //alert("Contact the system administrator to gain access to this website.");
                    //x.logout();
                  }
              } else {
                  // doc.data() will be undefined in this case
                  db.collection("users").doc(user.uid).set({
                      displayName: user.displayName,
                      authorizedUser: false,
                      uid: user.uid,
                      photoURL: user.photoURL,
                      email: user.email,

                  })
                  .then(function() {
                      console.log("Your account request was added. Contact the system administrator to gain access to this website.");
                  })
                  .catch(function() {
                      console.log("Error requesting account access.");
                  });
                  //x.logout();
              }
          }).catch(function(error) {
              console.log("Error getting document:", error);
              //x.logout();
          });




          

          // this.$router.replace('/');

        }).catch((err)=>{
          alert('Oops. '+err.message);
        })
      },
      logout: function() {
        this.setUser(null);
        firebase.auth().signOut().then(() => {
          // this.$router.replace('login')
          alert("You've been signed out.");
        }).catch((err)=>{
          alert('Unable to logout. '+err.message);
        })
      },
      setUser(data){
        this.$root.$store.commit('setUser', data);
      },
      setError(){
        this.error = 'User account not found.';
      }
    },
}



</script>
<style scoped>
.center{
  text-align:center;
}
[el=main]{
  padding-top:30px;
  /* background-image: linear-gradient(0deg, #ffffff82, #f1f4f8), url(https://images.pexels.com/photos/2343891/pexels-photo-2343891.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260); */
    background-size: cover;
    background-position: center;
    
}
[el='input-list']{
  max-width: 350px;
  margin: auto;
  padding: 10px;
}
.center-txt{
  text-align: center;
}
</style>
