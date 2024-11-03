class GF {
    constructor(salary, job) {
        this.salary = salary;
        this.job = job;
    }
}


class Parent extends GF {
    constructor(salary, job, name, age) {
        super(salary, job);
        this.name = name;
        this.age = age;
    
   
    }
    
   
}

class Child extends Parent {
    constructor(salary, job, name, age, school) {
        super(salary, job, name, age)
        this.school = school;
    }
}

let data = new Child("90,000", "Business", "Chandra", 20, "Montfort School");

console.log(data)





