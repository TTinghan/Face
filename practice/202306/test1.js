// 树形对象转换算法
function buildTree(treeArr) {
  const treeObj = {};
  const idMap = {};
// 将节点按照id存储到idMap中
  for(const node of treeArr) {
    const { id, name, pid } = node;
    idMap[id] = {id, name, children: [] };
  }
  // console.log(idMap, 9090);

  // 构建树形结构
  for(const node of treeArr) {
    const { id, name, pid } = node;
    const currentNode = idMap[id];
    const parentNode = idMap[pid];
    if(parentNode) {
      parentNode.children.push(currentNode);
    } else {
      treeObj.id = currentNode.id;
      treeObj.name = currentNode.name;
      treeObj.children = [currentNode]; // ??
    }
  }
  console.log(JSON.stringify(treeObj), 9090);
  return treeObj;
}
const treeArr = [
  { id: 0, name: '根节点' },
  { id: 1, name: '第一级1', pid: 0 },
  { id: 2, name: '第一级2', pid: 0 },
  { id: 3, name: '第二级1', pid: 1 },
  { id: 4, name: '第三级1', pid: 3 },
  { id: 5, name: '第三级2', pid: 3 },
];
buildTree(treeArr);