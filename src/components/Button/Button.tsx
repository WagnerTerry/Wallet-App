import React from "react";
import { Container, Title, Content } from "./styles";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { variants } from "./Variante";
import { useTheme } from "styled-components";
interface IButtonProps {
    title: string;
    onPress: () => void;
    iconName?: keyof typeof AntDesign.glyphMap;
    isLoading?: boolean;
    disabled?: boolean;
    variant?: 'primary' | 'outline' | 'black';
    style?: TouchableOpacityProps['style']
}

export const Button: React.FC<IButtonProps> = ({
    title,
    onPress = () => { },
    isLoading,
    iconName,
    disabled,
    variant = 'primary',
    style
}) => {
    const theme = useTheme()
    const buttonVariant = variants[variant]
    const buttonStyle = disabled ? buttonVariant.disabled : buttonVariant.enabled

    return (
        <Container
            onPress={onPress}
            disabled={isLoading || disabled}
            style={[buttonStyle.button, style]}
        >
            {isLoading ? (
                <ActivityIndicator color={theme?.COLORS.GRAY1} />
            ) : (

                <Content>
                    {iconName && (
                        <AntDesign
                            size={25}
                            name={iconName}
                            color={buttonStyle.icon.color}
                            style={{
                                marginRight: 15
                            }}
                        />
                    )}
                </Content>
            )
            }
            <Title>{title}</Title>
        </Container>
    );
};

export default Button;
