import create from 'zustand';
import { IDialogStore } from './dialog';

const initDialog = {
    isOpen: false,
    mode: ''
};

const dialogStore = create<IDialogStore>()((set) => ({
    dialog: initDialog,
    HANDLE_DIALOG: (mode, isOpen) => set((state: IDialogStore) => ({ dialog: { mode: mode, isOpen: isOpen } }))
}));

export default dialogStore;
