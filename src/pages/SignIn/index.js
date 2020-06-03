import React, { useState } from "react";

import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

import { useSelector } from "react-redux";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Title, CreateAccount, CreateAccountText } from "./styles";

const SignIn = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dados = useSelector((state) => state);

  function login() {
    let message = "";
    if (dados.auth.length !== 0) {
      if (dados.auth.email === email && dados.auth.password === password) {
        navigation.navigate("Movies");
      } else {
        message = "E-mail ou senha incorreto!";
      }
    } else {
      message = "Nenhum usuário criado!";
    }

    if (message !== "") {
      Alert.alert(message, "", [{ text: "OK", onPress: () => {} }], {
        cancelable: false,
      });
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      enable
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <View>
            <Title>Faça seu login</Title>
          </View>

          <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            name="email"
            icon="mail"
            placeholder="E-mail"
            onChangeText={(value) => setEmail(value)}
          />
          <Input
            name="password"
            icon="lock"
            placeholder="Senha"
            secureTextEntry
            returnKeyType="send"
            onChangeText={(value) => setPassword(value)}
          />

          <Button onPress={() => login()}>START</Button>
        </Container>

        <CreateAccount
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Icon name="user-plus" size={20} color="#ff9000" />
          <CreateAccountText>Criar conta</CreateAccountText>
        </CreateAccount>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
