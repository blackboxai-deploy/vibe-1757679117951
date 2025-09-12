'use client';

import { useState, useEffect } from 'react';
import { Activity } from '@/lib/activities';
import { ResponseInput } from './ResponseInput';
import { PraiseMessage } from '@/components/session/PraiseMessage';
import { useCaregiver } from '@/hooks/useCaregiver';
import { useSession } from '@/hooks/useSession';
import { Button } from '@/components/ui/button';
import { getProgressMessage } from '@/lib/session';
import { useRouter } from 'next/navigation';

interface QuestionFlowProps {
  activity: Activity;
}

export function QuestionFlow({ activity }: QuestionFlowProps) {
  const { session, addResponse, nextQuestion, completeSession } = useSession();
  const { showHints } = useCaregiver();
  const router = useRouter();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showPraise, setShowPraise] = useState(false);
  const [praiseMessage, setPraiseMessage] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentQuestion = activity.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex >= activity.questions.length - 1;
  const progress = currentQuestionIndex + 1;

  useEffect(() => {
    // Sync with session state if it exists
    if (session && session.currentActivity === activity.id) {
      setCurrentQuestionIndex(session.currentQuestionIndex);
    }
  }, [session, activity.id]);

  const handleResponse = (response: string) => {
    // Add response to session
    addResponse(currentQuestion.id, response);
    
    // Show praise message
    const encouragement = currentQuestion.encouragement[Math.floor(Math.random() * currentQuestion.encouragement.length)];
    setPraiseMessage(encouragement);
    setShowPraise(true);

    // Transition to next question or complete
    setTimeout(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        if (isLastQuestion) {
          completeSession();
          router.push('/summary');
        } else {
          nextQuestion();
          setCurrentQuestionIndex(prev => prev + 1);
          setShowPraise(false);
          setIsTransitioning(false);
        }
      }, 500);
    }, 2000);
  };

  const handleSkip = () => {
    // Still record that they participated
    addResponse(currentQuestion.id, '[Skipped - and that\'s perfectly okay!]');
    
    // Show gentle message
    setPraiseMessage("That's perfectly fine! Sometimes we prefer to move on, and that's wonderful too.");
    setShowPraise(true);

    // Transition to next question
    setTimeout(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        if (isLastQuestion) {
          completeSession();
          router.push('/summary');
        } else {
          nextQuestion();
          setCurrentQuestionIndex(prev => prev + 1);
          setShowPraise(false);
          setIsTransitioning(false);
        }
      }, 500);
    }, 1500);
  };

  const handleEndEarly = () => {
    completeSession();
    router.push('/summary');
  };

  if (!currentQuestion) {
    return (
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">
          All done! 🌟
        </h2>
        <p className="text-gray-600">
          Thank you for sharing your wonderful thoughts with me.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3 text-gray-600">
          <span className="text-3xl">{activity.icon}</span>
          <h1 className="text-2xl font-bold text-gray-900">{activity.title}</h1>
        </div>
        
        {session && (
          <p className="text-blue-600 font-medium">
            {getProgressMessage(session, activity.questions.length)}
          </p>
        )}
      </div>

      {/* Progress Indicator - Gentle and Non-Intimidating */}
      <div className="flex justify-center">
        <div className="flex space-x-2">
          {activity.questions.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index < progress 
                  ? 'bg-gradient-to-r from-green-400 to-blue-400' 
                  : index === currentQuestionIndex
                  ? 'bg-blue-200 ring-2 ring-blue-300'
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Praise Message */}
      <PraiseMessage message={praiseMessage} isVisible={showPraise} />

      {/* Question Content */}
      {!showPraise && (
        <div className={`space-y-8 transition-all duration-500 ${
          isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          {/* Current Question */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 leading-relaxed text-center">
              {currentQuestion.prompt}
            </h2>
            
            <ResponseInput
              question={currentQuestion}
              onResponse={handleResponse}
              onSkip={handleSkip}
              disabled={isTransitioning}
            />
          </div>

          {/* Caregiver Hint */}
          {showHints && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center space-x-2 text-blue-800 mb-3">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Caregiver Tip</span>
              </div>
              <p className="text-blue-700 text-sm leading-relaxed">
                {currentQuestion.caregiverHint}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Session Controls */}
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8 border-t border-gray-200">
        <div className="text-sm text-gray-500 text-center">
          Question {progress} of {activity.questions.length}
        </div>
        
        <Button
          onClick={handleEndEarly}
          variant="outline"
          className="text-gray-600 hover:text-gray-800 border-gray-300 hover:border-gray-400 px-4 py-2 text-sm rounded-lg"
        >
          End Session Early
        </Button>
      </div>
    </div>
  );
}