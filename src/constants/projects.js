import Loremaster, { loremasterSummary } from '../Components/Content/Projects/Loremaster';
import MCS, { mcsSummary } from '../Components/Content/Projects/MCS';
import RiverMarksMe, { riverMarksMeSummary } from '../Components/Content/Projects/RiverMarksMe';
import MCSStorePic from '../../public/assets/mcs.png';
import LoremasterPic from '../../public/assets/loremaster.webp';
import RiverMarksMePic from '../../public/assets/terminal.png';

const PROJECTS = [
  {
    summary: riverMarksMeSummary,
    Picture: RiverMarksMePic,
    pictureAlt: 'Unix Terminal',
    label: 'rivermarks.me',
    Component: RiverMarksMe,
  },
  {
    summary: mcsSummary,
    Picture: MCSStorePic,
    pictureAlt: 'Minecraft Charity Stream',
    label: 'MCS',
    Component: MCS,
  },
  {
    summary: loremasterSummary,
    Picture: LoremasterPic,
    pictureAlt: 'Dice',
    label: 'Loremaster',
    Component: Loremaster,
  },
];

export default PROJECTS;
