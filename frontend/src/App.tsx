import FormRegister from "./Hooks/HookRegister";
import LoginUsers from "./Hooks/HookLogin";
const App: React.FC<JSX.Element>= () => {
 

  return (
    <div>
      <LoginUsers />
      <FormRegister />
    </div>
    
  );
};

export default App;
