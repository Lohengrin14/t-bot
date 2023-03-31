import styles from './DropMenuComposed.module.css'
import React, { FC, useEffect, useRef, useState } from 'react';
import List from '../List/List';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import DropMenuItem from '../DropMenuItem/DropMenuItem';
import DropMenu from '../DropMenu/DropMenu';


interface menuVariant<P, C> {
    variantTitle: string;
    itemSelectAction?: {
        callback: (property: P, data: string) => C
        property: P,
    }
    itemUnSelectAction?: {
        callback: (property: P, data: string) => C
        property: P,
    }
    multiChoice: boolean;
    variantOptions: string[];
}

interface DropMenuComposed<P, C> {
    menuTitle: string;
    menuVariants: menuVariant<P, C>[]
}

export default function DropMenuComposed<P extends string, C>(props: DropMenuComposed<P, C>) {
    const { menuTitle, menuVariants } = props
    const [open, setOpen] = useState(false)
    const [notSelectedItems, setNotSelectedItems] = useState<menuVariant<P, C>[]>(menuVariants)
    const [selectedITems, setSelectedItems] = useState<menuVariant<P, C>[]>([])
    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef, setOpen, false)

    const showMenu = () => (
        setOpen((open) => !open)
    )
    const hide = () => {
        setOpen(false)
    }
    useEffect(() => {
        document.addEventListener('scroll', () => hide)
    }, [])

    const rootStyles = [styles.dropitem, styles.dropitem__acvite]

    const setItemStyles = () => {
        if (open) {
            return rootStyles.join(' ')
        }
        return styles.dropitem
    }
    // const selectItem = (item: menuVariant) => {
    //     setSelectedItems((selectedItems) => {
    //         selectedItems.push(item);
    //         return selectedItems
    //     })
    //     setNotSelectedItems((notSelectedItems) => {
    //         return notSelectedItems.filter((i) => i !== item);
    //     })
    // }
    // const unSelectItem = (item: menuVariant) => {
    //     setNotSelectedItems((selectedItems) => {
    //         selectedItems.push(item);
    //         return selectedItems
    //     })
    //     setSelectedItems((notSelectedItems) => {
    //         return notSelectedItems.filter((i) => i !== item);
    //     })
    // }


    return < div className={styles.container} ref={wrapperRef} >
        <div onClick={showMenu} className={styles.menuTitle}  >{menuTitle}</div>
        <List items={selectedITems} renderItem={(item, index) => <DropMenu wrapRef={wrapperRef} items={item.variantOptions} key={index} title={item.variantTitle} />} />
        <div className={setItemStyles()}>
            <List items={notSelectedItems} renderItem={(item, index) => <DropMenu wrapRef={wrapperRef} items={item.variantOptions} key={index} title={item.variantTitle} multiChoice={item.multiChoice} />} />
        </div>
    </div >
};
// itemSelectAction={{ callback: item.itemSelectAction.callback, property: item.itemSelectAction.property }}