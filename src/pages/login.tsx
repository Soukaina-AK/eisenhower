import { Button } from "@/components/ui/button";
import { auth, googleProvider } from "@/firebase";
import {
  signInWithPopup, // <-- We are using Popup again
  User,
  onAuthStateChanged, // <-- But keeping the listener
} from "firebase/auth";
import { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [authLoading, setAuthLoading] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);

  // This listener is still correct and necessary
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setAuthLoading(false);
      setLoginLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    setLoginLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error("Login failed:", err);
      if ((err as any).code === "auth/popup-closed-by-user") {
        console.log("User closed the popup.");
      }
      setLoginLoading(false);
    }
  };

  if (authLoading) {
    return <div>Authenticating...</div>;
  }

  if (auth.currentUser) {
    return <Navigate to={"/board"} />;
  }

  return (
    <div className="w-full h-full flex flex-col">
      <main
        role="main"
        className="flex gap-4 items-center justify-center flex-[0.9]"
      >
        <div className="md:flex-[0.5] text-center md:text-start px-4">
          <h1 className="text-4xl font-semibold mb-4">Welcome</h1>
          <p className="mb-6 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Button
            onClick={loginWithGoogle}
            disabled={loginLoading}
            className="flex items-center gap-2"
          >
            {loginLoading ? (
              "Waiting for login..."
            ) : (
              <>
                <FaGoogle />
                Connect with Google
              </>
            )}
          </Button>
        </div>
        <div className="flex-[0.5] hidden md:flex items-center justify-center">
          <img
            className="max-w-full rounded-xl shadow-md"
            src="/images/splash2.jpg"
            alt="Splash"
          />
        </div>
      </main>
      <footer className="text-center italic p-2 flex-[0.1]">
        <small>By Soukaina AKAROUM & Abdelali AIT ADDI</small>
      </footer>
    </div>
  );
}
