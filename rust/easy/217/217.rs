fn contains_duplicate(nums: Vec<i32>) -> bool {
    for i in 0..nums.len() {
        for j in 0..nums.len() {
            if nums[i] == nums[j] && i != j {
                return true;
            }
        }
    }
    return false;
}

fn main() {
    println!("{}", contains_duplicate(vec![1,2,3,1]));
    println!("{}", contains_duplicate(vec![1,2,3,4]));
    println!("{}", contains_duplicate(vec![1,1,1,3,3,4,3,2,4,2]));
}
