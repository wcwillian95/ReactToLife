import React, { useState } from "react";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";

import getFirebase from "../firebase";
import useInput from "./useInput";
import usuario from "../user";

const SignInForm = () => {
  const firebaseInstance = getFirebase();
  const email = useInput("");
  const password = useInput("");
  const navigation = useNavigation();
  const [userText, SetUserText] = useState(usuario);

  const signIn = async (event) => {
    event.preventDefault();
    if (!email.value) {
    } else {
      try {
        if (firebaseInstance) {
          const user = await firebaseInstance
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
          //console.log("user", user);
          userText.email = email.value;
          password.value = "";
          navigation.navigate("MainTab");
        }
      } catch (error) {
        console.log("error", error);
        alert("Usuário não identificado");
      }
    }
  };

  return (
    <FormWrapper onSubmit={signIn}>
      <Input placeholder="E-mail" {...email} />
      <Input placeholder="Senha" type="password" {...password} />
      <Button type="submit">Logar</Button>
    </FormWrapper>
  );
};

export default SignInForm;

const FormWrapper = styled.form`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 50px;
`;
const Input = styled.input`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  padding: 10px 20px;
  background-blend-mode: overlay;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 20px 40px rgba(31, 47, 71, 0.25),
    0px 1px 5px rgba(0, 0, 0, 0.1), inset 0 0 0 0.5px rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(250, 250, 250, 0.4);

  :focus {
    outline: none;
  }
`;
const Button = styled.button`
  background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
  padding: 12px 0;
  width: 200px;
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;
