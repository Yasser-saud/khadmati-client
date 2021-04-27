import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userState = atom({
  key: 'user',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const searchQuery = atom({
  key: 'searchQuery',
  default: [],
});
