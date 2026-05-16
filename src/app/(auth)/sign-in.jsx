// app/sign-in.jsx

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
} from "react-native";

import { useSignIn } from "@clerk/expo";
import { router } from "expo-router";
import styles from "@/assets/auth/styles";

export default function SignInScreen() {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignInPress = async () => {
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
      Alert.alert("Password Required", "Please enter your password");
      return;
    }

    try {
      setLoading(true);

      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({
          session: signInAttempt.createdSessionId,
        });

        router.replace("/");
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2));
        Alert.alert(
          "Sign In Failed",
          "Please check your credentials and try again.",
        );
      }
    } catch (err) {
      Alert.alert(
        "Login Failed",
        err.errors?.[0]?.message || "Something went wrong",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.hero}>
            <Text style={styles.topStatus}>9:41</Text>
            <Text style={styles.title}>Hello!</Text>
            <Text style={styles.subtitle}>Welcome to plantland</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.formTitle}>Login</Text>

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
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />

            <Text style={styles.forgot}>Forgot Password</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={onSignInPress}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Login</Text>
              )}
            </TouchableOpacity>

            <View style={styles.dividerRow}>
              <View style={styles.dividerLine} />
              <Text style={styles.orText}>or login with</Text>
              <View style={styles.dividerLine} />
            </View>

            <View style={styles.socialRow}>
              <TouchableOpacity style={styles.socialButton}>
                <Text style={styles.socialText}>f</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Text style={styles.socialText}>G</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Text style={styles.socialText}>A</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => router.push("/sign-up")}>
              <Text style={styles.footerText}>
                Don't have account? <Text style={styles.footerLink}>Sign Up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
