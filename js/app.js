'use strict'

//Pat is needing help determining how many cookies each location must make, which varies based on the number of customers/hr and the average number of cookies purchased per customer.

//  What am I going to display?
//********GLOBALS**********

function getrandomcustomer() { }

//*********EXECUTABLE CODE********/

let seattle = new Location()

//******** HELPER FUNCTIONS / UTILITIES*******/

//push new objects into an array - for easy storage - this will help with lab
cookieCaboodle.push(seattle,tokyo,dubai,paris,lima);
//cookieCaboodle = [{...}, {...}, {...}]

function renderAll() {
  for (let i = 0, i < cookieCaboodle.length; i++) {
    cookieCaboodle[i].getcookiesBought();
    cookieCaboodle[i].render();
  }
}

//*********CONSTRUCTOR FUNCTION**********/

function Location(name,minCust,maxCust,avgCookieBought,cookiesBought) {
  this.name = name;
  this.minCust = minimumcustomer;
  this.maxCust = maximumcustomer;
  this.avgCookieBought = averagecookiesbought;
  this.cookiesBought = []
}

//**********PROTOTYPE METHODS*********/

Locations.prototype.cookiesBought = 

//********OBJECT LITERALS *********

let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
//Store the results for each location in a separate array… perhaps as a property of the object representing that location.

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookiesBought: [],
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
console.log(lima);

