var topKFrequent = function (nums, k) {
    const frequencyMap = new Map()
    const buckets = Array.from({
        length: nums.length + 1
    }, () => [])
    const result = []
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
    }
    for (const [num, freq] of frequencyMap.entries()) {
        buckets[freq].push(num)
    }
    for (let i = buckets.length-1; i >= 0; i--) {
        for (const num of buckets[i]) {
            result.push(num)
            if (result.length === k) {
                return result
            }
        }
    }
    return result
}