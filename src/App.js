import { useEffect, useState } from 'react';
import firebase from './utils/firebaseConfig';
import Main from './components/Main';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

function App() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => false,
        },
    };

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => setIsSignedIn(!!user));
    }, []);

    return (
        <div className="App" style={{ textAlign: 'center' }}>
            {isSignedIn ? <Main /> : <div className="login-page">
                <h1>React Crud</h1>
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                />
            </div>
            }
        </div>
    );
}

export default App;
