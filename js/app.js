'use strict'

//Pat is needing help determining how many cookies each location must make, which varies based on the number of customers/hr and the average number of cookies purchased per customer.

//  What am I going to display?
//********GLOBALS**********

let locationArray = [];

let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//*********DOM WINDOW********/

let table = document.getElementById('Locations');

//console.dir(locationSection);

//*********EXECUTABLE CODE********/

let seattle = new Location('Seattle', 23, 65, 6.3);
let tokyo = new Location('Tokyo', 3, 24, 1.2);
let dubai = new Location('Dubai', 11, 38, 3.7);
let paris = new Location('Paris', 20, 38, 2.3);
let lima = new Location('Lima', 2, 16, 4.6);


locationArray.push(seattle, tokyo, dubai, paris, lima);
//locationArray = [{...}, {...}, {...}]




//******** HELPER FUNCTIONS / UTILITIES*******/

//push new objects into an array - for easy storage - this will help with lab


function randomTotal(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//*********CONSTRUCTOR FUNCTION**********/

function Location(name, minCust, maxCust, avgCookieBought) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieBought = avgCookieBought;
  this.cookiesBought = [];
  this.total = 0;
  

}

//**********PROTOTYPE METHODS*********/

Location.prototype.getrandomcustomer = function () {
  // got from MDN docs
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

Location.prototype.getcookiesale = function () {
  for (let i = 0; i < hoursOpen.length; i++) {
    let avgCookieBought = this.getrandomcustomer() * this.avgCookieBought;
    this.cookiesBought.push(Math.ceil(avgCookieBought));
    this.total += Math.ceil(avgCookieBought);
  }

};
Location.prototype.render = function () {
  let tableOneElem = document.createElement('tr');
  table.appendChild(tableOneElem);

  let storeElem = document.createElement('td');
  storeElem.textContent = this.name;
  tableOneElem.appendChild(storeElem);

  for (let i = 0; i < hoursOpen.length; i++) {
    let liElem = document.createElement('td');
    liElem.textContent = this.cookiesBought[i];
    tableOneElem.appendChild(liElem);
  }

  let liElem = document.createElement('td');
  liElem.textContent = this.total;
  tableOneElem.appendChild(liElem);
};

function makeHeader() {
  let thead = document.querySelector('thead');
  let headerRow = document.createElement('tr');
  thead.appendChild(headerRow);

  let firstCell = document.createElement('td');
  headerRow.appendChild(firstCell);

  for (let i = 0; i < hoursOpen.length; i++) {
    let headerCell = document.createElement('th');
    headerCell.textContent = hoursOpen[i];
    headerRow.appendChild(headerCell);
  }
  let lastCell = document.createElement('th');
  lastCell.textContent = 'DAILY TOTALS';
  headerRow.appendChild(lastCell);
}


makeHeader();

function makeFooter() {
  let tfoot = document.querySelector('tfoot');
  let footerRow = document.createElement('tr');
  tfoot.appendChild(footerRow);

  let firstCell = document.createElement('td');
  footerRow.appendChild(firstCell);

  firstCell.textContent = 'Grand Total';

  let grandTotal = 0;

  for (let i = 0; i < hoursOpen.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < locationArray.length; j++) {
      let cookieNum = locationArray[j].cookiesBought[i];
      hourlyTotal = hourlyTotal + cookieNum;
      console.log('hourly total', hourlyTotal);
    }
    grandTotal = grandTotal + hourlyTotal;
    console.log('grand total', grandTotal);

    let footerCell = document.createElement('th');
    footerCell.textContent = hourlyTotal;
    footerRow.appendChild(footerCell);
  }
  let lastCell = document.createElement('th');
  lastCell.textContent = grandTotal;
  footerRow.appendChild(lastCell);
}

let myform = document.getElementById('my-form');

function handleSubmit(event) {
  event.preventDefault();

  console.log('for submitted');

  let name = event.target.userName.value;


  let minCust = parseInt(event.target.minCust.value);


  let maxCust = parseInt(event.target.maxCust.value);


  let avgCookieBought = parseFloat(event.target.avgCookieBought.value);
  //console.log(name, minCust, maxCust, avgCookieBought);
  console.log(minCust);
  console.log(maxCust);
  console.log(avgCookieBought);

  let newCity = new Location(name, minCust, maxCust, avgCookieBought);
  locationArray.push(newCity);
  newCity.getcookiesale();
  newCity.render();
  let tfoot = document.querySelector('tfoot');
  tfoot.innerHTML='';
  makeFooter();
}

myform.addEventListener('submit', handleSubmit);






//********OBJECT LITERALS *********


//Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
//Store the results for each location in a separate array… perhaps as a property of the object representing that location.

/* let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookiesBought: [],
  total: 0,
  getrandomcustomer: function () {
    // got from MDN docs
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  getcookiesale: function () {
    for (let i = 0; i < hoursOpen.length; i++) {
      let avgCookieBought = this.getrandomcustomer() * this.avgCookieBought;
      this.cookiesBought.push(Math.ceil(avgCookieBought));
      console.log(avgCookieBought)
    }
  },

  render: function () {
    let ulist = document.getElementById('seattle');
    // articleElem.textContent = this.name;
    for (let i = 0; i < hoursOpen.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = hoursOpen[i] + ': ' + this.cookiesBought[i];
      ulist.appendChild(liElem);
    }
  }
};

seattle.getcookiesale();
seattle.render();
console.log(seattle);

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieBought: 1.2,
  cookiesBought: [],
  getrandomcustomer: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  getcookiesale: function () {
    for (let i = 0; i < hoursOpen.length; i++) {
      let avgCookieBought = this.getrandomcustomer() * this.avgCookieBought;
      this.cookiesBought.push(Math.ceil(avgCookieBought));
      console.log(avgCookieBought)
    }
  },
  render: function () {
    let ulist = document.getElementById('tokyo');
    // articleElem.textContent = this.name;
    for (let i = 0; i < hoursOpen.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = hoursOpen[i] + ': ' + this.cookiesBought[i];
      ulist.appendChild(liElem);
    }
  }
};

tokyo.getcookiesale();
tokyo.render();
console.log(tokyo);

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieBought: 3.7,
  cookiesBought: [],
  getrandomcustomer: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  getcookiesale: function () {
    for (let i = 0; i < hoursOpen.length; i++) {
      let avgCookieBought = this.getrandomcustomer() * this.avgCookieBought;
      this.cookiesBought.push(Math.ceil(avgCookieBought));
      console.log(avgCookieBought)
    }
  },
  render: function () {
    let ulist = document.getElementById('dubai');
    // articleElem.textContent = this.name;
    for (let i = 0; i < hoursOpen.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = hoursOpen[i] + ': ' + this.cookiesBought[i];
      ulist.appendChild(liElem);
    }
  }
};

dubai.getcookiesale();
dubai.render();
console.log(dubai);

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieBought: 2.3,
  cookiesBought: [],
  getrandomcustomer: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  getcookiesale: function () {
    for (let i = 0; i < hoursOpen.length; i++) {
      let avgCookieBought = this.getrandomcustomer() * this.avgCookieBought;
      this.cookiesBought.push(Math.ceil(avgCookieBought));
      console.log(avgCookieBought);
    }
  },
  render: function () {
    let ulist = document.getElementById('paris');
    // articleElem.textContent = this.name;
    for (let i = 0; i < hoursOpen.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = hoursOpen[i] + ': ' + this.cookiesBought[i];
      ulist.appendChild(liElem);
    }
  }
};

paris.getcookiesale();
paris.render();
console.log(paris);

let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieBought: 4.6,
  cookiesBought: [],
  getrandomcustomer: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  getcookiesale: function () {
    for (let i = 0; i < hoursOpen.length; i++) {
      let avgCookieBought = this.getrandomcustomer() * this.avgCookieBought;
      this.cookiesBought.push(Math.ceil(avgCookieBought));
      console.log(avgCookieBought)
    }
  },
  render: function () {
    let ulist = document.getElementById('lima');
    // articleElem.textContent = this.name;
    for (let i = 0; i < hoursOpen.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = hoursOpen[i] + ': ' + this.cookiesBought[i];
      ulist.appendChild(liElem);
    }
  }
};

lima.getcookiesale();
lima.render();
console.log(lima); */

function renderAll() {
  for (let i = 0; i < locationArray.length; i++) {
    locationArray[i].getcookiesale();
    locationArray[i].render();
  }
};

renderAll();
makeFooter();