# Setup
1. Checkout this project
2. Run code ```bash npm install```
2. Run code ```bash npm run setup```

# Start
You only need to setup everyting once.
```bash
npm start
```

Note the security key on the back of the gateway

## Get trådfri credentials 
1. Note the security key on the back of the gateway

## Get Hue username
```bash
curl -X POST -d '{"devicetype":"my_hue_app"}' http://<IP_ADDRESS>/api --header "Content-Type:application/json"
```
