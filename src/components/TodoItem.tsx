import { Animated, PanResponder, Text, View } from 'react-native';
import { styles } from '../styles'
import React, { Children, useRef } from 'react';
import { Todo, TodoState } from '../storage/DataStorage';


type TodoItemProps = {
  todo: Todo,
  title: string,
  leftSwipe?: (id: string) => void | undefined;
  rightSwipe?: (id: string) => void | undefined;
};

export const TodoItem = (props: TodoItemProps) => {

  const style = {
    backgroundColor: props.todo.state == TodoState.COMPLETED ? "orange" : "green"
  }
  const text = props.todo.state == TodoState.COMPLETED ? "PENDING" : "COMPLETE"

  return (
    <SwipeableItem id={props.todo.id} leftSwipe={props.leftSwipe} rightSwipe={props.rightSwipe}>
      <View style={styles.taskItemContainer}>
        <View style={[styles.left_box, style]}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
        <View>
          <Text style={styles.titleText}>{props.title}</Text>
        </View>
        <View style={styles.right_box}>
          <Text style={styles.buttonText}>DELETE</Text>
        </View>
      </View>
    </SwipeableItem>
  );
}

type SwipeableItemProps = {
  id: string,
  children?: React.ReactNode | undefined;
  leftSwipe?: (id: string) => void | undefined;
  rightSwipe?: (id: string) => void | undefined;
}

const SwipeableItem = (props: SwipeableItemProps) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const swipeHandler = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        let value = gestureState.dx
        if (Math.abs(gestureState.dx) > styles.left_box.width)
          if (gestureState.dx > 0)
            value = styles.left_box.width
          else
            value = -styles.left_box.width

        pan.x.setValue(value);
      },
      onPanResponderEnd(e, gestureState) {
        Animated.spring(
          pan,
          { toValue: { x: 0, y: 0 }, useNativeDriver: true }
        ).start();
      },
      onPanResponderRelease: (evt, gestureState) => {
        Animated.spring(
          pan,
          { toValue: { x: 0, y: 0 }, useNativeDriver: true }
        ).start();
        if (Math.abs(gestureState.dx) > styles.left_box.width) {
          if (gestureState.dx > 0) {
            if (props.leftSwipe)
              props.leftSwipe(props.id)
          }
          else {
            if (props.rightSwipe)
              props.rightSwipe(props.id)
          }
        }
      },
    })
  ).current;

  return (
    <Animated.View
      {...swipeHandler.panHandlers}
      style={{
        transform: [{ translateX: pan.x }],
      }}
    >
      {props.children}
    </Animated.View>)
}