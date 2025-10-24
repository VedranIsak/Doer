import { ReactNode, useContext } from "react";
import { UserContext } from "../context/UserContext";
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
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
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: user.settings.primaryBackColor,
      width: "90%",
      borderRadius: 15,
      borderWidth: 4,
      borderColor: "rgba(255, 255, 255, .75)",
      padding: 15,
      overflow: "hidden",
    },
  });

  return (
    <Modal
      backdropColor={"rgba(0, 0, 0, .25)"}
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

              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalContainer;
