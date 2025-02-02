function firstWord(str) {
    // Trim any leading or trailing whitespace from the input string
    str = str.trim();
    
    // Find the index of the first space
    const spaceIndex = str.indexOf(' ');
    
    // If there is no space, return the entire string
    if (spaceIndex === -1) {
        return str;
    }
    
    // Return the substring from the start up to the first space
    return str.substring(0, spaceIndex);
}

// Test case