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
    value: string;
}

interface InputProps extends TextInputProps {
    name: string;
    value?: string;
    iconName?: React.ComponentProps<typeof Ionicons>["name"];
    containerStyle?: { [key: string]: string | number };
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
    { iconName, name, value, containerStyle, ...rest },
    ref
) => {
    const theme = useTheme();
    const inputElementRef = useRef<any>(null);

    const [hasErrors, setHasErrors] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const {
        registerField,
        fieldName,
        defaultValue = "",
        error,
    } = useField(name);

    const InputValueRef = useRef<InputValueReference>({ value: defaultValue });

    useEffect(() => {
        setHasErrors(!!error);
    }, [error]);

    const handleFocus = useCallback(() => {
        setIsFocused(true);
        setHasErrors(false);
    }, []);

    const handleBlur = useCallback(() => {
        setIsFocused(true);
        setIsFilled(!!InputValueRef.current.value);
    }, []);

    useImperativeHandle(ref, () => ({
        focus() {
            inputElementRef.current.focus();
        },
    }));

    useEffect(() => {
        registerField<string>({
            name: fieldName,
            ref: inputElementRef.current,
            path: "value",
            setValue(_, value) {
                InputValueRef.current.value = value;
                inputElementRef.current.setNativeProps({ text: value });
            },
            clearValue() {
                InputValueRef.current.value = "";
                inputElementRef.current.clear();
            },
        });
    }, [registerField, fieldName]);

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
                        : theme?.COLORS.GRAY1
                }
            />

            <InputText
                ref={inputElementRef}
                onFocus={handleFocus}
                onBlur={handleBlur}
                isFocused={isFocused}
                isFilled={isFilled}
                hasError={hasErrors}
                defaultValue={defaultValue}
                placeholder={theme?.COLORS.GRAY1}
                onChangeText={(value) => {
                    InputValueRef.current.value = value;
                }}
                {...rest}
            />
        </Container>
    );
};

export { Input };
