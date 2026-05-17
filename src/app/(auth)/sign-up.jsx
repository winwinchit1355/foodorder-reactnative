import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  ActivityIndicator,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useSignUp } from "@clerk/expo";
import { router } from "expo-router";
import styles from "@/assets/auth/styles";

export default function SignUp() {
  const { isLoaded, signUp } = useSignUp();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const onSignUpPress = async () => {
    if (!isLoaded) return;

    if (!emailAddress.trim()) {
      Alert.alert("Email Required", "Please enter your email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress)) {
      Alert.alert("Invalid Email", "Please enter a valid email address");
      return;
    }

    if (!password.trim()) {
      Alert.alert("Password Required", "Please enter a password");
      return;
    }

    if (password.length < 8) {
      Alert.alert("Weak Password", "Password should be at least 8 characters");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Password Mismatch", "Confirm password must match password");
      return;
    }

    try {
      setLoading(true);

      await signUp.create({
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      Alert.alert("Verify your email", "We sent a verification code to your email.");
      router.push("/verify-email");
    } catch (err) {
      Alert.alert(
        "Sign Up Failed",
        err.errors?.[0]?.message || "Something went wrong",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardView}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.hero}>
              <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.topLink}>← Back to login</Text>
              </TouchableOpacity>
              <Text style={styles.title}>Join us</Text>
              <Text style={styles.subtitle}>Create your foodie account</Text>
            </View>

            <View style={styles.card}>
              <Image
                  source={require("../../../assets/images/auth/auth-logo.jpeg")}
                  style={styles.cardLogo}
                />
              <Text style={styles.formTitle}>Sign Up</Text>

              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#9fa9a9"
                autoCapitalize="none"
                keyboardType="email-address"
                value={emailAddress}
                onChangeText={setEmailAddress}
              />

              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#9fa9a9"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />

              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#9fa9a9"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />

              <TextInput
                style={styles.input}
                placeholder="Phone"
                placeholderTextColor="#9fa9a9"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />

              <TouchableOpacity
                style={styles.button}
                onPress={onSignUpPress}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.buttonText}>Sign Up</Text>
                )}
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}