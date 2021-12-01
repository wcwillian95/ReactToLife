import React from "react";
import { Container, TextLogo } from "./styles";

import { ReactComponent as ReactAtom } from "../../assets/atom_editor.svg";

export default () => {
  return (
    <Container>
      <ReactAtom width="100" height="100" fill="#268596" />

      <TextLogo>Favoritos</TextLogo>
    </Container>
  );
};
