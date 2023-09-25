export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees);
  const departments = [].concat.apply([], employees);
    
  return departments;
}
