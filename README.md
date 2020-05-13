# sandbox_hermione
### sandbox for various checks

## prerequisites global
### Install
node-v10.16.0
java
jdk

npm install -g node-gyp  
npm config set msvs_version 2017 –global  
npm install --global --production windows-build-tools  
npm install -g webdriverio  
npm install selenium-standalone@latest -g  
selenium-standalone install  

### restore dependecies in folder
npm install

### start selenium
selenium-standalone start

### run tests in folder
npx hermione


