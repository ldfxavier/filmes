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

import { useDispatch } from "react-redux";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Title, BackToSignIn, BackToSignInText } from "./styles";

const SignUp = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  function createUser() {
    if (name !== "" && email !== "" && password !== "") {
      let dados = {
        name,
        email,
        password,
      };

      dispatch({
        type: "CREATE_USER",
        dados,
      });

      Alert.alert(
        "Conta criada com sucesso!",
        "",
        [{ text: "OK", onPress: () => navigation.navigate("SignIn") }],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        "Todos os campos são obrigatórios!",
        "",
        [{ text: "OK", onPress: () => {} }],
        { cancelable: false }
      );
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
            <Title>Crie sua conta</Title>
          </View>

          <Input
            autoCorrect={false}
            icon="user"
            placeholder="Nome"
            onChangeText={(value) => setName(value)}
          />
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
            icon="lock"
            placeholder="Senha"
            secureTextEntry
            returnKeyType="send"
            onChangeText={(value) => setPassword(value)}
          />

          <Button onPress={() => createUser()}>CRIAR CONTA</Button>
        </Container>

        <BackToSignIn
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="arrow-left" size={20} color="#f4ede8" />
          <BackToSignInText>Voltar para login</BackToSignInText>
        </BackToSignIn>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
