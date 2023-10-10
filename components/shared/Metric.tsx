import React from "react";

interface MetricProps {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textStyles?: string;
  isAuthor?: boolean;
}

const Metric = ({ imgUrl, alt, value, title, href, textStyles, isAuthor }: MetricProps) => {
  return <div>Metric</div>;
};

export default Metric;
