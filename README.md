# To run dockerised lambda locally
```
docker build -t hello .
docker run -p 9000:8080 hello
curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'
```

# To run serverless locally without docker

```
npx serverless invoke local --function listUsers
```


