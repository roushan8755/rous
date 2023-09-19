const url = 'https://jsonplaceholder.typicode.com/posts';

// const getData = () => {
//     let x = fetch(url).then(res => res.json()).then(res => console.log(res))
//     return x;
// }

// let data = getData();
// console.log(data);

const getData = async () => {
    try {
        const res = await fetch(url);
        const dt = await res.json();
        console.log(dt);
    } catch (err) {
        console.error(err)
    }



}
getData();


// this is a demo text...
<<<<<<< HEAD
// this is a hell code...
=======
// hello roushan how are you...
>>>>>>> 21d2357f2209dddc6651817466af5f9d5873345f
