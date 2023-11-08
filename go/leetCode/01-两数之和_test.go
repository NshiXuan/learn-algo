package leetcode

import (
	"fmt"
	"testing"
)

func towSum(nums []int, target int) []int {
	if len(nums) == 0 {
		return nil
	}

	diffMap := make(map[int]int)
	for i, num := range nums {
		if _, ok := diffMap[target-num]; ok {
			return []int{diffMap[target-num], i}
		}
		diffMap[num] = i
	}

	return nil
}

func TestTwoSum(t *testing.T) {
	testCases := []struct {
		nums   []int
		target int
	}{
		{
			nums:   []int{2, 7, 11, 14},
			target: 9,
		},
		{
			nums:   []int{3, 2, 4},
			target: 6,
		},
	}
	for _, tC := range testCases {
		fmt.Printf("towSum(tC.nums, tC.target): %v\n", towSum(tC.nums, tC.target))
	}
}
