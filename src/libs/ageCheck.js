/*
請根據輸入的數字區間找出數字 0 到 20 間重疊與未包含的數字區間
input : [[6, 11], [5, 8], [17, 20], [7], [14,17]]
output: { overlap: [[6, 8], [17]], notInclude: [[0, 4], [12, 13]] }
*/

// const ageIntervals = [[6, 11], [5, 8], [17, 20], [7], [14,17]]
// const ageIntervals = [[2,7]]

function getAgeState(ageIntervals) {
    let tempList = new Array(21).fill(0)
    for (let interval of ageIntervals){
        if (interval.length === 1) {
            if (tempList[interval[0]] <= 1) {
                tempList[interval[0]] += 1
            }
            
        } else {
            for (let i = interval[0]; i <= interval[1]; i ++) {
                if (tempList[i] <= 1) {
                    tempList[i] += 1
                }
            }
        }

    }
    
    let l = 0
    let ans = {
        overlap: [],
        notInclude: []
    }
    for (let i in tempList) {
        if (tempList[i] !== tempList[l]) {
            if (tempList[l] === 0) {
                if (Number(i - 1) === Number(l)) {
                    ans.notInclude.push([Number(l)])
                } else {
                    ans.notInclude.push([Number(l), i - 1])
                }
            } else if (tempList[l] === 2) {
                if (Number(i - 1) === Number(l)) {
                    ans.overlap.push([Number(l)])
                } else {
                    ans.overlap.push([Number(l), i - 1])
                }
            }
            l = i
            
        }   
    }

    if (Number(l) === Number(tempList.length - 1)) {
        // console.log(tempList[l])
        if (tempList[l] === 0) {
            ans.notInclude.push([Number(l)])
        } else if (tempList[l] === 2) {
            ans.overlap.push([Number(l)])
        }
    } else {
        if (tempList[l] === 0) {
            ans.notInclude.push([Number(l), tempList.length - 1])
        } else if (tempList[l] === 2) {
            ans.overlap.push([Number(l), tempList.length - 1])
        }
    }
 
    return ans
}

// console.log(getAgeState(ageIntervals))
export { getAgeState }
