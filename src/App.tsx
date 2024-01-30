import { useState } from "react";
import { StyledComponents } from "./StyledComponents";
import { VanillaExtract } from "./VanillaExtract";
import { Stylex } from "./Stylex";

export const App = () => {
  const [state, setState] = useState("styled-components");

  const handleOptionAction = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="styled-components"
          checked={state === "styled-components"}
          onChange={handleOptionAction}
        />
        styled-components
      </label>

      <label>
        <input
          type="radio"
          value="vanilla-extract"
          checked={state === "vanilla-extract"}
          onChange={handleOptionAction}
        />
        vanilla-extract
      </label>

      <label>
        <input
          type="radio"
          value="stylex"
          checked={state === "stylex"}
          onChange={handleOptionAction}
        />
        stylex
      </label>
      <div>
        {state === "styled-components" && <StyledComponents />}
        {state === "vanilla-extract" && <VanillaExtract />}
        {state === "stylex" && <Stylex />}
      </div>
    </div>
  );
};
