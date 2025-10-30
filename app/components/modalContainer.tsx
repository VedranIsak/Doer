import { ReactNode, useContext } from "react";
import { UserContext } from "../context/UserContext";
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import IconButton from "./iconButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

interface ModalContainerProps {
  showModalContainer: boolean;
  setShowModalContainer: React.Dispatch<boolean>;
  children: ReactNode;
}

const ModalContainer = ({
  showModalContainer,
  setShowModalContainer,
  children,
}: ModalContainerProps) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;

  const styles = StyleSheet.create({
    modalBackdrop: { flex: 1, justifyContent: "center", alignItems: "center" },
    modalContainer: {
      height: "auto",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "90%",
      borderRadius: 25,
      overflow: "hidden",
      boxShadow: ".25px .25px 4px gray",
    },
    modalSubContainer: {
      marginTop: 7.5,
      padding: 10,
      height: "auto",
      width: "95%",
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, .3)",
      boxShadow: ".25px .25px 4px gray",
    },
  });

  return (
    <Modal
      backdropColor={"rgba(0, 0, 0, .75)"}
      visible={showModalContainer}
      animationType="fade"
    >
      <TouchableWithoutFeedback onPress={() => setShowModalContainer(false)}>
        <View style={styles.modalBackdrop}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              <LinearGradient
                colors={[
                  user.settings.primaryBackColor,
                  user.settings.secondaryBackColor,
                ]}
                style={StyleSheet.absoluteFillObject}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />

              <View style={styles.modalSubContainer}>{children}</View>
              <IconButton
                title="Close"
                marginBottom={15}
                marginTop={15}
                buttonPress={() => {
                  setShowModalContainer(false);
                }}
              >
                <Ionicons
                  name={"close-circle-sharp"}
                  color={"black"}
                  size={26}
                />
              </IconButton>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalContainer;
