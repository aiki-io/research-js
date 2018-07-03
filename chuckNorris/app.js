$(() => {
    const $btn = $('#get-jokes');
    $btn.click((e) => {
        e.preventDefault();
        getJokes();
    });
});

function getJokes() {
    const number = $('#number').val();
    const xhr = new XMLHttpRequest();
    const $jokes = $('#jokes');
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`);
    xhr.onload = () => {
        $jokes.empty();
        if (xhr.status === 200) {
            
            const response = JSON.parse(xhr.responseText);
            if (response.type === 'success') {
                $.each(response.value, (ndx, val) => {
                    const li = $('<li/>');
                    li.text(val.joke);
                    $jokes.append(li);
                });  
            } else {
                const li = $('<li />');
                li.text('Something went wrong');
                $jokes.append(li);
            }
        }
    };
    xhr.send();
}