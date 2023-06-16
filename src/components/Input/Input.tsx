import React from "react";
import Icon from "@expo/vector-icons/Ionicons";
import { Container, InputContainer } from "./styles";
import { useTheme } from "styled-components";
import { TextInputProps } from "react-native";

interface InputProps {
    rightIcon?: boolean;
    leftIcon?: boolean;
    iconName: keyof typeof Icon.glyphMap;
    iconSize?: number;
    iconColor?: string;
}

const Input: React.FC<InputProps & TextInputProps> = ({
    rightIcon,
    leftIcon,
    iconColor,
    iconName,
    iconSize,
    ...rest
}) => {
    const theme = useTheme();
    return (
        <Container>
            {leftIcon && (
                <Icon
                    name={iconName}
                    size={iconSize}
                    color={iconColor || theme?.COLORS.TEXTDARK}
                    style={{ padding: 5 }}
                />
            )}
            <InputContainer {...rest} />
            {rightIcon && (
                <Icon
                    name={iconName}
                    size={iconSize}
                    color={iconColor || theme?.COLORS.TEXTDARK}
                    style={{ padding: 5 }}
                />
            )}
        </Container>
    );
};

export default Input;
