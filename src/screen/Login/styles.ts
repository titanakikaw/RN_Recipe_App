import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'center',
    margin: 10,
  },
  headerWrapper: {
    paddingTop: 150,
    alignItems: 'center',
  },
  linkWrapper: {
    alignItems: 'flex-end',
  },
  actionWrapper: {
    textAlign: 'center',
    gap: 10,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 30,
    textTransform: 'uppercase',
    fontFamily: 'Inter',
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3E5481',
  },
  wrapper: {
    gap: 10,
    // margin: 10,
  },
});

export default styles;
