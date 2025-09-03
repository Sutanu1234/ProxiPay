import '@/global.css';

import { NAV_THEME } from '@/lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Toast, { BaseToast } from 'react-native-toast-message';
import { CustomToast } from './CustomToast';

export {
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <SafeAreaProvider>
      <ThemeProvider value={NAV_THEME[colorScheme ?? 'light']}>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />

        {/* Safe area wrapper applied globally */}
        <SafeAreaView className="flex-1 bg-[#ace1f8]">
          <Stack screenOptions={{ headerShown: false }} />

          {/* Toasts */}
          <Toast config={{ custom_toast: (props) => <CustomToast {...props} /> }} />

          <PortalHost />
        </SafeAreaView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
