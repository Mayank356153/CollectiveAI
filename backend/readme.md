1.in this microservices are used where i need to separate server for each services like auth , agent each have separate server 
2. frotend always request to gateway and gateway will send the request to required serrvices/server
3. each services are running on different server and enven gateway is running on different server 


-------------------------------------------------------------------------------------------------------------------------------------------------

EXPRESS_HTTP_PROXY : is used to make an express server act as proxy in this Instead of handling a request itself, your Express app forwards the request to another server (service), receives the response, and sends it back to the client.

This is especially useful in microservices architectures.

Without a Proxy

Suppose you have two services:

Auth Service → http://localhost:5001
Product Service → http://localhost:5002

The frontend must know both URLs:

With express-http-proxy

You create a Gateway (e.g., on port 5000):

Frontend
      │
      ▼
Gateway (5000)
      │
 ┌────┴────┐
 ▼         ▼
Auth     Product
5001      5002

Now the frontend only calls:
POST /auth/login
GET  /products

The gateway forwards each request to the correct service.

------------------------------------------------------------------------------------------------------------------------------

Firebase-admin is used for server side sdk of firebase 
It allows your backend (Node.js/Express) to securely access Firebase services using administrative privileges.

Unlike the client Firebase SDK, it bypasses client-side security rules because it runs on a trusted server.

------------------------------------------------------------------------------------------------------------------------------