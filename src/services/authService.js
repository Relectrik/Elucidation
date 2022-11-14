import { useState, useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

export function SignIn() {
  return (
    <button
      type="button"
      class="signIn"
      onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
    >
      Click here to enter your own space
    </button>
  );
}

export function SignOut() {
  return (
    <div>
      <p class="userGreeting">Hello, {auth.currentUser.displayName}&nbsp;</p>
      <button type="button" class="signOut" onClick={() => signOut(auth)}>
        Sign Out
      </button>
    </div>
  );
}

export function useAuthentication() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });
  }, []);
  return user;
}
