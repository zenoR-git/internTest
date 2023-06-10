# Profile Updating API
A simple api to update the profile of any user.
<br>
<br>
### API

* **Endpoint** `POST`
  
  /user/:id/profile/edit
  
* **Body** 
  * Please see the below example for list of all fields that are needed to be send. All fields are important.
  * `name` field shouldn't be left empty. other fields can be left empty (an empty string).
  * Validation is done for some fields like name, contactNumber etc.
  * ContactNumber should be a 10 digit number or an empty string.
  
  
* **Example**
   ```json
    {
    "name": "max",
    "status": "",
    "sex": "M",
    "birthday": "",
    "school":"",
    "highSchool": "",
    "lookingFor": "",
    "interest": "",
    "bio": "",
    "address":{
        "country": "IN",
        "state": "",
        "city": "",
        "pincode": ""
    },
    "contact":{
        "mobileNumber": "",
        "contactEmail": "",
        "ScreenName": ""
    }
  }
   ```

* **Result**
   ```json
   {"message": "updated successfully"}
   ```

<hr>

* **Endpoint** `POST`
  
  /add
  
* **Details**
  * This api is used for creating a profile for the first time.
  * Takes the same json body as `/user/:id/profile/edit` api

* **Result**
   ```json
   {"message": "added successfully"}
   ```
