import React, { useContext, useState } from 'react';
import firebase from '../utils/firebaseConfig';
import { UidContext } from './UidContext';

const Create = () => {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const uid = useContext(UidContext);

    const createQuote = () => {
        const quotesDB = firebase.database().ref('quotesDB');

        if (text !== '' && author !== '') {
            const quote = {
                uid,
                author,
                text,
            };

            quotesDB.push(quote);

            setAuthor('');
            setText('');
        }
    };

    const onChangeAuthor = (e) => setAuthor(e.target.value);
    const onChangeText = (e) => setText(e.target.value);

    return (
        <div className="create">
            <h4>Déposer une citation</h4>
            <div className="form">
                <input type="text" placeholder="Auteur" value={author} onChange={onChangeAuthor} />
                <textarea placeholder="Citation" value={text} onChange={onChangeText} />
                <button onClick={createQuote}>Create</button>
            </div>
        </div>
    );
};

export default Create;
