'use client';

import { useState } from 'react';
import { activities, Activity } from '@/lib/activities';
import { ActivityCard } from './ActivityCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useCaregiver } from '@/hooks/useCaregiver';

interface ActivityGridProps {
  onActivitySelect?: (activity: Activity) => void;
}

export function ActivityGrid({ onActivitySelect }: ActivityGridProps) {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const { showHints } = useCaregiver();

  const handleActivitySelect = (activity: Activity) => {
    setSelectedActivity(activity);
    if (onActivitySelect) {
      onActivitySelect(activity);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          What would you like to explore today? 🌟
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Choose any activity that feels comfortable to you. Each one is designed to be gentle and enjoyable.
        </p>
        
        {showHints && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center space-x-2 text-blue-800 mb-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-sm">Caregiver Tip</span>
            </div>
            <p className="text-blue-700 text-sm">
              Choose what feels most comfortable today. You can help them select an activity 
              or let them browse and choose. There's no pressure to complete everything.
            </p>
          </div>
        )}
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            onSelect={handleActivitySelect}
          />
        ))}
      </div>

      {/* Selected Activity Confirmation */}
      {selectedActivity && (
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
          <div className="text-center space-y-4">
            <div className="text-4xl">{selectedActivity.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900">
              {selectedActivity.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {selectedActivity.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href={`/activities/${selectedActivity.id}`}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Let's Begin Together ✨
                </Button>
              </Link>
              
              <Button
                onClick={() => setSelectedActivity(null)}
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg rounded-lg"
              >
                Choose Different Activity
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Back to Home */}
      <div className="text-center pt-8">
        <Link href="/">
          <Button 
            variant="outline" 
            className="text-gray-600 hover:text-gray-800 border-gray-300 hover:border-gray-400 px-6 py-3 rounded-lg"
          >
            ← Back to Welcome
          </Button>
        </Link>
      </div>
    </div>
  );
}