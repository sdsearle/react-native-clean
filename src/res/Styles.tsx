import {StyleSheet, processColor, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {dimenen, fontSize} from './dimen';

export const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: dimenen.xxl,
    paddingHorizontal: dimenen.xl,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  sectionDescription: {
    marginTop: dimenen.xs,
    fontSize: fontSize.l,
    fontWeight: '400',
    color: '#000',
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
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export function IsDarkMode() {
  return useColorScheme() === 'dark';
}

export const backgroundStyle = {
  backgroundColor: IsDarkMode() ? Colors.darker : Colors.lighter,
};

export function getTextColor(value: string): string {
  value = value.replace('#', '');
  const numericValue = parseInt(value, 16);
  const r = (numericValue & 0xff0000) >> 16;
  const g = (numericValue & 0xff00) >> 8;
  const b = numericValue & 0xff;
  const l = (0.2126 * r) / 255 + (0.7152 * g) / 255 + (0.0722 * b) / 255;
  return l > Math.sqrt(1.05 * 0.05) - 0.05 ? '#000' : '#FFF';
}
