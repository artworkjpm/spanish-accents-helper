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
	console.log(bodyText);

	let bodyTextArray = bodyText.split(/ |(\n)|^(?:\r\n?|\n)|(?=,)|(?=\.)|(?=!)|(?=\?)|(?=\:)|(?=\;)|(?=\%)|(?=\#)|(?=\@)|(?=\€)|(?=\£)/g);
	bodyTextArray = bodyTextArray.filter(function (element) {
		return element !== undefined;
	});
	console.log(bodyTextArray);

	/* bodyTextArray = bodyText.split(/ |(?=,)|(?=\.)|(?=!)|(?=\?)|(?=\:)|(?=\;)|(?=\%)|(?=\#)|(?=\@)|(?=\€)|(?=\£)/g); */

	let specialCharacters = [",", "!", ".", "?", ":", ";", "%", "#", "@", "€", "£"];

	console.log(bodyTextArray);

	bodyTextArray.forEach((item, i) => {
		for (const [key, value] of Object.entries(allObjects)) {
			if (item.toLowerCase() === key) {
				bodyTextArray[i] = value;
			} else if (specialCharacters.some((specialChar) => item === specialChar)) {
				bodyTextArray[i - 1] += item;
				bodyTextArray.slice(i, 1);
				return;
			}
		}
		if (/[A-Z]/gm.test(item)) {
			bodyTextArray[i] = bodyTextArray[i].replace(bodyTextArray[i].charAt(0), bodyTextArray[i].charAt(0).toUpperCase());
			return;
		}
		/* if (/(\r\n|\r|\n)/gm.test(item)) {
			console.log(item.split(/(\r\n|\r|\n)/g));

			return;
		} */
	});
	bodyTextArray = bodyTextArray.filter((item) => !specialCharacters.includes(item));

	bodyTextArray.forEach((item, i) => {
		if (bodyTextArray[i] === "\n") {
			bodyTextArray[i] = bodyTextArray[i] + bodyTextArray[i + 1];
			bodyTextArray.splice(i + 1, 1);
		}

		if (bodyTextArray[i] === "\nundefined") {
			bodyTextArray[i] = "\n";
		}
	});

	console.log(bodyTextArray);

	return bodyTextArray.join(" ");
}
