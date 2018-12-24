var config = {
    apiKey: "AIzaSyDVJPqmNq3-36pRpQDa8josHuHV_m_DIAo",
    authDomain: "contact-ab53d.firebaseapp.com",
    databaseURL: "https://contact-ab53d.firebaseio.com",
    projectId: "contact-ab53d",
    storageBucket: "contact-ab53d.appspot.com",
    messagingSenderId: "947345772502"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm (e) {
    e.preventDefault();

    var name = getFormVals('name');
    var email = getFormVals('email');
    var message = getFormVals('message');

    saveMessage(name, email, message);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    document.getElementById('contactForm').reset();
};

function getFormVals(id) {
    return document.getElementById(id).value;
};

function saveMessage (name, email, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
};