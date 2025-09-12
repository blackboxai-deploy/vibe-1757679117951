'use client';

import { useParams } from 'next/navigation';
import { getActivityById } from '@/lib/activities';
import { QuestionFlow } from '@/components/activities/QuestionFlow';
import { useSession } from '@/hooks/useSession';
import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ActivityPage() {
  const params = useParams();
  const activityId = params.activity as string;
  const { startNewSession } = useSession();
  
  const activity = getActivityById(activityId);

  useEffect(() => {
    // Start a new session for this activity
    if (activity) {
      startNewSession(activity.id);
    }
  }, [activity, startNewSession]);

  if (!activity) {
    return (
      <div className="text-center space-y-6">
        <div className="text-6xl mb-4">🤔</div>
        <h1 className="text-3xl font-bold text-gray-900">
          Oops! Activity Not Found
        </h1>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          It seems like this activity doesn't exist or might have been moved. 
          Let's go back and choose a different one together.
        </p>
        <div className="pt-4">
          <Link href="/activities">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              Choose an Activity ✨
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <QuestionFlow activity={activity} />
    </div>
  );
}