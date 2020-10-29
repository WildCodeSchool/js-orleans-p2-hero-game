import React from 'react';
import ReactPlayer from 'react-player/youtube'
import './Playwindow.css';

class Playwindow extends React.Component {
    render() {
        return (
            <div className='playwindowmain'>
                <div className="Playwindow">
                    <a className="buttonplay" href='#'><h2 className="play">JOUER</h2></a>
                    < ReactPlayer
                        className='react-player'
                        url='https://youtu.be/LgLu9M0NzY0'
                        width='100%'
                        height='100%'
                        loop='true'
                        playing='true'
                        volume='0'
                    />
                </div>
            </div>
        )
    }
}

export default Playwindow;

