"use client";
import React, { useEffect } from 'react';

export function GlobalErrorCatcher() {
  useEffect(() => {
    const handleError = (msg: any, url: any, line: any, col: any, error: any) => {
      // Avoid creating full screen error overlays in production
      if (process.env.NODE_ENV === 'production') return;
      console.error('Global Error:', msg, url, line, col, error);
    };

    const handleRejection = (e: PromiseRejectionEvent) => {
      if (process.env.NODE_ENV === 'production') return;
      console.error('Unhandled Rejection:', e.reason);
    };

    window.onerror = handleError;
    window.addEventListener('unhandledrejection', handleRejection);

    return () => {
      window.onerror = null;
      window.removeEventListener('unhandledrejection', handleRejection);
    };
  }, []);

  return null;
}
