import { MenuEntry } from '@mozartfinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://ezik.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://mozartfinance.io/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://mozartfinance.io/pools',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
     
      {
        label: 'Docs',
        href: 'https://ezik.gitbook.io/mozart-finance/',
      },
      {
        label: 'Blog',
        href: 'https://blog.ezik.com/',
      },
    ],
  },
  {
    label: 'Audit by IB',
    icon: 'TicketIcon',
    href: '',
  },
]

export default config
