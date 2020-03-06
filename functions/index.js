// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.submitContactInfo = functions.https.onRequest(async (req, res) => {
    const db = admin.firestore();
    let data = {
        name: 'Los Angeles',
        state: 'CA',
        country: 'USA'
    };
      // Add a new document in collection "cities" with ID 'LA'
    let setDoc = db.collection('cities').add(data);
    res.send("Data written!");
});

exports.addMessage = functions.https.onRequest(async (req, res) => {
    // Grab the text parameter.
    //const original = req.query.text;
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    if (req.method !== 'POST') {
        return res.status(403).send('Forbidden!');
    }
    const data = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        phone: req.body.phone,
        msg: req.body.msg
    }
    return await admin.firestore().collection('messages').add(data).then(() => {
        return res.send({success: true});
    });
    
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
  });