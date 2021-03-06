# Traffic

Simulation of a traffic intersection.

## How to Run

### Using Docker Compose

Add `traffic.local` to the host file and direct it to the docker host, usually `127.0.0.1`.

```
docker-compose -f docker-compose.dev.yml up -d
```

_Open [https://traffic.local](https://traffic.local)._

### Using Docker

```
docker build -t traffic-client client
docker run -p 3000:3000 traffic-client
```
_Open [http://localhost:3000](http://localhost:3000)._

### Using Node

```
cd client
npm i
npm build
npm start
```

_Open [http://localhost:3000](http://localhost:3000)._
