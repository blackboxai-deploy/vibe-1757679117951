'use client';

import { Button } from '@/components/ui/button';
import { WelcomeMessage } from '@/components/session/WelcomeMessage';
import { CaregiverToggle } from '@/components/layout/CaregiverToggle';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Welcome Message from Bertrand */}
      <WelcomeMessage />
      
      {/* Caregiver Toggle */}
      <div className="max-w-2xl mx-auto">
        <CaregiverToggle />
      </div>

      {/* Start Session Button */}
      <div className="flex justify-center pt-6">
        <Link href="/activities">
          <Button 
            size="lg" 
            className="text-xl px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl font-semibold min-w-[240px]"
          >
            <span className="flex items-center space-x-3">
              <span>Start a Session</span>
              <span className="text-2xl">✨</span>
            </span>
          </Button>
        </Link>
      </div>

      {/* Additional Comfort Message */}
      <div className="text-center max-w-lg mx-auto pt-8">
        <p className="text-gray-600 text-base leading-relaxed">
          Remember, this is your time. Go at your own pace, and know that whatever you share 
          with me is perfect just as it is. 🌼
        </p>
      </div>
    </div>
  );
}