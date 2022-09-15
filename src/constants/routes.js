import Home from '../components/pages/Home';
import Faq from '../components/pages/Faq';
import Basket from "../components/pages/Basket";
import NotFound from '../components/pages/NotFound';
import Delivery from "../components/pages/Delivery";
import Refund from "../components/pages/Refund";
import Research from "../components/pages/Research";
import PartnerProfile from "../components/pages/PartnerProfile";

const routes = [
  {
    path: '/tests-react',
    component: Home
  },
  {
    path: '/faq',
    component: Faq
  },
  {
    path: '/basket',
    component: Basket
  },
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/delivery',
    component: Delivery
  },
  {
    path: '/refund',
    component: Refund
  },
  {
    path: '/research',
    component: Research
  },
  {
    path: '/partner-profile',
    component: PartnerProfile
  },
]

export const headerRouters = [
  {
    key: 'FAQ',
    href: '/faq',
  },
  {
    key: 'Доставка и Оплата',
    href: '/delivery',
  },
  {
    key: 'Возврат',
    href: '/refund',
  },
  {
    key: 'Исследование',
    href: '/research',
  },
  {
    key: 'Личный кабинет',
    href: '/partner-profile',
  },
];

export default routes
