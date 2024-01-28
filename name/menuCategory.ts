const menuCategories = [
  {
    id: 1,
    name: "Most Popular",
  },
  {
    id: 2,
    name: "Appetizer",
  },
  {
    id: 3,
    name: "Main Dish",
  },
  {
    id: 4,
    name: "Soup",
  },
  {
    id: 5,
    name: "Salad",
  },
  {
    id: 6,
    name: "Hot Dish",
  },
  {
    id: 7,
    name: "Drink",
  },
  {
    id: 8,
    name: "Dessert",
  },
];
const menus = [
  {
    id: 1,
    name: "Mont Him Khar",
    description: "Burmese rice noodle soup with fish and soft banana plant",
    price: 1000,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701844433945_mohinga.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/mohinga.jpg",
    menuCategoryIds: [1, 4, 6],
  },
  {
    id: 2,
    name: "Shan Kout Swell",
    description: "Shan noodle with chicken and Mustard",
    price: 2000,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701873747360_shan.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/shan.jpg",
    menuCategoryIds: [1, 5, 3],
  },
  {
    id: 3,
    name: "Laphet Tote",
    description: "Tea-leaf salad with mixed fries beans and nuts",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701844451016_laphet.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/laphettote.jpg",
    menuCategoryIds: [1, 2, 5],
  },
  {
    id: 4,
    name: "Ohn Noe Kout Swell",
    description: "Rice noodle wtih coconut milk and chicken",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701875560465_ohnoe.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/ohnoe.jpg",
    menuCategoryIds: [1, 2, 5],
  },
  {
    id: 5,
    name: "NanGyi Tote",
    description: "Noddle salad with chicken curry and  egg ",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701844722576_nangyi.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/nangyi.jpg",
    menuCategoryIds: [1, 2, 5],
  },
  {
    id: 6,
    name: "Tofu Nway",
    description: " Shan style Tofu soup.",
    price: 3500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701875627104_tofunway.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/tofunway.jpg",
    menuCategoryIds: [1, 3, 6],
  },
  {
    id: 7,
    name: "Tamin Si San",
    description: "Rice with peanut oil and yellow peas",
    price: 500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701846134044_photo-520.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/rice1.jpg",
    menuCategoryIds: [2, 8],
  },
  {
    id: 8,
    name: "Si Tamin",
    description: "Sticky rice with fries-dry-fish and coconut chip",
    price: 1000,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701873644110_sitamin.jpg",
    assetUrl2:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701873644110_sitamin.jpg",
    menuCategoryIds: [2, 8],
  },
  {
    id: 9,
    name: "Akyaw Sone",
    description:
      "Fries mixed vegetables with rice-powder,serve with tamarind sauce",
    price: 3000,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701846333050_AKyawSone-7ef8e742b8c74aebb8fc4aff087f3fca.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/akyaw.jpeg",
    menuCategoryIds: [2],
  },
  {
    id: 10,
    name: "Mont lin mayer",
    description: " Burmese pancake (couple) with peanuts and salted Sesame",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701873714161_lmy.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/lmy.jpg",
    menuCategoryIds: [2, 8],
  },
  {
    id: 11,
    name: "Mont Kywel Thel",
    description: "Burmese sticky brown cake with coconut chip",
    price: 2000,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701875598596_mont1.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/mont1.jpg",
    menuCategoryIds: [8],
  },
  {
    id: 12,
    name: "Shwe Yin Aye",
    description: "Mixed gelly with sweet coconut milk",
    price: 2500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701874351631_kout.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/shweyinaye.jpeg",
    menuCategoryIds: [7, 8],
  },
  {
    id: 13,
    name: "Cho Saint",
    description: "Burmese tea with cream and evaporated milk",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701874461625_tea.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/tea.jpg",
    menuCategoryIds: [1, 2, 7],
  },
  {
    id: 14,
    name: "Kaw Pyan Late",
    description: "Spring-roll with vegerables inside",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701845271896_sproll.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/sproll.jpg",
    menuCategoryIds: [2],
  },
  {
    id: 15,
    name: "Ham & Cheese Sandwish",
    description: "Grilled ham and cheese sandwish",
    price: 2500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701845289327_hcsand.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/hcsand.jpg",
    menuCategoryIds: [2],
  },
  {
    id: 16,
    name: "Boil Eggs",
    description: "Boil eggs ",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701874413116_egg.jpeg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/egg.jpeg",
    menuCategoryIds: [2, 6],
  },
  {
    id: 16,
    name: "B.E.T",
    description: "fries eggs with bacon and tomato",
    price: 2000,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701845325397_bet.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/bet.jpg",
    menuCategoryIds: [2],
  },
  {
    id: 17,
    name: "DTH steak",
    description: "Grilled Pork steak with flat chip ",
    price: 5500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701873772313_steak1.png",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/steak1.jpg",
    menuCategoryIds: [3],
  },
  {
    id: 18,
    name: "Tomato soup",
    description: "Classic tomato soup with gallic-bread ",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701874480687_tmtsoup.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/tmtsoup.jpg",
    menuCategoryIds: [2, 4],
  },
  {
    id: 19,
    name: "Tomato Cream soup",
    description: "Tomato soup with cream and orzo-basil",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701875540559_029e34723a299a9706ab58d1c635cb16.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/tmt2.jpg",
    menuCategoryIds: [2, 4],
  },
  {
    id: 20,
    name: "Mushroom soup",
    description: "Mushroom soup with milk cream and sinamon",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701874496814_msc.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/msc.jpg",
    menuCategoryIds: [2, 4],
  },
  {
    id: 21,
    name: "Carrot Soup",
    description: "Carrot soup with white cream ",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701844158661_carrot.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/carrot.jpg",
    menuCategoryIds: [2, 4],
  },
  {
    id: 22,
    name: "Rice Soup",
    description: "Rice soup with chicken ",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701874987989_Screenshot%202023-12-06%20220254.png",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/rsoup1.jpg",
    menuCategoryIds: [2, 4],
  },
  {
    id: 23,
    name: "Orange Juice",
    description: "Fresh orange juice with orange slice",
    price: 1000,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701875076205_Screenshot%202023-12-06%20220417.png",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/orange.jpg",
    menuCategoryIds: [7],
  },
  {
    id: 24,
    name: "Watermelon Juice",
    description: "Fresh Watermelon juice with Watermelon slice",
    price: 1000,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701875441618_85649244ed9724c534d1ba28656745c8.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/wm.jpg",
    menuCategoryIds: [7],
  },
  {
    id: 25,
    name: "Avocado Juice",
    description: "Fresh Avocado juice with Avocados",
    price: 2000,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701845343058_juice1.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/juice1.jpg",
    menuCategoryIds: [7],
  },
  {
    id: 26,
    name: "stewberry Juice",
    description: "Fresh stewberry juice with stewberry",
    price: 1000,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701873686537_stew.png",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/stew.png",
    menuCategoryIds: [7],
  },
  {
    id: 27,
    name: "Tamarind Juice",
    description: " Tamarind juice with burmese brown sugar",
    price: 1000,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701875102003_tamarind.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/tamarind.jpg",
    menuCategoryIds: [7],
  },
  {
    id: 28,
    name: "French Fries",
    description: "serve with Mayonnaise and Ketchup",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701886026173_french-fries.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/ff.jpg",
    menuCategoryIds: [1, 2],
  },
];

const input = document.getElementsByClassName("box")[0];
const listDiv = document.getElementsByClassName("listDiv")[0];
const list = document.getElementsByClassName("list-group")[0];

const changing = (event) => {
  const value = event.target.value;
  const menuName = menus
    .filter((menu) => {
      const inputName = menuCategories.find(
        (menucatory) => menucatory.name.toLowerCase() === value
      );
      if (inputName) {
        return menu.menuCategoryIds.includes(inputName.id);
      } else {
        return;
      }
    })
    .map((item) => item.name);
  for (let i = 0; i < menuName.length; i++) {
    const listItem = document.createElement("li");
    listItem.classList.add("list");
    console.log(menuName[i]);
    listItem.append(menuName[i]);
    list.append(listItem);
  }
  input.value = "";
};

const valueName = input.addEventListener("change", changing);
