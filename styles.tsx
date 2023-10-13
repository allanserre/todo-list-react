
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal : 10,
    flex: 1,
  },
   titleText: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    taskItemContainer: {
    padding : 10,
    marginVertical : 4,
        backgroundColor : "white",
        shadowColor: 'black',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
         borderRadius : 10
    }
});
