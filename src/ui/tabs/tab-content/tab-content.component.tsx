import React from "react";

interface Tab {
  content: React.ReactNode;
}

interface TabContentProps {
  tabs: Tab[];
  activeTab: number;
}

const TabContent: React.FC<TabContentProps> = ({ tabs, activeTab }) => {
  return <div>{tabs[activeTab].content}</div>;
};

export default TabContent;
