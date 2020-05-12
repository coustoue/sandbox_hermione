# sandbox_hermione
### sandbox for various checks

##prerequisites  
npm install -g node-gyp  
npm config set msvs_version 2017 –global  
npm install --global --production windows-build-tools  
npm install -g webdriverio  
npm i -g vvo/selenium-standalone  
selenium-standalone install  
npm i -g hermione  
npm init --yes  
npm i -save chai  

### restore dependecies
npm install

### start selenium
selenium-standalone start

### run tests
npx hermione


