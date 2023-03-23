import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5BD0A',
    paddingVertical: 20,
    borderRadius: 999,
    flexDirection: 'row',
    gap: 8,
  },
  btnText: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
    color: '#fff',
    letterSpacing: 1.12,
  },
  btnTextTransparent: {
    // fontFamily: 'Inter',
    color: '#F5BD0A',
    textShadowColor: 'rgba(0, 0, 0, 0)',
    textShadowOffset: {width: 0, height: 0},
  },
  btnTransparent: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#F5BD0A',
  },
});

export default styles;
