import type { Menu } from "./types"

export const menu: Menu = {
  name: "Bar",
  items: [
    {
      name: "Porções",
      items: [
        {
          name: "Batata frita",
          price: 30,
        },
        // {
        //   name: "Batata frita especial",
        //   description: "Com queijo e bacon",
        //   price: 38,
        // },
        {
          name: "Bolinhos",
          description: "Bolinho de arroz ou costela e queijo",
          price: 30,
        },
        // {
        //   name: "Calabresa acebolada",
        //   price: 35,
        // },
        // {
        //   name: "Cenoura palito no gelo",
        //   price: 20,
        // },
        {
          name: "Cebola empanada Gerivá",
          description: "Com molho especial",
          price: 35,
        },
        {
          name: "Contra filé na chapa",
          price: 60,
        },
        // {
        //   name: "Mini pastéis (20 unidades)",
        //   price: 30,
        // },
        // {
        //   name: "Misto de bolinhos",
        //   price: 35,
        // },
        // {
        //   name: "Palitos de frango com queijo",
        //   price: 45,
        // },
        // {
        //   name: "Quibe com requeijão cremoso",
        //   price: 30,
        // },
        {
          name: "Filé de corvina",
          price: 60,
        },
        {
          name: "Filé de tilápia",
          price: 60,
        },
        {
          name: "Filé de tucunaré",
          price: 60,
        },
        {
          name: "Combo promocional",
          description: "Porçao de contra filé ou peixe com cebola empanada",
          price: 80,
        },
      ],
    },
    {
      name: "Sucos (Copo)",
      items: [
        {
          name: "Abacaxi, Acerola, Caju, Goiaba, Maracujá, Morango",
          description: "Poupa da fruta",
          price: 6,
        },
        // {
        //   name: "Laranja e limão",
        //   description: "Natural",
        //   price: 10,
        // },
        {
          name: "Frutas vermelhas",
          price: 8,
        },
      ],
    },
    {
      name: "Sucos (Jarra)",
      items: [
        {
          name: "Abacaxi, Acerola, Caju, Goiaba, Maracujá, Morango",
          description: "Poupa da fruta",
          price: 20,
        },
        // {
        //   name: "Laranja e limão",
        //   description: "Natural",
        //   price: 20,
        // },
        {
          name: "Frutas vermelhas",
          price: 28,
        },
        {
          name: "Jarra mix",
          price: 30,
        },
      ],
    },
    {
      name: "Bebidas",
      items: [
        {
          name: "Heineken Zero",
          description: "Long neck 330 ML",
          price: 8,
        },
        {
          name: "Heineken Garrafa",
          description: "600 ML",
          price: 15,
        },
        {
          name: "Skol, Brahma, Amstel Lata",
          description: "350 ML",
          price: 5,
        },
        {
          name: "Skol, Brahma, Amstel Garrafa",
          description: "600ML",
          price: 10,
        },
        {
          name: "Ice",
          price: 15,
        },
        {
          name: "Refrigerante lata",
          description: "Fanta, Guaraná Antarctica",
          price: 5,
        },
        {
          name: "Refrigerante 2L",
          description: "Fanta, Guaraná Antarctica, Mineiro",
          price: 10,
        },
        {
          name: "Coca-Cola KS",
          price: 3.5,
        },
        {
          name: "Coca-Cola Lata",
          description: "Normal ou zero",
          price: 5,
        },
        {
          name: "Coca-Cola 1L",
          price: 8,
        },
        {
          name: "Coca-Cola 2L",
          description: "Normal ou zero",
          price: 12,
        },
        {
          name: "Energético Monster",
          price: 12,
        },
        {
          name: "Água sem gás",
          price: 3,
        },
        {
          name: "Água com gás",
          price: 3.5,
        },
        {
          name: "Água tônica",
          price: 5,
        },
        {
          name: "Suco lata",
          price: 5,
        },
        {
          name: "H2O",
          price: 6,
        },
        {
          name: "Gelo 4KG",
          price: 15,
        },
      ],
    },
  ],
}
