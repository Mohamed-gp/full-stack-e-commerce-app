"use client"
import { signIn } from "next-auth/react"
const SignWithGoogle = () => {
  return (
    <button onClick={() => signIn("google",{
        callbackUrl : `${window.location.origin}`
    })}>
        sign in with google
    </button>
  )
}
export default SignWithGoogle