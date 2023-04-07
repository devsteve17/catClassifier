import React from "react";
import { Card } from "components/Card/Card";
import { TIsCatResult } from "pages/CatClassifier/CatClassifier";

type TImageResult = {
  isCatResult: TIsCatResult;
};

export const ImageResult: React.FC<TImageResult> = ({ isCatResult }) => {
  const { isCat, url } = isCatResult;

  // TODO: CENTRALISE TEXT STRINGS
  const result = isCat
    ? "The cat classifier detected a cat!"
    : "Unfortunately, the cat classifier found no cats.";

  return (
    <Card>
      <>
        <img src={url} alt="your uploaded image" />
        <p>Your image has been classified.</p>
        <p>{result}</p>
      </>
    </Card >
  );
};
