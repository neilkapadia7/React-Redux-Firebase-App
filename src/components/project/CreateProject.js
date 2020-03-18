import React, {useState} from 'react';
import {createProject} from '../../actions/projectAtions';
import {connect} from 'react-redux';

const CreateProject = ({createProject}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
 

    const onSubmit = e => {
        e.preventDefault();
        // console.log({title, content})
        createProject({title, content});
    }

    return (
        <div className='container'>
            <form onSubmit={onSubmit} className='white'>
                <h5 className='grey-text text-darken-3'>Create New Project</h5>
                <div className='input-field'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' onChange={(e) => setTitle(e.target.value)}  name='title'/>
                </div>
                <div className='input-field'>
                    <label htmlFor='content'>Project Content</label>
                    <textarea className='materialize-textarea' id='content' onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <div className='input-field'>
                    <button className='btn pink lighten-1 z-depth-0'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default connect(null, {createProject})(CreateProject);
