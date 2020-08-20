import firebase from 'firebase'
import { call } from 'react-native-reanimated';

class Firebase {

        constructor(){
                this.init()
                this.observeAuth()
        }

        init = () =>{
            firebase.initializeApp({
                apiKey: "AIzaSyDNMob-kkP9XbQzHVsTxaMuXpoXiK59O5I",
                authDomain: "reactnative-f466b.firebaseapp.com",
                databaseURL: "https://reactnative-f466b.firebaseio.com",
                projectId: "reactnative-f466b",
                storageBucket: "reactnative-f466b.appspot.com",
                messagingSenderId: "89361873195",
                appId: "1:89361873195:web:12162c1e0a42bdb9f7ad6e",
                measurementId: "G-8QVK0GB6CM"

            })
        };

        observeAuth = () => {
            firebase.auth().onAuthStateChanged(this.onAuthStateChanged)
        }

        onAuthStateChanged = (user) =>{
            if(!user){
                try {
                    firebase.auth().signInAnonymously()
                } catch ({message}) {
                    
                }
            }

        }

        get uid(){
            return (firebase.auth().currentUser || {}).uid
        }

        get ref(){
            return firebase.database().ref('message')
        }

        parse = snapshot => {

            const { timestamp : numberStamp,text,user} = snapshot.val()
            const {key : _id} = snapshot
            const timestamp = new Date(numberStamp);

            var message = {
                _id,
                timestamp,
                text,
                user
            }

            return message
        }

        on = callback => {
            this.ref
                .limitToLast(50)
                .on('child_added',snapshot => callback(this.parse(snapshot)))

        }
        
        get timestamp() {
            return firebase.database.ServerValue.TIMESTAMP
        }

        send = messages => {
            
            for (let i = 0; i < messages.length; i++) {
               const {text,user} = messages[i]
               const message = {
                   text,
                   user,
                   timestamp : this.timestamp,
               }
               console.log("started")
               this.append(message)
                
            }
        }

        append = message => this.ref.push(message)

        off() {
            this.ref.off();
          }
}

Firebase.shared = new Firebase()
export default Firebase;