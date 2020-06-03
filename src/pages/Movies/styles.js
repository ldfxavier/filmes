import styled from "styled-components/native";
import FeatherIcon from "react-native-vector-icons/Feather";

import { FlatList } from "react-native";

import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const List = styled(FlatList)`
  padding: 5px;
`;

export const Card = styled.TouchableOpacity`
  flex-direction: row;
  padding: 5px 0px 5px 0px;
  border-bottom-color: #ff9000;
  border-bottom-width: 0.2px;
`;

export const Image = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 100px;
  height: 100px;
  border-radius: 3px;
  margin-right: 5px;
`;

export const Title = styled.View`
  flex: 1;
`;

export const TitleFeatured = styled.Text`
  color: #ff9000;
  font-weight: bold;
  font-size: 14px;
`;

export const Imdb = styled.Text`
  color: #ff9000;
  font-weight: bold;
  font-size: 12px;
`;

export const Titles = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const TitleMovie = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const Description = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const Container = styled.ScrollView`
  padding: 5px;
`;

export const ImageDetail = styled.Image.attrs({
  resizeMode: "stretch",
})`
  height: ${height / 2}px;
  margin-bottom: 10px;
`;

export const Date = styled.Text`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  color: #1e1d22;
  background-color: #ff9000;
  padding: 5px;
  margin-top: 10px;
`;

export const LikeButtom = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;

export const Like = styled.View`
  flex-direction: row;
`;

export const Icon = styled(FeatherIcon)`
  padding: 5px 5px 0px 0px;
`;

export const BackButtomBg = styled.View`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const BackButtom = styled.TouchableOpacity`
  background-color: #ff9000;
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const IconBackButtom = styled(FeatherIcon)`
  padding: 10px;
`;
