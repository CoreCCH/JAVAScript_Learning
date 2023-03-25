let grade = "A";

switch(grade) {
    case grade >= 90:
        console.log("You did great!");
    case grade >= 80:
        console.log("You did good!");
    case grade >=70:
        console.log("You did okay!");
    default:
        console.log(grade, "is not a letter grade!");
}