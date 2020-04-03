// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
const cors = require('cors')({origin: true});

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

  exports.addMessage = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        const body = req.body;
        const data = {
            fname: body.fname,
            lname: body.lname,
            email: body.email,
            phone: body.phone,
            msg:  body.msg,
            timestamp: Date.now()
        };
        return admin.firestore().collection('messages').add(data).then(() => {
            return res.status(200).send('success');
        }).catch(err => {
            return res.status(500).send('Error: '+err);
        });
    });
  });