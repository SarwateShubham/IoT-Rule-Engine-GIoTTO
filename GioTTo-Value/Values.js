module.exports = function(RED) {
    function GioTToValueNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
	this.compare_value=config.compare_value;
	this.satisfy=config.satisfy;
	this.notsatisfy=config.notsatisfy;
        this.on('input', function(msg) {
	    console.log(this.compare_value);
	    console.log(msg.payload.value);
	    console.log(msg.payload.role);
	    if(msg.payload.role==">"&&msg.payload.value>this.compare_value)
            msg.payload = this.satisfy;
	    else if(msg.payload.role=="<"&&msg.payload.value<this.compare_value)
            msg.payload = this.satisfy;
	    else if(msg.payload.role=="="&&msg.payload.value==this.compare_value)
            msg.payload = this.satisfy;
	    else if(msg.payload.role=="!="&&msg.payload.value!=this.compare_value)
            msg.payload = this.satisfy;
	    else
	    msg.payload = this.notsatisfy;
            node.send(msg);
        });
    }
    RED.nodes.registerType("GioTTo-Value",GioTToValueNode);
}
