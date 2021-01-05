import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';

import {Container, ButtonText} from './style';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const ButtonRed: React.FC<ButtonProps> = ({children, ...rest}) => (
  <Container {...rest}>
    <ButtonText>{children}</ButtonText>
  </Container>
);
export default ButtonRed;
