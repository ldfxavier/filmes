import { Dimensions, Platform } from "react-native";

import styled from "styled-components/native";

const { width } = Dimensions.get("window");

export const Container = styled.View`
  flex-direction: row;
  padding-top: ${Platform.OS === "ios" ? 40 + "px" : 0 + "px"};
  height: ${Platform.OS === "ios" ? 80 + "px" : 50 + "px"};
  background-color: #ff9000;
  border-bottom-width: 1px;
  border-color: #232129;
`;

export const Right = styled.View`
  width: ${width / 3 + "px"};
  justify-content: center;
  align-items: flex-end;
  padding-right: 10px;
`;

export const RightButton = styled.TouchableOpacity``;

export const Box = styled.View`
  width: ${width / 3 + "px"};
  align-items: center;
  justify-content: center;
`;

export const BoxTitle = styled.Text`
  color: #232129;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  align-items: center;
`;

export const Menu = styled.View`
  width: ${width / 3 + "px"};
  justify-content: center;
  align-items: flex-end;
`;

export const MenuButton = styled.TouchableOpacity`
  margin-right: 5px;
`;
