import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Evgeniy</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Victoriya</NavLink>
                </div>
            <div className={s.dialog}>
                <NavLink to="/dialogs/3">Anna</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to="/dialogs/4">Max</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to="/dialogs/5">Anton</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to="/dialogs/6">Alice</NavLink>
            </div>
        </div>
        
    
    <div className={s.messages}>
        <div className={s.dialog}>
            Hello all !!!
        </div>
        <div className={s.dialog}>
            How are you friends?
        </div>
        <div className={s.dialog}>
            What's news?
        </div>
        <div className={s.dialog}>
            Hi!
        </div>
        <div className={s.dialog}>
            Aloha!!!
        </div>
        <div className={s.dialog}>
            Good morning!
        </div>
    </div>
    </div>
    )
}

export default Dialogs;

