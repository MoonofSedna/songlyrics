import React from 'react';
import PropTypes from 'prop-types';

    const Info = ({info}) => {

        if(Object.keys(info).length === 0) return null;
        
        const {strArtistThumb, strGenre, strBiographyEN} =info;
        
        return ( 

            <div className="card border-light">
                <div className="card-header text-light font-weight-bold">
                    Info Artist
                </div>
                <div className="card-body p-4">
                    <img src={info.strArtistThumb} alt="Logo"/>
                    <p className="card-text">Genre: {strGenre}.</p>
                    <h2 className="card-text">Biography:</h2>
                    <p className="card-text mb-3"> {strBiographyEN}</p>
                    <p className="card-text">
                        <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-lastfm"></i>
                        </a>
                    </p>
                </div>
            </div>



        );
    }
    Info.propTypes = {
        info:PropTypes.object.isRequired
    }
    export default Info;