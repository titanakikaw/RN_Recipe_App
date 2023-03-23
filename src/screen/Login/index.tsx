import {
  SafeAreaView,
  TouchableHighlight,
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Input from '../../component/Input';
import styles from './styles';
import MessageIcon from '../../../assets/icons/Message.svg';
import LockIcon from '../../../assets/icons/Lock.svg';
import GoogleIcon from '../../../assets/icons/Vector.svg';
import CustomButton from '../../component/Button';
import {Formik, Field} from 'formik';

const Login = ({navigation}) => {
  const passwordRef = useRef();

  return (
    <KeyboardAvoidingView style={styles.mainWrapper}>
      <View style={styles.headerWrapper}>
        <Text style={styles.loginText}>Welcome Back!</Text>
        <Text>Please enter your account here</Text>
      </View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
          navigation.push('OTP');
        }}>
        {({handleSubmit}) => (
          <>
            <View style={styles.wrapper}>
              <Field
                component={Input}
                name="email"
                suffixIcon={MessageIcon}
                placeholder="Email or phone number"
                keyboardType="email-address"
                autoCapitalize="none"
                inputMode="email"
                autoComplete="email"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordRef.current.focus();
                }}
              />
              <Field
                innerRef={passwordRef}
                component={Input}
                name="password"
                suffixIcon={LockIcon}
                placeholder="Password"
                secureTextEntry={true}
                autoComplete="current-password"
                returnKeyType="done"
                onSubmitEditing={handleSubmit}
              />

              <TouchableHighlight
                underlayColor="#ccc"
                style={styles.linkWrapper}>
                <Text>Forgot Password</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.actionWrapper}>
              <CustomButton btnText="Login" onPress={handleSubmit} />
              <Text style={{textAlign: 'center'}}>or Continue with</Text>
              <CustomButton
                btnIcon={GoogleIcon}
                btnText={'Google'}
                transparent={true}
              />
            </View>
          </>
        )}
      </Formik>
      <View>
        <Text
          style={{textAlign: 'center', fontWeight: '500'}}
          onPress={() => navigation.navigate('Register')}>
          Dont have a account?
          <Text style={{color: '#1FCC79', fontWeight: '600'}}>Sign up</Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
