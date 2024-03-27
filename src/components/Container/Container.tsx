import clsx from 'clsx';
import React, { FC, PropsWithChildren } from 'react';
import styles from './Container.module.scss';

type ContainerProps = {
    size?: 'default' | 'small' | 'expand';
};
export const Container: FC<PropsWithChildren<ContainerProps>> = (props) => {
    const { children, size = 'default' } = props;

    return <div className={clsx(styles.root, styles[size])}>{children}</div>;
};
