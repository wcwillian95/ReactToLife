import React, { useState } from "react";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";

import getFirebase from "../firebase";
import useInput from "./useInput";

const SignUpForm = () => {
  const firebaseInstance = getFirebase();
  const email = useInput("");
  const password = useInput("");
  const repassword = useInput("");
  const navigation = useNavigation();

  const signUp = async (event) => {
    event.preventDefault();

    if (password.value !== repassword.value) {
      alert("Senhas não conferem!");
    } else {
      try {
        if (firebaseInstance) {
          const user = await firebaseInstance
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
          navigation.navigate("SignIn");
          console.log("user", user);
          alert(`Welcome ${email.value}!`);
        }
      } catch (error) {
        console.log("error", error);
        alert(error.message);
      }
    }
  };

  return (
    <FormWrapper onSubmit={signUp}>
      <Title>Cadastro</Title>
      <Input placeholder="E-mail" {...email} />
      <Input placeholder="Senha" type="password" {...password} />
      <Input placeholder="Confirme a senha" type="password" {...repassword} />
      <Button type="submit">Cadastrar</Button>
    </FormWrapper>
  );
};

export default SignUpForm;

const FormWrapper = styled.form`
  display: grid;
  justify-content: center;
  gap: 20px;
  padding-bottom: 30px;
`;

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 48px;
  color: #000;
  text-align: center;
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
