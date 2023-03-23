import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  svg: {
    position: 'absolute',
    left: 24,
  },
  endsvg: {
    position: 'absolute',
    right: 24,
  },
  success: {
    borderWidth: 2,
    borderColor: '#24D37F',
  },
  warning: {
    borderWidth: 2,
    borderColor: '#F5BD0A',
  },
  error: {
    borderWidth: 2,
    borderColor: '#E20012',
  },
  input: {
    borderWidth: 0.5,
    borderColor: '#D0DBEA',
    paddingVertical: 20,
    paddingLeft: 58,
    paddingRight: 20,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    borderRadius: 999,
    margin: 0,
    // lineHeight: 18;
    // letterSpacing: 0.007em;
  },
  singleCode: {
    paddingLeft: 25,
    paddingRight: 25,
    borderWidth: 0.5,
    borderColor: '#D0DBEA',
    borderRadius: 20,
    paddingVertical: 15,
    // paddingHorizontal: 25,
    textAlign: 'center',
    fontSize: 34,
    fontWeight: '600',
    color: '#3E5481',
  },
});

export default styles;
