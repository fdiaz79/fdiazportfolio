export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch( { type: 'LOGIN_SUCCESS' })
        }).catch((err) => {
            dispatch( { type: 'LOGIN_ERROR', err })
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' });
        }); 
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        //create the new user in firebase for the auth process
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => { //after the new user is created, grab the resp from firebase and create the document in the collection of the database in firestore
            return firestore.collection('users').doc(resp.user.uid).set({ //instead of .doc  .add could have been used, but it will create a new ID for this new doc and we need to relate the user in the firebase and in the firestore
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                role: 'visitor'
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch( err => {
            dispatch({ type: 'SIGNUP_ERROR', err})
        })
    }
}
