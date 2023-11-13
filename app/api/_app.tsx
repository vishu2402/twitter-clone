import '@/styles/globals.css'
import { Inter, Quicksand } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ["latin"]})

import type { AppProps } from 'next/app'
import { GoogleOAuthProvider } from '@react-oauth/google'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={inter.className}>
            <GoogleOAuthProvider clientId='832602363061-mfvbq97rodunctunvo0jk6s6e1n0d7a0.apps.googleusercontent.com'>
                <Component {...pageProps} />
                <Toaster />
            </GoogleOAuthProvider>
        </div>
    );
}