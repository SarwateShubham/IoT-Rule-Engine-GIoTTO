module.exports = function(RED) {
var result_json;
var sensor, condition, value, region, action, location, id,recent_val;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function RuleNode(config) {
    RED.nodes.createNode(this,config);
    this.location = config.location;
    location = config.location;
    this.sensor = config.sensor;
    sensor = config.sensor;
    this.region = config.region;
    region = config.region;
    this.uuid=config.uuid;
    console.log(this.uuid);
    this.on('input', function(msg) {
	recent_val=get_values(this.uuid);
	console.log(recent_val);
	msg.payload=recent_val;
	this.send(msg);
    });
}


function get_values(uuid){

  var end_time= new Date() / 1000;
  var start_time=end_time-150;
  var access_token=null;
  var vals, data;
var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'BD_oauth_address', false ); // false for synchronous request
    xmlHttp.send( null );
    data=JSON.parse(xmlHttp.responseText);
    access_token=data.access_token;
//    return access_token;

var xml = new XMLHttpRequest();
    xml.open("GET","BD_time_address"+uuid+"/timeseries?start_time="+String(start_time)+"&end_time="+String(end_time),false);
    xml.setRequestHeader("Authorization", "bearer " + access_token );
    xml.send( null );
    vals=JSON.parse(xml.responseText);
    recent_val=vals.data.series[0].values[vals.data.series[0].values.length-1][2];
    return  recent_val;

}

RED.nodes.registerType("GioTTo-Sensor",RuleNode);
}
