class MyMap<T> {
  map: { key: string; value: T }[] = [];

  setItem(key: string, item: T) {
    this.map.push({ key, value: item });
  }

  getItem(key: string) {
    const pair = this.map.find(pair => pair.key === key);
    return pair.value;
  }

  clear() {
    this.map = [];
  }

  printMap() {
    this.map.forEach(pair => console.log(pair));
  }
}

const numberMap = new MyMap<number>();
numberMap.setItem("apples", 5);
numberMap.setItem("bananas", 10);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem("name", "Max");
stringMap.setItem("age", "27");
stringMap.printMap();
