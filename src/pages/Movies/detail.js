import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import {
  Description,
  Container,
  Titles,
  Imdb,
  TitleMovie,
  Date,
  ImageDetail,
  TitleFeatured,
  Like,
  LikeButtom,
  Icon,
  BackButtomBg,
  BackButtom,
  IconBackButtom,
} from "./styles";

const Detail = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [like, setLike] = useState(0);
  const [unlike, setUnlike] = useState(0);

  useEffect(() => {
    dispatch({
      type: "GET_MOVIE",
      id: props.route.params.id,
    });
  }, []);

  const { movies } = useSelector((state) => state);

  function putLike(id, type = true) {
    if (type) {
      setLike(like + 1);
    } else {
      setUnlike(unlike + 1);
    }
  }

  return (
    <>
      {movies[1] !== undefined ? (
        <>
          {movies[1].poster_path !== undefined ? (
            <ImageDetail
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${movies[1].poster_path}`,
              }}
            />
          ) : null}
          <Container>
            <Titles>
              <TitleMovie>{movies[1].title} </TitleMovie>
              <Imdb>IMDb {movies[1].vote_average}</Imdb>
            </Titles>
            <Imdb>{movies[1].runtime} min</Imdb>
            <Like>
              <LikeButtom onPress={() => putLike(movies[1].id)}>
                <Icon name="thumbs-up" size={20} color="#ff9000" />
                <TitleFeatured>{like}</TitleFeatured>
              </LikeButtom>
              <LikeButtom onPress={() => putLike(movies[1].id, false)}>
                <Icon name="thumbs-down" size={20} color="#ff9000" />
                <TitleFeatured>{unlike}</TitleFeatured>
              </LikeButtom>
            </Like>
            <Date>
              Lançamento {movies[1].release_date.split("-").reverse().join("/")}
            </Date>
            <Description>
              <TitleFeatured>Sinopse:</TitleFeatured> {movies[1].overview}
            </Description>
            <BackButtomBg>
              <BackButtom onPress={() => navigation.goBack()}>
                <IconBackButtom name="arrow-left" size={30} color="#312e38" />
              </BackButtom>
            </BackButtomBg>
          </Container>
        </>
      ) : null}
    </>
  );
};

export default Detail;
