import Peer from 'peerjs';


function makeCall() {
    const peer = new Peer('Sender-one', {host: localhost, port: 9001, path: '/videoChat', debug: 2});
    navigator.mediaDevices.getUserMedia({video: true, audio: true}, (stream) => {
        const call = peer.call('Receiver-one', stream);
        call.on('stream', (remoteStream) => {
            document.querySelector('video#remote').srcObject = remoteStream
        });
    }, (err) => {
        console.error('Failed to get local stream', err);
    });
}

function receiveCall(){
    const peer = new Peer('Receiver-one', {host: localhost, port: 9001, path: '/videoChat', debug: 2});
    peer.on('call', (call) => {
        navigator.mediaDevices.getUserMedia({video: true, audio: true}, (stream) => {
            call.answer(stream); // Answer the call with an A/V stream.
            call.on('stream', (remoteStream) => {
                document.querySelector('video#remote').srcObject = remoteStream
            });
        }, (err) => {
          console.error('Failed to get local stream', err);
        });
      });
}

export default videoClient;
