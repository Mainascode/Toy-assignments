function calculateNetSalary(basicSalary, benefits) {
  
  const taxRate = ""
  const nhifRate = ""
  const nssfRate = ""
  const levyRate = ""
  const fringeRate = ""

  
  const grossSalary = basicSalary + benefits;

  
  const tax = grossSalary * taxRate;
  const nhif = grossSalary * nhifRate;
  const nssf = grossSalary * nssfRate;
  const levy = grossSalary * levyRate;
  const fringe = grossSalary * fringeRate;

  
  const netSalary = grossSalary - (tax + nhif + nssf + levy + fringe) ;

  return {
    grossSalary,
    tax,
    nhif,
    nssf,
    levy,
    fringe,
    netSalary
  };
}


const basicSalary = ""; 
const benefits =""; 
const result = calculateNetSalary(basicSalary, benefits);
console.log("Net Salary Calculation Results:");
console.log("Gross Salary:", result.grossSalary);
console.log("Tax:", result.tax);
console.log("NHIF Deductions:", result.nhif);
console.log("NSSF Deductions:", result.nssf);
console.log("Net Salary:", result.netSalary);


  