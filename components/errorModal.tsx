import Paragraph from "@/components/paragraph";
import ModalContainer from "./modalContainer";

interface ErrorProps {
  showErrorModal: boolean;
  setShowErrorModal: React.Dispatch<boolean>;
  errorMessage: string;
}

const ErrorModal = ({
  showErrorModal,
  setShowErrorModal,
  errorMessage,
}: ErrorProps) => (
  <ModalContainer
    showModalContainer={showErrorModal}
    setShowModalContainer={setShowErrorModal}
  >
    <Paragraph color={"white"} fontSize={22}>
      Error!
    </Paragraph>
    <Paragraph color="white" fontSize={18}>
      {errorMessage}
    </Paragraph>
  </ModalContainer>
);

export default ErrorModal;
