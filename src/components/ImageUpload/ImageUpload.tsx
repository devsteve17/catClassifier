import React from "react";
import { Card } from "components/Card/Card";

type TImageUpload = {
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  validation: any;
};

export const ImageUpload: React.FC<TImageUpload> = ({ handleSubmit, setFile, validation }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const { isFileMissing } = validation || false;

  return (
    <Card>
      <>    
        <h1 className="text-2xl font-bold">Image Upload</h1>
        <p className="mb-6">Please choose an image to upload</p>
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <label
            htmlFor="imageUpload"
            className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
          >
            <input
              className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
              type="file"
              name="imageUpload"
              accept="image/jpeg"
              onChange={handleFileChange}
            />
            {isFileMissing && <p className="text-red-600 mt-1 mb-4">Please choose an image file</p>}
          </label>
          <button
            type="submit"
            className="inline-block px-6 py-2.5 w-128 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Upload
          </button>
        </form>
        </>
    </Card >

  );
};
