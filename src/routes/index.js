import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Movies from "../pages/Movies";
import MovieDetail from "../pages/Movies/detail";

const Auth = createStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: "#312e38" },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="Movies" component={Movies} />
    <Auth.Screen name="MovieDetail" component={MovieDetail} />
  </Auth.Navigator>
);

export default AuthRoutes;
