import {StyleSheet, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {dimenen, fontSize} from './dimen';

export const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: dimenen.xxl,
    paddingHorizontal: dimenen.xl,
  },
  sectionTitle: {
    fontSize: dimenen.xl,
    fontWeight: '600',
    color: '#000',
  },
  sectionDescription: {
    marginTop: dimenen.xs,
    fontSize: fontSize.l,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  fab: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 50,
    margin: dimenen.l,
    position: 'absolute',
    bottom: dimenen.xs,
    right: dimenen.xs,
  },
});

export function IsDarkMode() {
  return useColorScheme() === 'dark';
}

export const backgroundStyle = {
  backgroundColor: IsDarkMode() ? Colors.darker : Colors.lighter,
};
