import React, {useState} from 'react';
import {createProject} from '../../actions/projectAtions';
import {connect} from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

const CreateProject = ({createProject}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
 

    const onSubmit = e => {
        e.preventDefault();
        // console.log({title, content})
        if(title === '' || content === '') {
            M.toast({html: 'Please Fill in All the Details!'})
        }
        createProject({title, content});
        M.toast({ html: 'Project Added Successfully!'});
        setContent('');
        setTitle('');
    }

    return (
        <div className='container'>
            <form onSubmit={onSubmit} className='white'>
                <h5 className='grey-text text-darken-3'>Create New Project</h5>
                <div className='input-field'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' onChange={(e) => setTitle(e.target.value)} value={title} name='title' required/>
                </div>
                <div className='input-field'>
                    <label htmlFor='content'>Project Content</label>
                    <textarea className='materialize-textarea' id='content' value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
                </div>
                <div className='input-field'>
                    <button className='btn pink lighten-1 z-depth-0'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default connect(null, {createProject})(CreateProject);
