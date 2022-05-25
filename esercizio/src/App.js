
function sum(param1, param2) {
  return <h2> {param1 + param2}</h2>
}
function App() {
  return (
    <div className="App">
      {sum(4, 8)}
    </div>

  );
}

export default App;
