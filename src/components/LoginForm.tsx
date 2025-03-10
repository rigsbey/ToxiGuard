'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const redirectUrl = searchParams?.get('redirect_to') ?? null;
  const source = searchParams?.get('source') ?? null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Successful login:', userCredential.user);
      
      // Get Firebase ID token
      const idToken = await userCredential.user.getIdToken();
      
      // If there's a redirect_url, redirect with token
      if (redirectUrl) {
        const redirectUrlObj = new URL(redirectUrl);
        redirectUrlObj.searchParams.set('token', idToken);
        if (source) {
          redirectUrlObj.searchParams.set('source', source);
        }
        window.location.href = redirectUrlObj.toString();
      } else {
        router.push('/profile');
      }
    } catch (err) {
      if (err instanceof Error) {
        handleFirebaseError(err);
      } else {
        setError('Unknown error');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleFirebaseError = (error: any) => {
    const errorCode = error.code || 'auth/unknown-error';
    console.error('Firebase Error:', errorCode, error.message);

    switch (errorCode) {
      case 'auth/invalid-email':
        setError('Invalid email address');
        break;
      case 'auth/user-disabled':
        setError('This account has been disabled');
        break;
      case 'auth/user-not-found':
        setError('No account found with this email');
        break;
      case 'auth/wrong-password':
        setError('Incorrect password');
        break;
      default:
        setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.1)]">
      <h2 className="text-3xl font-bold text-center mb-10">Sign In</h2>
      {error && <p className="text-red-500 mb-6 text-center text-sm bg-red-50 p-3 rounded-lg">{error}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-gray-700 mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2 text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-3.5 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 font-medium text-base mt-4"
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      <p className="text-center mt-8 text-gray-600">
        Don't have an account?{' '}
        <Link 
          href={`/register${redirectUrl ? `?redirect_to=${encodeURIComponent(redirectUrl)}${source ? `&source=${encodeURIComponent(source)}` : ''}` : ''}`}
          className="text-blue-600 hover:underline font-medium"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
} 