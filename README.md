# Doctor Lookup

#### _Code Review for Week 6 - 2/14/2020_

#### _By Jonathan Carlos_

## **Description**

_This application will be able to make API requests to BetterDoctor in order to retrieve information about doctors depending on the medical issues that are entered by the users._

## **Behavior Driven Development**

| Behavior | Input | Output |
|----------|:-----:|--------|
| User enters a medical issue. | Fever | A list of doctors in the Portland area who deal with fevers. |
| User enters a name. | John Doe | All the doctors with the name John Doe in the Portland area are displayed. |
| The query response includes doctors. | Fever or John Doe | Displayed Info: first name, last name, address, phone number, website, and whether or not the doctor is accepting new patients, |
| The query results in an error. | FEVR | Message that states the error. |
| The query results in no doctors. | John Jane | Notification that states no doctors meet the criteria. |

## **Setup/Installation**

*Option One:*
1. Open up your terminal.
2. Navigate to the desired directory in which you want to clone this repository.
3. Use `git clone https://github.com/jonathancarlos21/doctor-lookup` to clone this repository.
4. Open the repository.
4. Install all dependencies using `$ npm install` in your terminal.
5. Use `$ npm run build` to start a package bundle.
5. Drag the html file into your broswer or use `$ npm run start` in your terminal for a live server. 
6. Enter your medical issues or doctor's name.
7. Click "Enter!"

*Option Two:*

Copy and paste `https://jonathancarlos21.github.io/doctor-lookup` into your address bar.

## **Known Bugs**



## **Support and contact details**

If you have any questions, comments, or concerns, feel free to contact the content creator at examplemail@company.net 

## **Technologies used**
* BetterDoctor API

* JavaScript

* jQuery

* HTML

* CSS

* Bootstrap

* Visual Studio Code

* GitBash

## **License**

Copyright (c) 2020 **_Doctor Lookup_**

This software is licensed under the MIT license.