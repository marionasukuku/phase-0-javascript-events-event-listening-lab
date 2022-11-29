function addingEventListener() {
    document.getElementById("button").addEventListener('click', ()=>{
        alert("I am clicked")
    })
// function addingEventListener() {
//     document.getElementById("button").addEventListener('click', ()=>{
//         alert("I am clicked")
//     })
// }
// addingEventListener();
function clickAlert(){
    return alert('I was clicked!');
 }

function addingEventListener(){
    const input = document.getElementById('button');

    input.addEventListener('click', clickAlert);
}
addingEventListener();
}
