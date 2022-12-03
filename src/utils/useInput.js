import { useState } from "react";

const useInput = () => {
    const [value, setValue] = useState('');
  
    const onChange = (event) => {
        console.log(event.target.value)
      setValue(event.target.value);
    };
  
    return { value: value, onChange: onChange };
  };

export default useInput;