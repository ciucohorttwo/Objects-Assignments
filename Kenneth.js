/* Object for teacher*/
var teacher = {
    position: 'Duputy',
    age: 30,
    firstName: 'Osman',
    lastName: 'Ozzy',

    subject: function() { //method subject for the object teacher
        var javascript = "Am a teacher of Javascript.";
        return javascript;
    },
    tribe: function() { //method tribe for the object teacher
        var alur = 'Samson is an alur from westnile.';
        return alur;
    }
}
console.log(teacher.subject()); //outputting result for object teacher
console.log(teacher.tribe()); //outputting result for object teacher

/* Object for book*/
/* small change */
var stationery = {
    type: 'book',
    color: 'blue',
    size: 'small',
    lenght: 120,

    kenbook: function() { //method kenbook for the object book
        var detail = 'We are operating in East Africa only.';
        return detail;
    },
    rock: function() { //method rock for the object book
        var yearOfStart = 'Rock book company was started in 1995.';
        return yearOfStart;
    }
}
console.log(book.kenbook()); //outputting result for object book
console.log(book.rock()); //outputting result for object book


/* Object for company*/
var company = {
    name: 'laboremus',
    product: 'software development.',
    location: 'Muyenga',
    year: 2013,
    sponsor: 'NORAD',

    cleaner: function() { //method student for the object company
        var role = 'Making sure the place is clean every morning.';
        return role;
    },
    staff: function() { //method staff for the object company  
        var facilitators = 'Laboremus has the best facilitators of javascript in Uganda';
        return facilitators;
    }
}
console.log(company.student()); // outputting for object company   
console.log(company.staff()); // outputting for object company 


/* Object for country*/
var country = {
    name: 'Uganda',
    size: 'small',
    language: 'English',
    population: '30millions',
    color: 'black',

    city: function() { //method city for the object country
        var Kampala = "It's the capital city located in the central region.";
        return Kampala;
    },
    region: function() { //method region for the object country
        var north = "It's the second and northern city er are going to have soon.";
        return north;
    }
}
console.log(country.city()); // outputting for object country
console.log(country.region()); // outputting for object country

/* Object for person*/
var person = {
    name: 'Kenneth',
    age: 22,
    birthDay: 1997,
    size: '78 inches',
    origin: 'Agentina',

    like: function() { //method like for the object person
        var programing = "It's my favourite work and am so passionate about it.";
        return programing;
    },
    dislike: function() { //method dislike for the object person
        var fish = "Fish is the food you can eat but sometimes it's not bony.";
        return fish;
    }
}
console.log(person.like()); // outputting for object person
console.log(person.dislike()); // outputting for object person