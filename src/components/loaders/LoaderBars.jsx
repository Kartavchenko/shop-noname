import { Bars } from "react-loader-spinner";

export function BarsLoader() {
  return (
    <Bars
      height="80"
      width="80"
      color="#1976d2"
      ariaLabel="bars-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      wrapperClass=""
      visible={true}
    />
  );
}
