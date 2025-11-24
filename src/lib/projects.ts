export interface Project {
  title: string
  description: string
  links: {
    href: string
    label: string
  }[]
}

export const projects: Project[] = [
  {
    title: 'Lighthouse',
    description:
      'A data-driven web application for tracking player statistics for the MCC Island Minecraft network. Built with SvelteKit using Typescript and TailwindCSS, with an Express.js backend.',
    links: [
      { href: 'https://stats.sirarchibald.dev', label: 'View project' },
      {
        href: 'https://github.com/SirArchibald97/lighthouse',
        label: 'View on GitHub',
      },
    ],
  },
  {
    title: 'Trident',
    description:
      'A Minecraft mod for the MCC Island network which adds quality of life features for players. Built in Kotlin with the Fabric API, has 1000+ downloads.',
    links: [
      {
        href: 'https://modrinth.com/mod/trident-mcci',
        label: 'View on Modrinth',
      },
      {
        href: 'https://github.com/pe3ep/Trident',
        label: 'View on GitHub',
      },
    ],
  },
  {
    title: 'Eye Spy',
    description:
      "A game developed for the Roblox platform by MontGo Studios, a group founded by myself during my Master's degree. Built with Roblox Studio, using Lua for scripting.",
    links: [
      {
        href: 'https://www.roblox.com/games/136972070833669/Eye-Spy',
        label: 'View on Roblox',
      },
    ],
  },
  {
    title: 'Discord Bot Template',
    description:
      'A template for quickly spinning up new Discord bots using my custom framework. Built with Javascript and Node.js and using v14 of the Discord.js library.',
    links: [
      {
        href: 'https://github.com/SirArchibald97/discord-bot-template-v14',
        label: 'View on GitHub',
      },
    ],
  },
]
