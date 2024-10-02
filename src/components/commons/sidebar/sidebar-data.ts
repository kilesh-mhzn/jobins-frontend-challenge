import {
  BaseIconProps,
  IconBox,
  IconCirclePlus,
  IconShoppingCart,
  IconSmartHome,
  IconStar,
} from "@ui/icons/icons";

export type MenuItem = {
  title: string;
  path: string;
  icon?: React.ComponentType<BaseIconProps>;
};

export type MenuItemWithGroup = {
  group: string;
  items: MenuItem[];
};

export type SidebarItem = MenuItem | MenuItemWithGroup;

export const sidebarData: SidebarItem[] = [
  {
    group: "MAIN MENU",
    items: [
      {
        title: "Dashboard",
        path: "/",
        icon: IconSmartHome,
      },
      {
        title: "Order Management",
        path: "/order-management",
        icon: IconShoppingCart,
      },
      {
        title: "Brand",
        path: "/brand",
        icon: IconStar,
      },
    ],
  },
  {
    group: "PRODUCTS",
    items: [
      {
        title: "Add Product",
        path: "/add-product",
        icon: IconCirclePlus,
      },
      {
        title: "Product List",
        path: "/product-list",
        icon: IconBox,
      },
    ],
  },
];
