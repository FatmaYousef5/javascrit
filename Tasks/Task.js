var object = { name: "Sami",
 age: 35};

function CopyObj(object) {
    let newobject = {};
    for (let key in object) {
      newobject[key]=object[key];
    }
    return newobject;
}
console.log(CopyObj(object));
