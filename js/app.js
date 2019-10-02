'use strict';
//TO DO LIST:
//put sales.html into pages folder
//Make code more Dry by moving random into its own function.
//Create single point of entry
//Calculate new Daily Location Total(Done in lab 6) - Hour totals needed 10/2/2019

//defining global variables
var hrOp = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var hourTot = [];
var storeObjects = [];

//Create constructor functions;
function Store(location, minCustHr, maxCustHr, avgCookCust, avgCookHrLoc, totDayCook) {
  this.location = location;
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avgCookCust = avgCookCust;
  this.avgCookHrLoc = avgCookHrLoc;
  this.totDayCook = totDayCook;
}

//Define Prototype Functions
Store.prototype.render = function(){
  //add Table data rows to DOM
  totDayCook = 0;
  var table = document.getElementById('daily'); 
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var td = document.createElement('td');
  td.textContent = this.location;
  tr.appendChild(td);
  //write out location to global variable for accessing hourly totals;
  hourTot.push([this.location, []]);
  storeObjects.push(this);//global variable for new design of summing hours;
  // console.log(hourTot);
  // console.log(storeObjects);
  // console.log(storeObjects.length);
  //add location to hourly total for all locations object

  //loop through the array of cookies by hour to create DOM;
  for(var i = 0; i < this.avgCookHrLoc.length; i++){
    td = document.createElement('td');
    td.textContent = `${this.avgCookHrLoc[i]}`;
    tr.appendChild(td);
    var totDayCook = totDayCook + this.avgCookHrLoc[i];

    //write out cookies by hour to global variable for accessing hourly totals;
    // console.log(hourTot.length-1);
    hourTot[hourTot.length-1][1].push(this.avgCookHrLoc[i]);
    // console.log(hourTot);
  }
  //add totals by location to DOM;
  td = document.createElement('td');
  td.textContent = `Total: ${totDayCook} cookies`;
  tr.appendChild(td);
};

Store.prototype.estCookHrLoc = function(){
  for (var i = 0; i < hrOp.length; i++) {
    var estCookHr = Math.floor ((Math.random() * (this.maxCustHr - this.minCustHr) + this.minCustHr) * this.avgCookCust);
    this.avgCookHrLoc.push(estCookHr);
  }
};

Store.prototype.tableHead = function(){
  var body = document.getElementById('body');
  // add Table to DOM;
  var table = document.createElement('table');
  table.setAttribute('id', 'daily');
  body.appendChild(table);
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var th = document.createElement('th');
  tr.appendChild(th);

  //add table headers to DOM
  for (var i = 0; i < hrOp.length; i++){
    th = document.createElement('th');
    th.textContent = hrOp[i];
    tr.appendChild(th);
  }
  //add Daily Total text for column header
  th = document.createElement('th');
  th.textContent = 'Daily Location Total';
  tr.appendChild(th);
};

//add table footer to DOM
Store.prototype.tableFooter = function(){
  var body = document.getElementById('body');
  // add Table to DOM;
  var table = document.createElement('table');
  // console.log(table);
  table.setAttribute('id', 'daily');
  body.appendChild(table);
  var tr = document.createElement('tr');
 
  table.appendChild(tr);
  // console.log(tr);
  var th = document.createElement('th');
  th.textContent = 'Totals';
  tr.appendChild(th);
  
  //add table headers to DOM
  for (var i = 0; i < hrOp.length; i++){
    // console.log('hello');
    th = document.createElement('th');
    //loop for hourly total
    var hourTotSum = 0;
    // console.log(storeObjects.length);
    for(var j = 0; j < storeObjects.length; j++){
      var storeName = storeObjects[j];
      console.log(storeName.location);

      console.log(storeName.avgCookHrLoc[i]);
      
      // console.log(hourTot);
      // if (hourTot[j][0] === this.location){
      // console.log(hourTot[j][0]);
      // console.log('hello');
      // hourTotSum =+ hourTotSum;
      // }
    }
    th.textContent = hourTotSum;//revise to totals from global variable hourTot;
    tr.appendChild(th);
  }
  //add Hourly Grand Total text for row header
  th = document.createElement('th');
  th.textContent = 'Grand Total goes here';
  tr.appendChild(th);
  // console.log(typeof(hourTot));
};

var seattle = new Store('Seattle', 23, 65, 6.3, [], 0);
var tokyo = new Store('Tokyo', 3, 24, 1.2, [], 0);
var dubai = new Store('Dubai', 11, 38, 3.7, [], 0);
var paris = new Store('Paris', 20, 38, 2.3, [], 0);
var lima = new Store('Lima', 2, 16, 4.6, [], 0);

//Estimating number of cookies and rendering to DOM
//TODO  place data above into single array.
//      write a loop function to estimate the hourly cookie total
seattle.tableHead();

seattle.estCookHrLoc();
seattle.render();

tokyo.estCookHrLoc();
tokyo.render();

dubai.estCookHrLoc();
dubai.render();

paris.estCookHrLoc();
paris.render();

lima.estCookHrLoc();
lima.render();

seattle.tableFooter();
