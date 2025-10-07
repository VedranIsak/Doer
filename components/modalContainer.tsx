import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native";

interface ModalContainerProps {
  showModalContainer: boolean;
  setShowModalContainer: React.Dispatch<boolean>;
  children: ReactNode;
}

const styles = StyleSheet.create({
  modalBackdrop: { flex: 1, justifyContent: "center", alignItems: "center" },
  modalContainer: {
    height: "auto",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#470047",
    width: "90%",
    borderRadius: 15,
    padding: 15,
    overflow: "hidden",
  },
});

const ModalContainer = ({showModalContainer, setShowModalContainer, children}: ModalContainerProps) => (
  <Modal
    backdropColor={"rgba(0, 0, 0, .5)"}
    visible={showModalContainer}
    animationType="fade"
  >
    <TouchableWithoutFeedback onPress={() => setShowModalContainer(false)}>
      <View style={styles.modalBackdrop}>
        <TouchableWithoutFeedback>
          <View style={styles.modalContainer}>
            <LinearGradient
              colors={["rgba(255, 255, 255, 0.2)", "rgba(173, 61, 111, 0.6)"]}
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

export default ModalContainer;