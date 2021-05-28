const clickParagraph = (ev) => {
    const text = document.querySelector("#paragraph").innerHTML;   
    const my_string = text[0]+text[1]+text[2] ;
    if (my_string === '<i>') {
        document.querySelector("#paragraph").innerHTML="";
    };
}

const create_new_bullet_first = (ev) => {
    var old_text = document.querySelector('#first_list').innerHTML;
    var original_text = old_text.split("<p")[0];
    document.querySelector('#first_list').innerHTML = 
        `${original_text}` + `<li></li>` + `<p contenteditable="false" id="more" onclick="create_new_bullet_first(event)">
        <span>&#43;</span>
        </p>`
}

const tab = (ev) => {
    // Number 9 is the "tab" key on the keyboard -- trying to indent;
    console.log(ev.keyCode);
    if (ev.keyCode == 9) {
        ev.preventDefault();
    }
    // if (ev.keyCode == )
};

const save_edits = () => {
    var edited_text_list = document.querySelector('.bulleted_list').innerHTML;
    var edited_text_par = document.querySelector('.paragraph').innerHTML;
    localStorage.tab2_listEdits = edited_text_list;
    localStorage.tab2_parEdits = edited_text_par;
    alert('Edits saved!');
}

const check_edits = () => {
    if (localStorage.tab2_listEdits != null) {
        document.querySelector('.bulleted_list').innerHTML = localStorage.tab2_listEdits;
    }
    if (localStorage.tab2_parEdits != null) {
        document.querySelector('.paragraph').innerHTML = localStorage.tab2_parEdits;
    }
}

