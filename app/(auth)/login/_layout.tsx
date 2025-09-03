import React, { useState } from 'react';
import { View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { showToast } from '@/utils/ToastHelper';

// Reusable Separator Component
const Separator = () => (
  <View className="my-4 flex-row items-center">
    <View className="h-[1px] flex-1 bg-gray-300" />
    <Text className="mx-2 text-gray-500">or</Text>
    <View className="h-[1px] flex-1 bg-gray-300" />
  </View>
);

export default function LoginPage() {
  const router = useRouter();
  const [otpRequested, setOtpRequested] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const validateEmail = (mail: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  const validatePhone = (num: string) => /^[0-9]{10}$/.test(num);

  const handleGetOtp = () => {
    if (!emailOrPhone) {
      showToast({ title: 'Error', message: 'Fill the email/Phone', type: 'error' });
      return;
    }

    if (emailOrPhone.includes('@') && !validateEmail(emailOrPhone)) {
      showToast({ title: 'Error', message: 'Enter a Valid Email', type: 'error' });
      return;
    }

    if (!emailOrPhone.includes('@') && !validatePhone(emailOrPhone)) {
      showToast({ title: 'Error', message: 'Enter a Valid Phone Number', type: 'error' });
      return;
    }

    setOtpRequested(true);
    showToast({ title: 'Success', message: `OTP send to ${emailOrPhone}`, type: 'success' });
  };

  const handleLogin = () => {
    if (!otp) {
      showToast({ title: 'Error', message: 'OTP missing', type: 'error' });
      return;
    }
    // TODO: Verify OTP
    router.replace('../home');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="flex-1 justify-center bg-white px-6">
        {/* Welcome Text */}
        <Text className="mb-6 text-center text-3xl font-bold text-gray-800">Welcome Back!</Text>
        <Text className="mb-6 text-center text-gray-500">Login to continue to ProxiPay</Text>

        {/* Email / Phone Input */}
        <Input
          placeholder="Email or Phone"
          value={emailOrPhone}
          onChangeText={setEmailOrPhone}
          keyboardType={emailOrPhone.includes('@') ? 'email-address' : 'phone-pad'}
          className="mb-4"
        />

        {/* OTP Input */}
        {otpRequested && (
          <>
            <Input
              placeholder="Enter OTP"
              value={otp}
              onChangeText={setOtp}
              keyboardType="numeric"
              className="mb-4"
            />

            {/* Remember Me + Resend OTP */}
            <View className="mb-4 flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Switch value={rememberMe} onValueChange={setRememberMe} />
                <Text className="ml-2 text-gray-600">Remember Me</Text>
              </View>
              <TouchableOpacity onPress={handleGetOtp}>
                <Text className="text-blue-600 underline">Resend OTP</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        {/* Buttons */}
        {!otpRequested ? (
          <Button onPress={handleGetOtp} className="mb-4">
            <Text className="font-medium text-white">Get OTP</Text>
          </Button>
        ) : (
          <Button onPress={handleLogin} className="mb-4">
            <Text className="font-medium text-white">Login</Text>
          </Button>
        )}

        {/* Separator */}
        <Separator />

        {/* Login with Biometric */}
        <Button
          onPress={() => {
            showToast({ title: 'Success', message: 'Logged in via Biometric', type: 'success' });
            router.replace('../home');
          }}
          className="mb-4 bg-gray-200">
          <Text className="font-medium text-gray-800">Login with Biometric</Text>
        </Button>

        {/* Register Link */}
        <TouchableOpacity onPress={() => router.push('./register')}>
          <Text className="text-center text-blue-600 underline">
            Don’t have an account? <Text className="font-semibold text-blue-600">Register</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
