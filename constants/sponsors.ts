import type { Sponsor } from '~/types'

export const sponsors: Sponsor[] = [
  {
    name: 'Jobber',
    image: 'LogoJobber',
    description: 'Thanks to <a>Jobber</a> for allowing us to have a space for meet ups for the next year! Couldn\'t happen without them!',
    link: 'https://getjobber.com/',
    badges: ['Venue Partner'],
    isPast: false,
  },
  {
    name: 'Dotdash Meredith',
    image: 'LogoDotdash',
    description: 'Thanks to <a>Dotdash Meredith</a> for providing us with pizza and swag to help our meetups off the ground.',
    link: 'https://www.dotdashmeredith.com/',
    badges: ['Community Partner'],
    isPast: false,
  },
  {
    name: 'Place',
    image: 'LogoPlace',
    description: 'Thanks to <a href=\'https://place.com/\'>Place</a> for providing us with funding for events and providing job shadow opportunities to our hackathon winners.',
    link: 'https://place.com/',
    badges: ['Community Partner', 'Talent & Career Partner'],
    isPast: false,
  },
  {
    name: 'Tailwindcss',
    image: 'LogoTailwindCss',
    description: 'Thanks to <a href=\'https://tailwindcss.com/\'>Tailwind CSS</a> for providing a team account for <a href=\'https://tailwindui.com/\'>Tailwind UI</a> which we used to help develop this site.',
    link: 'https://tailwindcss.com/',
    badges: ['Operations Partner'],
    isPast: false,
  },
  {
    name: '1Password',
    image: 'Logo1Password',
    description: 'Thanks to <a href=\'https://1password.com/\'>1Password</a> for providing a team account for DES members to manage our passwords.',
    link: 'https://1password.com/',
    badges: ['Operations Partner'],
    isPast: false,
  },
  {
    name: 'Shortcut',
    image: 'LogoShortcut',
    description: 'Thanks to <a href=\'https://www.shortcut.com/\'>Shortcut</a>. The project management platform we use to help organize our team.',
    link: 'https://shortcut.com/',
    badges: ['Operations Partner'],
    isPast: false,
  },
]