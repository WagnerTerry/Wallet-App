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
                        iconName="mail-outline"
                        iconColor={theme?.COLORS.TEXTDARK}
                        placeholder={"Digite seu e-mail"}
                    />
                    <Input
                        leftIcon
                        iconSize={25}
                        iconName="lock-closed-outline"
                        iconColor={theme?.COLORS.TEXTDARK}
                        placeholder="Digite sua senha"
                    />

                    <Button title="Entrar" variant="primary" onPress={onPressButton} style={{ marginBottom: 20 }} />
                </ContentBody>
                <ContentFooter></ContentFooter>
            </Container>
        </SafeAreaView>
    );
};