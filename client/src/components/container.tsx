
import React from 'react'
import { cn } from './utils';

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
    return (
        <>
            <div className={cn("dark:bg-neutral-900 max-w-lg md:max-w-4xl w-full mx-auto border-2", className)}>{children}</div>
        </>
    )
}

export default Container;