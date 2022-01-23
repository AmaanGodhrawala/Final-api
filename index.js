// const url1 = "https://api.adviceslip.com/advice";

// const adviceCards = document.getElementbyId("output");

// const promises = [];
// for (let i=1; i<=10; i++){
//     const url1 = "https://api.adviceslip.com/advice";
//     promises.push(fetch(url)
//                   .then(res => res.json()));
// }
// Promise.all(promises)
//     .then(results => {
//     const allAdvice = slip.map(data => ({
        
        
// }

// document.getElementById("btn").addEventListener("click", () => {
//     for (let i=1; i<=10; i++){
//     fetch(url1)
//     .then (res => res.json())
//     .then (data => {
//         console.log(data)
//          document.getElementById("output").innerHTML =
//         `<div class="card1">
//         <p>${data.slip.advice}</p>
//     </div>`
//          })
//     }
// })


// const promises = [];
// for (i=1; i<=10; i++) {
//     promises.push(fetch(url)
//     .then (response => response.json()));
// }
//     Promise.all(promises)
//     .then (results => {
//         const dogs = results.map(data => ({
//             image: data.messasge
//         }))
//         displayDogs(dogs)
//     })


//  const displayDogs = () => {
//     document.getElementById("dogImages").innerHTML =
//         `<img src="${results.image}"/>`
//     };




//By AMaanGodhrawala

const fetchAdvice=()=>{
    const promises=[];
    for(let i=1; i<=21;i++){
        const url=`https://api.adviceslip.com/advice/${i}`;
        // const url2=`https://source.unsplash.com/random`;
        promises.push(fetch(url).then((res)=>res.json()));
        // promises.push(fetch(ur2).then((res)=>res.json()));
    }
    Promise.all(promises).then((results)=>{
        const Advice =results.map((data)=>({
            'id':data.slip.id,
            'advice':data.slip.advice,
            // 'image': data.url2;
        }));
        displayAdvice(Advice);
    })
    
};
const output=document.getElementById("output")
const displayAdvice=(Advice)=>{
    console.log(Advice);
    const adviceHTMLString= Advice.map(Advice=>`
    <li class="card1">
    <img class="adviceImage" src="https://source.unsplash.com/random"/>
   
    <center><h3 id="adviceNo">Advice #${Advice.id}</h3></center>
    <center><p id="adviceString">${Advice.advice}</p></center>
    </li>
    `).join(" ")
    output.innerHTML=adviceHTMLString;
}
fetchAdvice();
// const va=1;
// console.log(`Value is ${va}`);
