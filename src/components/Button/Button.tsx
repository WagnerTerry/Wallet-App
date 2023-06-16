import React from "react";
import { Container, Title } from "./styles";
import { Text } from "react-native";

interface IButtonProps {
    title: string;
    onPress: () => void;
}

export const Button = ({ title, onPress = () => {} }: IButtonProps) => {
    return (
        <Container>
            <Title>{title}</Title>
        </Container>
    );
};

export default Button;
