export interface SessionState {
  currentActivity?: string;
  currentQuestionIndex: number;
  responses: Record<string, string>;
  startTime: Date;
  isComplete: boolean;
}

export interface CaregiverSettings {
  showHints: boolean;
}

// Session management
export const createNewSession = (activityId?: string): SessionState => ({
  currentActivity: activityId,
  currentQuestionIndex: 0,
  responses: {},
  startTime: new Date(),
  isComplete: false
});

export const saveSessionToStorage = (session: SessionState): void => {
  try {
    localStorage.setItem('memoryBuddySession', JSON.stringify(session));
  } catch (error) {
    console.warn('Could not save session to localStorage:', error);
  }
};

export const loadSessionFromStorage = (): SessionState | null => {
  try {
    const stored = localStorage.getItem('memoryBuddySession');
    if (!stored) return null;
    
    const session = JSON.parse(stored);
    // Convert startTime back to Date object
    session.startTime = new Date(session.startTime);
    return session;
  } catch (error) {
    console.warn('Could not load session from localStorage:', error);
    return null;
  }
};

export const clearSession = (): void => {
  try {
    localStorage.removeItem('memoryBuddySession');
  } catch (error) {
    console.warn('Could not clear session from localStorage:', error);
  }
};

// Caregiver settings management
export const saveCaregiverSettings = (settings: CaregiverSettings): void => {
  try {
    localStorage.setItem('memoryBuddyCaregiverSettings', JSON.stringify(settings));
  } catch (error) {
    console.warn('Could not save caregiver settings to localStorage:', error);
  }
};

export const loadCaregiverSettings = (): CaregiverSettings => {
  try {
    const stored = localStorage.getItem('memoryBuddyCaregiverSettings');
    if (!stored) return { showHints: false };
    
    return JSON.parse(stored);
  } catch (error) {
    console.warn('Could not load caregiver settings from localStorage:', error);
    return { showHints: false };
  }
};

// Session statistics
export const getSessionDuration = (session: SessionState): string => {
  const now = new Date();
  const duration = Math.floor((now.getTime() - session.startTime.getTime()) / 1000 / 60);
  return `${duration} minute${duration !== 1 ? 's' : ''}`;
};

export const getResponseCount = (session: SessionState): number => {
  return Object.keys(session.responses).length;
};

// Gentle progress tracking (no scores, just participation)
export const getProgressMessage = (session: SessionState, totalQuestions: number): string => {
  const answered = getResponseCount(session);
  const current = session.currentQuestionIndex + 1;
  
  if (answered === 0) {
    return "Let's begin this gentle activity together";
  } else if (current <= totalQuestions) {
    return `You're doing wonderfully - ${answered} thoughtful response${answered !== 1 ? 's' : ''} so far`;
  } else {
    return `Beautiful work - you shared ${answered} wonderful response${answered !== 1 ? 's' : ''}`;
  }
};

// Response validation (very lenient)
export const isValidResponse = (response: string): boolean => {
  return Boolean(response && response.trim().length > 0);
};

// Generate encouraging response to user input
export const getEncouragementForResponse = (encouragements: string[]): string => {
  return encouragements[Math.floor(Math.random() * encouragements.length)];
};

export const formatTimeSpent = (startTime: Date, endTime?: Date): string => {
  const end = endTime || new Date();
  const minutes = Math.floor((end.getTime() - startTime.getTime()) / 1000 / 60);
  const seconds = Math.floor(((end.getTime() - startTime.getTime()) / 1000) % 60);
  
  if (minutes === 0) {
    return `${seconds} second${seconds !== 1 ? 's' : ''}`;
  } else if (minutes < 2) {
    return `about ${minutes} minute${minutes !== 1 ? 's' : ''}`;
  } else {
    return `${minutes} minutes`;
  }
};