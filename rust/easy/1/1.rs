fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
    for num1 in 0..nums.len() {
        for num2 in 0..nums.len() {
            if nums[num1] + nums[num2] == target && num1 != num2 {
                return vec![num1 as i32, num2 as i32];
            };
        }
    }
    return vec![];
}

fn main() {
    println!("{:?}", two_sum(vec![2,7,11,15], 9));
    println!("{:?}", two_sum(vec![3,2,4], 6));
    println!("{:?}", two_sum(vec![3,3], 6));
}
