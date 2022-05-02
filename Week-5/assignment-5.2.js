class MyMapClass {

	#obj = {};

	get(index) {
		return this.#obj[index];
	}

	set(key, value) {
		this.#obj[key] = value;
	}

	clear() {
		this.#obj = {};
		return this.#obj;
	}

	delete(key) {
		return this.has(key) ? delete this.#obj[key] : false;
	}

	#size() {
		return Object.key(this.#obj).length;
	}

	has(key) {
		return (key in this.#obj);
	}

	getAll() {
		return this.#obj;
	}


}

const isVowel = (word) => {
	return ['a','e','i','o','u'].includes(word);
}

const getVowelsCount = (str) => {
	let vowelCountMap = new MyMapClass();
	for(let word of str) {
		word = word.toLowerCase();
		if(isVowel(word)) {
			if(vowelCountMap.has(word)) {
				vowelCountMap.set(word, (vowelCountMap.get(word) + 1));
			}
			else {
				vowelCountMap.set(word, 1);
			}
		}
	}
	return vowelCountMap.getAll();
}

const result = getVowelsCount("trying out to count number of vowel in the string");
console.log(result);