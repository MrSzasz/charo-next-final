import Layout from "@/components/Layout/Layout";
import { useEffect } from "react";

const index = () => {
  useEffect(() => {
    try {
      !JSON.parse(localStorage.getItem("userData")) &
        localStorage.setItem("userData", "null");
    } catch (error) {}
  }, []);

  return (
    <Layout>
      <img
        src="https://imgur.com/TdYjZlc.png"
        alt="Presentation"
        className="h-[90vh] md:h-full object-cover object-right"
      />
    </Layout>
  );
};

export default index;
