const Name=document.getElementById('textField1');
const tel=document.getElementById('textField2');
const add=document.getElementById('textField3');



function saveButton(){
    document.getElementById('head1').innerText+=" "+Name.value;
    document.getElementById('head2').innerText+=" "+tel.value;
    document.getElementById('head3').innerText+=" "+add.value;
}

function refreshButton(){
    Name.value='';
    tel.value='';
    add.value='';

    document.getElementById('head1').innerText ="Name: "
    document.getElementById('head2').innerText ="Telephone No: "
    document.getElementById('head3').innerText ="Address: "

}