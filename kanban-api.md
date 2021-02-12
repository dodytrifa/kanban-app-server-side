**Kanban App**
----
  Kanban App is an application to monitor your next activity. This app has:
*  **REST API**
 * **JSON formatted response**
---
# URL
```
Client URL : http://localhost:8000
Server URL : http://localhost:3000
```
---
* **URL**

  `GET`/tasks

* **Method:**

  `GET`
  
*  **URL Params**

   
 
   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    [
        {
        "id": 1,
        "category": "Task Category",
        "title": "task title",
        "createdAt": "2021-02-12T07:49:20.645Z",
        "updatedAt": "2021-02-12T07:49:20.645Z",
        "userId": 1
        },
        {
        "id": 2,
        "category": "Task Category",
        "title": "task title",
        "createdAt": "2021-02-12T07:49:20.645Z",
        "updatedAt": "2021-02-12T07:49:20.645Z",
        "userId": 1
        }
    ]
 
* **Error Response:**

  * **Code:** 500  <br />
    **Content:** 
    ```javascript
    { 
      "Internal Server error" 
    }
---
* **URL**

  `GET`/tasks/:id

* **Method:**

  `GET`
  
*  **URL Params**

   
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    
        {
        "id": 1,
        "category": "Task Category",
        "title": "task title",
        "createdAt": "2021-02-12T07:49:20.645Z",
        "updatedAt": "2021-02-12T07:49:20.645Z",
        "userId": 1
        }
        
 
* **Error Response:**

  * **Code:** 404  <br />
    **Content:** `{ "error not found" }`
---
* **URL**

  `POST`/tasks

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  Request Body: `category=string`, `title=string`,

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```javascript
        {
        "id": 1,
        "category": "Task Category",
        "title": "task title",
        "createdAt": "2021-02-12T07:49:20.645Z",
        "updatedAt": "2021-02-12T07:49:20.645Z",
        "userId": 1
        }
* **Error Response:**

  * **Code:** 500  <br />
    **Content:** 
    ```javascript
    { 
      "Internal Server error" 
    }
   * **Code:** 400  <br />
     **If category input is empty:** 
     ```javascript
     { 
       "Category cannot be empty" 
     }
  * **Code:** 400  <br />
     **If title input is empty:** 
     ```javascript
     { 
       "title cannot be empty" 
     }
---
* **URL**

  `PUT`/tasks/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   
   `id=[integer]`

* **Data Params**

  Request Body: `category=string`, `title=string`

   Request Headers: User `access_token=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
        {
        "id": 1,
        "category": "Edited Task Category",
        "title": "Edited task title",
        "createdAt": "2021-02-12T07:49:20.645Z",
        "updatedAt": "2021-02-12T07:49:20.645Z",
        "userId": 1
        },
    
* **Error Response:**

  * **Code:** 500  <br />
    **Content:** 
    ```javascript
    { 
      "Internal Server error" 
    }
* **If User Id is not authorized**  <br /> 
  * **Code:** 400  <br />
    **Content:** 
    ```javascript
    { 
        "You are not authorized" 
    }
---
* **URL**

  `GET`/tasks/:id

* **Method:**

  `GET`
  
*  **URL Params**

   `id=[integer]`

* **Data Params**

  Request Headers: User `access_token=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
        {
        "id": 1,
        "category": "Edited Task Category",
        "title": "Edited task title",
        "createdAt": "2021-02-12T07:49:20.645Z",
        "updatedAt": "2021-02-12T07:49:20.645Z",
        "userId": 1
        },
    
* **Error Response:**

  * **Code:** 500  <br />
    **Content:** 
    ```javascript
    { 
      "Internal Server error" 
    }
* **If User Id is not authorized**  <br /> 
  * **Code:** 400  <br />
    **Content:** 
    ```javascript
    { 
        "You are not authorized" 
    }
---    
* **URL**

  `DELETE`/tasks/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   `id=[integer]`
 
* **Data Params**

  Request headers: User access_token=[string]

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ````
    {
      "Task Successfully deleted"
    }
 
* **Error Response:**
* **If Server Error**  <br /> 
  * **Code:** 500  <br />
    **Content:** 
    ```javascript
    { 
        "Internal Server error" 
    }
* **If id is not found**  <br />
    
  * **Code:** 404  <br />
    **Content:** `{ 
        "Error not found" 
        }`
* **If User Id is not authorized**  <br /> 
  * **Code:** 400  <br />
    **Content:** 
    ```javascript
    { 
        "You are not authorized" 
    }
---
* **URL**

  `POST`/users/register

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  Request Body: `email=string`, `password=string`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
        {
        "id": 1,
        "email": "user1@mail.com",
        "password": "$2a$10$9btTdLCT7.WdWMqe8uMgCe1WCpUFJhOswbMo5RZLoqp840rrFBPC6"
        }
* **Error Response:**

  * **Code:** 500  <br />
    **Content:** 
    ```
    { 
      "Internal Server error" 
    }
  * **Code:** 400  <br />
  **If User didn't input a correct email format:** 
    ```
    { 
      "Invalid email format" 
    }
  * **Code:** 400  <br />
    **If User didn't input a min password length:** 
      ```
      { 
        "password must contain min 6 characters" 
      }
---
* **URL**

  `POST`/users/login

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  Request Body: `email=string`, `password=string`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
        {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJ1c2VyNUBtYWlsLmNvbSIsImlhdCI6MTYxMzEzMTk1MX0.GR5hMScpKY1h2MlN4co8zLHXCVrnWL-2-gzsPhXuqtg"
        }
* **Error Response:**

  * **Code:** 500  <br />
    **Content:** 
    ```
    { 
      "Internal Server error" 
    }
  * **Code:** 400  <br />
      **if email or password didn't match with database:** 
      ```
      { 
        "Invalid email or password" 
      }
---


