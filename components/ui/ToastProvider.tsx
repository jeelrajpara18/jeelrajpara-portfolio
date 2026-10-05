'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

export interface ToastItem {
  id: string;
  title: string;
  message?: string;
  type: ToastType;
}

interface ToastContextType {
  toast: {
    success: (title: string, message?: string) => void;
    error: (title: string, message?: string) => void;
    info: (title: string, message?: string) => void;
  };
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback((title: string, message?: string, type: ToastType = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = {
    success: (title: string, message?: string) => addToast(title, message, 'success'),
    error: (title: string, message?: string) => addToast(title, message, 'error'),
    info: (title: string, message?: string) => addToast(title, message, 'info'),
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none max-w-sm w-full px-4 sm:px-0">
        <AnimatePresence mode="popLayout">
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, y: 15, transition: { duration: 0.2 } }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              className="pointer-events-auto flex items-start gap-3 p-4 rounded-2xl bg-white/95 dark:bg-[#121215]/95 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-800/90 shadow-2xl shadow-black/10 dark:shadow-black/40 text-zinc-900 dark:text-white"
            >
              <div className="shrink-0 mt-0.5">
                {t.type === 'success' && (
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                )}
                {t.type === 'error' && (
                  <div className="w-8 h-8 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center border border-rose-500/20">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                )}
                {t.type === 'info' && (
                  <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-500/20">
                    <Info className="w-4 h-4" />
                  </div>
                )}
              </div>

              <div className="flex-1 pr-2">
                <h4 className="text-[14px] font-bold tracking-tight">{t.title}</h4>
                {t.message && (
                  <p className="text-[12.5px] text-zinc-500 dark:text-zinc-400 font-medium mt-0.5 leading-snug">
                    {t.message}
                  </p>
                )}
              </div>

              <button
                onClick={() => removeToast(t.id)}
                className="shrink-0 p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 rounded-lg transition-colors"
                aria-label="Close notification"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context.toast;
}
