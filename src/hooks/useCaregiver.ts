'use client';

import { useState, useEffect } from 'react';
import { CaregiverSettings, loadCaregiverSettings, saveCaregiverSettings } from '@/lib/session';

export function useCaregiver() {
  const [settings, setSettings] = useState<CaregiverSettings>({ showHints: false });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load settings from localStorage on component mount
    const savedSettings = loadCaregiverSettings();
    setSettings(savedSettings);
    setIsLoaded(true);
  }, []);

  const toggleHints = () => {
    const newSettings = { ...settings, showHints: !settings.showHints };
    setSettings(newSettings);
    saveCaregiverSettings(newSettings);
  };

  const setShowHints = (show: boolean) => {
    const newSettings = { ...settings, showHints: show };
    setSettings(newSettings);
    saveCaregiverSettings(newSettings);
  };

  return {
    showHints: settings.showHints,
    isLoaded,
    toggleHints,
    setShowHints
  };
}