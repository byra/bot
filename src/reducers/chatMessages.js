import {v4} from "uuid";

export const chatMessages = (state = [], action)=>{
    let userResponse = null;
    let customRequest = null;
    switch(action.type){
        case "start":
            userResponse = null;
            customRequest = null;
            return [
                ...state,
                    {
                        userResponse:userResponse,
                        customRequest:customRequest,
                        url:null,
                        reply:["Welcome to Technical support! My name is Tina."],
                        response:"What can I help you with today?",
                        buttons:["Wifi Connection", "Account & Billing"]
                    }
            ];

        case "Internet Connectivity Issues":
            userResponse = null;
            customRequest = null;
            if(action.payload.tracker.latest_message.text === "Wifi Connection"){
                userResponse = action.payload.tracker.latest_message.text;
            }
            return [
                ...state,
                {
                    userResponse:userResponse,
                    customRequest:customRequest,
                    reply:["Thank you, I can definitely help you out with Internet Connectivity Issues."],
                    response:"More to this can be found in this link below.",
                    url:"http://goo.gl/DCF2qe",
                    buttons:["Helpful","Not Helpful"]
                }

            ];

        case "Validation":
            userResponse = null;
            customRequest = null;
            if(action.payload.tracker.latest_message.text === "Helpful"){
                userResponse = action.payload.tracker.latest_message.text;
            }else {
                customRequest = action.payload.tracker.latest_message.text;
            }
            return [
                ...state,
                {
                    userResponse:userResponse,
                    customRequest:customRequest,
                    reply:["We are happy to have solve your issue today. For other queries click on Main Menu."],
                    response:"Have a great day!",
                    url:null,
                    buttons:["Main Menu"]
                }
            ];
        case "Account & Billing":
            userResponse = null;
            customRequest = null;
            if(action.payload.tracker.latest_message.text === "Account & Billing"){
                userResponse = action.payload.tracker.latest_message.text;
            }else {
                customRequest = action.payload.tracker.latest_message.text;
            }
            return [
                ...state,
                {
                    userResponse:userResponse,
                    customRequest:customRequest,
                    reply:["Thank you, I can definitely help you out with the Account."],
                    response:"More to this can be found in this link below.",
                    url:"http://goo.gl/7bFTUi",
                    buttons:["Helpful","Not Helpful"]
                }
            ];
        case "Not Helpful":
            userResponse = null;
            customRequest = null;
            if(action.payload.tracker.latest_message.text === "Not Helpful"){
                userResponse = action.payload.tracker.latest_message.text;
            }else {
                customRequest = action.payload.tracker.latest_message.text;
            }
            return [
                ...state,
                {
                    userResponse:userResponse,
                    customRequest:customRequest,
                    reply:["What is your email address?"],
                    response:"We will get back to you soon on this issue.",
                    url:null,
                    buttons:[]
                }
            ];

        case "EmailId":
            userResponse = null;
            customRequest  = action.payload.tracker.latest_message.text;
            return [
                ...state,
                {
                    userResponse:userResponse,
                    customRequest:customRequest,
                    reply:["Your request has been submitted with ticket number "+ v4()],
                    response:"For other queries click on Main Menu.",
                    url:null,
                    buttons:["Main Menu"]
                }
            ];

        default:
            return state;
    }
};

