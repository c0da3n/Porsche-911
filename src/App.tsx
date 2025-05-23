import Header from "./components/Header";
import Background from "./assets/Background.png";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <img
        src={Background}
        alt="BackgroundImage"
        className="flex flex-1 max-w-full object-cover"
      />
    </div>
  );
};

export default App;
