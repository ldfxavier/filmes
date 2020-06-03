import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import {
  List,
  Description,
  Card,
  Imdb,
  Title,
  TitleMovie,
  Image,
} from "./styles";

import Header from "../../components/header";

const Movies = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { movies } = useSelector((state) => state);

  useEffect(() => {
    dispatch({
      type: "GET_MOVIES",
    });
  }, []);

  function renderItem({ item }) {
    return (
      <Card onPress={() => navigation.navigate("MovieDetail", { id: item.id })}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w200/${item.poster_path}`,
          }}
        />
        <Title>
          <Imdb>IMDb {item.vote_average}</Imdb>
          <TitleMovie>{item.title}</TitleMovie>
          <Description>{item.overview.substr(0, 80)}...</Description>
        </Title>
      </Card>
    );
  }

  return (
    <>
      <Header title="Filmes" navigation={navigation} />
      <List
        data={movies[0]}
        renderItem={(item) => renderItem(item)}
        keyExtractor={(item) => Math.random().toString(36).substr(2, 5)}
      />
    </>
  );
};

export default Movies;
