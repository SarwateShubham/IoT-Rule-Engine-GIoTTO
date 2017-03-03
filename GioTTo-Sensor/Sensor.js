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
  uuid='199e9c75-1ea7-4971-937d-ccc4673c5cf6';
  var end_time= new Date() / 1000;
  var start_time=end_time-100;
  var access_token=null;
  var vals, data;
var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'BD_oauth_address', false ); // false for synchronous request
    xmlHttp.send( null );
    data=JSON.parse(xmlHttp.responseText);
    console.log(data);
    access_token=data.access_token;
//    return access_token;

var xml = new XMLHttpRequest();
    url="https://bd-exp.andrew.cmu.edu:82/api/sensor/"+uuid+"/timeseries?start_time="+String(start_time)+"&end_time="+String(end_time)
    //url='https://bd-exp.andrew.cmu.edu:82/api/sensor/199e9c75-1ea7-4971-937d-ccc4673c5cf6/timeseries?start_time=1488545905.22649&end_time=1488547405.22649'
    xml.open("GET",url,false);
    xml.setRequestHeader("Authorization", "Bearer " + access_token );
    xml.send(null);
    console.log(url);
    vals=JSON.parse(xml.responseText);
    console.log(vals);
    recent_val=vals.data.series[0].values[vals.data.series[0].values.length-1][2];
    console.log(recent_val);
    return  recent_val;
}

RED.nodes.registerType("GioTTo-Sensor",RuleNode);
}
