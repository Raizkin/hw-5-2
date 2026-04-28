import Greeting from "./components/Greeting";
import Message from "./components/Message";
import Button from "./components/Button";

function App() {
  const handleClick = () => {
    console.log("Кнопку натиснуто!");
  };

  return (
    <div>
      <Greeting name="Іван" />

      <Message text="Це моє перше React-завдання!" />

      <Button onClick={handleClick} />
    </div>
  );
}

export default App;