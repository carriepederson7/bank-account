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
    console.log(newDirectory);
    //$('.initial-deposit').hide();
    $('.result').append("<li>" + "Welcome," + customerName + " your Account Balance is: " + initialDeposit + "<br>" + "Your Id is: " + newDirectory.currentId + "</li>");
    //console.log(newDirectory.customer.id);
  });

  $('#form2').submit(function(event){
    event.preventDefault();
    alert("inform");
    // function findContact(newDirectory){
      var customerId = parseInt($('#user-id').val());
      newDirectory.customers.forEach(function(customer){
        if (customer.id === customerId){
          alert("found id");
        $('.result2').append(customer.name);
        //$('.deposits-and-withdrawls').show();
        }

    });
  });


});
