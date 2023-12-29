function threeSum(nums, target) {
    const result = [];

    // Sort the array in ascending order
    nums.sort((a, b) => a - b);

    // Iterate through the array
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate elements
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        // Set pointers for the remaining subarray
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === target) {
                // Found a triplet that adds up to the target
                result.push([nums[i], nums[left], nums[right]]);

                // Skip duplicate elements
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }

                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                // Move the pointers
                left++;
                right--;
            } else if (sum < target) {
                // Increment left pointer for a larger sum
                left++;
            } else {
                // Decrement right pointer for a smaller sum
                right--;
            }
        }
    }

    return result;
}

// Example usage:
const nums = [-1, 0, 1, 2, -1, -4];
const target = 0;
const result = threeSum(nums, target);
console.log(result);
