import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Pressable } from "react-native";

export const Container = styled.View`
    height: 100%;
    padding: ${RFValue(20)}px;
`;
export const ContentHeader = styled.View`
    align-items: center;
    justify-content: center;
    padding: ${RFValue(20)}px;
`;
export const ContentBody = styled.View``;

export const ContentFooter = styled.View`
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30px;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: ${RFValue(25)}px;
    margin-top: ${RFValue(40)}px;
`;
export const Description = styled.Text`
    margin-top: ${RFValue(60)}px;
    font-size: ${RFValue(15)}px;
    margin-bottom: ${RFValue(10)}px;
`;
export const ViewButton = styled.View`
    flex-direction: row;
`;

export const ButtonSignUp = styled(Pressable)`
    align-items: center;
    flex-direction: row;
    justify-content: center;
`;

export const TitleButtonSignUp1 = styled.Text`
    font-size: 14px;
    color: gray;
`;

export const TitleButtonSignUp2 = styled.Text`
    font-size: 17px;
    margin-left: 10px;
    color: blue;
`;