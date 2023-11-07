import Expenses from "./components/Expenses/Expenses"
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {
  const expenses = [
    {
      id: 'e1', 
      title: 'Furiture', 
      amount: '94.08', 
      date: "2021-01-19T18:11:33.383Z",
    },
    {
      id: 'e2', 
      title: 'Paint', 
      amount: '87.08', 
      date: "2021-01-19T18:11:33.383Z",
    },
    {
      id: 'e3', 
      title: 'Wood',
      amount: '178.08', 
      date: "2021-01-19T18:11:33.383Z",
    },
  ];

  const addExpenseHndler = expense => {
    console.log('We are in app.js');
    console.log(expense);
  }

  return (
    <div>.
      <NewExpense onAddExpense={addExpenseHndler} />
      <Expenses items={expenses}/>
  
    </div>
  );
}

export default App;
