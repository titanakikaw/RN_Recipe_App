import {Text, View, KeyboardAvoidingView} from 'react-native';
import React, {useRef, RefObject, useEffect} from 'react';
import styles from './styles';

import MessageIcon from '../../../assets/icons/Message.svg';
import LockIcon from '../../../assets/icons/Lock.svg';
import CheckCircleIcon from '../../../assets/icons/CheckCircle.svg';
import UnCheckCircleIcon from '../../../assets/icons/UnCheckCircle.svg';
import {Formik, Field} from 'formik';

import {connect, useDispatch} from 'react-redux';
import Input from '../../component/Input';
import CustomButton from '../../component/Button';
import {registerUser} from '../../../actions/authActions';
import {AppDispatch} from '../../../store';
// import {loginUser, registerUser} from '../../../actions/authActions';
// import {AppDispatch} from '../../../store/store';

type Props = {
  navigation: any;
  Auth: Object;
};

interface PasswordRef {
  focus: () => void;
}

const Register = ({navigation, Auth}: Props) => {
  const passwordRef: RefObject<PasswordRef> = useRef<PasswordRef>(null);

  useEffect(() => {
    // console.log(Auth);
  }, [Auth]);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <KeyboardAvoidingView style={styles.mainWrapper}>
      <View style={styles.headerWrapper}>
        <Text style={styles.loginText}>Welcome</Text>
        <Text>Please enter your account here</Text>
      </View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={async (values, actions) => {
          if (values.email != '' && values.password != '') {
            dispatch(registerUser(values));
          } else {
            throw new Error('Please fill out all fields');
          }
        }}>
        {({handleSubmit, values}) => (
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
                validate={(value: any) => {
                  if (!value) {
                    return 'Required';
                  }
                }}
                onSubmitEditing={() => {
                  if (passwordRef.current) {
                    passwordRef.current.focus();
                  }
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
                validate={(value: any) => {
                  if (!value) {
                    return 'Required';
                  }

                  return '';
                }}
                onSubmitEditing={handleSubmit}
              />
            </View>
            <View style={{gap: 10}}>
              <Text style={{color: '#3E5481', fontSize: 17, fontWeight: '600'}}>
                Your Password must contain:
              </Text>
              <View style={{flexDirection: 'row', gap: 10}}>
                {values.password.length > 6 ? (
                  <CheckCircleIcon height={24} width={24} />
                ) : (
                  <UnCheckCircleIcon height={24} width={24} />
                )}

                <Text>Atleast 6 characters</Text>
              </View>
              <View style={{flexDirection: 'row', gap: 10}}>
                {/\d+/.test(values.password) ? (
                  <CheckCircleIcon height={24} width={24} />
                ) : (
                  <UnCheckCircleIcon height={24} width={24} />
                )}
                <Text>Contains a number</Text>
              </View>
            </View>

            <View style={styles.actionWrapper}>
              <CustomButton btnText="Sign up" onPress={handleSubmit} />
            </View>
          </>
        )}
      </Formik>
      <View>
        <Text
          style={{textAlign: 'center', fontWeight: '500'}}
          onPress={() => navigation.navigate('Login')}>
          Already have a account?
          <Text style={{color: '#1FCC79', fontWeight: '600'}}> Sign in</Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = ({Auth}: any) => ({
  Auth,
});

export default Register;
