
var flipEquiv = function(root1, root2) { // determine if a tree is flip equivalent of another tree.
    // base case
    if (root1 === null && root2 === null ) return true
    if (root1 === null || root2 === null) return false
    if (root1.val !== root2.val) return false;
    // recursively check no-flip/ flip
    return ( ( flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right) ) || ( flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left) ) )
};
