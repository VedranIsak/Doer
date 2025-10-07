import TaskModel from "@/models/Task";
import Button from "../../components/button";
import ModalContainer from "../../components/modalContainer";

interface CreatePrioModalProps {
  showCreatePrioModal: boolean;
  setShowCreatePrioModal: React.Dispatch<boolean>;
  setNewTask: React.Dispatch<React.SetStateAction<TaskModel>>;
}

const CreatePrioModal = ({
  showCreatePrioModal: showPrioModal,
  setShowCreatePrioModal: setShowPrioModal,
  setNewTask,
}: CreatePrioModalProps) => {
  const changePriorityLevel = (newLevel: number) => {
    setNewTask((previous) => previous.cloneWith({ priorityLevel: newLevel }));
    setShowPrioModal(false);
  };
  return (
    <ModalContainer
      showModalContainer={showPrioModal}
      setShowModalContainer={setShowPrioModal}
    >
      <Button
        marginTop={0}
        width={200}
        buttonPress={() => {
          changePriorityLevel(1);
        }}
      >
        Priority level 1
      </Button>
      <Button
        marginTop={10}
        width={200}
        buttonPress={() => {
          changePriorityLevel(2);
        }}
      >
        Priority level 2
      </Button>
      <Button
        marginTop={10}
        width={200}
        buttonPress={() => {
          changePriorityLevel(3);
        }}
      >
        Priority level 3
      </Button>
      <Button
        marginTop={10}
        width={200}
        buttonPress={() => {
          changePriorityLevel(4);
        }}
      >
        Priority level 4
      </Button>
    </ModalContainer>
  );
};

export default CreatePrioModal;
