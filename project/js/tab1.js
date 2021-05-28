
const create_new_bullet_first = (ev) => {
    var old_text = document.querySelector('#first_list').innerHTML;
    var original_text = old_text.split("<p")[0];
    document.querySelector('#first_list').innerHTML = 
        `${original_text}` + `<li></li>` + `<p contenteditable="false" id="more" onclick="create_new_bullet_first(event)">
        <span>&#43;</span>
        </p>`
}

const create_new_bullet_second = (ev) => {
    var old_text = document.querySelector('#second_list').innerHTML;
    var original_text = old_text.split("<p")[0];
    document.querySelector('#second_list').innerHTML = 
        `${original_text}` + `<li></li>` + `<p contenteditable="false" id="more" onclick="create_new_bullet_second(event)">
        <span>&#43;</span>
        </p>`
}

const save_edits = () => {
    var edited_text = document.querySelector('.bulleted_list').innerHTML;
    localStorage.tab1Edits = edited_text;
    alert('Edits saved!');
}

const check_edits = () => {
    if (localStorage.tab1Edits != null) {
        document.querySelector('.bulleted_list').innerHTML = localStorage.tab1Edits;
    }
}

const tab = (ev) => {
    // Number 9 is the "tab" key on the keyboard -- trying to indent;
    console.log(ev.keyCode);
    if (ev.keyCode == 9) {
        ev.preventDefault();
    }
};

const backspace = (ev) => {
    console.log('hi!');
    if (ev.keyCode == 8) {
        console.log(ev.currentTarget);
        // var text = ev.currentTarget.innerHTML.split("<p")[0];
        // console.log(text);
        // document.querySelector('')
        // if (text == '<li>')
    }
}


