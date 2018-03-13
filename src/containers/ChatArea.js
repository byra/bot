import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import {onRequest} from "../actions/chatMessages";
import Chat from "./Chat"

class ChatArea extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        let userMsg="";
        return (
            <div className="chat-container">
                <div className="row justify-content-start">
                    <div className="col">
                        <div className="chat-body">
                            <Chat/>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-start">
                    <div className="col">
                        <div className="chat-footer">
                            <div className="container chat-text">
                                <div className="row justify-content-start input-group input-group-lg">
                                    <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"
                                           ref={node =>
                                                {
                                                    userMsg = node
                                                }
                                            }
                                           onKeyPress={
                                               (event) => {
                                                   if (event.key === 'Enter' && userMsg.value.trim() !== "") {
                                                       this.props.fetchResponse(userMsg.value.trim());
                                                       userMsg.value = "";
                                                   }
                                               }
                                           }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) =>{
    return{

    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchResponse: (request) => dispatch(onRequest(request)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatArea);