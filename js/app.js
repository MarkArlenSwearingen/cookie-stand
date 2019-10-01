'use strict';
//TO DO LIST:
//put sales.html into pages folder
//Make code more Dry by moving random into its own function.
//Create single point of entry
//Place data into table rather than list
//Calculate new Daily Location Total


//defining global variables
var hrOp = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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
  var body = document.getElementById('body');
  // var h2 = document.createElement('h2');
  // h2.textContent = this.location;
  // body.appendChild(h2);

  // var ul = document.createElement('ul');
  // h2.appendChild(ul);

//add Table data rows to DOM
  var table = document.getElementById('daily');
  console.log(table);
  var tr = document.createElement('tr');
  table.appendChild(tr);
  console.log(tr);
  var th = document.createElement('th');
  tr.appendChild(th);
  console.log(th);
  var td = document.createElement('td');
  td.textContent = this.location;
  td.appendChild(th);
  console.log(td);



  totDayCook = 0;

  for(var i = 0; i < this.avgCookHrLoc.length; i++){
    var td = document.createElement('td');
    td.textContent = `${this.avgCookHrLoc[i]}`;
    th.appendChild(td);

    var totDayCook = totDayCook + this.avgCookHrLoc[i];
    if (i === this.avgCookHrLoc.length - 1){
      td = document.createElement('td');
      td.textContent = `Total: ${totDayCook} cookies`;
      th.appendChild(td);
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
  var h2 = document.createElement('h2');
  h2.textContent = this.location;
  body.appendChild(h2);

  // var ul = document.createElement('ul');
  // h2.appendChild(ul);

//add Table to DOM
  var table = document.createElement('table');
  table.setAttribute('id', 'daily');
  h2.appendChild(table);
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
seattle.estCookHrLoc();
seattle.render();
tokyo.tableHead();
tokyo.estCookHrLoc();
tokyo.render();
dubai.tableHead();
dubai.estCookHrLoc();
dubai.render();
paris.tableHead();
paris.estCookHrLoc();
paris.render();
lima.tableHead();
lima.estCookHrLoc();
lima.render();
