
function Name(param) {
  return <h1> Hello, {param}</h1>
}
function App() {
  return (
    <div className="App">
      {Name('Sara')}
    </div>

  );
}

export default App;
