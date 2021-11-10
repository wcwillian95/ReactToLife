import React from "react";
import styled from "styled-components/native";

import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as AccountIcon } from "../assets/account.svg";
import { ReactComponent as FavoriteIcon } from "../assets/favorite.svg";

const TabArea = styled.View`
  height: 60px;
  background-color: #4eadbe;
  flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 35px;
  border: 3px solid #4eadbe;
  margin-top: -20px;
`;

export default ({ state, navigation }) => {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo("Favorites")}>
        <FavoriteIcon
          style={{ opacity: state.index === 1 ? 1 : 0.5 }}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
      </TabItem>
      <TabItemCenter onPress={() => goTo("Home")}>
        <HomeIcon
          style={{ opacity: state.index === 0 ? 1 : 0.5 }}
          width="32"
          height="32"
          fill="#4EADBE"
        />
      </TabItemCenter>
      <TabItem onPress={() => goTo("Profile")}>
        <AccountIcon
          style={{ opacity: state.index === 2 ? 1 : 0.5 }}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
      </TabItem>
    </TabArea>
  );
};
