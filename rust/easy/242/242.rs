use std::collections::HashMap;

fn is_anagram(s: String, t: String) -> bool {
    let mut word1_map: HashMap<&str, i32> = HashMap::new();
    let mut word2_map: HashMap<&str, i32> = HashMap::new();
    for letter in s.split("") {
        if letter.len() == 0 { continue; }
        *word1_map.entry(letter).or_insert(0) += 1;
    }
    for letter in t.split("") {
        if letter.len() == 0 { continue; }
        *word2_map.entry(letter).or_insert(0) += 1;
    }
    word1_map == word2_map
}

fn main() {
    println!("{}", is_anagram("anagram".to_string(), "nagaram".to_string()));
    println!("{}", is_anagram("rat".to_string(), "car".to_string()));
    println!("{}", is_anagram("anagram".to_string(), "nagaram".to_string()));
}
