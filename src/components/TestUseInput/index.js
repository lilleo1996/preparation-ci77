import useInput from "../../utils/useInput";

const TestUseInput = () => {
    const input1 = useInput();
    const input2 = useInput();
  
    return (
      <div>
        <input type="text" value={input1.value} onChange={input1.onChange} />
        <input type="text" value={input2.value} onChange={input2.onChange} />
      </div>
    );
  };

  export default TestUseInput;