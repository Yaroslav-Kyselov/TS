// #5hqyKTfmc
// - створити функцію sortNums(nums,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums66(arrayOfNums66:number[], direction:string):number[] {
    if (direction === 'ascending') return arrayOfNums66.sort((a, b) => a - b);
    if (direction === 'descending') return arrayOfNums66.sort((a, b) => b - a);

    return arrayOfNums66;
}


