import Loremaster, { loremasterSummary } from '../Components/Projects/Loremaster';
import MCS, { mcsSummary } from '../Components/Projects/MCS';
import MCSStorePic from '../public/assets/mcs.png';
import LoremasterPic from '../public/assets/loremaster.jpg';

const projects = [
  {
    summary: mcsSummary,
    picture: MCSStorePic,
    pictureAlt: 'Minecraft Charity Stream',
    label: 'MCS',
    Component: MCS,
  },
  {
    summary: loremasterSummary,
    picture: LoremasterPic,
    pictureAlt: 'D20 Die',
    label: 'Loremaster',
    Component: Loremaster,
  },
];

export default projects;
