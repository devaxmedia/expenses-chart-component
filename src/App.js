import { useEffect, useState, createContext } from "react";

import ExpenseComponent from "./components/ExpenseComponent/Expense";

export const SpendingContext = createContext();

function App(props) {
  const [spendData, setSpendData] = useState([]);

  useEffect(() => {
    fecthData();
  }, []);

  async function fecthData() {
    await fetch("./datas/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((myJson) => setSpendData(myJson))
      .catch((err) => console.error(err.message));
  }

  return (
    <SpendingContext.Provider value={spendData}>
      <ExpenseComponent spendData={props.spendData} />
    </SpendingContext.Provider>
  );
}

export default App;
