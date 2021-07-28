import { objectA } from "../dictionaries/objects/objectA";
import { objectE } from "../dictionaries/objects/objectE";
import { objectI } from "../dictionaries/objects/objectI";
import { objectO } from "../dictionaries/objects/objectO";
import { objectU } from "../dictionaries/objects/objectU";

//á, é, í, ó, ú
/* let Os = a.filter((item) => item.includes("ú"));
		console.log(Os); */

/* 	let keyValues: any = {};
		UsSin.forEach((key, i) => (keyValues[key] = Us[i]));
		console.log(keyValues); */

const allObjects = {
	...objectA,
	...objectE,
	...objectI,
	...objectO,
	...objectU,
};

export function editText(bodyText: string) {
	let bodyTextArray = bodyText.split(" ");
	bodyTextArray.forEach((item, i) => {
		for (const [key, value] of Object.entries(allObjects)) {
			if (item === key) {
				bodyTextArray[i] = value;
			}
		}
	});

	console.log(bodyTextArray.join(" "));
}
