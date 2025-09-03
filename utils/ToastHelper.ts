import Toast from 'react-native-toast-message';

type ToastType = 'success' | 'error' | 'info' | 'update';

interface ToastOptions {
  title: string;
  message: string;
  type?: ToastType;
  duration?: number;
}

const toastColors: Record<ToastType, string> = {
  success: '#16a34a', // green
  error: '#dc2626',   // red
  info: '#2563eb',    // blue
  update: '#f59e0b',  // yellow/orange
};

export const showToast = ({
  title,
  message,
  type = 'info',
  duration = 3000,
}: ToastOptions) => {
  Toast.show({
    type: 'custom_toast',
    position: 'top',
    visibilityTime: duration,
    props: {
      title,
      message,
      bgColor: toastColors[type],
    },
  });
};
