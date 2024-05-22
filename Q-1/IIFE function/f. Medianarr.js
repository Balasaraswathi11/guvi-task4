const median = (function(nums1, nums2) {
    let s1 = nums1.length;
    let s2 = nums2.length;
    let index = s1 + s2;
    let median;
    if (s1 == 0) {
        if (s2 % 2 == 1) {
            median = nums2[Math.floor(index / 2)];
        } else {
            median = (nums2[Math.floor(index / 2) - 1] + nums2[Math.floor(index / 2)]) / 2;
        }
    } else {
        for (let i = 0; i < index / 2 + 1; i++) {
            nums1.push(nums2[i]);
        }
        nums1.sort((a, b) => a - b);
        if (index % 2 == 1) {
            median = nums1[Math.floor(index / 2)];
        } else {
            median = (nums1[Math.floor(index / 2) - 1] + nums1[Math.floor(index / 2)]) / 2;
        }
    }
    return median;
})([1, 3], [2]);

console.log("Median is:", median);

