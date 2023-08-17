document.getElementById('post-button').addEventListener('click',function(){
    const textfield = document.getElementById('comment-textarea')
    const textContent = textfield.value;
    const p = document.createElement('p');
    p.innerText = textContent;
    document.getElementById('comment-section').appendChild(p);
    textfield.value = '';
})

document.getElementById('delete-confirmation').addEventListener('keyup', function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById('delete-button')
    console.log(text)
    if(text == 'delete'){
        deleteButton.removeAttribute('disabled')
        console.log('hello hi')
    }
})
document.getElementById('delete-button').addEventListener('click', function(){
    const remText = document.getElementById('random-text');
    console.log(remText);
    remText.style.display = 'none'
    document.getElementById('delete-confirmation').value = ''
})