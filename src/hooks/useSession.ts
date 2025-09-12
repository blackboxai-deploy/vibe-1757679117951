'use client';

import { useState, useEffect, useCallback } from 'react';
import { SessionState, createNewSession, saveSessionToStorage, loadSessionFromStorage, clearSession } from '@/lib/session';

export function useSession() {
  const [session, setSession] = useState<SessionState | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load existing session from localStorage on component mount
    const savedSession = loadSessionFromStorage();
    setSession(savedSession);
    setIsLoaded(true);
  }, []);

  const startNewSession = useCallback((activityId?: string) => {
    const newSession = createNewSession(activityId);
    setSession(newSession);
    saveSessionToStorage(newSession);
    return newSession;
  }, []);

  const updateSession = useCallback((updates: Partial<SessionState>) => {
    if (!session) return;
    
    const updatedSession = { ...session, ...updates };
    setSession(updatedSession);
    saveSessionToStorage(updatedSession);
  }, [session]);

  const addResponse = useCallback((questionId: string, response: string) => {
    if (!session) return;
    
    const updatedSession = {
      ...session,
      responses: { ...session.responses, [questionId]: response }
    };
    setSession(updatedSession);
    saveSessionToStorage(updatedSession);
  }, [session]);

  const nextQuestion = useCallback(() => {
    if (!session) return;
    
    const updatedSession = {
      ...session,
      currentQuestionIndex: session.currentQuestionIndex + 1
    };
    setSession(updatedSession);
    saveSessionToStorage(updatedSession);
  }, [session]);

  const completeSession = useCallback(() => {
    if (!session) return;
    
    const updatedSession = {
      ...session,
      isComplete: true
    };
    setSession(updatedSession);
    saveSessionToStorage(updatedSession);
  }, [session]);

  const resetSession = useCallback(() => {
    clearSession();
    setSession(null);
  }, []);

  return {
    session,
    isLoaded,
    startNewSession,
    updateSession,
    addResponse,
    nextQuestion,
    completeSession,
    resetSession
  };
}