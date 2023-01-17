export interface IBasicButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    text: string;
    type: 'round' | 'rectangle';
    color: string;
    bgColor: string;
}

export interface IButtonListProps {
    buttons: string[];
    type: 'round' | 'rectangle';
    color: string;
    bgColor: string;
}
