# View latest uploaded

[View the latest map uploaded](https://github.com/masternone/WH40K_Map_Campaign/blob/main/map/Map_Campaign.pdf)

# Build map from code

to view the map correctly you will need to install a few things

Install [NodeJS](https://nodejs.org/) from their web page and follow their instructions.

next run this command to install a simple web server

```shell
npm i -g http-server
```

start the server

```shell
cd [path]/[to]/[this]/[directory]
http-server . -c-1
```

[http://127.0.0.1:8080/map.html](http://127.0.0.1:8080/map.html)

# Edit the map

You will need to install the dependencies
```shell
npm i
```

Build the latest version with any of your changes

```shell
npm run build
```

Watch changes
???
