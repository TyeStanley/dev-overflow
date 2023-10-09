import React from "react";

interface Props {
  _id: number;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}

const RenderTag = ({ _id, name, totalQuestions, showCount }: Props) => {
  return (
    <div>
      {name} - {totalQuestions}
    </div>
  );
};

export default RenderTag;
