import React, { FC } from "react";
import cn from 'classnames';

import styles from './ActionLink.module.css';

type ActionLinkProps = {
  size?: 's' | 'm' | 'l';
} & React.AnchorHTMLAttributes<HTMLAnchorElement>
const ActionLink: FC<ActionLinkProps> = ({size = "m", className, ...props}) => {
  return (
    <a
        className={cn(styles.actionLink, className, {
            [styles.actionLink_size_s]: size === 's',
            [styles.actionLink_size_m]: size === 'm',
            [styles.actionLink_size_l]: size === 'l',
        })}
        {...props}
    />
  );
};

export default ActionLink;