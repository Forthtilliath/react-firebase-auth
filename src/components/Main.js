import React from 'react';
import firebase from '../utils/firebaseConfig';
import Create from './Create';
import Read from './Read';

const Main = () => {

    const signOut = () => firebase.auth().signOut();

    return (
        <main>
            <nav>
                <h1>React Crud</h1>
                <h4>Bonjour {firebase.auth().currentUser.displayName}</h4>
                <div onClick={signOut} style={{cursor:'pointer'}}>Se déconnecter</div>
            </nav>
            <Create />
            <Read />
        </main>
    );
};

export default Main;