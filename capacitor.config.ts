import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sessionpulse.app',
  appName: 'SessionPulse',
  webDir: 'dist',
  backgroundColor: '#06080c',
  android: {
    allowMixedContent: false,
  },
};

export default config;
