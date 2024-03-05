import {StyleSheet, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
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
    margin: 20,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export function IsDarkMode() {
  return useColorScheme() === 'dark';
}

export const backgroundStyle = {
  backgroundColor: IsDarkMode() ? Colors.darker : Colors.lighter,
};
