# IoT-Rule-Engine-GIoTTO
Rule engine is a node-red based visual programming tool to use program simple rules to actuate devices that are connected to the Building Depot/ GIoTTO platform.

It consists for 4 different nodes that :
1.GIoTTO-Sensor : The following node is developed inorder to take the sensor readings from the sensors that have been connected to GioTTO.
2.GIoTTO-Condition : The following node is used to allow the user to specify the condition that the value of the sensor needs to be compared with.
3.GIoTTO-Value : The function of this node is to specify the value to which the sensor reading must be compared to.
4.GIoTTO-Actuate : The GioTTO Actuate node allows the user to specify the smart device that he needs to actuate according to the condition that has been defined before.

*More details regarding the nodes can be found here.*

**Steps to installing and using the Rule engine**
**STEP1** : Install Node-red

These four nodes have to be present in the .node-red folder
