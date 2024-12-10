import "server-only";

import { headers } from "next/headers";
import { initializeServerApp } from "firebase/app";

import { firebaseConfig } from "./config";
import { getAuth } from "firebase/auth";

export async function getAuthenticatedAppForUser() {
  const idToken = (await headers()).get('authorization')?.split(' ')[1]

  const firebaseServerAppSettings = {
    authIdToken: idToken 
  }
  const firebaseServerApp = initializeServerApp(
    firebaseConfig,
    firebaseServerAppSettings
  );

  const auth = getAuth(firebaseServerApp);
  await auth.authStateReady();

  return { firebaseServerApp, currentUser: auth.currentUser };
}