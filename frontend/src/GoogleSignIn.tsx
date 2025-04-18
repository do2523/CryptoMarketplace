"use client"

import React from "react"
import { FcGoogle } from "react-icons/fc"

declare global {
  interface Window {
    google?: any
  }
}

const GoogleSignInButton: React.FC = () => {
  const handleGoogleSignIn = () => {
    if (!window.google) return

    const client = window.google.accounts.oauth2.initCodeClient({
      client_id: "199971448602-90h35qulgb3o83tb1flvkh9sp9nsnc1j.apps.googleusercontent.com",
      scope: "openid profile email",
      redirect_uri: window.location.origin + "/profile", // or backend's endpoint (recommended, but front end redirect for now)
      state: "your-custom-state-if-needed",
      ux_mode: "redirect", // or "popup" if you want a new tab instead of dropdown, "redirect" for tab redirect
      callback: (response: any) => {
        // This won't run if using "redirect" mode
        console.log("Callback response (popup mode):", response)
      },
    })

    client.requestCode() // opens a new tab or redirects, based on ux_mode
  }

  return (
    <button
      onClick={handleGoogleSignIn}
      className={`relative z-0 flex items-center justify-center gap-2 overflow-hidden rounded-md 
      border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 
      px-4 py-2 font-semibold text-zinc-800 dark:text-zinc-200 transition-all duration-500
      before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]
      before:rounded-[100%] before:bg-zinc-800 dark:before:bg-zinc-200 before:transition-transform before:duration-1000 before:content-[""]
      hover:scale-105 hover:text-zinc-100 dark:hover:text-zinc-900 hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95
      col-span-2`}
    >
      <FcGoogle size={20} />
      <span>Sign in with Google</span>
    </button>
  )
}

export default GoogleSignInButton
