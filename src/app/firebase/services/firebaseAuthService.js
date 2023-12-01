import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";

export const signUpWithEmailAndPassword = async (email, password) => {
  const authInstance = getAuth(auth);

  try {
    const userCredential = await createUserWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    return { user: userCredential.user };
  } catch (error) {
    throw error;
  }
};
export const signInWithEmailAndPassword = async (email, password) => {
  const authInstance = getAuth(auth);

  try {
    const userCredential = await signInWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    return { user: userCredential.user };
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  const authInstance = getAuth(auth);

  try {
    await authInstance.signOut();
  } catch (error) {
    throw error;
  }
};
