const sentenceMaker = async (addToUrl = "root.txt") => {
	// base case 

	let urlForSearch = "https://fe.it-academy.by/Examples/words_tree/" + addToUrl;

	let resultingString = "";

	try {
		var response = await fetch(urlForSearch);
		var fetchStr = await response.text();
	}
	catch(e) {
		return "";
	}

	let matchedStrArr = fetchStr.match(/\w+\.txt/g);	
	if (matchedStrArr) {
		for (let el of matchedStrArr) {
			resultingString += await sentenceMaker(el)
			}
	} else {
		resultingString += ` ${fetchStr}`;
	}

	return resultingString;
}

const result = await sentenceMaker()