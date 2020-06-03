import React from "react";

import { Container, Right, RightButton, Box, BoxTitle } from "./styles";

import Icon from "react-native-vector-icons/Feather";

export default function header(props) {
  const { title, navigation } = props;
  return (
    <Container>
      <Box />
      <Box>
        <BoxTitle>{title}</BoxTitle>
      </Box>
      <Right>
        <RightButton onPress={() => navigation.navigate("SignIn")}>
          <Icon name="log-out" size={20} color="#1e1d22" />
        </RightButton>
      </Right>
    </Container>
  );
}
