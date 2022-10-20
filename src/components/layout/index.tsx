import React from "react";

// custom components
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

type props = {
  children?: React.ReactNode;
};

const Layout = (props: props) => {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-144px)]">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
