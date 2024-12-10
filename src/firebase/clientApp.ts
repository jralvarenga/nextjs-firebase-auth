'use client'

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { firebaseConfig } from "./config";

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app)