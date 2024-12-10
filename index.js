function evaluatePerformance(employees) {
    // Step 1: Filter employees who completed more than 5 tasks
    const filteredEmployees = employees.filter(employee => employee.tasksCompleted > 5);
  
    // Step 2: Map to a new array containing name and performance level
    const performanceArray = filteredEmployees.map(employee => {
      let performance = "";
      if (employee.rating > 4.5) {
        performance = "Excellent";
      } else if (employee.rating >= 3 && employee.rating <= 4.5) {
        performance = "Good";
      } else {
        performance = "Needs Improvement";
      }
      return { name: employee.name, performance };
    });
  
    // Step 3: Sort the array by performance level in descending order
    const sortedArray = performanceArray
      .filter(employee => employee.performance !== "Needs Improvement") // Remove employees with "Needs Improvement"
      .sort((a, b) => {
        const performanceOrder = { "Excellent": 3, "Good": 2, "Needs Improvement": 1 };
        return performanceOrder[b.performance] - performanceOrder[a.performance];
      });
  
    // Step 4: Return the final sorted array
    return sortedArray;
  }
  
  // Example Input
  const employees = [
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
  ];
  
  // Function Call
  const result = evaluatePerformance(employees);
  
  // Output the result
  console.log(result);
  