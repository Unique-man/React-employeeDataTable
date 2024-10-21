import './App.css';
const employeeData = [
  { id: 1, name: "raju", location: "Hyderabad", salary: 100000 },
  { id: 2, name: "mahesh", location: "chennai", salary: 75000 },
  { id: 3, name: "paramesh", location: "Bangalore", salary: 50000 },
  { id: 4, name: "nithin", location: "Mumbai", salary: 25000 },
  { id: 5, name: "kumar", location: "Anantapur", salary: 32000 },
  { id: 6, name: "karan", location: "Gooty", salary: 50000 },
  { id: 7, name: "shanker", location: "Bangalore", salary: 45000 }
];

function App() {
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Location</th>
          <th>Salary</th>
        </tr>
        {employeeData.map((data) => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.location}</td>
            <td>{data.salary}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default App;













 


