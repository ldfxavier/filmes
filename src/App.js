import "react-native-gesture-handler";
import React from "react";
import "./config/reactotronConfig";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import store from "./store";
import Routes from "./routes";

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  </Provider>
);

export default App;
