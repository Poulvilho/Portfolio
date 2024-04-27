import { Dispatch, SetStateAction } from "react";

interface IBarSelector {
  setOption: Dispatch<SetStateAction<number>>
}

const BarSelector = ({ setOption }: IBarSelector) => {
    return (
      <div style={{ display: "flex", width: "100%", backgroundColor: "gray", justifyContent: "space-around" }}>
        <div>
          <p onClick={() => setOption(1)}>Projetos</p>
        </div>
        <div>
          <p onClick={() => setOption(2)}>Currículo</p>
        </div>
      </div>
    );
  }
  
  export default BarSelector;
  