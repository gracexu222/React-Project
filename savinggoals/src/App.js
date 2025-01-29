import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SavingGoals />
    </div>
  );
}

function SavingGoals() {
  const [inputSaving, setInputSaving] = useState("");
  const [monthlySaving, setMonthlySaving] = useState("");
  const [monthly, setMonthly] = useState("");

  const totalSaving = monthlySaving * monthly;

  function handleClean() {
    setInputSaving(" ");
    setMonthlySaving("");
    setMonthly("");
  }

  return (
    <div className="SavingGoals">
      <h2>Savings Goal App</h2>
      <GoalInput inputsaving={inputSaving} setinputsaving={setInputSaving} />
      <MonthlySavingInput
        monthlysaving={monthlySaving}
        setmonthlysaving={setMonthlySaving}
      />
      <DeadlineInput month={monthly} onselet={setMonthly} />
      {monthlySaving && monthly && (
        <ProgressBar month={monthly} total={totalSaving} />
      )}
      <ResultDisplay />
      <Reset handleclean={handleClean} />
    </div>
  );
}

function GoalInput({ inputsaving, setinputsaving }) {
  return (
    <div className="GoalInput">
      <h3>Saving Goals($)</h3>
      <input
        type="text"
        placeholder="Enter the saving goal"
        value={inputsaving}
        onChange={(e) => setinputsaving(Number(e.target.value))}
      />
    </div>
  );
}

function MonthlySavingInput({ monthlysaving, setmonthlysaving }) {
  return (
    <div className="MonthlySavingInput">
      <h3>Monthly Saving($)</h3>
      <input
        type="text"
        placeholder="Enter Monthly savings"
        value={monthlysaving}
        onChange={(e) => setmonthlysaving(Number(e.target.value))}
      />
    </div>
  );
}

function DeadlineInput({ month, onselet }) {
  return (
    <div className="DeadlineInput">
      <label>Deadline (months):</label>
      <div>
        <select value={month} onChange={(e) => onselet(e.target.value)}>
          <option value=" ">Select months</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} month{1 > 0 ? "s" : ""}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
function ProgressBar({ total, month }) {
  return (
    <div className="ProgressBar">
      <h2>
        You are on track! you will save ${total.toFixed(2)} in {month} month
        {month > 1 ? "s" : ""}!!
      </h2>
    </div>
  );
}

function Reset({ handleclean }) {
  return <button onClick={handleclean}>Reset</button>;
}

export default App;
