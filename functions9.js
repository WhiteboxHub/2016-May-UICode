function Person(name, course, isEnrolled) 
{
    this.name = name;
    this.course = course;
    this.isEnrolled = isEnrolled;
    this.getDetails = function() {
        console.log(this.name + ":" + this.course);
    }
}


var p1 = new Person('UI', 'UI', true);
var p2 = new Person('QA', 'QA', true);

p1.getDetails();
p2.getDetails();