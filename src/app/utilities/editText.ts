import { objectA } from "../dictionaries/objects/objectA";
import { objectE } from "../dictionaries/objects/objectE";
import { objectI } from "../dictionaries/objects/objectI";
import { objectO } from "../dictionaries/objects/objectO";
import { objectU } from "../dictionaries/objects/objectU";
import { objVerbsCleaned } from "../dictionaries/objects/objVerbsCleaned";

//á, é, í, ó, ú, ñ
/* let Os = a.filter((item) => item.includes("ú"));
		console.log(Os); */

/* 	let keyValues: any = {};
		UsSin.forEach((key, i) => (keyValues[key] = Us[i]));
		console.log(keyValues); */

/* let keyValues: any = {};
		verbsSin.forEach((key, i) => (keyValues[key] = verbs[i]));
		console.log(keyValues);
	
		let cleanObject: any = {};
		for (const [key, value] of Object.entries(objectVerbs)) {
			if (value.includes("á") || value.includes("é") || value.includes("í") || value.includes("ó") || value.includes("ú") || value.includes("ñ")) {
				cleanObject[key] = value;
			}
		}
		*/

const allObjects = {
	...objectA,
	...objectE,
	...objectI,
	...objectO,
	...objectU,
	...objVerbsCleaned,
};

export function editText(bodyText: string) {
	let bodyTextArray = bodyText.split(/ |(?=,)|(?=\.)|(?=!)|(?=\?)|(?=\:)|(?=\;)|(?=\%)|(?=\#)|(?=\@)|(?=\€|(?=\£))/g);

	bodyTextArray.forEach((item, i) => {
		let specialCharacters = [",", "!", ".", "?", ":", ";", "%", "#", "@", "€", "£"];

		for (const [key, value] of Object.entries(allObjects)) {
			if (item.toLowerCase() === key) {
				bodyTextArray[i] = value;
			} else if (specialCharacters.some((specialChar) => item === specialChar)) {
				bodyTextArray[i - 1] += item;
				bodyTextArray.splice(i, 1);
				return;
			}
		}
		if (/[A-Z]/gm.test(item)) {
			bodyTextArray[i] = bodyTextArray[i].replace(bodyTextArray[i].charAt(0), bodyTextArray[i].charAt(0).toUpperCase());
			return;
		}
	});

	return bodyTextArray.join(" ");
}
