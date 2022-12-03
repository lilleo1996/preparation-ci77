import useLocalStorage from "../../utils/useLocalStorage";

const TestUseLS = () => {
    const [count, setCount] = useLocalStorage("count");
  
    return (
      <div>
        {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase
        </button>
      </div>
    );
  };

  export default TestUseLS;
  