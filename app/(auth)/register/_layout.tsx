import React, { useState } from 'react';
import { View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useRouter } from 'expo-router';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { showToast } from '@/utils/ToastHelper';

export default function RegisterPage() {
  const router = useRouter();
  const [otpRequested, setOtpRequested] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');

  const validateEmail = (mail: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);

  const handleGetOtp = () => {
    if (!email) {
      showToast({ title: 'Error', message: 'Please enter your email', type: 'error' });
      return;
    }
    if (!validateEmail(email)) {
      showToast({ title: 'Error', message: 'Enter a valid email format', type: 'error' });
      return;
    }

    setOtpRequested(true);
    showToast({ title: 'Success', message: `OTP has been sent to ${email}`, type: 'success' });
  };

  const handleRegister = () => {
    if (!otp) {
      showToast({ title: 'Error', message: 'Please enter OTP to continue', type: 'error' });
      return;
    }
    router.replace('../home');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="flex-1 justify-center bg-white px-6">
        {/* Welcome Text */}
        <Text className="mb-2 text-center text-3xl font-bold text-gray-800">
          Welcome to ProxiPay!
        </Text>
        <Text className="mb-6 text-center text-gray-500">Create your account to get started</Text>

        {/* Full Name Input */}
        <Input
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
          className="mb-4"
        />

        {/* Email Input */}
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          className="mb-4"
        />

        {/* Mobile Input */}
        <Input
          placeholder="Mobile"
          value={mobile}
          onChangeText={setMobile}
          keyboardType="phone-pad"
          className="mb-4"
        />

        {/* OTP Input */}
        {otpRequested && (
          <Input
            placeholder="Enter OTP"
            value={otp}
            onChangeText={setOtp}
            keyboardType="numeric"
            className="mb-4"
          />
        )}

        {/* Buttons */}
        {!otpRequested ? (
          <Button onPress={handleGetOtp} className="mb-4">
            <Text className="font-medium text-white">Get OTP</Text>
          </Button>
        ) : (
          <Button onPress={handleRegister} className="mb-4">
            <Text className="font-medium text-white">Register</Text>
          </Button>
        )}

        {/* Login Link */}
        <TouchableOpacity onPress={() => router.push('./login')}>
          <Text className="text-center text-blue-600 underline">
            Already have an account? <Text className="font-semibold text-blue-600">Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
