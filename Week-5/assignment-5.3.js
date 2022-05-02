class MySetClass {

	#arr;

	constructor(arr) {
		this.#arr = this.#getUniqueArr(arr);
	}

	#getUniqueArr(arr) {
		return arr.filter((value, index, arr) => arr.indexOf(value) === index)
	}

	size() {
		return this.#arr.length;
	}

	add(value) {
		this.#arr.push(value);
		return this.#getUniqueArr(this.#arr);
	}

	clear() {
		this.#arr = [];
		return this.#arr;
	}

	delete(value) {
		let oldSize = this.#arr.length;
		this.#arr = this.#arr.filter((val) => val !== value);	
		return this.#arr.length !== oldSize;
	}

	has(value) {
		return this.#arr.includes(value);
	}


}

const hasDuplicate = (arr) => {
	setArray = new MySetClass(arr);
	return new Set(arr).size !== arr.length;
}

hasDuplicate([1,4,6723,35,7, 4]);
console.log(hasDuplicate([1,4,6723,35,7]));