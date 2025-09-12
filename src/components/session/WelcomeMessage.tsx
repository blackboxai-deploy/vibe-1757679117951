'use client';

interface WelcomeMessageProps {
  className?: string;
}

export function WelcomeMessage({ className = '' }: WelcomeMessageProps) {
  return (
    <div className={`text-center space-y-6 ${className}`}>
      {/* Bertrand's Avatar */}
      <div className="flex justify-center">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
          B
        </div>
      </div>

      {/* Welcome Message */}
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Hello! I'm Bertrand 👋
        </h2>
        
        <div className="max-w-2xl mx-auto space-y-3">
          <p className="text-xl text-gray-700 leading-relaxed">
            I'm your gentle memory buddy, and I'm so glad you're here today.
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Let's enjoy a few calm minutes together. We can talk about memories, 
            play gentle thinking games, or simply share what's on your mind.
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            There's no pressure, no right or wrong answers - just a friendly conversation 
            between us. Take your time, and remember that every response you share is wonderful.
          </p>
        </div>
      </div>

      {/* Encouraging Message */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-xl mx-auto">
        <div className="flex items-center justify-center space-x-2 text-blue-800 mb-2">
          <span className="text-2xl">💙</span>
          <span className="font-semibold">A gentle reminder</span>
        </div>
        <p className="text-blue-700 text-sm leading-relaxed">
          If you're here with a caregiver, they can sit beside you and help in any way that feels comfortable. 
          This is your time to relax and enjoy our conversation together.
        </p>
      </div>

      {/* Session Info */}
      <div className="text-center text-gray-500 text-sm space-y-1">
        <p>Each activity takes about 5-10 minutes</p>
        <p>You can skip any question or end anytime you'd like</p>
      </div>
    </div>
  );
}