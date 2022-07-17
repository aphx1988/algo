const find = (val, root) => {
  if (!root) return null
  if(root.left && val<root.left.val) return find(val, root.left)
  if(root.right&& val>root.right.val) return find(val, root.right)
  if(val === root.val) return root
  if(!root.left && !root.right) return root
}
