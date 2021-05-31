import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes'

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const {active:note} = useSelector(state => state.notes)
    const handleSaveNote = () => {
        dispatch(startSaveNote(note));
    }
    const handleSavePicture = () => {
        document.querySelector('#fileSelector').click(); 
        // document.querySelector('#colorSelector').click(); 
    }

    const handleColorChange = (e) => console.log(e);

    const handleFileChange = (e ) => {
        const file = e.target.files[0];
        if( file ){
            dispatch( startUploading(file) )
        }

    };
    return (
      <div className="notes__appbar">
        <span>28 de agosto 2020</span>

        <input id="fileSelector" type="file" style={{ display: 'none' }} onChange={handleFileChange} />
        <input id="colorSelector" type="color" style={{ display: 'none' }} onChange={handleColorChange} />

        <div>
          <button className="btn" onClick={handleSavePicture}>
            Picture
          </button>

          <button className="btn" onClick={handleSaveNote}>
            Save
          </button>
        </div>
      </div>
    );
}
