"use client"
import { useEffect, useState } from "react";
export function ErrorCatcher() {
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const handleErr = (e: ErrorEvent) => setError(e.message + "\n" + e.error?.stack);
    const handleRej = (e: PromiseRejectionEvent) => setError(e.reason?.message + "\n" + e.reason?.stack);
    window.addEventListener("error", handleErr);
    window.addEventListener("unhandledrejection", handleRej);
    return () => {
      window.removeEventListener("error", handleErr);
      window.removeEventListener("unhandledrejection", handleRej);
    };
  }, []);
  if (!error) return null;
  return <div style={{position: 'fixed', top: 0, left: 0, zIndex: 99999, background: 'red', color: 'white', padding: '20px', width: '100vw', height: '100vh', overflow: 'auto'}}><pre>{error}</pre></div>;
}
