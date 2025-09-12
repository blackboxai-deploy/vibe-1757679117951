'use client';

import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useCaregiver } from '@/hooks/useCaregiver';

export function CaregiverToggle() {
  const { showHints, toggleHints, isLoaded } = useCaregiver();

  if (!isLoaded) {
    return (
      <div className="flex items-center space-x-3 opacity-50">
        <div className="w-11 h-6 bg-gray-200 rounded-full animate-pulse"></div>
        <span className="text-gray-500">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm border border-gray-200">
      <div className="flex items-center space-x-3">
        <Switch
          id="caregiver-hints"
          checked={showHints}
          onCheckedChange={toggleHints}
          className="data-[state=checked]:bg-blue-600"
        />
        <div>
          <Label htmlFor="caregiver-hints" className="text-base font-medium text-gray-900 cursor-pointer">
            Caregiver Tips
          </Label>
          <p className="text-sm text-gray-600 mt-1">
            {showHints 
              ? 'Helpful hints will appear with each question' 
              : 'Turn on to see gentle guidance for caregivers'
            }
          </p>
        </div>
      </div>
      
      {showHints && (
        <div className="ml-6 pl-6 border-l border-gray-200">
          <div className="flex items-center space-x-2 text-blue-600">
            <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Tips enabled</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Gentle guidance will appear below questions to help you support your loved one.
          </p>
        </div>
      )}
    </div>
  );
}