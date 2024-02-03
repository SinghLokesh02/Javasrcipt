// Inheritance in Javasrcipt

class father {
  money = 200000;
  FatherInfo = {
    name: "Mr. Ved Prakash Singh",
    father_name: "Late. Jayantri Prasad Singh",
    Occupation: "Sub Inspector in BSF",
    salary: 50000,
  };
}

class Child extends father {
  son_money = 500000;
  print_money() {
    console.log(`I have amount of ${this.money + this.son_money} saving`);
    let { name, father_name, Occupation, salary } = this.FatherInfo;

    console.log(name);
    console.log(father_name);
    console.log(Occupation);
    console.log(salary);
  }
}

let obj = new Child();
obj.print_money();

// Example - 2

class One {
  constructor(name, role) {
    console.log(`My name is ${name} and Role is ${role}`);
  }
}

class Two extends One {

    constructor(name,age,a,b){
        super(name,age);
        console.log(`The sum of Two Number ${a+b}`);
    }

  message = () => {
    console.log("This is the method of base");
  };
}

let obj2 = new Two("Lokesh", "Software Trainer",34,3);
obj2.message();
