# IoT-Rule-Engine-GIoTTO


## Table of contents

- [Introduction](#introduction)
- [Pre-requisites](#prerequisites)
- [How to make a rule ?](#making-a-rule)


## Introduction


Rule engine is a node-red based visual programming tool to use program simple rules to actuate devices that are connected to the Building Depot/ GIoTTO platform.

It consists for 4 different nodes :

- GIoTTO-Sensor : The following node is developed in-order to take the sensor readings from the sensors that have been connected to GioTTO.
- GIoTTO-Condition : The following node is used to allow the user to specify the condition that the value of the sensor needs to be compared with.
- GIoTTO-Value : The function of this node is to specify the value to which the sensor reading must be compared to.
- GIoTTO-Actuate : The GioTTO Actuate node allows the user to specify the smart device that he needs to actuate according to the condition that has been defined before.

_More details regarding the nodes can be found here._

## Prerequisites


STEP 1 : Please have a running version of [Building Depot/GIoTTO](http://iotexpedition.org/downloads.html) with the Actuation Engine running on the target machine and a set of actuators, sensors posting data to the GIoTTO.

STEP 2 : Make sure that actuators have a type, identity tag that allows it to be used by the Actuation engine.

STEP 3 : Obtain a client ID and client Secret from Building Depot which shall be used for the Rule Engine.

## Installation

STEP 1 : Install [Node-Red](https://nodered.org/docs/getting-started/installation) for the corresponding operating system (Preferably Linux)

STEP 2 : Install [XMLHttpRequest](https://www.npmjs.com/package/xmlhttprequest) if it is not already installed.

STEP 3 : Once Node-red has been successfully installed, please clone this repository and copy the make sure that the  folders (GioTTo-Actuate,GioTTo-Value,GioTTo-Condition,GioTTo-Sensor) are present.

STEP 4 : Open to the   [.node-red](https://nodered.org/docs/configuration) folder, by default whose path is $HOME/.node-red and check if there is a **nodes** folder present if not please make one.

STEP 5 : Copy all the 4 folders to the **nodes**  folder discussed above whose default path should be $HOME/.node-red/nodes.

STEP 6 : (*When Running for the first time*)Please add the address of BD,Actuation Engine and the client credentials to the **config.ini** file and run the **helper.py** python script. 

STEP 7 : Open the terminal and run command **&quot;node-red&quot;** which will start the Node-red interface on localhost:1880 by default.

_In-order to change the credentials if you are not running the Rule engine for the first time, please run the **fixer.py** python script first to restore the Nodes to the initial state, then edit the **config.ini** file with the new credentials and then run the **helper.py** python script_

## Making a rule


Step 1: Drag an inject node and set it on repeating at an interval of your choice.

Step 2: Drag a GioTTo-Sensor node and select the sensor that you wish to use.

Step 3: Drag a GioTTo-Condition node and select the condition.

Step 4: Drag a GioTTo-Value node and specify the value you wish to Compare and the new state that you wish the device to be in if the condition is satisfied and when it is not satisfied.

Step 5: Drag a GioTTo-Actuate node and select the actuator of your choice!

Step 6: Join all the nodes and click Deploy!

For a video Demonstration, Please refer [this](https://www.youtube.com/watch?v=79BcuO4kHEE).
