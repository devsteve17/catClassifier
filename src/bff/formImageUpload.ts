import { useAxios } from "fetch/useAxios";

export const formImageUpload = async (file: File) => {
  const bff = useAxios();
  const config = {
    headers: {
      "content-type": file.type,
    },
  };
  return await bff.post(`/isthisacat`, file, config);
};
