import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";

import { ButtonSocialGoogle } from "../../components/ButtonSocialGoogle/ButtonSocialGoogle";
import { ButtonSocial } from "../../components/ButtonSocial/ButtonSocial";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Description,
    ViewButton,
    ButtonSignUp,
    TitleButtonSignUp1,
    TitleButtonSignUp2

} from "./styles";
import { useTheme } from "styled-components";

export const Login = () => {
    const theme = useTheme();
    const [loading, setLoading] = useState(false)

    function onPressButton() {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }
    return (
        <SafeAreaView>
            <Container>
                <ContentHeader>
                    <Title>Seja bem vindo(a) {"\n"} a Wallet App</Title>

                    <Description>Entrar com Redes Sociais</Description>

                    <ViewButton>
                        <ButtonSocialGoogle title="Google" />
                        <ButtonSocial iconName="facebook" title="Facebook" />
                    </ViewButton>
                </ContentHeader>
                <ContentBody>
                    <Input
                        leftIcon
                        iconSize={25}
                        secureTextEntry={false}
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        iconName="mail-outline"
                        iconColor={theme?.COLORS.TEXTDARK}
                        placeholder={"Digite seu e-mail"}
                    />
                    <Input
                        leftIcon
                        rightIcon
                        iconSize={25}
                        secureTextEntry
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="default"
                        iconName="lock-closed-outline"
                        iconColor={theme?.COLORS.TEXTDARK}
                        placeholder="Digite sua senha"
                    />

                    <Button title="Entrar" variant="primary" onPress={onPressButton} style={{ marginBottom: 20 }} />
                </ContentBody>
                <ContentFooter>
                    <ButtonSignUp>
                        <TitleButtonSignUp1>Não tem cadastro ainda?</TitleButtonSignUp1>
                        <TitleButtonSignUp2>Cadastre-se</TitleButtonSignUp2>
                    </ButtonSignUp>

                </ContentFooter>
            </Container>
        </SafeAreaView>
    );
};