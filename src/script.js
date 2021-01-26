const root = document.querySelector("#country-select");

let url = "https://restcountries-v1.p.rapidapi.com/all";

fetch(url, {
	headers: {
		"x-rapidapi-key": "873779bc63mshdc8b486a242fae0p158667jsne5de30e3bbed",
		"x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
	},
})
	.then((response) => response.json())
	.then((data) => displayAllCountry(data))
	.catch((err) => console.error(err));

const displayAllCountry = (data) => {
	data.map((country) => {
		let optionNode = createNode("option");
		optionNode.innerText = country.name;
		createAttribute(optionNode, "value", country.name);
		append(root, optionNode);
	});
};

const createAttribute = (element, attribute, value) => {
	let elementAttribute = document.createAttribute(attribute);
	elementAttribute.value = value;
	element.setAttributeNode(elementAttribute);
};

const createNode = (element) => {
	return document.createElement(element);
};

const append = (parent, el) => {
	return parent.appendChild(el);
};

root.addEventListener("change", (event) => {
	let countryName = event.target.value;
	let url = `https://restcountries-v1.p.rapidapi.com/name/${countryName}`;

	fetch(url, {
		headers: {
			"x-rapidapi-key": "873779bc63mshdc8b486a242fae0p158667jsne5de30e3bbed",
			"x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
		},
	})
		.then((response) => response.json())
		.then((data) => displayCountryData(data))
		.catch((err) => console.error(err));
});

const displayCountryData = (data) => {
	console.log(data);
	const countryDiv = document.querySelector("#country");

	data.map((d) => {
		let node = createNode("h3");
		node.innerText = d.capital;

		append(countryDiv, node);
	});
};
