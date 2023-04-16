/*function printVariables(value1 = 7, value2 = 4, value3 = 6) {
    var arguments;
    console.log(arguments[3]);
    //console.log(localVar);
    let localVar = 3;
    //var localVar = 3;
    testingVar = 5
    console.log(localVar);
    console.log(testingVar);
    return [value1, value2, value3 , arguments];
}*/


/*const printVariables = function(value1 = 7 , value2 = 4 , value3 = 6){
 var arguments;
    console.log(arguments[3]);
    //console.log(localVar);
    let localVar = 3;
    //var localVar = 3;
    testingVar = 5
    console.log(localVar);
    console.log(testingVar);
    return [value1, value2, value3 , arguments];
}*/

/*const printVariables = (value1 = 7, value2 = 4, value3 = 6) => {
    var arguments;
    console.log(arguments[3]);  it doesn’t work here
    //console.log(localVar);
    let localVar = 3;
    //var localVar = 3;
    testingVar = 5
    console.log(localVar);
    console.log(testingVar);
    return [value1, value2, value3];
}*/

const userInformation = function () {
    let name;
    do {
        name = prompt("Enter Your Name");
    }
    while (name == "" || name == undefined);

    let sum = 0;
    let avg;

    let str = prompt("Enter Your Grades");
    let grade = str.split(",");
    for (let i = 0; i < grade.length; i++) {
        if(!isNaN(grade[i])){
        grade[i] = parseInt(grade[i]);
        sum += grade[i];
        }
        else{
         return userInformation;   
           userInformation();
        }
    }

    avg = sum / grade.length;
    console.log(avg);
    console.log(sum);
    console.table(grade);

    let greet = alert("Welcome" + " " + name + " " + "Your grades are" + " " + grade);
}

userInformation();


const studentInformation = function () {
    let grade, studentGrade;
    let arr = [];
    let name = prompt("Enter students names");
    let studentName = name.split(",");
    for (i = 0; i < studentName.length; i++) {
    }
    grade = prompt("Enter students grades");
    studentGrade = grade.split(",");
    for (j = 0; j < studentGrade.length; j++) {
        studentGrade[j] = parseInt(studentGrade[j]);
        if (studentGrade[j] > 60) {
            arr.push("sucess");
        }
        else {
            arr.push("failed");
        }
    }

    const information = [studentName, studentGrade, arr];
    for (n = 0; n < information.length; n++) {

    }
    console.table(information);

}
studentInformation();