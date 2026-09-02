"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid credentials");
    } else {
      router.push("/admin");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-surface px-6">
      <div className="max-w-md w-full bg-white p-12 shadow-sm border border-primary/5">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-serif mb-2">Admin Portal</h1>
          <p className="text-xs uppercase tracking-widest text-primary/60">Secure Access Only</p>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 text-red-600 text-xs py-3 px-4 uppercase tracking-widest font-bold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-semibold text-primary/60">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface py-4 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-accent/30" 
              placeholder="admin@woodwork.com"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-semibold text-primary/60">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-surface py-4 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-accent/30" 
              placeholder="••••••••"
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-primary text-surface py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-accent transition-all"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}
