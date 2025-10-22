import IconButton from @/app/models/Taskents/iconButton";
import TaskModel from "@/models/Task";
import Ionicons from "@expo/vector-icons/Ionicons";
import ModalContainer from "../components/modalContainer";

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
      <IconButton
        marginTop={0}
        title="Priority level 1"
        buttonPress={() => {
          changePriorityLevel(1);
        }}
      >
        <Ionicons name="flag-sharp" color={"black"} size={26} />
      </IconButton>
      <IconButton
        marginTop={10}
        buttonPress={() => {
          changePriorityLevel(2);
        }}
        title="Priority level 2"
      >
        <Ionicons name="flag-sharp" color={"black"} size={26} />
      </IconButton>
      <IconButton
        marginTop={10}
        title="Priority level 3"
        buttonPress={() => {
          changePriorityLevel(3);
        }}
      >
        <Ionicons name="flag-sharp" color={"black"} size={26} />
      </IconButton>
      <IconButton
        marginTop={10}
        buttonPress={() => {
          changePriorityLevel(4);
        }}
        title="Priority level 4"
      >
        <Ionicons name="flag-sharp" color={"black"} size={26} />
      </IconButton>
    </ModalContainer>
  );
};

export default CreatePrioModal;
