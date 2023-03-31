import styles from './CreateInputFiled.module.css'
import React, { FC, useState } from 'react';
import { stringValueKeys } from '../../types/userResume';
interface CreateInputFiledProps {
    tip: string,
    placeholder?: string,
    property: stringValueKeys,
    onlyNumber?: true,
    onChange: (property: stringValueKeys, data: string) => void
}


const CreateInputFiled: FC<CreateInputFiledProps> = (props) => {
    const [value, setValue] = useState('')
    const reg = /[A-Za-zА-Яа-яЁё]/g
    return (
        <div className={styles.container}>
            <span className={styles.container__tip}>{props.tip}:</span>
            <input className={styles.container__input} placeholder={props.placeholder} value={value} onChange={(e) => {
                if (props.onlyNumber) {
                    e.target.value = e.target.value.replace(reg, '')
                }
                setValue(e.target.value);
                props.onChange(props.property, e.target.value)
            }}></input>
        </div >
    );
};

export default CreateInputFiled;