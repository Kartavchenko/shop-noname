import { Bars } from "react-loader-spinner";

export default function BarsLoader() {
  return (
    <Bars
      height="80"
      width="80"
      color="#1976d2"
      ariaLabel="bars-loading"
      wrapperStyle={{
        position: "absolute",
        top: "calc(50% - 80px)",
        left: "calc(50% - 40px)",
      }}
      visible={true}
    />
  );
}
