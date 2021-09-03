import React from "react";
import { Image, StyleSheet } from "react-native";



const AVARAR_SIDE = 50;

const styles = StyleSheet.create({
  avatarImage: {
    width: AVARAR_SIDE,
    height: AVARAR_SIDE,
  },
});

const GitAvatar = ({ uri }) => {
  return (
    <Image
      source={{"uri": uri}}
      style={styles.avatarImage} />
  );
};

export default GitAvatar;
