export default function getBudgetObject(income = 400, gdp = 400, capita = 400) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}
