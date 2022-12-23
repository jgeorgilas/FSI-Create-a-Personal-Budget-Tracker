let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

for (let i = 0; i < weeklyExpenseQuestions.length; i++){
    const stringAnswer = window.prompt(weeklyExpenseQuestions[i])
    const numberAnswer = parseFloat(stringAnswer)
    console.log("numberAnswer", numberAnswer, typeof numberAnswer)
    weeklyExpenses = weeklyExpenses + numberAnswer
    
  }
  for (let i = 0; i < monthlyExpenseQuestions.length; i++){
    const stringAnswer = window.prompt(monthlyExpenseQuestions[i])
    const numberAnswer = parseFloat(stringAnswer)
    console.log("numberAnswer", numberAnswer, typeof numberAnswer)
    monthlyExpenses = monthlyExpenses + numberAnswer
    
  }
  for (let i = 0; i < annualExpenseQuestions.length; i++){
    const stringAnswer = window.prompt(annualExpenseQuestions[i])
    const numberAnswer = parseFloat(stringAnswer)
    console.log("numberAnswer", numberAnswer, typeof numberAnswer)
    annualExpenses = annualExpenses + numberAnswer
    
  }