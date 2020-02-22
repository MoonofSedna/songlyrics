import React, {useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';




const Form = ({saveSearchLyrics}) => {

    const [search, saveSearch] = useState({
        artist: '',
        song: ''
    });

    const [error, saveError] = useState(false);
    
    const {artist, song}= search;
    
    
    //****Input function: read. ****//
    
    
    const UpdateState = e => {
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    //****Consult API****//


    const SearchInfo = e => {

        e.preventDefault();

         //Validate

        if(artist.trim() === '' || song.trim() === ''){
            saveError(true);
            return;
        }
        saveError(false);

        // Send to APP.js 

        saveSearchLyrics(search);
    }
    
    return ( 
        <div className="content-t">
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={SearchInfo}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2">
                        
                        <fieldset >
                            <legend className="text-center">Search song lyrics</legend>
                            {error ? <Error message="All fields are required" /> :null}
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artist</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Artist Name"
                                            onChange={UpdateState}
                                            value={artist}
                                        />
                                    </div>
                                    
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                        <label>Song</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Song Name"
                                            onChange={UpdateState}
                                            value={song}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn float-right">Search
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
     );
}

Form.propTypes = {
    saveSearchLyrics:PropTypes.func.isRequired
}
export default Form;