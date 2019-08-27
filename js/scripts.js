//Back-End

var newDirectory = new Directory();
console.log(newDirectory);

function Directory(){
    this.customers = []
    this.currentId = 0
}

function Customer(name, deposit) {
  this.name = name;
  this.deposit = deposit;
}

Directory.prototype.addCustomer = function(customer){
  customer.id = this.assignId();
  this.customers.push(customer);
}

Directory.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}


//Front-end

$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    var customerName = $('#name').val();
    var initialDeposit = parseInt($('#initial-deposit').val());
    var depositAmount = parseInt($('#deposit').val());
    var withdrawlAmount= parseInt($('#withdrawl').val());
    var newCustomer = new Customer(customerName, initialDeposit);
    newDirectory.addCustomer(newCustomer);
    var newId = newCustomer.id;
    console.log(newDirectory);
    $('.initial-deposit').hide();
    $('.result').append("<li>" + "Welcome," + customerName + " your Account Balance is: " + initialDeposit + "<br>" + "Your Id is: " + newDirectory.currentId + "</li>");

  });

});
