import MultiStepStudentForm from "../Components/MultiStepStudentForm";
import ApplicationClosed from "../Components/ApplicationClosed";
import { usePageTitle } from "../hooks/usePageTitle";

const CreateAccount = () => {
  usePageTitle("Registeration");

  // TODO: Move this to a config or API call later
  const isApplicationOpen = true;

  return (
    <div className="min-h-screen w-full bg-bglight flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        {isApplicationOpen ? <MultiStepStudentForm /> : <ApplicationClosed />}
      </div>
    </div>
  );
};

export default CreateAccount;
