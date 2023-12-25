/**
 * Validation Detail
 * All Input Box are Input get only Numeric/Numbers.
 * If any one Input Box are empty than throw  error inputBox is empty for 5_Seconds.
 * After Five Seconds Error are clear .
 * If all input box get input in Numeric/Number than display output only for 10Seconds afetr 10Second all inputbox must be empty. 
 */


let First_Value = document.getElementById('first_value');
let second_value = document.getElementById('second_value');
let timers = document.getElementById("timer");
let btns = document.querySelectorAll('button');
let outputBox = document.getElementById('outputbox');


btns.forEach((i) => {
    i.addEventListener('click', (e) => {
        e.preventDefault()

        if (First_Value.value == "" && second_value.value == "") {
            alert("Please Enter Value !");
        }
        else {
            if (e.target.id == 'add') {
                console.log(parseInt(First_Value.value) + parseInt(second_value.value));
                outputBox.value = parseInt(First_Value.value) + parseInt(second_value.value);
            }
            if (e.target.id == 'sub') {
                console.log(parseInt(First_Value.value) - parseInt(second_value.value));
                outputBox.value = parseInt(First_Value.value) - parseInt(second_value.value);
            }
            if (e.target.id == 'mul') {
                console.log(parseInt(First_Value.value) * parseInt(second_value.value));
                outputBox.value = parseInt(First_Value.value) * parseInt(second_value.value);
            }
            if (e.target.id == 'division') {
                console.log(parseInt(First_Value.value) / parseInt(second_value.value));
                outputBox.value = parseInt(First_Value.value) / parseInt(second_value.value);
            }
        }

    })
})

