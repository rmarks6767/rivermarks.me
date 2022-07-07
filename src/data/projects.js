import Loremaster, { loremasterSummary } from '../Components/Content/Projects/Loremaster';
import MCS, { mcsSummary } from '../Components/Content/Projects/MCS';
import RiverMarksMe, { riverMarksMeSummary } from '../Components/Content/Projects/RiverMarksMe';
import MCSStorePic from '../public/assets/mcs.webp';
import LoremasterPic from '../public/assets/loremaster.webp';
import RiverMarksMePic from '../public/assets/terminal.webp';

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
