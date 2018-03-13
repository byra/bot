import fetch from "cross-fetch";

export const onRequest = (request) =>{
    return dispatch => {
        fetch("http://54.213.230.201:8000/conversations/default/parse?q=" + request)
            .then(res => {
                if (res.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return res.json();
            })
            .then(response => {
                dispatch(receivedData(response));
            })
            .catch(err => {
                console.error(err);
            });

    };
};

const receivedData =(response)=>{
    let type="";
    switch(response.tracker.latest_message.intent.name){
        case "Internet Connectivity Issues":
            type="Internet Connectivity Issues";
            break;
        case "Validation":
            type="Validation";
            break;
        case "Main Menu":
            type="start";
            break;
        case "Account & Billing":
            type="Account & Billing";
            break;
        case "Not Helpful":
            type="Not Helpful";
            break;
        case "EmailId":
            type="EmailId";
            break;
        case "Greeting":
            type="Greeting";
            break;
        case "Bye":
            type="Bye";
            break;
        case "Forgot Network Name":
            type="Forgot Network Name";
            break;
        case "Forgot Wifi Password":
            type="Forgot Wifi Password";
            break;
        case "Reached Device Limit":
            type="Reached Device Limit";
            break;
        case "Forgot Account ID":
            type="Forgot Account ID";
            break;
        case "Forgot Account Pass Code":
            type="Forgot Account Pass Code";
            break;

    }
    return{
        type:type,
        payload:response
    };
};

export const onOpen = () =>{
    return{
        type:"start",
        payload:null
    };
};