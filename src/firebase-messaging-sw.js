importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');

var config = {
	apiKey: "AIzaSyASLmKbIgER8-cBrZWZ_lWQZFciTMF3eos",
	authDomain: "organic-storm-101411.firebaseapp.com",
	databaseURL: "https://organic-storm-101411.firebaseio.com",
	projectId: "organic-storm-101411",
	storageBucket: "organic-storm-101411.appspot.com",
	messagingSenderId: "880403292387"
  };
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
	const title = 'Hello World';
	const options = {
		body: payload.data.body
	};
	return self.registration.showNotification(title, options);
});