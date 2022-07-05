import Loremaster, { loremasterSummary } from '../Components/Projects/Loremaster';
import MCS, { mcsSummary } from '../Components/Projects/MCS';
import RiverMarksMe, { riverMarksMeSummary } from '../Components/Projects/RiverMarksMe';
import MCSStorePic from '../public/assets/mcs.png';
import LoremasterPic from '../public/assets/loremaster.jpg';
import RiverMarksMePic from '../public/assets/terminal.png';

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
  {
    summary: riverMarksMeSummary,
    picture: RiverMarksMePic,
    pictureAlt: 'Unix Terminal',
    label: 'rivermarks.me',
    Component: RiverMarksMe,
  },
];

export default projects;
