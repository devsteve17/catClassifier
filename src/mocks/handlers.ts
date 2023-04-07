import { rest } from "msw";
import { ROOT_URL } from "fetch/useAxios";

const mockCatOrDog = () => {
  const imageArray = [
    {
      id: "MTkyMjM3MA",
      url: "https://cdn2.thecatapi.com/images/MTkyMjM3MA.jpg",
      width: 600,
      height: 800,
      isCat: true,
    },
    {
      id: "AB733MjM3CA",
      url: "https://cdn2.thecatapi.com/images/9t1.jpg",
      width: 600,
      height: 800,
      isCat: true,
    },
    {
      id: "DGYyMjM35353",
      url: "https://random.dog/9e90f135-67ec-47ef-9d99-61b9223f2e86.jpg",
      width: 600,
      height: 800,
      isCat: false,
    },
    {
      id: "DGY9dfdfb80c48c",
      url: "https://random.dog/33f7e72c-7031-47f3-8b67-9dfdfb80c48c.jpg",
      width: 600,
      height: 800,
      isCat: false,
    },
  ];
  const randomish = Math.floor(Math.random() * 4);
  return imageArray[randomish];
};

export const handlers = [
  rest.post(`${ROOT_URL}/isthisacat`, (req, res, ctx) => {
    return res(
      ctx.json([mockCatOrDog()]),

      ctx.status(200)
    );
  }),
];
