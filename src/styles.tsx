
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 10,
    flex: 1,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    borderRadius: 10,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  taskItemContainer: {
    padding: 10,
    marginVertical: 4,
    backgroundColor: "white",
    elevation: 2,
    borderRadius: 10
  },
  button: {
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "white"
  }
});

