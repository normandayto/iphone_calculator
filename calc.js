let input_number_val = document.getElementById('input_number');
let show_number_val = document.getElementById('show_number');

let clear_input_result = document.getElementById('clear_input');

let DisplayValue;

function display(DisplayValue) {
  input_number_val.value = input_number_val.value + DisplayValue;
}

clear_input_result.addEventListener('click',()=>{
  input_number_val.value="";
  show_number_val.value="";
})

function display_Answer() {
  let equiv = input_number_val.value;

  show_number_val.value=equiv;

  let y=eval(equiv);

  input_number_val.value=y;
}
