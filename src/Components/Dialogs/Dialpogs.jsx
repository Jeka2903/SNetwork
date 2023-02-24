import React from 'react';
import DialogItem from './DialogItem/DialpogsItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';




const Dialogs = (props) => {



    let dialogs = [
        { id: 1, name: 'Evgeniy' },
        { id: 2, name: 'Victoriya' },
        { id: 3, name: 'Anna' },
        { id: 4, name: 'Max' },
        { id: 5, name: 'Anton' },
        { id: 6, name: 'Alice' }
    ]


    let messages = [
        { id: 1, message: 'Hello all!!!' },
        { id: 2, message: 'How are you friends?' },
        { id: 3, message: "What's news?" },
        { id: 4, message: 'Hi!' },
        { id: 5, message: 'Aloha!!!' },
        { id: 6, message: 'Good morning!' }
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map( m => <Message message={m.message}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}
                </div>

            


            <div className={s.messages}>
                
            {messagesElements}
        
            </div>
        </div>
    )
}

export default Dialogs;

