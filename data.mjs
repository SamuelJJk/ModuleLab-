// Instance Files for new Instances of classes and funcCall()

import Employee, { getName, getEmail, getPhone, fetchMe } from "./app.mjs";
import { grabSprints } from "./sprint.mjs";
import { getPhotos } from "./helper.mjs";

//my example
import {getPhotos as myExample} from './newfetch.mjs'

let testEmployee = new Employee("Chester Tester", "@biz.gov", "000-000-0000");

console.log(getName(testEmployee));
console.log(getPhone(testEmployee));
console.log(getEmail(testEmployee));
// ----------------------------------------[INSTANCES]
// fetchMe();
// grabSprints()
// getPhotos()

// ------------------[calling the function from newfetch.mjs]
myExample()
// ----------------------------------------[Initialized_Funcs()]
