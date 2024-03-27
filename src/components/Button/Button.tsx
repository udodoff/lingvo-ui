import clsx from 'clsx';

import styles from './Button.module.scss';
import { HTMLAttributeAnchorTarget, FC, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

export type ButtonVariant = 'filled' | 'outline' | 'text';
export type ButtonTheme = 'primary' | 'danger';

const variantClassNameByVariant: Record<ButtonVariant, string> = {
    filled: styles.filledVariant,
    outline: styles.outlineVariant,
    text: styles.textVariant,
};

const themeClassNameByColor: Record<ButtonTheme, string> = {
    danger: styles.dangerTheme,
    primary: styles.primaryTheme,
};

export type ButtonProps = {
    variant?: ButtonVariant;
    theme?: ButtonTheme;
    link?: string;
    iconBefore?: SvgComponent;
    iconAfter?: SvgComponent;
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    classes?: Classes<'content' | 'iconBefore' | 'iconAfter'>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = (props) => {
    const {
        variant = 'filled',
        theme = 'primary',
        link,
        iconBefore: ButtonIconBefore,
        iconAfter: ButtonIconAfter,
        isLoading,
        classes,
        className,
        disabled,
        children,
        onClick,
        target,
        ...otherProps
    } = props;

    const hasChildren = children !== undefined;
    const hasIcon = ButtonIconBefore !== undefined || ButtonIconAfter !== undefined;

    const iconClassName = clsx(styles.icon, isLoading && styles.contentHidden);

    const innerContent = (
        <>
            {ButtonIconBefore !== undefined && (
                <ButtonIconBefore className={clsx(iconClassName, classes?.iconBefore)} />
            )}

            {hasChildren && (
                <span className={clsx(classes?.content, isLoading && styles.contentHidden)}>
                    {children}
                </span>
            )}

            {ButtonIconAfter !== undefined && (
                <ButtonIconAfter className={clsx(iconClassName, classes?.iconAfter)} />
            )}
        </>
    );

    const rootClassName = clsx(
        styles.root,
        variantClassNameByVariant[variant],
        themeClassNameByColor[theme],
        hasIcon && !hasChildren && styles.onlyIcon,
        isLoading && styles.isLoading,
        className,
    );

    return link === undefined ? (
        <button
            className={rootClassName}
            type="button"
            disabled={disabled || isLoading}
            onClick={onClick}
            {...otherProps}
        >
            {innerContent}
        </button>
    ) : (
        <Link
            href={link}
            className={rootClassName}
            target={target !== undefined ? target : '_self'}
        >
            {innerContent}
        </Link>
    );
};
