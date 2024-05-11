import { useEffect, useState } from "react";
import { Loading } from "../utils/Loading";
import AOS from "aos";
import HomePage from "@/components/Home";

function Index() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const time = setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="">{loader ? <Loading /> : <HomePage />}</div>
    </>
  );
}

export default Index;
