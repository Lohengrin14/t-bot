import styles from './DropMenu.module.css';
import React, { FC, useEffect, useRef, useState } from 'react';
import List from '../List/List';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import DropMenuItem from '../DropMenuItem/DropMenuItem';
import {
  stringValueKeys,
  UserResumeAction,
  userResumeActionTypes
} from '../../types/userResume';
import { Dispatch } from 'react';
import {
  deleteUserResume,
  stringPropertyUpdateUserResume
} from '../../store/action-creator/userResume';
import { useDispatch } from 'react-redux';
import { fetchVacancy } from '../../store/action-creator/vacancy';

export interface DropMenuProps<P, C> {
  title: string;
  items: string[];
  onClick?: () => void;
  wrapRef?: React.MutableRefObject<null>;
  multiChoice?: boolean;
  itemSelectAction?: {
    callback: (property: P, data: string) => C;
    property: P;
  };
  itemUnSelectAction?: {
    callback: (property: P, data: string) => C;
    property: P;
  };
}

export default function DropMenu<P extends string, C>(
  props: DropMenuProps<P, C>
) {
  const {
    items,
    title,
    wrapRef,
    multiChoice,
    itemSelectAction,
    itemUnSelectAction
  } = props;
  const [open, setOpen] = useState(false);
  const [notSelectedItems, setNotSelectedItems] = useState<typeof items>(items);
  const [selectedITems, setSelectedItems] = useState<typeof items>([]);
  const wrapperRef = useRef(null);
  useOutsideClick(wrapRef || wrapperRef, setOpen, false);

  const showMenu = () => setOpen((open) => !open);

  const rootStyles = [styles.dropitem, styles.dropitem__acvite];

  const setItemStyles = () => {
    if (open) {
      return rootStyles.join(' ');
    }
    return styles.dropitem;
  };
  const selectItem = (item: typeof items[0]) => {
    if (itemSelectAction) {
      itemSelectAction.callback(itemSelectAction.property, item);
    }

    if (selectedITems.length > 0 && !multiChoice) {
      setNotSelectedItems((notSelectedItems) => {
        notSelectedItems.push(selectedITems[0]);
        return notSelectedItems.filter((i) => i !== item);
      });
      setSelectedItems((selectedItems) => {
        selectedItems.pop();
        selectedItems.push(item);
        return selectedItems;
      });
      setOpen(false);
      return;
    }
    setSelectedItems((selectedItems) => {
      selectedItems.push(item);
      return selectedItems;
    });
    setNotSelectedItems((notSelectedItems) => {
      return notSelectedItems.filter((i) => i !== item);
    });

    if (multiChoice) {
      return;
    }
    setOpen(false);
  };
  const unSelectItem = (e: React.MouseEvent, item: typeof items[0]) => {
    e.stopPropagation();
    if (selectedITems.length === 1) {
      if (open === false) {
        setOpen(true);
      }
    }
    if (itemUnSelectAction) {
      itemUnSelectAction.callback(itemUnSelectAction.property, item);
    }
    setNotSelectedItems((selectedItems) => {
      selectedItems.push(item);
      return selectedItems;
    });
    setSelectedItems((notSelectedItems) => {
      return notSelectedItems.filter((i) => i !== item);
    });
  };

  return (
    <div className={styles.container} ref={wrapperRef} onClick={props.onClick}>
      <div onClick={showMenu} className={styles.container__menu}>
        <span className={styles.menuTitle}>{title}</span>
        <List
          items={selectedITems}
          renderItem={(item, index) => (
            <DropMenuItem
              key={index}
              selected={true}
              onClick={(e) => unSelectItem(e, item)}
              value={item}
            />
          )}
        />
      </div>
      <div className={setItemStyles()}>
        <List
          items={notSelectedItems}
          renderItem={(item, index) => (
            <DropMenuItem
              key={index}
              selected={false}
              onClick={() => selectItem(item)}
              value={item}
            />
          )}
        />
      </div>
    </div>
  );
}
