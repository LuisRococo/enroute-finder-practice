import { BsBookmarkHeartFill, BsEmojiHeartEyesFill, BsHeartFill } from 'react-icons/bs';
import { GiChainedHeart, GiLockedHeart } from 'react-icons/gi';
import { SmallCardInterface } from './SmallCard';

export const items: SmallCardInterface[] = [
   { Icon: BsEmojiHeartEyesFill, info: 'Find Dates easy with our algorithm', title: 'Easy to use', iconColor: '#e33d5f' },
   { Icon: BsHeartFill, info: 'Find Dates easy with our algorithm', title: 'Easy to use', iconColor: '#ffa6e9' },
   { Icon: BsBookmarkHeartFill, info: 'Find Dates easy with our algorithm', title: 'Easy to use', iconColor: '#e33d5f' },
   { Icon: GiLockedHeart, info: 'Find Dates easy with our algorithm', title: 'Easy to use', iconColor: '#ffa6e9' },
   { Icon: GiChainedHeart, info: 'Find Dates easy with our algorithm', title: 'Easy to use', iconColor: '#e33d5f' },
];
