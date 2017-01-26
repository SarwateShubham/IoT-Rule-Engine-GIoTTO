'''
This is the helper file for IoT-Rule Engine. To change the configuration settings
please edit the config.ini file and the changes will be reflected in the 
corresponding files and folders.
'''
import ConfigParser
Config= ConfigParser.ConfigParser()
Config.read("./config.ini")

def ConfigSectionMap(section):
    dict1 = {}
    options = Config.options(section)
    for option in options:
        try:
            dict1[option] = Config.get(section, option)
            if dict1[option] == -1:
                DebugPrint("skip: %s" % option)
        except:
            print("exception on %s!" % option)
            dict1[option] = None
    return dict1

BD_oauth_Address=ConfigSectionMap("ServerInfo")['serveraddress']
BD_oauth_Address+=':'+ConfigSectionMap("ServerInfo")['oauth_port']
BD_oauth_Address+='/oauth/access_token/client_id='
BD_oauth_Address+=ConfigSectionMap("UserInfo")['clientid']
BD_oauth_Address+='/client_secret='+ConfigSectionMap("UserInfo")['clientkey']
print(BD_oauth_Address)

BD_search_Address=ConfigSectionMap("ServerInfo")['serveraddress']+':'+ConfigSectionMap("ServerInfo")['oauth_port']+'/api/search'
print(BD_search_Address)

BD_actuate_Address=ConfigSectionMap("ServerInfo")['serveraddress']+':'+ConfigSectionMap("ServerInfo")['actuation_port']+'/api'
print(BD_actuate_Address)

BD_timeseries_Address=ConfigSectionMap("ServerInfo")['serveraddress']+':'+ConfigSectionMap("ServerInfo")['port']+'/sensor/'
print(BD_timeseries_Address)


# Read the Actuator.html file
filedata = None
with open('./GioTTo-Actuate/Actuator.html', 'r') as file :
  filedata = file.read()
filedata = filedata.replace('BD_oauth_address', BD_oauth_Address)
filedata = filedata.replace('BD_search_address', BD_search_Address)
with open('./GioTTo-Actuate/Actuator.html', 'w') as file:
  file.write(filedata)

#Read the Actuator.js file
filedata = None
with open('./GioTTo-Actuate/Actuator.js', 'r') as file :
  filedata = file.read()
filedata = filedata.replace('BD_actuate_address', BD_actuate_Address)
with open('./GioTTo-Actuate/Actuator.js', 'w') as file:
  file.write(filedata)

#Read the Sensor.js file
filedata = None
with open('./GioTTo-Sensor/Sensor.js', 'r') as file :
  filedata = file.read()
filedata = filedata.replace('BD_oauth_address', BD_oauth_Address)
filedata = filedata.replace('BD_time_address', BD_timeseries_Address)
with open('./GioTTo-Sensor/Sensor.js', 'w') as file:
  file.write(filedata)

#Read the Sensor.html file
filedata = None
with open('./GioTTo-Sensor/Sensor.html', 'r') as file :
  filedata = file.read()
filedata = filedata.replace('BD_oauth_address', BD_oauth_Address)
filedata = filedata.replace('BD_search_address', BD_search_Address)
with open('./GioTTo-Sensor/Sensor.html', 'w') as file:
  file.write(filedata)


