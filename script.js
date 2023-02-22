
let sel = document.getElementById('slct');
let down = document.getElementById('down');
sel.addEventListener ("change", function () {

    if(this.value == "englisch")
    {
        down.href ='plakat(eng).pdf'
    }
    if(this.value == "deutsch")
    {
        down.href ='plakat.pdf'
    }
    if(this.value == "russisch")
    {
        down.href ='plakat(rus).pdf'
    }
      if(this.value == "französisch")
    {
        down.href ='plakat(fr).pdf'
    }
 
});
