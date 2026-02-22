import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import randomWords from "random-spanish-words";
import { useEffect } from "react";
import { analyseOptionParameters } from "../functions/Options";

function generarNumeroAleatorioDeCuatroDigitos() {
  var numero = Math.floor(Math.random() * 9000) + 1000; // Genera un número aleatorio entre 1000 y 9999
  return numero;
}

export default function AnalysisSelector({
  selectedOption,
  setSelectedOption,
  setTitle,
  title,
}) {
  const handleChange = (event) => {
    setSelectedOption(
      analyseOptionParameters.find((x) => x.section === event.target.value)
    );
  };

  useEffect(() => {
    setTitle(
      randomWords({ exactly: 2, join: "-" }) +
        "-" +
        generarNumeroAleatorioDeCuatroDigitos()
    );
  }, []);

  return (
    <div className="w-2/3 ">
      <div className="relative z-0 w-full my-5">
        <input
          type="email"
          className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="peer-focus:font-medium absolute text-md duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Título del documento
        </label>
      </div>
      <p className="my-4">Por favor, elija que evaluará:</p>
      <FormControl fullWidth>
        <InputLabel>Análisis</InputLabel>
        <Select
          value={selectedOption.section ?? "0"}
          label="Análisis"
          onChange={handleChange}
        >
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
