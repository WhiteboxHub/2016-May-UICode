var person = {
    name: 'UI',
    course: 'Fullstack Javascript',
    id: 10,
    isEnrolled: true,
    gpa: 3.14,
    address: {
        address1: '6500 Dublin Blvd',
        address2: 'Ste 214',
        city: 'Dublin',
        state: 'CA'
    },
    getNotes: function() {
        return 'This is coming from object';
    },
    skills: ['Javascript', 'JQuery', 'Angular.js', 'Node.js']
}


console.log(person.course);
console.log(person['name']);
console.log(person);
console.log(typeof(person));
console.log(person.getNotes());
console.log(person.address.address1);
