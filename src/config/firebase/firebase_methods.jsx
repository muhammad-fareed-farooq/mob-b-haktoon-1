import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "./index";
import { ref, set } from "firebase/database";

const create_account = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
        // .then((userCredential) => {
        //     // Signed up 
        //     const user = userCredential.user;
        //     // ...
        //     console.log(user);
        // })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     // ..
        // })
}

const login_Account = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}


function write_user_data(userId,data) {
    set(ref(database, 'users/' + userId), {
        ...data
    });
}

export { create_account, login_Account, write_user_data } 