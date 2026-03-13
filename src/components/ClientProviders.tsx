'use client';

import { MobileNavProvider } from './MobileNavContext';
import MobileNavDrawer from './MobileNavDrawer';
import FeedbackWidget from './FeedbackWidget';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <MobileNavProvider>
      {children}
      <MobileNavDrawer />
      <FeedbackWidget />
    </MobileNavProvider>
  );
}
