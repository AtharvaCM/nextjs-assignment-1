import type { NextPage } from "next";

// custom components
import Layout from "@/components/layout";
import Button from "@/components/UI/button";

const Home: NextPage = () => {
  return (
    <Layout>
      <p>Home Page</p>
      <Button variant="primary" />
    </Layout>
  );
};

export default Home;
