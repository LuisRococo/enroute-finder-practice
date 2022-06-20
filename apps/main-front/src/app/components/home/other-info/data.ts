import { BsBookmarkHeartFill, BsEmojiHeartEyesFill, BsHeartFill } from 'react-icons/bs';
import { GiChainedHeart, GiLockedHeart } from 'react-icons/gi';
import { SmallCardInterface } from './SmallCard';

export const items: SmallCardInterface[] = [
   { Icon: BsEmojiHeartEyesFill, info: 'Find Dates easy with our algorithm', title: 'Easy to use', iconColor: '#962BD4' },
   { Icon: BsHeartFill, info: 'Find Dates easy with our algorithm', title: 'Easy to use', iconColor: '#AB55DD' },
   { Icon: BsBookmarkHeartFill, info: 'Find Dates easy with our algorithm', title: 'Easy to use', iconColor: '#962BD4' },
   { Icon: GiLockedHeart, info: 'Find Dates easy with our algorithm', title: 'Easy to use', iconColor: '#AB55DD' },
   { Icon: GiChainedHeart, info: 'Find Dates easy with our algorithm', title: 'Easy to use', iconColor: '#962BD4' },
];
