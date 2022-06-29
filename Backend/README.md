# Backend API 

## How to run?
```bash
npm install // Install dependencies
npm run dev // Run the development server
npm run start // Run the production server
```

## Endpoints

Export from Postman

``` 
http://localhost:3000/users/ // POST - Create a new user
http://localhost:3000/users/login // POST - Login
http://localhost:3000/users/all // GET - Get all users
http://localhost:3000/users/:id // GET - Get a user by id
http://localhost:3000/users/:id // DELETE - Delete a user
http://localhost:3000/users/:id // PUT - Update a user
http://localhost:3000/users/logout // POST - Logout

http://localhost:3000/contact/ // POST - Create a new contact
http://localhost:3000/contact/ // GET - Get all contacts
http://localhost:3000/contact/:name // PUT - Update a contact
http://localhost:3000/contact/:name // DELETE - Delete a contact
http://localhost:3000/contact/:name // GET - Get a contact by name
```

```JSON
{
	"info": {
		"_postman_id": "b73dcb31-7250-4d64-bf5e-46df74ed569c",
		"name": "APIBackend",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "21330091"
	},
	"item": [
		{
			"name": "/users",
			"item": [
				{
					"name": "createUser",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"username\": \"user2\",\r\n  \"password\": \"12345\",\r\n  \"passwordConfirmation\": \"12345\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/users/",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"users",
								""
							],
							"query": [
								{
									"key": "",
									"value": null,
									"disabled": true
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "loginUser",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"username\": \"user1\",\r\n  \"password\": \"12345\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/users/login",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"users",
								"login"
							]
						}
					},
					"response": []
				},
				{
					"name": "getAllUser",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU2Mzg1NjAwLCJleHAiOjE2NTY0NzIwMDB9.-WKFi12envUVadzAYaN_6ViiLSShBJaQtjYTeKyiCpE",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/users/all",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"users",
								"all"
							]
						}
					},
					"response": []
				},
				{
					"name": "updateUser",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU2Mzg1NjAwLCJleHAiOjE2NTY0NzIwMDB9.-WKFi12envUVadzAYaN_6ViiLSShBJaQtjYTeKyiCpE",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"username\": \"user updated\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/users/1",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"users",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "deleteUser",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU2Mzg1NjAwLCJleHAiOjE2NTY0NzIwMDB9.-WKFi12envUVadzAYaN_6ViiLSShBJaQtjYTeKyiCpE",
									"type": "string"
								}
							]
						},
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/users/1",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"users",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "findUser",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU2Mzg1NjAwLCJleHAiOjE2NTY0NzIwMDB9.-WKFi12envUVadzAYaN_6ViiLSShBJaQtjYTeKyiCpE",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/users/2",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"users",
								"2"
							]
						}
					},
					"response": []
				},
				{
					"name": "logoutUser",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjU2Mzg4MjQzLCJleHAiOjE2NTY0NzQ2NDN9.TlCcnSSFGnQEjKI3JWq8YPv46uIxtERTxNW50yI4_iw",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/users/logout",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"users",
								"logout"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "/contact",
			"item": [
				{
					"name": "createContact",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU2Mzk1ODAyLCJleHAiOjE2NTY0ODIyMDJ9.tZYW_z0AP_w6eKfThgrBBwh4TBnSq0eJs8_Xfrb7-w0",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"nombre\": \"Juan\",\r\n    \"telefono\": \"301\",\r\n    \"descripcion\": \"Espectacular\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/contact/",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"contact",
								""
							]
						}
					},
					"response": []
				},
				{
					"name": "getAllContact",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU2Mzk0NDUyLCJleHAiOjE2NTY0ODA4NTJ9.FT1Xg9qADJkVfFp1LXTT-VCPfbdnkwQ1wWHwaU--fik",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/contact/",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"contact",
								""
							]
						}
					},
					"response": []
				},
				{
					"name": "updateContact",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjU2Mzk1MTE2LCJleHAiOjE2NTY0ODE1MTZ9.xnVCjsPnWWibi_vXOxnQ916XNFA2feOedsXNSlL1yUA",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"nombre\": \"Antonio\",\r\n    \"telefono\": \"301\",\r\n    \"descripcion\": \"Espectacular\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/contact/Antonio",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"contact",
								"Antonio"
							]
						}
					},
					"response": []
				},
				{
					"name": "deleteContact",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU2Mzk1ODAyLCJleHAiOjE2NTY0ODIyMDJ9.tZYW_z0AP_w6eKfThgrBBwh4TBnSq0eJs8_Xfrb7-w0",
									"type": "string"
								}
							]
						},
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/contact/Juan",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"contact",
								"Juan"
							]
						}
					},
					"response": []
				},
				{
					"name": "getContactbyName",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU2Mzk1ODAyLCJleHAiOjE2NTY0ODIyMDJ9.tZYW_z0AP_w6eKfThgrBBwh4TBnSq0eJs8_Xfrb7-w0",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/contact/Juan",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"contact",
								"Juan"
							]
						}
					},
					"response": []
				}
			]
		}
	]
}
```
