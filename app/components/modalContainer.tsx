import { ReactNode, useContext } from "react";
import { UserContext } from "../context/UserContext";
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

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
      borderRadius: 25,
      borderWidth: 10,
      borderColor: "rgba(255, 255, 255, .5)",
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
            <View style={styles.modalContainer}>{children}</View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalContainer;
