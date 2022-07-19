let company = { companyName: "Healthy Candy",
                activity: ["Food manifacturing", "Improving Kid's Health", "manufacturing toys"],
                address: {
                    street: "2nd street",
                    number: "123",
                    zipcode: "33116",
                    city: "Miamy",
                    state: "Florida"
                },
                yearOfEstablishment: 2021


};
console.log(company);

company.address.zipcode = "33117";
console.log(company.address.zipcode);


company["address"]["number"] = "100";
console.log(company.address.number);

let activity = company.activity[1];
console.log(activity);



// exersize 3.5

let people = { friends: []};

let bobi = {
    firstname: "bobi",
    lastname: "srezoski",
    id: "1"
};
let caci = {
    firstname: "caci",
    lastname: "kocoska",
    id: "2"
};
let didi = {
    firstname: "didi",
    lastname: "janeska",
    id: "3"
};
 
people.friends.push(bobi, caci, didi);
console.log(people.friends);