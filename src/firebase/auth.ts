import {
  onAuthStateChanged as _onAuthStateChanged,
  GoogleAuthProvider,
  NextOrObserver,
  signInWithPopup,
  User,
} from "firebase/auth"
import { auth } from "./clientApp"

export function onAuthStateChanged(cb: NextOrObserver<User>) {
  return _onAuthStateChanged(auth, cb)
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider()

  try {
    await signInWithPopup(auth, provider)
  } catch (error) {
    console.error("Error signing in with Google", error)
  }
}

export async function signOut() {
  try {
    return auth.signOut()
  } catch (error) {
    console.error("Error signing out with Google", error)
  }
}
