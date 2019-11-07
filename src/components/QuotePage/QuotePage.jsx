import React from "react";
import Quote from "../Quote/Quote";
import Title from "../Title/Title";

function QuotePage() {
  return (
    <>
      <Title>Citations</Title>
      <Quote
        message="Never trust a computer you can't throw out a window."
        author="Steve Wozniak"
      />
    </>
  );
}

export default QuotePage;
