import React, {Fragment} from 'react';
import PropTypes from 'prop-types';


const Song = ({lyrics}) => {

    if(lyrics.length === 0) return null;

   return(
    <Fragment>
        <h2>Song Lyrics</h2>
        <p className="lyrics mb-5">{lyrics}</p>
    </Fragment>
   );

}
Song.propTypes = {
    lyrics:PropTypes.string.isRequired
}

export default Song;