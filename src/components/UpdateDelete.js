import React, { useContext, useState } from 'react';
import firebase from '../utils/firebaseConfig';
import { UidContext } from './UidContext';

const UpdateDelete = ({ quote, quote: { id, text, author } }) => {
    const [update, setUpdate] = useState(false);
    const [authorUpdate, setAuthorUpdate] = useState('');
    const [textUpdate, setTextUpdate] = useState('');

    const uid = useContext(UidContext);

    const updateQuote = () => {
        let quote = firebase.database().ref('quotesDB').child(id);

        if (authorUpdate !== '') {
            quote.update({ author: authorUpdate });
        }
        if (textUpdate !== '') {
            quote.update({ text: textUpdate });
        }

        setUpdate(false);
    };

    const deleteQuote = () => {
        let quote = firebase.database().ref('quotesDB').child(id);

        quote.remove();
    };

    const handleUpdate = () => setUpdate(!update);

    return (
        <li>
            {!update ? (
                <div className="item-container">
                    <p>{text}</p>
                    <h6>{author}</h6>

                    {quote.uid === uid && (
                        <div className="buttons-container">
                            <button onClick={handleUpdate}>Update</button>
                            <button onClick={deleteQuote}>Delete</button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="item-container-update">
                    <textarea defaultValue={text} onChange={(e) => setTextUpdate(e.target.value)} />
                    <input defaultValue={author} onChange={(e) => setAuthorUpdate(e.target.value)} />
                    <button onClick={updateQuote}>Valider modification</button>
                </div>
            )}
        </li>
    );
};

export default UpdateDelete;
