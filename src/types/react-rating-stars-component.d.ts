declare module 'react-rating-stars-component' {
    interface ReactStarsProps {
        count?: number;
        value?: number;
        edit?: boolean;
        size?: number;
        color?: string;
        activeColor?: string;
        isHalf?: boolean;
        emptyIcon?: React.ReactNode;
        halfIcon?: React.ReactNode;
        filledIcon?: React.ReactNode;
        onChange?: (newValue: number) => void;
        classNames?: string;
    }
    const ReactStars: React.ComponentType<ReactStarsProps>;
    export default ReactStars;
}
