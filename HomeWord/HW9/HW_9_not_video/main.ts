
// - Є масив:
// let arr = ['Main', 'Products', 'About us', 'Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
//
// let arr33:string[] = ['Main', 'Products', 'About us', 'Contacts']
//
// const menu=document.createElement('ul')
//     for (const item of arr33) {
//         const li = document.createElement('li');
//         li.innerText = item;
//         menu.appendChild(li);
//     }
// document.body.appendChild(menu);
// ----------------------------------------------------------------------------------------------
// – Є масив
//
// let coursesAndDurationArray = [
// {title: ‘JavaScript Complex’, monthDuration: 5},
// {title: ‘Java Complex’, monthDuration: 6},
// {title: ‘Python Complex’, monthDuration: 6},
// {title: ‘QA Complex’, monthDuration: 4},
// {title: ‘FullStack’, monthDuration: 7},
// {title: ‘Frontend’, monthDuration: 4}
// ];
//
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// type Course = {
//     title: string;
//     monthDuration: number;
// }
// let coursesAndDurationArray22:Course[] = [
// {title: 'JavaScript Complex', monthDuration: 5},
// {title: 'Java Complex', monthDuration: 6},
// {title: 'Python Complex', monthDuration: 6},
// {title: 'QA Complex', monthDuration: 4},
// {title: 'FullStack', monthDuration: 7},
// {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const course of coursesAndDurationArray22) {
//     const courseElement = document.createElement('div');
//     courseElement.innerText=`${course.title} - ${course.monthDuration}`;
//     document.body.appendChild(courseElement);
// }
// ---------------------------------------------------------------------------------------------
// – Є масив
// let coursesAndDurationArray = [
// {title: ‘JavaScript Complex’, monthDuration: 5},
// {title: ‘Java Complex’, monthDuration: 6},
// {title: ‘Python Complex’, monthDuration: 6},
// {title: ‘QA Complex’, monthDuration: 4},
// {title: ‘FullStack’, monthDuration: 7},
// {title: ‘Frontend’, monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,
// в якому буде <h2 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
// Завдання робити через цикли.
// type CourseType = {
//     title: string;
//     monthDuration: number;
// }
// let coursesAndDurationArray33:CourseType[] = [
// {title: 'JavaScript Complex', monthDuration: 5},
// {title: 'Java Complex', monthDuration: 6},
// {title: 'Python Complex', monthDuration: 6},
// {title: 'QA Complex', monthDuration: 4},
// {title: 'FullStack', monthDuration: 7},
// {title: 'Frontend', monthDuration: 4}
// ];
// for (const course of coursesAndDurationArray33) {
//     const courseDiv:HTMLDivElement = document.createElement('div');
//     courseDiv.classList.add('item');
//     const courseH2:HTMLHeadingElement = document.createElement('h2');
//     courseH2.classList.add('heading');
//     courseH2.innerText = course.title;
//     const courseP:HTMLParagraphElement = document.createElement('p');
//     courseP.classList.add('description');
//     courseP.innerText = course.monthDuration.toString(); // Convert number to string for display
//     courseDiv.append(courseH2, courseP);
//
//     document.body.appendChild(courseDiv);
// }
//---------------------------------------------------------------------------------------------
