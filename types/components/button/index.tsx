import { MouseEventHandler, ReactNode } from 'react';

export interface IBasicButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    text?: string;
    shape: 'round' | 'rectangle';
    color: string;
    bgColor: string;
    isActive: boolean;
}

export interface IButtonListProps {
    buttons: string[];
    shape: 'round' | 'rectangle';
    color: string;
    bgColor: string;
    activeCondition: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
