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
import { useAuth, useSignUp } from '@clerk/expo'
import { router } from "expo-router";
import styles from "@/assets/styles/auth.styles";
import { COLORS } from "../../../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SignUp() {
  const { signUp, errors, fetchStatus } = useSignUp()
  const { isSignedIn } = useAuth()

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [pendingVerification, setPendingVerification] = useState(false);

  const onSignUpPress = async () => {
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

    if (password.length < 6) {
      Alert.alert("Weak Password", "Password should be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Password Mismatch", "Confirm password must match password");
      return;
    }

    try {
      setLoading(true);

      // await signUp.create({
      //   emailAddress,
      //   password,
      // });

      // await signUp.prepareEmailAddressVerification({
      //   strategy: "email_code",
      // });
      const { error } = await signUp.password({
        emailAddress,
        password,
      })
      if (error) {
        Alert.alert(
          "Sign Up Failed",
          error.errors?.[0]?.message || "Something went wrong",
        );
        console.error('wwc',JSON.stringify(error, null, 2))
        return
      }

      if (!error) await signUp.verifications.sendEmailCode()

      Alert.alert("Verify your email", "We sent a verification code to your email.");
      setPendingVerification(true);
      router.push("/verify-email");
    } catch (err) {
      Alert.alert(
        "Sign Up Failed",
        err.errors?.[0]?.message || "Something went wrong",
      );
    } finally {
      setLoading(false);
    }
    if(pendingVerification) {
      return <Text style={styles.pendingText}>Please check your email for the verification code.</Text>
    }
  };

  return (
    // <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"} 
          style={styles.keyboardView}
          keyboardVerticalOffset={Platform.OS === "ios"? 64: 0}
          >
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
              <View>
                <Image
                    source={require("../../../assets/images/auth/auth-logo.jpeg")}
                    style={styles.cardLogo}
                  />
                <Text style={styles.formTitle}>Sign Up</Text>
              </View>

              {/* <View>
                <TextInput
                  style={styles.input}
                  placeholder="Name"
                  placeholderTextColor={COLORS.inputPlaceholder}
                  value={name}
                  onChangeText={setName}
                />
              </View> */}

              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor={COLORS.inputPlaceholder}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  value={emailAddress}
                  onChangeText={setEmailAddress}
                />
              </View>

              {/* <View>
                <TextInput
                  style={styles.input}
                  placeholder="Phone"
                  placeholderTextColor={COLORS.inputPlaceholder}
                  keyboardType="phone-pad"
                  value={phone}
                  onChangeText={setPhone}
                />
              </View> */}

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor={COLORS.inputPlaceholder}
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  style={styles.showPasswordButton}
                  onPress={() => setShowPassword((prev) => !prev)}
                >
                  <Ionicons
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={20}
                    color={COLORS.inputPlaceholder}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  placeholderTextColor={COLORS.inputPlaceholder}
                  secureTextEntry={!showConfirmPassword}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
                <TouchableOpacity
                  style={styles.showPasswordButton}
                  onPress={() => setShowConfirmPassword((prev) => !prev)}
                >
                  <Ionicons
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={20}
                    color={COLORS.inputPlaceholder}
                  />
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity
                  style={[styles.button, loading && styles.buttonDisabled]}
                  onPress={onSignUpPress}
                  disabled={loading}
                  activeOpacity={0.8}
                >
                  {loading ? (
                    <ActivityIndicator color="#fff" />
                  ) : (
                    <Text style={styles.buttonText}>Sign Up</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    // </SafeAreaView>
  );
}