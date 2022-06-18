/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
  this.map = new Map()
  this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  let value = this.map.get(key)
  if (value || value === 0) {
    this.map.delete(key)
    this.map.set(key, value)
    return value
  } else {
    return -1
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.map.get(key) || this.map.get(key) === 0) {
    this.map.delete(key)
    this.map.set(key, value)
  } else {
    let size = this.map.size
    if (size >= this.capacity) {
      this.map.delete(this.map.keys().next().value)
    }
    this.map.set(key, value)
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */