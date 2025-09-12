'use client';

import { Button } from '@/components/ui/button';
import { Activity } from '@/lib/activities';

interface ActivityCardProps {
  activity: Activity;
  onSelect: (activity: Activity) => void;
}

export function ActivityCard({ activity, onSelect }: ActivityCardProps) {
  return (
    <Button
      onClick={() => onSelect(activity)}
      className={`${activity.color} border-2 border-gray-200 hover:border-blue-300 text-gray-800 hover:text-gray-900 h-auto p-6 w-full transition-all duration-200 hover:shadow-md rounded-xl group`}
      variant="outline"
    >
      <div className="text-center space-y-3 w-full">
        {/* Icon */}
        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-200">
          {activity.icon}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 leading-tight">
          {activity.title}
        </h3>
        
        {/* Subtitle */}
        <p className="text-base text-gray-700 leading-relaxed">
          {activity.subtitle}
        </p>
        
        {/* Question Count */}
        <div className="pt-2 border-t border-gray-200 border-opacity-50">
          <p className="text-sm text-gray-600">
            {activity.questions.length} gentle questions
          </p>
        </div>
      </div>
    </Button>
  );
}