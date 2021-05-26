const clickParagraph = (ev) => {
    const text = document.querySelector("p").innerHTML;   
    const my_string = text[0]+text[1]+text[2] ;
    if (my_string === '<i>') {
        document.querySelector("p").innerHTML="";
    };
};

document.querySelector("p").onclick = clickParagraph;

