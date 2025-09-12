'use client';

interface PraiseMessageProps {
  message: string;
  isVisible: boolean;
}

export function PraiseMessage({ message, isVisible }: PraiseMessageProps) {
  if (!isVisible) return null;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 mb-6">
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <span className="text-2xl">🌟</span>
          <span className="text-green-800 font-semibold">Wonderful!</span>
        </div>
        <p className="text-green-700 text-lg font-medium">
          {message}
        </p>
      </div>
    </div>
  );
}