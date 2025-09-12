import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Memory Buddy - Gentle Memory Support',
  description: 'A gentle memory support tool for people with Mild Cognitive Impairment (MCI) or early dementia and their caregivers.',
  keywords: 'memory support, dementia, MCI, cognitive impairment, caregiver tool',
  robots: 'noindex, nofollow', // Privacy focused - not for search engines
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-gradient-to-br from-blue-50 to-indigo-100 antialiased`}>
        <div className="min-h-full flex flex-col">
          {/* Header */}
          <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                    Memory Buddy
                  </h1>
                  <p className="mt-2 text-lg text-gray-600">
                    Your gentle companion for memory activities
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
            {children}
          </main>

          {/* Footer with Medical Disclaimer */}
          <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
            <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center space-x-2 text-gray-500">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Important Medical Disclaimer</span>
                </div>
                
                <div className="max-w-3xl mx-auto">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <strong>Memory Buddy is a supportive tool and not a medical device.</strong> 
                    It does not diagnose, treat, or replace professional medical care. 
                    This application is designed to provide gentle cognitive engagement and should not be used 
                    as a substitute for professional medical advice, diagnosis, or treatment.
                  </p>
                  
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    Always consult with qualified healthcare providers regarding any medical concerns. 
                    If you experience any medical emergency, please contact emergency services immediately.
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    No personal data is collected or stored externally. All activity responses are kept locally on your device.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}