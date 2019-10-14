interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItemsLoj: NavData[] = [
  {
    name: 'Home',
    url: '/dashboard',
    icon: 'cui-home'
  },
  {
    divider: true
  },
  {
    name: 'Vendas',
    url: '/sales-table-loj',
  },
  {
    name: 'Painel Lojista',
    url: '/shopkeeper',
  },
  {
    divider: true
  },
  {
    name: 'Sair',
    url: '/login',
    icon: 'cui-account-logout'
  }
];
