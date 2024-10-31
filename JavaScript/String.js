var isPalindrome = function(s) {
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g,'');
    return cleaned === cleaned.split('').reverse().join('');
};
