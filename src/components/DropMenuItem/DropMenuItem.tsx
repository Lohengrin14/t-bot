import styles from './DropMenuItem.module.css'

import React, { FC, useState } from 'react';


interface DropMenuItemProps {
    selected: boolean;
    value: any;
    onClick: (e: React.MouseEvent) => void
}

const DropMenuItem: FC<DropMenuItemProps> = (props) => {
    const { selected, value, onClick } = props;
    const rootStle = [styles.menuItem, styles.menuItem_selected]
    const items = [
        { id: 'q', value: 'квалификация' },
        { id: 's', value: 'специлизация' },
        { id: 'l', value: 'местоположение' },
        { id: 'b', value: 'занятость' }
    ]
    return (
        <div className={selected ? rootStle.join(' ') : styles.menuItem} onClick={(e) => onClick(e)}>
            <span>{value}</span>{selected ? < span onClick={(e) => onClick(e)}> X</span> : <></>}
        </div >
    );
};

export default DropMenuItem;