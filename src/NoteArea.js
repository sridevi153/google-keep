import React, { useEffect, useRef, useState } from 'react';
import { IoIosAdd } from "react-icons/io";

function NoteArea({onAdd}) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const titleInputRef = useRef();

    useEffect(() => {
      titleInputRef.current.focus();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title === '' || content === ''){
            alert('Empty note cannot be created');
            return;
        }
        onAdd({ title, content });
        setTitle('');
        setContent('');
      };

  return (
    <div>
      <form>
        <input ref={titleInputRef} type='text' value={title} name='Title' placeholder='Title' onChange={(event) => setTitle(event.target.value)} />
        <br />
        <textarea type='text' value={content} name='NoteContent' placeholder='type note here' onChange={(event) => setContent(event.target.value)} />
        <button className='plus' onClick={handleSubmit}>
          <IoIosAdd size={35} />
        </button>
      </form>
    </div>
  );
}

export default NoteArea;