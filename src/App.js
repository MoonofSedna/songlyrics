import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/Form';
import Song from './components/Song';
import Info from './components/Info';
import Error from './components/Error';
import axios from 'axios';

  function App() {

    const [searchlyrics, saveSearchLyrics] = useState({});
    const [lyrics, saveLyrics] = useState('');
    const [info, SaveInfo] = useState({});
    const [error, saveError]= useState(false);


    useEffect(() =>{

      if(Object.keys(searchlyrics).length === 0) return;

      const ConsultAPILyrics= async () => {

        const {artist, song} =searchlyrics;

        const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
        const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
        
        const [lyrics, info] = await Promise.all([
          axios(url),
          axios(url2)
        ]);

        saveLyrics(lyrics.data.lyrics);
        SaveInfo(info.data.artists[0]);

        //Validate
        if(lyrics.data.lyrics === ""){
            saveError(true);
        } else {
          saveError(false);
        }
          
      }

      ConsultAPILyrics();


    }, [searchlyrics, info]);

    return (
      <Fragment>
        <Form
          saveSearchLyrics={saveSearchLyrics}/>
        <div className="container mt-5">
          <div className="row">

            <div className="col-md-6">
              <Info
              info={info}
              />
            </div>
            <div className="col-md-6">
              <Song 
              lyrics={lyrics}/>
              {error ? <Error message="Lyrics not found" /> :null}
              
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  export default App;
