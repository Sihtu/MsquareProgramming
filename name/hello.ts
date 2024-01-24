type name = "mokehinkar" | "mokelapthounk";
interface Menu {
  name: name;
  price: number;
  type: string;
  shopName: string;
  location: string;
}

const menu: Menu = {
  name: "mokehinkar",
  price: 1500,
  type: "noodle",
  shopName: "Dawei",
  location: "Thayetchaung",
};
const menuId = ({ price }: Menu) => {
  return price;
};

console.log(menuId(menu));
