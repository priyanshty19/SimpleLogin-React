import { useState, useEffect } from 'react';
import fbConfig from './fbConfig'
import './App.css';
import Login from './components/Login'
import Hero from './components/Hero'

const App=() =>{
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const  clearInputs = () =>{
    setEmail('');
    setPasswordError('');
  }

  const clearErrors = ( )=>{
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () =>{
    clearErrors();

    fbConfig
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch(err => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      })

  }

  const handleSignUp = () =>{
    clearErrors();

    fbConfig
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch(err => {
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      })

  }

  const handleLogout = () =>{
    fbConfig.auth().signOut();
  }

  const authListner = () =>{
    fbConfig.auth().onAuthStateChanged(user =>{
      if(user){
        clearInputs();
        setUser(user);
      }
      else{
        setUser("");
      }
    })
  }

  useEffect(() => {
      authListner();
  }, [])

  return (
    <div className="App">
      {user ? (
        <Hero handleLogout={handleLogout}/>
      ) : (
      <Login 
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword} 
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
      />
    )}
    </div>
  );
}

export default App;
