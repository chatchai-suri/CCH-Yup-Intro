import LoginForm from "./components/LoginForm";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center pt-2 space-y-2">
      {/* <LoginForm /> */}
      <Signup />
    </div>
  );
}

export default App;
