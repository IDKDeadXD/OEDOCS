export interface NavItem {
  title: string;
  href: string;
}

export interface NavSection {
  label: string;
  items: NavItem[];
}

export const navigation: NavSection[] = [
  {
    label: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs/introduction' },
      { title: 'Installation', href: '/docs/getting-started/installation' },
      { title: 'First Setup', href: '/docs/getting-started/first-setup' },
      { title: 'Basic Navigation', href: '/docs/getting-started/basic-navigation' },
    ],
  },
  {
    label: 'Features',
    items: [
      { title: 'Economy', href: '/docs/features/economy' },
      { title: 'Homes', href: '/docs/features/homes' },
      { title: 'Land Claims', href: '/docs/features/land-claims' },
      { title: 'Teleportation', href: '/docs/features/teleportation' },
      { title: 'AFK System', href: '/docs/features/afk' },
      { title: 'Chat', href: '/docs/features/chat' },
      { title: 'Kits', href: '/docs/features/kits' },
      { title: 'Shops', href: '/docs/features/shops' },
      { title: 'Redemption Codes', href: '/docs/features/redemption-codes' },
      { title: 'Last Seen', href: '/docs/features/last-seen' },
      { title: 'Floating Text', href: '/docs/features/floating-text' },
      { title: 'Player Stats', href: '/docs/features/player-stats' },
    ],
  },
  {
    label: 'Commands',
    items: [
      { title: 'Player Commands', href: '/docs/commands/player-commands' },
      { title: 'Admin Commands', href: '/docs/commands/admin-commands' },
      { title: 'Slash Commands', href: '/docs/commands/slash-commands' },
    ],
  },
  {
    label: 'Administration',
    items: [
      { title: 'Admin Panel', href: '/docs/admin/admin-panel' },
      { title: 'Ranks & Permissions', href: '/docs/admin/ranks-and-permissions' },
      { title: 'Moderation', href: '/docs/admin/moderation' },
      { title: 'Item Banning', href: '/docs/admin/item-banning' },
      { title: 'Mob Management', href: '/docs/admin/mob-management' },
      { title: 'Custom Commands', href: '/docs/admin/custom-commands' },
      { title: 'Kits Management', href: '/docs/admin/kits-management' },
      { title: 'Warps Management', href: '/docs/admin/warps-management' },
      { title: 'Lag Zapper', href: '/docs/admin/lag-zapper' },
      { title: 'Vanish', href: '/docs/admin/vanish' },
      { title: 'Server Settings', href: '/docs/admin/server-settings' },
    ],
  },
  {
    label: 'Help',
    items: [
      { title: 'FAQ', href: '/docs/help/faq' },
      { title: 'Troubleshooting', href: '/docs/help/troubleshooting' },
    ],
  },
];

export function flatNavItems(): NavItem[] {
  return navigation.flatMap((s) => s.items);
}

export function getAdjacentPages(slug: string[]): { prev: NavItem | null; next: NavItem | null } {
  const href = '/docs/' + slug.join('/');
  const flat = flatNavItems();
  const idx = flat.findIndex((item) => item.href === href);
  return {
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null,
  };
}
