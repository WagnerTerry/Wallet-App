import React, {
    forwardRef,
    useCallback,
    useState,
    useImperativeHandle,
    useRef,
    useEffect,
} from "react";
import { Text, TextInputProps } from "react-native";
import { useField } from "@unform/core";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { Container, IconContainer, InputText } from "./styles";

interface InputRef {
    focus(): void;
}

interface InputValueReference {
    Value: string;
}

interface InputProps extends TextInputProps {
    name: string;
    value?: string;
    iconName?: React.ComponentProps<typeof Ionicons>["name"];
    containerStyle?: { [key: string]: string | number };
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = ({
    iconName,
    name,
    value,
    containerStyle,
    ...rest
}) => {
    const theme = useTheme();

    const [hasErrors, setHasErrors] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    return (
        <Container style={containerStyle}>
            <IconContainer
                isFocused={isFocused}
                isFilled={isFilled}
                hasError={hasErrors}
            />
            <Ionicons
                name={iconName}
                size={25}
                color={
                    isFocused || hasErrors || isFilled
                        ? theme?.COLORS.BLUE1
                        : theme?.COLORS.GRAY5
                }
            />

            <InputText
                isFocused={isFocused}
                isFilled={isFilled}
                hasError={hasErrors}
            />
        </Container>
    );
};

export { Input };
