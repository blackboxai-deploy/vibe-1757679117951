'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useSession } from '@/hooks/useSession';
import { getActivityById, getRandomPraise } from '@/lib/activities';
import { getResponseCount, formatTimeSpent } from '@/lib/session';
import Link from 'next/link';

export function SessionSummary() {
  const { session, resetSession } = useSession();
  const [praiseMessage, setPraiseMessage] = useState('');

  useEffect(() => {
    // Set a random praise message when component mounts
    setPraiseMessage(getRandomPraise());
  }, []);

  if (!session || !session.currentActivity) {
    return (
      <div className="text-center space-y-6">
        <div className="text-6xl mb-4">🤔</div>
        <h1 className="text-3xl font-bold text-gray-900">
          No Session Found
        </h1>
        <p className="text-lg text-gray-600">
          Let's start a new activity together!
        </p>
        <Link href="/activities">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-lg">
            Choose an Activity ✨
          </Button>
        </Link>
      </div>
    );
  }

  const activity = getActivityById(session.currentActivity);
  const responseCount = getResponseCount(session);
  const timeSpent = formatTimeSpent(session.startTime);

  const handleNewSession = () => {
    resetSession();
  };

  if (!activity) {
    return (
      <div className="text-center">
        <p className="text-gray-600">Activity information not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 text-center">
      {/* Celebration Header */}
      <div className="space-y-6">
        <div className="text-8xl mb-4 animate-bounce">🌼</div>
        
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          {praiseMessage}
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Thank you for sharing your wonderful thoughts and memories with me. 
          Every moment we spent together was special.
        </p>
      </div>

      {/* Activity Summary */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-3">
            <span className="text-4xl">{activity.icon}</span>
            <h2 className="text-2xl font-bold text-gray-900">
              {activity.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">
                {responseCount}
              </div>
              <div className="text-gray-600">
                Thoughtful response{responseCount !== 1 ? 's' : ''} shared
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">
                {timeSpent}
              </div>
              <div className="text-gray-600">
                Quality time together
              </div>
            </div>
          </div>
          
          <div className="pt-6 border-t border-gray-100">
            <p className="text-gray-700 leading-relaxed">
              "{activity.description}"
            </p>
          </div>
        </div>
      </div>

      {/* Encouraging Message */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
        <div className="flex items-center justify-center space-x-2 mb-3">
          <span className="text-2xl">💙</span>
          <span className="text-blue-800 font-semibold">You did beautifully!</span>
        </div>
        <p className="text-blue-700 leading-relaxed">
          Remember, every response you shared was perfect just as it was. 
          Thank you for taking this gentle journey with me today.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/activities/${activity.id}`}>
            <Button 
              onClick={handleNewSession}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              Try This Activity Again ↻
            </Button>
          </Link>
          
          <Link href="/activities">
            <Button 
              onClick={handleNewSession}
              variant="outline" 
              className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-400 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200"
            >
              Choose Different Activity 🌟
            </Button>
          </Link>
        </div>
        
        <Link href="/">
          <Button 
            onClick={handleNewSession}
            variant="outline"
            className="text-gray-600 hover:text-gray-800 border-gray-300 hover:border-gray-400 px-6 py-3 rounded-lg"
          >
            Return to Welcome
          </Button>
        </Link>
      </div>

      {/* Gentle Closing */}
      <div className="pt-8 border-t border-gray-200">
        <p className="text-gray-600 text-lg leading-relaxed">
          Until we meet again, take care of yourself. 
          You bring such warmth and wisdom to our conversations. 🌷
        </p>
      </div>
    </div>
  );
}