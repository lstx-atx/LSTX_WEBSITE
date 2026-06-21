import type { TeamMember } from '../types';

// Built-in team roster (mirrors the About page). Editable in Sanity once configured.
export const seedTeam: TeamMember[] = [
  {
    name: 'Sam Schwartz',
    initials: 'SS',
    role: 'Founder & Vice President',
    bio: 'Third generation of the Schwartz lighting family and the founder of Lighting Source TX. He oversees our turnkey installations on the highest-profile projects and brings an education-first approach to every trade partner we work with.',
    order: 1,
  },
  {
    name: 'Ethan Eastwood',
    initials: 'EE',
    role: 'Licensed Master Electrician',
    bio: 'Our master electrician on staff, licensed in 2026 and a working project foreman by trade. Based in Leander with his wife Alyis, he brings code-tight discipline to everything we wire and install.',
    order: 2,
  },
  {
    name: 'Trey Mote',
    initials: 'TM',
    role: 'Field Tech & Operations',
    bio: 'The behind-the-scenes engine of our field work, handling installation, logistics, and on-site support. When the install has to go right, Trey is on it.',
    order: 3,
  },
  {
    name: 'Jordan Jewett',
    initials: 'JJ',
    role: 'Sales & Marketing — Central Texas',
    bio: 'Thirteen years in lighting, from the warehouse floor to operations, now running field sales across Central Texas. He treats lighting as design’s quiet power that catches the eye.',
    order: 4,
  },
  {
    name: 'Presley Lynch',
    initials: 'PL',
    role: 'Regional Sales — DFW / OK / AR',
    bio: 'Brings a builder’s eye and an entrepreneur’s drive to the DFW, Oklahoma, and Arkansas territory. Relationship-first and dependable, he sells the way he works. Built to last.',
    order: 5,
  },
  {
    name: 'Zach Scarborough',
    initials: 'ZS',
    role: 'Regional Sales — Gulf Coast',
    bio: 'Carries our flag across Houston, Louisiana, and Mississippi. A finance graduate with an owner’s mindset, he brings business discipline and a consultative approach to every builder and trade partner he serves.',
    order: 6,
  },
  {
    name: 'Charlie Mote',
    initials: 'CM',
    role: 'Regional Sales — DFW & Arkansas',
    bio: 'Marketing savvy and Texas grit across the DFW territory, calling on showrooms and trade partners. A former digital marketer and licensed Realtor, he knows how to build an audience and close a deal in equal measure.',
    order: 7,
  },
  {
    name: 'Julio Portillo',
    initials: 'JP',
    role: 'Head Field Technician',
    bio: 'Our most senior installer and a journeyman electrician, Julio leads the work in the field across Lighting Source TX projects. Detail-driven and bilingual, he sets the standard on every install from rough-in to final aim.',
    order: 8,
  },
];
