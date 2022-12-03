import useHover from "../../utils/useHover";

const TestUseHover = () => {
    const [elemRef, isHover] = useHover();
  
    return (
      <div>
        <div
          ref={elemRef}
          style={{ width: 100, height: 100, background: "green", textAlign: "center"}}
        >
          {isHover ? "Hovering" : "Not hovering"}
        </div>
      </div>
    );
  };

  export default TestUseHover;