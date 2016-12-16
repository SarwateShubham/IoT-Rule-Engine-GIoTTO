module.exports = function(RED) {
var newstate1;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var result;
    function ActuateNode(config) {
        RED.nodes.createNode(this,config);
        this.name=config.name;
        this.location=config.location;
	this.region=config.region;
	this.sensor=config.sensor;
        this.identity=config.identity;
        this.type1=config.type1;
	this.newstate=config.newstate;
	this.on('input', function(msg) {
	   newstate1=msg.payload;
	   result=Actuate(this.type1,newstate1,this.identity);
            msg.payload = {"value":this.identity,"role":this.type1,"new":newstate1};
           this.send(msg);
        });
    }
function Actuate(type,new_state,identity){
var request = require('request');

request.post(
    'http://bd-exp.andrew.cmu.edu:69/api',
    { json: {type:type,new_state:String(new_state),identity:identity} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);
/*
    console.log("Entriya");
    var params="{type:\""+type+"\",new_state:\""+new_state+"\",identity:\""+identity+"\"}";
    var url = "http://bd-exp.andrew.cmu.edu:69/api";
    var xml = new XMLHttpRequest();
    xml.open("POST", url, true);
    console.log(params);
    xml.send(params);
    vals=JSON.parse(xml.responseText);
    console.log(vals)
    return  vals;
*/
}
    RED.nodes.registerType("GioTTo-Actuate",ActuateNode);
}

