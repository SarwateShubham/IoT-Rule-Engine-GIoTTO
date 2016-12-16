module.exports = function(RED) {
    function ConditionNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
	this.role=config.role;
        this.on('input', function(msg) {
	    console.log(this.role);
            msg.payload = {"value":msg.payload,"role":this.role}
	    node.send(msg);
        });
    }
    RED.nodes.registerType("GioTTo-Condition",ConditionNode);
}
