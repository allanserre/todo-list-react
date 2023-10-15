
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  titleList: {
    margin: 10
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
    height: 60,
    display: "flex",
    justifyContent: "center",
    marginVertical: 1,
    backgroundColor: "white",
    elevation: 2,
  },
  left_box: {
    position: "absolute",
    width: 100,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    left: -100,
  },
  right_box: {
    position: "absolute",
    width: 100,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    right: -100
  },
  button: {
    marginTop: 5,
    marginHorizontal: 10,
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

