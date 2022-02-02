import React from "react";
import { useSelector } from "react-redux";

const TemplateList = () => {
  const templates = useSelector((state) => state);
  console.log(templates);
  return <div>Hello world</div>;
};

export default TemplateList;
