Function.prototype.myBind = function(asThis){
    if(fn === null || typeof fn === 'undefined'){
        asThis = window;
    }
    let fn = this;
    return function(...args){
        return fn(asThis, args);
    }
}
 function myInstanceof(left, right){
     if(left === null || left !== 'object'){
         return false;
     }
     let proto = Object.getPrototypeOf(left);
     while(proto){
         if(proto === right.prototype){
             return true;
         }
         proto = Object.getPrototypeOf(proto);
     }
     return false;
 }

 function flat(arr){
     if(!Array.isArray(arr) || arr.length === 0 || arr === null){
         return [];
     }
     let result = [];
     for(let ele of arr){
         if(Array.isArray(ele)){
             result = result.concat(flat(ele));
         }else {
             result = result.concat(ele);
         }
     }
     return result;
 }

 function clone(target){
     if(target === null || typeof target !== 'object') return target;
     let newObj = {};
     for(let key in target){
         newObj[key] = target[key];
     }
     return newObj;
 }

 function cloneDeep(target){
     if(target === null || typeof target !== 'object') return target;
     const newObj = new target.constructor();
     for(let key in Object.getOwnPropertyDescriptors(target)){
         newObj[key] = cloneDeep(target[key]);
     }
     return newObj;
 }

 function isSymmetric(root){
     function isMirror(r1, r2){
         if(!r1 || !r2){
             return false;
         }
         if(!r1 && !r2){
             return true;
         }
         return r1.val && r2.val && isMirror(r1.left, r2.right) && isMirror(r1.right, r2.left);
     }
     return isMirror(root, root);
 }

 function mirrorTree(root){
     if(!root) return root;
     mirrorTree(root.left);
     mirrorTree(root.right);
     [root.left, root.right] = [root.right, root.left];
     return root;
 }

 function binaryTreePaths(root){
     let res = [];
     const handlePath = (root, pathStr) =>{
         if(!root) return;
         if(root.left == null || root.right == null){
             pathStr += root.val;
             res.push(pathStr);
             return; 
         }
         pathStr += root.val + '->';
         handlePath(root.left, pathStr);
         handlePath(root.right, pathStr);
     }
     handlePath(root, '');
     return res;
 }