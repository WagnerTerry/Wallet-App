import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Container, InputContainer } from "./styles";
import { useTheme } from "styled-components";

interface InputProps {
    rightIcon?: boolean;
    leftIcon?: boolean;
}

const Input: React.FC<InputProps> = ({ rightIcon, leftIcon }) => {
    const theme = useTheme();
    return (
        <Container>
            {leftIcon && (
                <Ionicons
                    name="mail-outline"
                    size={20}
                    color={theme?.COLORS.TEXTDARK}
                    style={{ padding: 5, marginLeft: 10 }}
                />
            )}
            <InputContainer />
            {rightIcon && (
                <Ionicons
                    name="lock-closed-outline"
                    size={20}
                    color={theme?.COLORS.TEXTDARK}
                    style={{ padding: 5, marginRight: 10 }}
                />
            )}
        </Container>
    );
};

export default Input;
