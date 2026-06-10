"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Shield, Lock, ArrowRight } from "lucide-react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const [error, setError] = useState("");
  const [mfaRequired, setMfaRequired] = useState(false);
  const [mfaCode, setMfaCode] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/auth/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "admin@akaistream.com",
          password,
          mfaCode: mfaRequired ? mfaCode : undefined
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Authentication failed");
        return;
      }

      if (data.mfaRequired) {
        setMfaRequired(true);
        return;
      }

      router.push("/akira-admin-927/dashboard");
    } catch {
      setError("An error occurred during login");
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6">
      <div className="w-full max-w-md glass-dark p-10 rounded-[3rem] border border-white/10 text-center">
        <div className="w-20 h-20 bg-anime-red/10 border border-anime-red/20 rounded-3xl flex items-center justify-center text-anime-red mx-auto mb-8 neon-glow-red">
          <Shield size={40} />
        </div>

        <h1 className="text-3xl font-black mb-2 tracking-tight uppercase">Access Restricted</h1>
        <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-10">Admin Terminal • Level 4 Clearance</p>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && <p className="text-anime-red text-xs font-bold uppercase mb-4">{error}</p>}

          {!mfaRequired ? (
            <div className="relative">
              <div className="absolute inset-y-0 left-5 flex items-center text-white/20">
                <Lock size={18} />
              </div>
              <input
                type="password"
                placeholder="Enter Access Key"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-sm outline-none focus:border-anime-red transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          ) : (
            <div className="relative">
              <div className="absolute inset-y-0 left-5 flex items-center text-white/20">
                <Shield size={18} />
              </div>
              <input
                type="text"
                placeholder="Enter MFA Code"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-sm outline-none focus:border-anime-red transition-all"
                value={mfaCode}
                onChange={(e) => setMfaCode(e.target.value)}
                required
              />
              <p className="text-[10px] text-white/40 mt-2 uppercase font-bold tracking-widest">Code: 123456 (Dev Mode)</p>
            </div>
          )}

          <button className="w-full bg-anime-red py-4 rounded-2xl font-black flex items-center justify-center gap-3 neon-glow-red hover:scale-105 transition-all group">
            {mfaRequired ? "VERIFY CODE" : "AUTHORIZE"}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <p className="mt-8 text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">Unauthorized access attempts are logged.</p>
      </div>
    </div>
  );
}
