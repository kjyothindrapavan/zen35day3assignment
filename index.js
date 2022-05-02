//2. Create your own resume data in JSON format
let jsonObj = {
    "name" : "pavan",
    "address": {
        "street" : "ramalayamveedhi",
        "state" : "AndhraPradesh",
        "pin": "534111"
    },
    "degree":"computer science",
    "technologies":["c","java","javascript","html","css"]
};
function objectDeepCopy(object) {
    let copiedObject = {};
    //using for in loop
    for(let key in object) {
        if(object[key]===null) {
            copiedObject[key]=null;
        }
        else if(object[key]===undefined) {
            copiedObject[key] = undefined;
        }
        else if(isPrimitive(object[key])) {
            copiedObject[key] = object[key];
        }

        else if(Array.isArray(object[key])) {
            copiedObject[key] = arrayDeepCopy(object[key]);
        }
        else {
            copiedObject[key] = objectDeepCopy(object[key]);
        }
    }
    return copiedObject;
}

function arrayDeepCopy(array) {
    let copiedArray = [];
    for(let i=0;i<array.length;i++) {
        if(array[i]===null) {
            copiedArray.push(null);
        }
        else if(array[i]===undefined) {
            copiedArray.push(undefined);
        }
        else if(isPrimitive(array[i])) {
            copiedArray[i]=array[i];
        }
        else if(Array.isArray(array[i])) {
            copiedArray[i] = arrayDeepCopy(array[i]);
        }
        else {
            copiedArray[i] = objectDeepCopy(array[i]);
        }
    }
    return copiedArray;
}

function isPrimitive(element) {
    if(typeof element === "object") {
        return false;
    }
    return true;
}

let copiedobj = objectDeepCopy(jsonObj);
console.log(copiedobj);

jsonObj.address.state="telangana";
console.log(copiedobj);
console.log(jsonObj);

let keys = Object.keys(jsonObj);
console.log(keys);

//using for of loop
for(let key of keys) {
    console.log(jsonObj[key]);
}
// console.log(" ");
// for(let ele of jsonObj) {
//     console.log(ele);
// }
console.log(" ");
for(let i=0;i<keys.length;i++) {
    console.log(jsonObj[keys[i]]);
}
console.log(" ");
keys.forEach((ele,index) => {
    console.log(index,jsonObj[ele]);
});