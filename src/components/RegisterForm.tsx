'use client';

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Successful registration:', userCredential.user);
      router.push('/profile');
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
    const errorMessage = error.message || 'Server error';
    console.error('Firebase Error:', errorCode, errorMessage);

    switch (errorCode) {
      case 'auth/email-already-in-use':
        setError('This email is already registered');
        break;
      case 'auth/invalid-email':
        setError('Invalid email');
        break;
      case 'auth/weak-password':
        setError('Password must be at least 6 characters');
        break;
      default:
        setError(`Registration error: ${errorMessage}`);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.1)]">
      <h2 className="text-3xl font-bold text-center mb-10">Sign Up</h2>
      {error && <p className="text-red-500 mb-6 text-center text-sm bg-red-50 p-3 rounded-lg">{error}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-gray-700 mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="example@mail.com"
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
          {isLoading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>

      <p className="text-center mt-8 text-gray-600">
        Already have an account?{' '}
        <Link href="/login" className="text-blue-600 hover:underline font-medium">
          Sign In
        </Link>
      </p>
    </div>
  );
} 