import {
  Button,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {PropsWithChildren} from 'react';
import styles from './styles';

type Props = {
  btnIcon?: React.FC<SvgProps>;
  btnText: String;
  transparent?: Boolean;
} & PressableProps;

const CustomButton = ({
  btnIcon: Icon,
  transparent,
  btnText,
  ...props
}: Props) => {
  const btnStyles = [styles.btn];

  if (transparent) {
    btnStyles.push(styles.btnTransparent);
  }
  return (
    <Pressable style={btnStyles} {...props}>
      {Icon && <Icon height={20} width={20} stroke="#F5BD0A" />}
      <Text style={[styles.btnText, transparent && styles.btnTextTransparent]}>
        {btnText}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
