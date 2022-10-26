import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 10, 27);
  const expenseTitle = "Car insurance";
  const expenseAmount = 2994.67;

  return (
    <div className="expense-item">
      <h1>Heading</h1>
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
