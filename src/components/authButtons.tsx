"use client"
import {signIn, signOut} from 'next-auth/react';
import {useSession} from 'next-auth/react';

export function GoogleSignInButton () {
    const {data: session} = useSession()

    if(session && session.user && session.user.image) {
        return <>
            <img src={session?.user?.image} alt="avatar" className="rounded-full"/>
            <p>{session.user.name}</p>
            <p>{session.user.email}</p>
            <button onClick={()=> signOut()} className="border-2 p-2 rounded-lg">Sign Out</button>
        </>
    }

    return <button onClick={()=> signIn()}className="border-2 p-2 rounded-lg">
        Continue with Google
    </button>
}