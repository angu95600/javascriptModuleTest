let arr = [0, 1, 2];

const d = document.querySelector('.item3');
const rul = document.querySelector('.rul');
const next = document.querySelector('.next');

function logic(x) {
    let y = arr[Math.floor(Math.random() * arr.length)];
    if (x == 0) {
        if (y == 1) {
            let ys = parseInt(localStorage.getItem('ys') )|| 0;
            let cs = parseInt(localStorage.getItem('cs')) || 0;
            ys += 1;
            localStorage.setItem('ys', JSON.stringify(ys));
            localStorage.setItem('cs', JSON.stringify(cs)); 
            return 'user1.html';
        }
        else if (y == 2) {
          let ys = parseInt(localStorage.getItem('ys') )|| 0;
            let cs = parseInt(localStorage.getItem('cs')) || 0;
            cs += 1;
            localStorage.setItem('ys', JSON.stringify(ys));
            localStorage.setItem('cs', JSON.stringify(cs)); 
            return 'pc3.html';
        }
        else {
        let ys = parseInt(localStorage.getItem('ys') )|| 0;
            let cs = parseInt(localStorage.getItem('cs')) || 0;
           
            localStorage.setItem('ys', JSON.stringify(ys));
            localStorage.setItem('cs', JSON.stringify(cs)); 
            return 'tie3.html';
        }
     localStorage.setItem('ys', JSON.stringify(ys));
            localStorage.setItem('cs', JSON.stringify(cs)); 
    }
    else if (x == 1) {
        if (y == 1) {
            let ys = parseInt(localStorage.getItem('ys') )|| 0;
            let cs = parseInt(localStorage.getItem('cs')) || 0;
            localStorage.setItem('ys', JSON.stringify(ys));
            localStorage.setItem('cs', JSON.stringify(cs)); 
            return 'tie2.html';
        }
        else if (y == 2) {
         let ys = parseInt(localStorage.getItem('ys') )|| 0;
            let cs = parseInt(localStorage.getItem('cs')) || 0;
            ys += 1;
            localStorage.setItem('ys', JSON.stringify(ys));
            localStorage.setItem('cs', JSON.stringify(cs)); 
            return 'user2.html';
        }
        else {
     let ys = parseInt(localStorage.getItem('ys') )|| 0;
            let cs = parseInt(localStorage.getItem('cs')) || 0;
            cs += 1;
            localStorage.setItem('ys', JSON.stringify(ys));
            localStorage.setItem('cs', JSON.stringify(cs)); 
            return 'pc1.html';
        }
    }
    else if(x==2) {
        if (x == 0) {
          let ys = parseInt(localStorage.getItem('ys') )|| 0;
            let cs = parseInt(localStorage.getItem('cs')) || 0;
            ys += 1;
            localStorage.setItem('ys', JSON.stringify(ys));
            localStorage.setItem('cs', JSON.stringify(cs)); 
            return 'user3.html'
        }
        else if (x == 1) {
       let ys = parseInt(localStorage.getItem('ys') )|| 0;
            let cs = parseInt(localStorage.getItem('cs')) || 0;
            cs += 1;
            localStorage.setItem('ys', JSON.stringify(ys));
            localStorage.setItem('cs', JSON.stringify(cs)); 
            return 'pc2.html'
        }
        else {   
            let ys = parseInt(localStorage.getItem('ys') )|| 0;
            let cs = parseInt(localStorage.getItem('cs')) || 0;
            localStorage.setItem('ys', JSON.stringify(ys));
            localStorage.setItem('cs', JSON.stringify(cs)); 
            return 'tie1.html';
        }
    }
}
function dispnxt() {
    return 'hurray.html';
}

 
document.addEventListener('DOMContentLoaded', () => {
    
    let val = parseInt(localStorage.getItem('cs'));
    let val1 = parseInt(localStorage.getItem('ys'));
   
    console.log(val);
    console.log(val1);
    document.getElementById('computer_score').innerHTML = val;
    document.getElementById('your_score').innerHTML = val1;
   if (val1 > val) {
        next.style.display = 'block';
    }
    else {
        next.style.display = 'none';
    }
    
})

 

const disp = () => {
    d.style.display = 'none';
}
const showRules = () => {
    if (d.style.display == 'none') {
        d.style.display = 'block';
    }
}

d.addEventListener('click', disp);
rul.addEventListener('click', showRules);



