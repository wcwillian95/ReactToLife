import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  InputArea,
  TextLogo,
  SignMessageButtonText,
  SignMessageButtonTextBold,
  SignMessageButton
} from "./styles";

// import SignInput from "../../components/SignInput";
import SignUpForm from "../../components/SignUpForm";

import { ReactComponent as ReactLogo } from "../../assets/logoLife.svg";
// import { ReactComponent as IconPerson } from "../../assets/person.svg";
// import { ReactComponent as IconStar } from "../../assets/star_empty.svg";
// import { ReactComponent as IconEmail } from "../../assets/email.svg";
// import { ReactComponent as IconLock } from "../../assets/lock.svg";

export default () => {
  const navigation = useNavigation();

  // const [nameField, setNameField] = useState("");
  // const [CPFField, setCPFField] = useState("");
  // const [emailField, setEmailField] = useState("");
  // const [passwordField, setPasswordField] = useState("");

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: "SignIn" }]
    });
  };

  return (
    <Container>
      <ReactLogo width="50" height="50" fill="#268596" />

      <TextLogo>React To Life</TextLogo>

      <InputArea>
        <SignUpForm />
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Já possui conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
