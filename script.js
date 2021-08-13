// difference between call() apply() bind()

/* call() apply() bind() these three are the inbuilt functions available in JS and that can be called upon any function 
   to change the value of this keyword */

// example 

let student1 = {
    fullName : 'harish mahesh',
    rollNo : '15E112',
    printstudent : function ()
    {
        console.log(this.fullName + this.rollNo);
    }
}

student1.printstudent();  // this will return 'harish mahesh 15E112' similarly when we have one more student object

let student2 = {
    fullName : 'Sabari M',
    rollNo : '15E115'
}

/* to printstudent of student2 object we cannot use student2.printstudent() this will result in a error */

// so we can use call/apply or bind to resolve this problem

let x = student1.printstudent.bind(student2); // for bind we have to pass object reference as argument which will be replaced by this keyword in that function

// this will return a function and store it in x

x();  // 'Sabari M15E115' we got the expected output

// in the same way if that function has argument we can pass that aswell.

let student3 = {
    fullName : 'harish mahesh',
    rollNo : '15E112',
    print : function (district,state)
    {
        console.log(this.fullName + this.rollNo + district + state);
    }
}



let student4 = {
    fullName : 'Sabari M',
    rollNo : '15E115'
}

let y = student3.print.bind(student4,'vellore','tamil nadu'); 

y();  // 'Sabari M15E115velloretamil nadu'


// similarly we can use call() and apply() it will not take copy of function like bind() it will directly execute

student3.print.call(student4,'vellore','tamil nadu'); // 'Sabari M15E115velloretamil nadu'


student3.print.apply(student4,['vellore','tamil nadu']); // 'Sabari M15E115velloretamil nadu'

// in apply () arguments are passed as array that's the only difference between call and apply.

// the main use of this call,apply and bind functions are we can reuse the same function for differnt objects instead of writting it everytime.
