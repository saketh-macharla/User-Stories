import React, { useState } from "react";

const SecondaryTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const changeActiveTab = (index: number) => {
    setActiveTab(index);
  };
  return <div></div>;
};
export default SecondaryTabs;
