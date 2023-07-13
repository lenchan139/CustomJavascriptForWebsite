// inject viewport first 
var meta = document.createElement('meta');
meta.name = 'viewport'
meta.content = 'width=device-width, initial-scale=1"'
// meta.outerHTML = '<meta name="viewport" content="width=device-width, initial-scale=1" />'
var htmls  = document.getElementsByTagName('html')
if(htmls&&htmls.length>0){
    var html = htmls[0]
    html.appendChild(meta)
}

// first change nbar
var nb = document.getElementById('nb')
if(nb&&nb.style){
    // nbar is exist so do some magic
    nb.style.maxHeight = '100%'
    nb.style.minHeight = ''
    nb.style.fontSize = '1.2rem'
    nb.style.maxWidth = 'auto'
    nb.style.minWidth = 'auto'
    nb.style.lineHeight = '2rem'
}

var outerframes = document.getElementsByClassName('ido')
if(outerframes && outerframes.length > 0){
    var outerframe = outerframes[0]
    if(outerframe.style){
        outerframe.style.maxHeight = 'auto'
        outerframe.style.maxWidth = 'auto'
        outerframe.style.minHeight = 'auto'
        outerframe.style.minWidth = 'auto'
    }
}


var serachbox = document.getElementById('searchbox')
if(serachbox && serachbox.style){
    serachbox.style.width = 'auto'
    var f_search_input = document.getElementById('f_search')
    if(f_search_input && f_search_input.style){
        f_search_input.style.width = '90%'
    }
    var catTables1 = serachbox.getElementsByClassName('itc')
    if(catTables1 && catTables1.length > 0){
        var cattable = catTables1[0]
        if(cattable && cattable.style){
            var tbody = cattable.getElementsByTagName('tbody')
            if(tbody && tbody.length > 0){
                for(var o of tbody){
                    var element = document.createElement('div');
                    element.innerHTML = o.innerHTML
                    cattable.replaceChild(element, o)
                    element.className = 'tbody_c'
                }
            }

            var tr = cattable.getElementsByTagName('tbody')
            if(tr && tr.length > 0){
                for(var o of tbody){
                    var element = document.createElement('div');
                    element.innerHTML = o.innerHTML
                    cattable.replaceChild(element, o)
                    element.className = 'tr_c'
                }
            }

            var td = cattable.getElementsByTagName('td')
            if(tbody && tbody.length > 0){
                for(var o of tbody){
                    var element = document.createElement('div');
                    element.innerHTML = o.innerHTML
                    cattable.replaceChild(element, o)
                    element.className = 'td_c'
                }
            }
            var catClickables = cattable.getElementsByClassName('cs')
            if(catClickables && catClickables.length > 0){
                for(var o of catClickables){
                    if(o && o.style){
                        o.style.margin = '10px 5px'
                        o.style.fontSize = '1.2rem'
                        o.style.height = '1.2rem'
                    }
                }
            }
        }
    }

}
