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
  totDayCook: 0,
  estCookHrLoc: function() {
    //calculate the cookies per hour per location
    //store value in avgCookHrLoc array
    for (var i = 0; i < hrOp.length; i++) {
      var estCookHr = Math.floor ((Math.random() * (this.maxCustHr - this.minCustHr) + this.minCustHr) * this.avgCookCust);
      console.log(estCookHr);
      console.log(hrOp[i]);
      this.avgCookHrLoc.push(estCookHr);
      console.log(this.avgCookHrLoc);
    }
  },
  render: function(){
    var body = document.getElementById('body');
    console.log(body);

    var h2 = document.createElement('h2');
    h2.textContent = this.location;
    body.appendChild(h2);

    var ul = document.createElement('ul');
    h2.appendChild(ul);

    totDayCook = 0;
    
    for(var i = 0; i < this.avgCookHrLoc.length; i++){
      var li = document.createElement('li');
      li.textContent = `${hrOp[i]} ${this.avgCookHrLoc[i]} cookies`;
      ul.appendChild(li);

      var totDayCook = totDayCook + this.avgCookHrLoc[i]
      if (i === this.avgCookHrLoc.length - 1){
        li = document.createElement('li');
        li.textContent = `Total: ${totDayCook} cookies`;
        ul.appendChild(li);
      }
    }
  },
};

var tokyo = {
  location: 'Tokyo',
  minCustHr: 3,
  maxCustHr: 24,
  avgCookCust: 1.2,
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

var dubai = {
  location: 'Dubai',
  minCustHr: 11,
  maxCustHr: 38,
  avgCookCust: 3.7,
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

var paris = {
  location: 'Paris',
  minCustHr: 20,
  maxCustHr: 38,
  avgCookCust: 2.3,
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

var lima = {
  location: 'Lima',
  minCustHr: 2,
  maxCustHr: 16,
  avgCookCust: 4.6,
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

seattle.estCookHrLoc();
seattle.render();
// tokyo.estCookHrLoc();
// dubai.estCookHrLoc();
// paris.estCookHrLoc();
// lima.estCookHrLoc();
