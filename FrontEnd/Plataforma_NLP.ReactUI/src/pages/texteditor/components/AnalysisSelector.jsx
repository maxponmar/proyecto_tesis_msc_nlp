import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { analyseOptionParameters } from './Options';

export default function AnalysisSelector({ selectedOption, setSelectedOption }) {
  const handleChange = (event) => {
    setSelectedOption(analyseOptionParameters.find((x) => x.section === event.target.value));
  };

  return (
    <div className="w-2/3">
      <p className="my-4">Por favor, elija que evaluará:</p>
      <FormControl fullWidth>
        <InputLabel>Análisis</InputLabel>
        <Select value={selectedOption.section ?? '0'} label="Análisis" onChange={handleChange}>
          {analyseOptionParameters.map((item, index) => (
            <MenuItem value={item.section} key={index}>
              {item.section}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
