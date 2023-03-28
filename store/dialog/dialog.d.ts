export interface IDialogStore {
    dialog: { isOpen: boolean; mode: string };
    HANDLE_DIALOG: (mode: '' | 'item' | 'my', isOpen: boolean) => void;
}
