// console.log("hello")
// function sum(n){
//     if(n==0){
//         return 0
//     }else{
//         return sum(Math.floor(n/10))+n%10
//     }
// }
// console.log(sum(10301))
// let global=0;
// function reverse(n){
//     if(n==0){
//         return 0
//     }
//     global=global*10+n%10
//     sum=reverse(Math.floor(n/10))

// }
// console.log(reverse(143),global)
// function revers(n){
//     let digit=Math.floor(Math.log10(n))+1
//     return helper(n,digit)
// }
// function helper(n,i){
//     if(n%10==0){
//         return n
//     }
//     //console.log(n,i)
//     return (n%10)*(Math.pow(10,i-1))+helper(Math.floor(n/10),i-1)

// }
// console.log(revers(134))
// //pass value to above function call
// function count_zero(n,c){
//     if(n==0){
//        // console.log(c)
//         return c
//     }
//     let rem=n%10
//     if(rem==0){
//     return count_zero(Math.floor(n/10),c+1)}
//     return count_zero(Math.floor(n/10),c)

// }
// console.log(count_zero(10102,0))
// function check_sorting(arr,i){
//     // if(arr[i]>arr[i+1]){
//     //     return false
//     // }
//     if(i==arr.length-1){
//         return true
//     }
//     // return check_sorting(arr,i+1)
//     return arr[i]<arr[i+1]&&check_sorting(arr,i+1)
// }
// console.log(check_sorting([1,2,3,4,5],0))
// function seach(arr,target,i,result){
//     if(arr[i]==target){
//         result.push(i)
//     }
//     if(i==arr.length-1){
//         return result
//     }
//     return seach(arr,target,i+1,result)
//     // if(i==arr.length-1){
//     //     return result}
//     // }return arr[i]===target||seach(arr,target,i+1)

// }
// console.log(seach([1,2,3,5,4,5],5,0,[]))
// //without pass argument
// function search_w(arr,target,i){
//     let result=[]
//     if(arr[i]==target){
//         result.push(i)
//     }
//     if(i==arr.length-1){
//         return result
//     }
//     list_below=search_w(arr,target,i+1)
//     result.push(...list_below)
//     return result;


// }
// console.log(search_w([1,2,3,2,4,2],2,0))
// function triangle(r,c){
//     // if (r==0){
//     //     return
//     // }
//     // if(c<r){
//     //    // console.log("x");
//     //     process.stdout.write("x");
//     //     triangle(r,c+1)
//     // }
//     // else{
//     //     console.log();
//     //     triangle(r-1,0)

//     // }
//     if(r==0){
//         return
//     }if(c<r){
//         triangle(r,c+1)
//         console.log("*")
        
//     }else{
//         triangle(r-1,0)
//         console.log()                    //0  1   2   3   4 
//     }                                     //5
//                                             //4  
// }                                              //3
// //triangle(5,0)                                 //2
// function Bubble(arr,c,r){                           //1
//     if(r==0){
//         return 
//     }
//     if(c<r){
//         if(arr[c]>arr[c+1]){
//             //swap
//             let temp=arr[c];
//             arr[c]=arr[c+1];
//             arr[c+1]=temp;
//         }
//         Bubble(arr,c+1,r)

//     }
//     Bubble(arr,0,r-1)
// }
// arr=[5,4,3,2,1]
// Bubble(arr,0,5)
// console.log(arr)
// function Selection(arr,c,r,max){
//     if(r==0){
//         return
//     }
//     if(c<r){
//     if(arr[c]>arr[max]){
//         max=c
//     }
//     Selection(arr,c+1,r,max)}else{
//     //swap
//     if(max!=c-1){
//         temp=arr[max]
//         arr[max]=arr[c-1];
//         arr[c-1]=temp
//     }
//     Selection(arr,0,r-1,0)}

// }
// arr=[1,2,3,8,7,6]
// Selection(arr,0,6,0)
// console.log(arr)
// function skip(pr,up){
//     if(up==''){
//         return pr
//     }else{
//         if(up[0]!='a'){
//             pr=pr+up[0]
//             up=up.slice(1,up.length+1)
//             return skip(pr,up)
//         }
//         return skip(pr,up.slice(1,up.length+1))
//     }
// }
// console.log(skip('','bacca'))
// function subseq(pr,up){
//     if(up.length==0){
//         console.log(pr)
//         return
//     }
//     //npr=pr+up[0]
//    // console.log(pr,'pr',up)
//     subseq(pr,up.substring(1))
//     subseq(pr+up[0],up.substring(1))
    
    
// }
// subseq('','abc')
// //console.log("abc".substring(1))
// function arrlist(pr,up){
//     if(up.length==0){
//         return [pr]
//     }
//     let arrlist1=arrlist(pr+up[0],up.substring(1))
//     let arrlist2=arrlist(pr,up.substring(1))
//     // let arrlist3=arrlist(pr+up.charCodeAt(0),up.substring(1))
//     new_array=[...arrlist1,...arrlist2]
//     // new_array=[...arrlist1,...arrlist2,...arrlist3]
//     return new_array


// }
// console.log(arrlist('','abc'))
// console.log("a".charCodeAt(0))
// function iterative(arr){
//     let outer=[[]]
//     for(let i of arr){
//         n=outer.length
//         for(let j=0;j<n;j++){
//             let inner=[outer[j],i]
//             outer.push(inner)
//         }
//     }
    
//     return outer
// }
// //console.log(iterative([1,2,3]))
// function count(path,r,c){
//     if(r==1&&c==1){
//         console.log(path)
//         return
//     }
//     if(r>1){
//         count(path+'D',r-1,c)
//     }
//     if(c>1){
//         count(path+'R',r,c-1)
//     }
//     // if(c>1&&r>1){         //possible to take diagonal path
//     //     count(path+"d",r-1,c-1)
//     // }
// }
// // count('',3,3)

// var pathrestricted=(path,maze,r,c)=>{//all pathe
//     if(r==maze.length-1&&c==maze[0].length-1){
//         console.log(path)
//         return;
//     }
//     if(!maze[r][c]){
//         return
//     }
//     maze[r][c]=false
//     if(r<maze.length-1){
//         pathrestricted(path+"D",maze,r+1,c)
//     }
//     if(c<maze[0].length-1){
//         pathrestricted(path+"R",maze,r,c+1)
//     }
//     if(r>0){
//         pathrestricted(path+"U",maze,r-1,c)
//     }
//     if(c>0){
//         pathrestricted(path+"L",maze,r,c-1)
//     }
//     //this line is where functiion will be over
//     //so before the function gets removed, also remove the change that were made by the function
//     maze[r][c]=true
// }
// var pathrestricted=(path,maze,r,c)=>{
//     if(r==maze.length-1&&c==maze[0].length-1){
//         console.log(path)

//         return;
//     }
//     if(!maze[r][c]){
//         return
//     }

//     if(r>0){
//         pathrestricted(path+"U",maze,r-1,c)
//     }
//     if(c>0){
//         pathrestricted(path+"L",maze,r,c-1)
//     }

// }
// //pathrestricted("",[[true,true,true],[true,true,true],[true,true,true]],0,0)
// var allpath=(p,maze,r,c,path,step)=>{
//     if(r==maze.length-1&&c==maze[0].length-1){
//         path[r][c]=step
//         console.log(...path)
//         return;
//     }
//     if(!maze[r][c]){
//         return
//     }
//     maze[r][c]=false
//     path[r][c]=step
//     if(r<maze.length-1){
//         allpath(p+"D",maze,r+1,c,path,step+1)
//     }
//     if(c<maze[0].length-1){
//         allpath(p+"R",maze,r,c+1,path,step+1)}

//     if(r>0){
//         allpath(p+"U",maze,r-1,c,path,step+1)
//     }
//     if(c>0){
//         allpath(p+"L",maze,r,c-1,path,step+1)
//     }
//     //this line is where functiion will be over
//     //so before the function gets removed, also remove the change that were made by the function
//     maze[r][c]=true
//     path[r][c]=0;
// }
// let block=[[true,true,true],[true,true,true],[true,true,true]]
// path=Array.from({length:block.length},()=>Array(block.length).fill(0))
// //allpath('',block,0,0,path,1)
// function queen(board,row){
//    // console.log(row)
//     if(row==board.length){
//         console.log(...board)
//         return  1;
//     }
//     var count=0
//     //placing a queen so first check the safe condition as below it checked so only need to check the above case.
//     for(let col=0;col<board.length;col++){

//         //if safe then place
//         if(isSafe(board,row,col)){
//             //console.log(row,col)
//             board[row][col]=true;
//             //console.log("before",row,col)
//             count+=queen(board,row+1);
//             //console.log('after',row,col)
//             board[row][col]=false
//         }
//         // console.log(row,col,...board)

//     }
//     return count


// }
// function isSafe(board,row,col){
//     for(i=0;i<row;i++){
//         if(board[i][col]){
//             return false;
//         }}
//         maxLeft=Math.min(row,col)
//         for(let i=1;i<=maxLeft;i++){
//             if(board[row-i][col-i]){
//                 return false
//             }
//         }
//         maxRight=Math.min(row,board.length-1-col)
//         for(i=1;i<=maxRight;i++){
//             if(board[row-i][col+i]){
//                 return false
//             }
//         }
        

//     return true
// }
// let board=Array.from({length:4},()=>Array(4).fill(false))
// queen(board,0)
// function isValid(board,row,col){
//     if(row>=0&&row<board.length&&col>=0&&col<board.length){
//         return true
//     }
//     return false
// }
// function isSafekn(board,row,col){
//     if(isValid(board,row,col)){
//         if(board[row-2][col-1]){
//             return false
//         }
//         if(board[row-1][col-2]){
//             return false
//         }
//         if(board[row-2][co+1]){
//             return false
//         }
//         if(board[row-1][col+2]){
//             return false
//         }
//         return true
//     }
    

// }
// function knight(board,row,col,target){
//     if(target==0){
//         console.log(...board)
//     }
//     if(row==board.length&&col==board.length){
//         return;
//     }
//     if(col==board.length){
//         knight(board,row+1,0,target);
//         return
//     }
//     if(isSafekn(board,row,col)){
//         board[row][col]=true;
//         knight(board,row,col+1,target-1);
//         board[row][col]=false
//     }
//     knight(board,row,col+1,knight);

// }


// board=Array({length:4},()=>Array(4).fill(false))
// //knight(board,0,0,4)

// function permutation(p,up){
//     if(up.length==0){
//         console.log(p)
//         return ;
//     }
//      let ch=up[0]
//      for(let i=0;i<=p.length;i++){
//         f=p.substring(0,i)
//         s=p.substring(i,p.length)
//         permutation(f+ch+s,up.substring(1))
//      }

// }
// //permutation('','abc')
// function pad(p,up){
//     if(up.length==0){
//         console.log(p);
//         return 
//     }
//     let digit= +up[0];
//     for(let i=(digit-1)*3;i<digit*3;i++){
//        // let ch='a'+i
//         let ch=String.fromCharCode(i+97);
//         pad(p+ch,up.substring(1))


//     }
// }
// // pad('',"12")
// // function dice(p,target){
// //     if(target==0){
// //         console.log(p);
// //         return
// //     }
// //     for(let i=1;i<=6 && i<=target;i++){
// //         dice(p+i,target-i);

// //     }
    
// // }
// // dice('',4)
// function dice(p,target,face){
//     if(target==0){
//         console.log(p);
//         return
//     }
//     for(let i=1;i<=face && i<=target;i++){
//         dice(p+i,target-i);

//     }
    
// }
// dice('',4)



function z(){
    for(var i=0;i<5000;i++){
        setTimeout(function(){
            console.log(i)
        },1)
    };
    console.log("hello")
}
z();