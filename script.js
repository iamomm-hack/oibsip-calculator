const display=document.getElementById('display');

function clearDisplay(){
  display.textContent ='0';
}

function deleteLast(){
  if (display.textContent.length > 1){
    display.textContent=display.textContent.slice(0, -1);
  }else{
    display.textContent='0';
  }
}

function appendNumber(num){
  if (display.textContent==='0'){
    display.textContent=num;
  }else{
    display.textContent += num;
  }
}

function appendOperator(op){
  const lastChar = display.textContent.slice(-1);

  if (op==="%"){
    display.textContent+="/100";
    return;
  }

  if ("+-*/".includes(lastChar)){
    display.textContent=display.textContent.slice(0, -1) +op;
  }else{
    display.textContent +=op;
  }
}

function calculateResult(){
  try{
    display.textContent=eval(display.textContent);
  }catch{
    display.textContent="Error";
  }
}
