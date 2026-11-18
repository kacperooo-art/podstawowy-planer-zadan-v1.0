function funkcja(){
    let funkcja = document.getElementById('szukacz').value;
    // alert(funkcja);
    const tabelka = document.querySelector('#tabelka ul');
    let nd = document.createElement('li'); 
    let ni = document.createElement('input'); 
    

    
    
   
    ni.setAttribute('type','button');
    ni.setAttribute('value','wykonane');
    ni.setAttribute('onclick','mod(this)');
    nd.innerHTML = funkcja;
    tabelka.appendChild(nd);
    nd.appendChild(ni);
}
function mod(sam_element){

// sam_element.style.backgroundColor = 'red';
const rodzic = sam_element.parentElement;
rodzic.style.color = 'red';
rodzic.style.textDecoration = 'line-through';

    
}