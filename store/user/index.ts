import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface IUser {
    isLogin: boolean;
}

const userStore = create(() => {
    devtools<IUser>((set) => ({
        isLogin: false
    }));
});

export default userStore;
