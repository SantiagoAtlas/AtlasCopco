# Mqtt – SYS6000 V4

## Table of Contents

1. [Requirements](#requirements)  
2. [Tool Installation](#tool-installation)  
3. [MQTT Broker Configuration](#mqtt-broker-configuration)  
4. [Adding New Parameters](#adding-new-parameters)  
5. [Simulation Module](#simulation-module)  
6. [Validation with MQTT Explorer](#validation-with-mqtt-explorer)  
7. [GitLab Repository](#gitlab-repository)  
8. [Final Notes](#final-notes)  
9. [Detailed Documentation](#detailed-documentation)

---

## Requirements

- MQTT Broker IP  
- Access to network (ETH3 connection to console module V3)  
- Assigned username and password for VisuXP and/or MQTT Broker

---

## Tool Installation

### MQTT

MQTT is a lightweight protocol ideal for low-power devices or limited network conditions.  
Available at:

- **Self-contained**: Use for Linux versions < 3.2.42 (includes .NET)  
- **Framework**: Use for Linux versions ≥ 3.2.42 (requires preinstalled .NET)

### Recommended Tools

- [WinSCP](https://winscp.net/eng/download.php): file transfer  
- [PuTTY](https://www.putty.org/): terminal access  
- [MQTT Explorer](https://mqtt-explorer.com/): MQTT message viewer  
- [Visual Studio](https://visualstudio.microsoft.com/): C#/Python IDE  
- [SourceTree](https://www.sourcetreeapp.com/): Git GUI client

---

## MQTT Broker Configuration

1. Open your MQTT client and create a new connection.  
2. Fill in the following:
   - **Name**: any identifier
   - **Protocol**: `mqtt://`
   - **Host**: IP address of the broker
   - **Port**: `1883` (non-TLS) or `8883` (TLS)
3. Enable TLS if required and provide the certificate.  
4. Add username/password if authentication is required.  
5. Click **Save** and **Connect**.  
6. If successful, the topic tree will be displayed.

---

## Adding New Parameters

To integrate parameters in SYS6000 V4:

1. Open the `GroupDefinition` file:
   - `ScaId`: unique parameter identifier  
   - `XParm`: real-time data source  
   - `JSON Name`: how it appears in the JSON message

2. Then update the `MessageStructure` file to reference each `ScaId`  
3. Ensure `DataType` matches the expected type  
4. If business logic is needed, define it in `GroupDefinition`

**Tip:** Use MQTT Explorer to validate live message structure and values.

---

## Simulation Module

The `SimulationDataRetriever` module provides data simulation capabilities without a real environment. It generates mock values for:

- Active barrel numbers  
- Material types  
- Expiration dates  
- Installer info and install dates  

All simulated data is sent via MQTT and can be reviewed using MQTT Explorer.

---

## Validation with MQTT Explorer

1. Launch MQTT Explorer  
2. Create a new connection using the broker's IP and port  
3. Add credentials if required  
4. Connect and view topics  
5. Ensure values are transmitted correctly

---

## GitLab Repository

Main repository:  
[GitLab – SCA.MQTT](https://10.49.38.12/components/sca.mqtt/-/tree/master?ref_type=heads)

### Branch Strategy:

- `master`: stable production version  
- `development`: integration of new features  
- `feature/[name]`: individual development per task

---

## Final Notes

- **VisuXP** visualization software is available in the hardware folder  
- Configuration should be performed through ETH3  
- Linux version can be verified under the "Info" menu in the interface to choose the right binary

---

## Detailed Documentation

You can download the complete PDF documentation here:  
[Developer MQTT Documentation (PDF)](/DeveloperMQTTDocumentation.pdf)

Alternatively, you can view the PDF directly here:

<iframe src="/DeveloperMQTTDocumentation.pdf" width="100%" height="600px">
  This browser does not support PDFs. Please download the PDF to view it:
  <a href="/DeveloperMQTTDocumentation.pdf">Download PDF</a>.
</iframe>
