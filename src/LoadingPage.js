import React, { useState } from "react";
import { LineWave } from "react-loader-spinner";
import useDarkside from "./useDarkside";

export default function LoadingPage() {
  const [colorTheme] = useDarkside();
  const [darkSide] = useState(colorTheme === "light" ? true : false);

  return (
    <div className="flex flex-1 items-center justify-center">
      <LineWave
        height="100"
        width="100"
        color={darkSide ? "white" : "black"}
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  );
}
