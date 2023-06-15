import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { Fontisto } from "@expo/vector-icons";

export const Button = styled(RectButton)`
    align-items: center;
    flex-direction: row;
    margin-bottom: 16px;
    justify-content: center;
    width: ${RFValue(130)}px;
    height: ${RFValue(60)}px;
    margin-left: ${RFValue(10)}px;
    border-radius: ${RFValue(5)}px;
    box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);
    background-color: #4368c7;
`;

export const IconFacebook = styled(Fontisto)`
    font-size: ${RFValue(25)}px;
    color: #fff;
`;

export const Title = styled.Text`
    font-size: ${RFValue(17)}px;
    color: #fff;
    margin-left: ${RFValue(10)}px;
`;
