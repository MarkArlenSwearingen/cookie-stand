'use strict';

//defining global variables
var hrOp = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']; 

//creating objects 

var seattle = {
  location: 'Seattle',
  minCustHr: 23,
  maxCustHr: 65,
  avgCookCust: 6.3,
  avgCookHrLoc: [ ],
  estCookHrLoc: function() {
    //calculate the cookies per hour per location
    //store value in avgCookHrLoc array
    for (var i = 0; i < hrOp.length; i++) {
      var estCookHr = Math.floor ((Math.random() * (this.maxCustHr - this.minCustHr) + this.minCustHr) * this.avgCookCust);
      console.log(estCookHr);
      console.log(hrOp[i]);
      //console.log(location);
    }
  }
};

var tokyo = {
  location: 'Tokyo',
  minCustHr: 3,
  maxCustHr: 24,
  avgCookCust: 1.2,
  avgCookHrLoc: [ ]
};

var dubai = {
  location: 'Dubai',
  minCustHr: 11,
  maxCustHr: 38,
  avgCookCust: 3.7,
  avgCookHrLoc: [ ]
};

var paris = {
  location: 'Paris',
  minCustHr: 20,
  maxCustHr: 38,
  avgCookCust: 2.3,
  avgCookHrLoc: [ ]
};

var lima = {
  location: 'Lima',
  minCustHr: 2,
  maxCustHr: 16,
  avgCookCust: 4.6,
  avgCookHrLoc: [ ]
};

seattle.estCookHrLoc();
tokyo.estCookHrLoc();
dubai.estCookHrLoc();
paris.estCookHrLoc();
lima.estCookHrLoc();
