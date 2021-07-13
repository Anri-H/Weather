import Weather from "./components/weather";

function App() {
  return (
    <div className="App">
      <h1>Weather of this week</h1>
      <div className="week">
        <Weather />
      </div>
    </div>
  );
}

export default App;
