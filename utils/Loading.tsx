import ReactLoading from "react-loading";

export const Loading = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center bg-slate-800">
      <ReactLoading
        type={"spokes"}
        color={"#CA9F27"}
        height={"10%"}
        width={"10%"}
      />
    </div>
  );
};
