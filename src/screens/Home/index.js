import React from "react";
import { useState, useEffect } from "react";
import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchView,
  SearchTextInput
} from "./styles";
import { Text } from "react-native";

import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as LogoIcon } from "../../assets/logoLife.svg";
import { FlatList } from "react-native";
import ListItem from "../../components/ListItem";

import results from "../../result";

export default () => {
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState(
    results.sort((a, b) => (a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0))
  );

  useEffect(() => {
    if (searchText === "") {
      setList(results);
    } else {
      setList(
        results.filter(
          (item) =>
            item.nome.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText]);

  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <HeaderTitle numerIfLines={2}>
            Encontre informações sobre as doenças e previna-se.
          </HeaderTitle>
          <LogoIcon width="60" height="60" fill="#FFFFFF" />
        </HeaderArea>

        <SearchView>
          <SearchTextInput
            placeholder="Pesquise aqui"
            placeholderTextColor="#FFF"
            value={searchText}
            onChangeText={(t) => setSearchText(t)}
          />
          <SearchIcon width="24" height="24" fill="#FFFFFF" />
        </SearchView>

        <FlatList
          data={list}
          renderItem={({ item }) => <ListItem data={item} />}
          keyExtractor={(item) => item.id}
        />
      </Scroller>
    </Container>
  );
};
