## Hilal_Yavuz Bitirme Projesi
### Site Management System
- In this project, I designed a system in which the administrator can track invoices and dues, and users/site residents can view and pay their invoices and send messages to the administrator within a site.
- I made the backend of my project based on the simple homework 1 I made at the beginning of the course.
- I used React JS in the frontend and .NET Core in the backend. There are 2 basic Web Api's on the back: the first one is named 'homework 1' and where I perform all the CRUD and other operations except the payment transaction and uses MSSQL as a db. The other one is the API that I call 'payment', which only pulls credit card and balance information from MongoDB and updates the balance information after payment.
- Because of I have 2 Web API at the back, before start to run project this adjusment should made: from 'Properties' choose multiple startup projects and choose homework1 and payment.

### These are the Screenshots of my system:
Sign In Page 
![image](https://user-images.githubusercontent.com/70439086/153953048-986aea30-5818-47a5-8e16-64dc12ca55ce.png)

Admin Page - Get All User Page
![image](https://user-images.githubusercontent.com/70439086/153953601-07587773-3ed0-4705-89e5-1e6614348d75.png)

Admin Page - Get All User Page - Update User Informations
![image](https://user-images.githubusercontent.com/70439086/153954283-23578705-0262-40d7-9a6c-8e39a6315cf3.png)

Admin Page - Assign an Invoice to Specific User Page
![image](https://user-images.githubusercontent.com/70439086/153953790-fb27debc-67d1-4e21-9f61-ff800d51c9ef.png)

Admin Page - Add User Page
![image](https://user-images.githubusercontent.com/70439086/153954436-2cbd96ea-def0-4ab1-bff6-9f8e76eff66c.png)

Admin Page - Get All Apartments
![image](https://user-images.githubusercontent.com/70439086/153953956-e55ee64b-1657-46f3-a94f-54a1e207e890.png)

Admin Page - Update Apartment
![image](https://user-images.githubusercontent.com/70439086/153954554-e70d7318-d53e-4a1e-8f29-64c489915f90.png)

Admin Page - Add Apartment
![image](https://user-images.githubusercontent.com/70439086/153954737-267a2f2e-6df7-48b2-8498-2297fccea0b2.png)

Admin Page - Get All Messages 
![image](https://user-images.githubusercontent.com/70439086/153954059-495c2749-1229-4348-9e53-5f2f720ea61b.png)

Admin Page - Add Response to Message
![image](https://user-images.githubusercontent.com/70439086/153954834-c797628d-7377-401f-a4c2-96acfb85d8eb.png)

Admin Page - Get All Invoices 
![image](https://user-images.githubusercontent.com/70439086/153954155-92a33752-eab8-44e3-ac48-3a7eaf092756.png)

Admin Page - Batch Invoice Assignment
Before
![image](https://user-images.githubusercontent.com/70439086/153955074-fde292dd-07e4-41ff-b69a-e779ad0af12c.png)
After
![image](https://user-images.githubusercontent.com/70439086/153955405-5af0fae0-6520-4e6e-af27-18b4c76db803.png)

User Page - Get My Invoice List
![image](https://user-images.githubusercontent.com/70439086/153955497-4458fdf5-b322-49b1-8669-997e13d25e64.png)
User Page - Pay Invoice
![image](https://user-images.githubusercontent.com/70439086/153955562-3574235f-a890-4739-8997-9ff620ada60c.png)
User Page - After Payment
 ![image](https://user-images.githubusercontent.com/70439086/153955695-0665f720-395e-400b-81f5-b31c9f3c776c.png)
User Page - Get My Message List
![image](https://user-images.githubusercontent.com/70439086/153955751-e849ca51-4949-47b0-acd3-8f6cb18f8957.png)
User Page - Send Message to Admin
![image](https://user-images.githubusercontent.com/70439086/153955809-89eaba6c-06bd-41cf-a789-c14005c2a876.png)

404 Not Found Page:
![image](https://user-images.githubusercontent.com/70439086/153958107-67103236-8798-448c-93a2-958decb802d5.png)









