import styled from "@emotion/styled";
import { createElement } from "react";
import "./style.css";

const Heading = ({ size = "4xl", as = "h1", children, ...props }) => {
  return createElement(as, { ...props, className: `text-${size}` }, children);
};

export default Heading;
