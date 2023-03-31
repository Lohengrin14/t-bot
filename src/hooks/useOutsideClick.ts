import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';

export function useOutsideClick(
  ref: React.MutableRefObject<any>,
  callback: Dispatch<SetStateAction<boolean>>,
  flag: boolean
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(flag);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}
