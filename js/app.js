'use strict';
//TO DO LIST:
//put sales.html into pages folder
//Make code more Dry by moving random into its own function.
//Create single point of entry
//Calculate new Daily Location Total(Done in lab 6) - Hour totals needed 10/2/2019

//defining global variables
var hrOp = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var hourTot = {};

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
  var table = document.getElementById('daily');

  totDayCook = 0;

  var tr = document.createElement('tr');
  table.appendChild(tr);
  var td = document.createElement('td');
  td.textContent = this.location;
  tr.appendChild(td);
  for(var i = 0; i < this.avgCookHrLoc.length; i++){
    td = document.createElement('td');
    td.textContent = `${this.avgCookHrLoc[i]}`;
    tr.appendChild(td);

    var totDayCook = totDayCook + this.avgCookHrLoc[i];
    if (i === this.avgCookHrLoc.length - 1){
      td = document.createElement('td');
      td.textContent = `Total: ${totDayCook} cookies`;
      tr.appendChild(td);
    }
  }
  
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
  console.log(table);
  table.setAttribute('id', 'daily');
  body.appendChild(table);
  var tr = document.createElement('tr');
  table.appendChild(tr);
  console.log(tr);
  var th = document.createElement('th');
  tr.appendChild(th);
  
  //add table headers to DOM
  for (var i = 0; i < hrOp.length; i++){
    var th = document.createElement('th');
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
  console.log(table);
  table.setAttribute('id', 'daily');
  body.appendChild(table);
  var tr = document.createElement('tr');
 
  table.appendChild(tr);
  console.log(tr);
  var th = document.createElement('th');
  th.textContent = 'Totals';
  tr.appendChild(th);
  
  //add table headers to DOM
  for (var i = 0; i < hrOp.length; i++){
    th = document.createElement('th');
    th.textContent = hrOp[i];//revise to totals from global variable hourTot;
    tr.appendChild(th);
  }
  //add Hourly Grand Total text for row header
  th = document.createElement('th');
  th.textContent = 'Grand Total goes here';
  tr.appendChild(th);
};

var seattle = new Store('Seattle', 23, 65, 6.3, [], 0);
var tokyo = new Store('Tokyo', 3, 24, 1.2, [], 0);
var dubai = new Store('Dubai', 11, 38, 3.7, [], 0);
var paris = new Store('Paris', 20, 38, 2.3, [], 0);
var lima = new Store('Lima', 2, 16, 4.6, [], 0);

//Estimating number of cookies and rendering to DOM
//TODO  place data above into single array.
//      write a loop function to estimate the hourly cookie totals and render each store.
seattle.tableHead();
seattle.tableFooter();
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
