import { Select } from './Select';

const options = [
  { label: 'First', value: 1 },
  { label: 'Second', value: 2 },
  { label: 'Third', value: 3 },
  { label: 'Fourth', value: 4 },
  { label: 'Fifth', value: 5 },
];

function App() {
  return (
    <>
      {/* <Select options={options} value={label:"fd",value:""} onChange={() => {}} /> */}
      <Select options={options} onChange={() => {}} />
    </>
  );
}

export default App;
