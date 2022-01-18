# DevopsProjApp

# Endpoint 

 For local host 
```sh
http://localhost:5000/
```
 For Heroku host 
```sh
https://mydevops-project-app.herokuapp.com/
```

# APIs
## Home

end point 
```http
GET /
```

 Response example

```string
Home !!!
```

## Addition

end point 
```http
GET /add?n1=15&n2=5
```

 Response example

```json
15
```

## Multiplication

end point 
```http
GET /mult?n1=5&n2=10
```

 Response example

```json
50
```

## Metrics api

end point 
```http
GET /metrics
```

 Response example

```string
# HELP Add Number of add function calls
# TYPE Add gauge
Add{app="nodejs-app"} 2

# HELP Multiply Number of function calls
# TYPE Multiply gauge
Multiply{app="nodejs-app"} 3
```
# Prometheus
## Prometheus Screenshots


# Grafana
## Grafana Screenshots






