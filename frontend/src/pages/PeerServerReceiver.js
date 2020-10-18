import React from 'react';
import Peer from 'peerjs';

class receiveClient extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const peer = new Peer('receiver-dubhacks2020');
        var constraints = {video: true, audio: true};
        peer.on('call', function(call) {
        navigator.mediaDevices.getUserMedia(constraints)
            .then(function(localStream) {
                var video = document.querySelector("video");
                video.srcObject = localStream;
                video.onloadedmetadata = function(e) {
                    video.play();
                };
                call.answer(localStream);
                call.on('stream', function(remoteStream) {
                    var video = document.querySelector("remote");
                    video.srcObject = remoteStream;
                    video.onloadedmetadata = function(e) {
                        video.play();
                    };
            }).catch(function(err) {
                console.log(err.name + ": " + err.message);
            })
        })});
    }

    render() {
        return (
            <div>
                <video autoPlay={true} id="videoElement"></video>
                <br/>
                <button onClick={this.handleClick}>Start streaming</button>
                <br/>
                <video autoPlay={true} id="remoteElement"></video>
            </div>
        );
    }
}

export default receiveClient;