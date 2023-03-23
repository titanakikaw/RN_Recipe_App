import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {SVGProps} from 'react';
import {SvgProps} from 'react-native-svg';
import styles from './style';
import {PressableProps} from 'react-native/Libraries/Components/Pressable/Pressable';

type Props = {
  variant?: 'success' | 'warning' | 'error' | 'singleCode';
  suffixIcon?: React.FC<SvgProps>;
  endIcon?: React.FC<SvgProps>;
} & PressableProps;

const Input = ({
  field: {name, value},
  form: {touched, errors, setFieldValue, setFieldTouched}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  innerRef,
  variant,
  suffixIcon: SuffixIcon,
  endIcon: EndIcon,
  ...props
}: Props) => {
  const inputStyle = [styles.input];
  if (variant) {
    inputStyle.push(styles[variant]);
  }

  return (
    <>
      <View style={styles.inputWrapper}>
        {SuffixIcon && <SuffixIcon height={24} width={24} style={styles.svg} />}
        <TextInput
          ref={innerRef}
          value={value}
          style={inputStyle}
          {...props}
          onChangeText={text => setFieldValue(name, text)}
          onBlur={() => setFieldTouched(name, true)}
        />
        {EndIcon && <EndIcon height={24} width={24} style={styles.endsvg} />}
      </View>
      {touched[name] && errors[name] && <Text>{errors[name]}</Text>}
    </>
  );
};

export default Input;
