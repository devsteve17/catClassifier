import React, { useState, useEffect } from "react";
import { formImageUpload } from "bff/formImageUpload";
import { Loading } from "components/Loading/Loading";
import { ImageUpload } from "components/ImageUpload/ImageUpload";
import { ImageResult } from "components/ImageResult/ImageResult";

export type TIsCatResult = {
  id: string;
  url: string;
  width: number;
  height: number;
  isCat: boolean;
};

const initValidation = { isFileMissing: false };

export const CatClassifier = () => {
  const [file, setFile] = useState<File>();
  const [isLoading, setIsLoading] = useState(false);
  const [validation, setValidation] = useState(initValidation);
  const [isCatResult, setIsCatResult] = useState<TIsCatResult[] | undefined>();

  useEffect(() => {
    setIsCatResult(undefined);
  }, [file]);

  useEffect(() => {
    if (isCatResult) {
      setIsLoading(false);
    }
  }, [isCatResult])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      setValidation({ isFileMissing: true });
      return;
    }

    try {
      setValidation({ isFileMissing: false });
      setIsLoading(true);

      const { data } = await formImageUpload(file);
      // MOCK API PROCESSING DELAY
      setTimeout(() => {
        console.log("Delayed for 60 seconds.");
        setIsCatResult(data);
      }, 10000);
  
    } catch (e) {
      // TODO: handle error path not included in mock setup
      setIsCatResult(undefined);
    }
  };

  const num = Math.floor(Math.random() * 2);

  return (
    <div className="flex justify-center">
      <ImageUpload handleSubmit={handleSubmit} setFile={setFile} validation={validation} />
      {isLoading && (
        <Loading />
      )}
      {isCatResult &&
        isCatResult.map(catResult => <ImageResult key={catResult.id} isCatResult={catResult} />)}
    </div>
  );
};
