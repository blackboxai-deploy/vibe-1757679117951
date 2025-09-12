'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Question } from '@/lib/activities';

interface ResponseInputProps {
  question: Question;
  onResponse: (response: string) => void;
  onSkip: () => void;
  disabled?: boolean;
}

export function ResponseInput({ question, onResponse, onSkip, disabled = false }: ResponseInputProps) {
  const [textResponse, setTextResponse] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTextSubmit = async () => {
    if (textResponse.trim()) {
      setIsSubmitting(true);
      // Small delay to show the response was received
      setTimeout(() => {
        onResponse(textResponse.trim());
        setTextResponse('');
        setIsSubmitting(false);
      }, 500);
    }
  };

  const handleMultipleChoice = async (option: string) => {
    setIsSubmitting(true);
    // Small delay to show the response was received
    setTimeout(() => {
      onResponse(option);
      setIsSubmitting(false);
    }, 500);
  };

  const handleSkip = () => {
    onSkip();
  };

  if (question.type === 'multiple-choice') {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {question.options?.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleMultipleChoice(option)}
              disabled={disabled || isSubmitting}
              className="h-auto p-6 text-lg font-medium text-gray-800 bg-white border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800 transition-all duration-200 rounded-xl shadow-sm hover:shadow-md disabled:opacity-50"
              variant="outline"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">
                  {String.fromCharCode(65 + index)}
                </div>
                {option}
              </div>
            </Button>
          ))}
        </div>
        
        <div className="text-center">
          <Button
            onClick={handleSkip}
            disabled={disabled || isSubmitting}
            variant="outline"
            className="text-gray-600 hover:text-gray-800 border-gray-300 hover:border-gray-400 px-6 py-3 rounded-lg"
          >
            Skip This Question
          </Button>
        </div>
      </div>
    );
  }

  // Text input type (including image-prompt)
  return (
    <div className="space-y-6">
      {/* Image for image-prompt type */}
      {question.type === 'image-prompt' && question.imageUrl && (
        <div className="flex justify-center mb-6">
          <img 
            src={question.imageUrl} 
            alt={question.prompt}
            className="max-w-full h-auto rounded-xl shadow-lg max-h-80 object-cover"
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      )}
      
      <div className="space-y-4">
        <Textarea
          value={textResponse}
          onChange={(e) => setTextResponse(e.target.value)}
          placeholder="Share your thoughts here... there's no pressure for a perfect answer."
          disabled={disabled || isSubmitting}
          className="min-h-[120px] text-lg p-6 border-2 border-gray-200 focus:border-blue-300 rounded-xl resize-none"
          rows={4}
        />
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleTextSubmit}
            disabled={disabled || isSubmitting || !textResponse.trim()}
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center space-x-2">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Sharing...</span>
              </span>
            ) : (
              'Share My Response ✨'
            )}
          </Button>
          
          <Button
            onClick={handleSkip}
            disabled={disabled || isSubmitting}
            variant="outline"
            className="text-gray-600 hover:text-gray-800 border-gray-300 hover:border-gray-400 px-6 py-3 text-lg rounded-lg"
          >
            Skip This Question
          </Button>
        </div>
      </div>
    </div>
  );
}