# perfecto-nemo-example

Demonstrate how to use [NemoJS](https://nemo.js.org) to interact with PerfectoMobile devices.

## Installation

```bash
$ git clone git@github.com:grawk/perfecto-nemo-example.git
$ cd perfecto-nemo-example
$ npm install
```

## Set up

In order to correctly connect to PerfectoMobile, set the following variables to your environment:

```bash
$ export PERFECTO_USER=youruser@gmail.com
$ export PERFECTO_PW=yourpassword
$ export PERFECTO_BROWSER=mobileSafari
$ export PERFECTO_VERSION=8.*
$ export PERFECTO_PLATFORM=iOS
$ export PERFECTO_DEVICE_VERSION=iPhone-6
$ export PERFECTO_SERVER=https://partners.perfectomobile.com/nexperience/perfectomobile/wd/hub
```

Alternatively you can replace the dynamic entries in `config/config.json`:

```javascript
{
  "driver": {
    "builders": {
      "usingServer": ["env:PERFECTO_SERVER"],
      "withCapabilities": [{
        "browserName":     "env:PERFECTO_BROWSER",
        "user":            "env:PERFECTO_USER",
        "password":        "env:PERFECTO_PW",
        "deviceName":      "env:PERFECTO_DEVICE",
        "platformVersion": "env:PERFECTO_VERSION",
        "platformName":    "env:PERFECTO_PLATFORM"
      }]
    }
  },
```

but obviously NOT hardcoding these values protects your information and makes the test more easily configurable.

## Run

```bash
$ node index.js
```

## Reports

Reports will be output to the `/report` directory.