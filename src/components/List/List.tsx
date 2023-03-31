import styles from './List.module.css'

import React from 'react';

interface ListProps<T> {
    items: T[],
    renderItem: (item: T, index: number) => React.ReactNode
}



export default function List<T>(props: ListProps<T>) {
    return (
        <>
            {props.items.map(props.renderItem)}
        </>
    )
}

