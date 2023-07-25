import React, { useState } from "react";
import Icon from "@expo/vector-icons/Ionicons";
import { Container, InputContainer } from "./styles";
import { useTheme } from "styled-components";
import { TextInputProps, TouchableOpacity } from "react-native";

interface InputProps {
    rightIcon?: boolean;
    leftIcon?: boolean;
    iconName: keyof typeof Icon.glyphMap;
    iconSize?: number;
    iconColor?: string;
    secureTextEntry?: boolean;
}

const Input: React.FC<InputProps & TextInputProps> = ({
    rightIcon,
    leftIcon,
    iconColor,
    iconName,
    iconSize,
    secureTextEntry,
    ...rest
}) => {
    const theme = useTheme();

    const [secury, setSecury] = useState(secureTextEntry)
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
            <InputContainer {...rest}
                secureTextEntry={secury}
                underlineColorAndroid={'transparent'}
                placeholderTextColor={theme?.COLORS.GRAY3}
            />
            <TouchableOpacity onPress={() => setSecury(!secury)}>
                {rightIcon && (
                    <Icon
                        name={secury ? 'eye' : 'eye-off'}
                        size={iconSize}
                        color={iconColor || theme?.COLORS.TEXTDARK}
                        style={{ padding: 5 }}
                    />
                )}
            </TouchableOpacity>
        </Container>
    );
};

export default Input;
