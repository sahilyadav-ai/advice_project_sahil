
const txt = document.querySelector(".advise-cont")
const id = document.querySelector('.id')
const reload = document.querySelector('.btn')
const search = document.querySelector('input')
const btn = document.querySelector('button')
const box=document.querySelector('.box-query')
// fetch('https://api.adviceslip.com/advice').then((res)=>res.json()).then((data)=>{
//     console.log(data)
//     console.log(data.slip)
//     console.log(data.slip.id)
//     txt.innerText=data.slip.advice
//     id.innerText=data.slip.id
 
 
reload.addEventListener('click',()=>{
    fetch('https://api.adviceslip.com/advice').then((res)=>res.json()).then((data)=>{
    console.log(data)
    console.log(data.slip)
    console.log(data.slip.id)
    txt.innerText=data.slip.advice
    id.innerText=data.slip.id

})
})
fetch('https://api.adviceslip.com/advice').then((res)=>res.json()).then((data)=>{
    console.log(data)
    console.log(data.slip)
    console.log(data.slip.id)
    txt.innerText=data.slip.advice
    id.innerText=data.slip.id
     
    // box.style.background='rgba(0.1,0.1,0.1,0.5)'
 
})
btn.addEventListener('click',()=>{
    console.log(search.value)
    fetch(`https://api.adviceslip.com/advice/search/${search.value}`).then((res)=>res.json()).then((data)=>{
        const i=Math.floor((Math.random()*data.total_results)+1)
        // console.log(data.slips[0].id)
        // console.log(data.total_results)
        // console.log(i)
        if(data.total_results>0){
             txt.innerText=data.slips[0].advice
             id.innerText=data.slips[0].id
             search.placeholder="txt here"
            //  search.innerText=" "
        }
        else{
            // box.style.background="red"
             
            txt.innerText="Try again"
            // setInterval(() => {
                alert("Stupid Person! This is not topic for advice .")
            // },1000);
             
        }

    })
})
