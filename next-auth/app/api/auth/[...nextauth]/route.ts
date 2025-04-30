import { NextRequest, NextResponse } from "next/server"
import CredentialsProvider from 'next-auth/providers/credentials'
import NextAuth from "next-auth/next"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'email', type: 'text', placeholder: '' },
                password: { label: 'password', type: 'password', placeholder: '' },
            },
            async authorize(credentials: any) {

                return {
                    id: "user1"
                };
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }