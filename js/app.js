'use strict';

//defining global variables
var hrOp = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var hourTot = [];
var storeObjects = [];
var grandTot = 0;

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
Store.prototype.random = function(){
  var randomNum = Math.random() * (this.maxCustHr - this.minCustHr) + this.minCustHr;
  return randomNum;
};

Store.prototype.estCookHrLoc = function(){
  for (var i = 0; i < hrOp.length; i++) {
    var randomHr = this.random();
    var estCookHr = Math.floor(randomHr * this.avgCookCust);
    this.avgCookHrLoc.push(estCookHr);
  }
};

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
  storeObjects.push(this);

  //loop through the array of cookies by hour to create DOM;
  for(var i = 0; i < this.avgCookHrLoc.length; i++){
    td = document.createElement('td');
    td.textContent = `${this.avgCookHrLoc[i]}`;
    tr.appendChild(td);
    var totDayCook = totDayCook + this.avgCookHrLoc[i];

    //write out cookies by hour to global variable for accessing hourly totals;
    hourTot[hourTot.length-1][1].push(this.avgCookHrLoc[i]);
  }
  //add totals by location to DOM;
  td = document.createElement('td');
  td.textContent = `Total: ${totDayCook} cookies`;
  tr.appendChild(td);
};

Store.prototype.tableHead = function(){
  var body = document.getElementById('body');
  // add Table to DOM;
  var table = document.createElement('table');
  table.setAttribute('id', 'daily');
  body.appendChild(table);
  var thead = document.createElement('thead');
  table.appendChild(thead);
  var tr = document.createElement('tr');
  thead.appendChild(tr);
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
  var table = document.getElementById('daily');
  var tfoot = document.createElement('tfoot');
  table.appendChild(tfoot);
  var tr = document.createElement('tr');
  tfoot.appendChild(tr);
  var td = document.createElement('td');
  td.textContent = 'Totals';
  tr.appendChild(td);

  for (var i = 0; i < hrOp.length; i++){
    td = document.createElement('td');

    var hourTotSum = 0;
    for(var j = 0; j < storeObjects.length; j++){
      var storeName = storeObjects[j];
      hourTotSum = hourTotSum + storeName.avgCookHrLoc[i];
    }
    td.textContent = hourTotSum;
    tr.appendChild(td);
    grandTot = grandTot + hourTotSum;
  }
  //add Hourly Grand Total text for row header
  td = document.createElement('td');
  td.textContent = `Grand Total: ${grandTot}`;
  tr.appendChild(td);
};

//Delete footer function
//https://www.w3schools.com/jsref/met_table_deletetfoot.asp
function delTabFoot(){
  document.getElementById('daily').deleteTFoot();
  grandTot = 0;
}

//Form
var newStoreForm = document.getElementById('newstore');
newStoreForm.addEventListener('submit', createStore);

function createStore(event){
  event.preventDefault();
  var location = event.target.location.value;
  var minCustHr = event.target.minCustHr.value;
  var maxCustHr = event.target.maxCustHr.value;
  var avgCookCust = event.target.avgCookCust.value;

  var newStore = new Store(location, minCustHr, maxCustHr, avgCookCust, [],0);
  newStore.estCookHrLoc();
  newStore.render();
  delTabFoot();
  newStore.tableFooter();
}

var seattle = new Store('Seattle', 23, 65, 6.3, [], 0);
var tokyo = new Store('Tokyo', 3, 24, 1.2, [], 0);
var dubai = new Store('Dubai', 11, 38, 3.7, [], 0);
var paris = new Store('Paris', 20, 38, 2.3, [], 0);
var lima = new Store('Lima', 2, 16, 4.6, [], 0);

//Estimating number of cookies and rendering to DOM
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
