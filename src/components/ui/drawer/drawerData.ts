export interface DrawerItem {
  id: 'mission' | 'vision' | 'values';
  title: string;
  content: string;
}

export const drawerData: DrawerItem[] = [
  {
    id: 'mission',
    title: 'Our Mission',
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    id: 'vision',
    title: 'Vision',
    content:
      "To be the global leader in high-performance technical plastics and materials, recognized for innovation, sustainability, and German engineering excellence. We aim to shape the future of industries through advanced material solutions.",
  },
  {
    id: 'values',
    title: 'Values',
    content:
      "**Integrity:** We operate with honesty and transparency in all our dealings.\n\n**Innovation:** We foster a culture of continuous improvement and groundbreaking material science.\n\n**Sustainability:** We are committed to environmentally responsible production and circular economy principles.\n\n**Excellence:** We pursue the highest standards in quality, service, and expertise.",
  },
];