import Checkbox from "expo-checkbox";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { DimensionValue, StyleSheet } from "react-native";

type Position = "absolute" | "relative" | "static" | "fixed" | "sticky";

interface CheckBoxProps {
  marginTop?: DimensionValue;
  marginRight?: DimensionValue;
  marginBottom?: DimensionValue;
  marginLeft?: DimensionValue;
  position?: Position;
  top?: DimensionValue;
  right?: DimensionValue;
  bottom?: DimensionValue;
  left?: DimensionValue;
  value: boolean;
  width: DimensionValue;
  height: DimensionValue;
  borderWidth: number | undefined;
  handleCheck: (checked: boolean) => void;
}

const CheckBox = ({
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  position,
  top,
  right,
  bottom,
  left,
  value,
  width,
  height,
  borderWidth,
  handleCheck,
}: CheckBoxProps) => {
  const { user } = useContext(UserContext);
  const styles = StyleSheet.create({
    checkbox: {
      marginTop: marginTop ?? 0,
      marginRight: marginRight ?? 0,
      marginLeft: marginLeft ?? 0,
      marginBottom: marginBottom ?? 0,
      position: position ?? "relative",
      top: top ?? 0,
      right: right ?? 0,
      left: left ?? 0,
      bottom: bottom ?? 0,
      height: width,
      width: height,
      borderWidth: borderWidth,
      borderRadius: 25,
      borderColor: user.settings.textColor as string
    },
  });

  return (
    <Checkbox
      style={styles.checkbox}
      value={value}
      onValueChange={(checked) => handleCheck(checked)}
    />
  );
};

export default CheckBox;
