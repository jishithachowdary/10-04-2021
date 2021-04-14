function createMyElement(elementname,classname="",id=""){
    var ele=document.createElement(elementname);
    ele.setAttribute('class',classname);
    ele.setAttribute('id',id);
    return ele;
}
async function foo(){
    let result=await fetch("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=vW5FWyn20G9YFARZHTWyOlQei6AD3UN5");
    let data=await result.json();
    for( var i=0;i<10;i++){
        var abstract=data.results[i].abstract;
        var created_date=data.results[i].published_date;
        var title=data.results[i].title;
        var short_url=data.results[i].short_url;
        var image=data.results[i].multimedia[4].url;
        var card=createMyElement("div","card mb-3 border-secondary");
        var s_card=createMyElement("div","section-card");
        var t_card=createMyElement("div","titlecard");
        var d_card=createMyElement("div","date-card");
        var a_card=createMyElement("div","abstract-card");
        var cont=createMyElement("a","continueReading");
        var img=createMyElement("img","img-thumbnail");
        img.setAttribute('src',image);
        img.setAttribute('width','200');
        img.setAttribute('height','250');
        cont.setAttribute('href',short_url);
        cont.append("continue reading...");
        s_card.append("WORLD");
        t_card.append(title);
        d_card.append(created_date);
        a_card.append(abstract);
        var c_left=createMyElement("div","col-md-8");
        var c_right=createMyElement("div","col-md-4")
        c_right.append(img);
        c_left.append(s_card,t_card,d_card,a_card,cont);
        var main_card=createMyElement("div","row no-gutters");
        main_card.append(c_left,c_right);
        card.append(main_card);
        document.getElementById("div").append(card);
    }
    
}
foo();