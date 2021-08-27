import { objectA } from "../dictionaries/objects/objectA";
import { objectE } from "../dictionaries/objects/objectE";
import { objectI } from "../dictionaries/objects/objectI";
import { objectO } from "../dictionaries/objects/objectO";
import { objectU } from "../dictionaries/objects/objectU";
import { objVerbsCleaned } from "../dictionaries/objects/objVerbsCleaned";

//á, é, í, ó, ú, ñ
/* let Ns = verbs.filter((item) => item.includes("é"));
console.log(Ns);

let keyValues: any = {};
Ns.forEach((key, i) => (keyValues[key.toLowerCase().replace("é", "e")] = Ns[i].toLowerCase()));
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
	let bodyTextArray = bodyText.split(/ |(\n)|^(?:\r\n?|\n)|(?=,)|(?=\.)|(?=\Bes\b)|(?=\B(?<!i)s\b)|(?=!)|(?=\?)|(?=\:)|(?=\;)|(?=\%)|(?=\#)|(?=\@)|(?=\€)|(?=\£)/g);
	bodyTextArray = bodyTextArray.filter(function (element) {
		return element !== undefined;
	});

	const specialCharacters = [",", "!", ".", "?", ":", ";", "%", "#", "@", "€", "£", "es", "s"];
	const endingCharacters = [",", "!", ".", "?", ":", ";"];

	//put e & s back together
	bodyTextArray.forEach((item, i) => {
		if (bodyTextArray[i] === "e") {
			bodyTextArray[i] = bodyTextArray[i] += "s";
			bodyTextArray.splice(i + 1, 1);
		}
	});

	/* 	console.log(bodyTextArray); */
	//replace words missing tildes
	bodyTextArray.forEach((item, i) => {
		for (const [key, value] of Object.entries(allObjects)) {
			if (item.toLowerCase() === key) {
				bodyTextArray[i] = value;
			} else if (specialCharacters.some((specialChar) => item === specialChar)) {
				//if item is specialCharacter, add it to previous word
				bodyTextArray[i - 1] += item;
				/* bodyTextArray.slice(i, 1); */
				return;
			}
		}
		//fix capital letters
		if (/[A-Z]/gm.test(item)) {
			bodyTextArray[i] = bodyTextArray[i].replace(bodyTextArray[i].charAt(0), bodyTextArray[i].charAt(0).toUpperCase());
			return;
		}
	});

	//remove special characters from array indices
	bodyTextArray = bodyTextArray.filter((item) => !specialCharacters.includes(item));

	//add onto word the plurals es and s
	bodyTextArray.forEach((item, i) => {
		endingCharacters.forEach((el) => {
			if (item.charAt(item.length - 1).includes(el)) {
				if (item.slice(-3) === "es" || item.charAt(item.length - 2) === "s") {
					//add endingCharacter onto plural word, eg ?, .
					bodyTextArray[i - 1] += el;
					bodyTextArray.splice(i, 1);
				}
			}
		});
	});

	//bring back the linebreaks
	bodyTextArray.forEach((item, i) => {
		if (bodyTextArray[i] === "\n") {
			bodyTextArray[i] = bodyTextArray[i] + bodyTextArray[i + 1];
			bodyTextArray.splice(i + 1, 1);
		}

		if (bodyTextArray[i] === "\nundefined") {
			bodyTextArray[i] = "\n";
		}
	});
	return bodyTextArray.join(" ");
}
