// print the difference between the sum of left and right diagonal
const matrixOne = [
    [4,3,2,4],
    [9,1,5,6],
    [2,7,9,8],
    [8,5,2,0]
    ];

let sumofleft = 0, sumofright = 0;
n = matrixOne.length;
for(let i=0; i<=n+2; i++)
{
sumofleft +=  matrixOne[i][i];
sumofright += matrixOne[i][n - 1];
n--;
}
console.log(sumofleft - sumofright);