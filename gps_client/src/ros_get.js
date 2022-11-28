import React, { useEffect } from 'react';
import ROSLIB from "roslib";

import App from "./App";

var ROSLIB1 = require('roslib');

var ros = new ROSLIB.Ros({
    url : 'ws://localhost:9090'
});

const ROSGPS2=()=>{
    useEffect(() => {
        const ROSConnect = () => {
            try {
                ros.on("connection", () => {
                    console.log("Connected to websocket server.");
                    ROSGet(ros);
                });
                ros.on("error", () => {
                    const error = "Error connecting to websocket server.";
                    console.log(error);
                    alert({ error });
                });
                ros.on("close", () => {
                    console.log("Connection to websocket server closed.");
                });
            } catch {
                const error = "Failed to construct websocket. The URL is invalid.";
                console.log(error);
                alert({ error });
            }
        };
        ROSConnect();
    }, []);
    const ROSGet = (ros: any) => {
        let listener = new ROSLIB.Topic({
            ros: ros,
            name: "/chatter",
            messageType: "std_msgs/String",
        });

        listener.subscribe((message) => {
            // to do message
            console.log('Received message on ' + listener.name + ': ' + message.data);
            listener.unsubscribe();

        });
    };
    // Publish ex)
    // const ROSPost = () => {
    //     let published = new ROSLIB.Topic({
    //         ros: ros,
    //         name: "/frontend_socket",
    //         messageType: "std_msgs/String",
    //     });
    //
    //     const postData = new ROSLIB.Message({ data: 'do something' });
    //     published.publish(postData);
    // };
}

export default ROSGPS2;
