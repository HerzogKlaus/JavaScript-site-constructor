import image from "./assets/image.png";
import { TextBlock, TitleBlock, ImageBlock, ColumnsBlock } from "./classes/blocks";
export const model = [
  new TitleBlock("Конструктор сайтов", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#fff",
      "text-align": "center",
      padding: "1.5rem",
    },
  }),
  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },

    imageStyle: {
      width: "500px",
      height: "auto",
    },

    alt: "Изображение",
  }),

  new TextBlock("Здесь могла быть ваша реклама", {
    styles: {
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),

  new ColumnsBlock(
    [
      "Учёбный проект по созданию конструктора сайтов на чистом JavaScript без бибилотек",
      "Создан для понимания работы принципов SOLID и ООП в JS",
      "JavaScript one love",
    ],
    {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    }
  ),
];
