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
// this is a hell code...