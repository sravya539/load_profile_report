import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SelectTextFields from './LoadProfileReportpage/LoadProfileReport';
import SubmitAppScreen from './LoadProfileReportpage/SubmitAppScreen';
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<SelectTextFields />} />
        <Route exact path="/chart" element={<SubmitAppScreen />} />
      </Routes>
    </>
  );
}

export default App;