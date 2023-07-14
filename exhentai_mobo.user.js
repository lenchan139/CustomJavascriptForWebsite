// inject viewport first 
var meta = document.createElement('meta');
meta.name = 'viewport'
meta.content = 'width=device-width, initial-scale=1"'
// meta.outerHTML = '<meta name="viewport" content="width=device-width, initial-scale=1" />'
var htmls = document.getElementsByTagName('html')
if (htmls && htmls.length > 0) {
    var html = htmls[0]
    html.appendChild(meta)
}

// first change nbar
var nb = document.getElementById('nb')
if (nb && nb.style) {
    // nbar is exist so do some magic
    nb.style.maxHeight = '100%'
    nb.style.minHeight = ''
    nb.style.fontSize = '1.2rem'
    nb.style.maxWidth = 'auto'
    nb.style.minWidth = 'auto'
    nb.style.lineHeight = '2rem'
}

var outerframes = document.getElementsByClassName('ido')
if (outerframes && outerframes.length > 0) {
    var outerframe = outerframes[0]
    if (outerframe.style) {
        outerframe.style.maxHeight = 'auto'
        outerframe.style.maxWidth = 'auto'
        outerframe.style.minHeight = 'auto'
        outerframe.style.minWidth = 'auto'
    }
}


var serachbox = document.getElementById('searchbox')
if (serachbox && serachbox.style) {
    serachbox.style.width = 'auto'
    var f_search_input = document.getElementById('f_search')
    if (f_search_input && f_search_input.style) {
        f_search_input.style.width = '90%'
    }
    var catTables1 = serachbox.getElementsByClassName('itc')
    if (catTables1 && catTables1.length > 0) {
        var cattable = catTables1[0]
        if (cattable && cattable.style) {
            var tbody = cattable.getElementsByTagName('tbody')
            if (tbody && tbody.length > 0) {
                for (var o of tbody) {
                    var element = document.createElement('div');
                    element.innerHTML = o.innerHTML
                    cattable.replaceChild(element, o)
                    element.className = 'tbody_c'
                }
            }

            var tr = cattable.getElementsByTagName('tbody')
            if (tr && tr.length > 0) {
                for (var o of tbody) {
                    var element = document.createElement('div');
                    element.innerHTML = o.innerHTML
                    cattable.replaceChild(element, o)
                    element.className = 'tr_c'
                }
            }

            var td = cattable.getElementsByTagName('td')
            if (tbody && tbody.length > 0) {
                for (var o of tbody) {
                    var element = document.createElement('div');
                    element.innerHTML = o.innerHTML
                    cattable.replaceChild(element, o)
                    element.className = 'td_c'
                }
            }
            var catClickables = cattable.getElementsByClassName('cs')
            if (catClickables && catClickables.length > 0) {
                for (var o of catClickables) {
                    if (o && o.style) {
                        o.style.margin = '10px 5px'
                        o.style.fontSize = '1.2rem'
                        o.style.height = '1.2rem'
                    }
                }
            }
        }
    }

}

var rangebar = document.getElementById('rangebar')
if (rangebar && rangebar.style) {
    rangebar.style.width = '100%'
    rangebar.style.height = 'auto'
    rangebar.style.display = 'flex'
    rangebar.style.flexWrap = 'wrap'
    if (rangebar.childNodes && rangebar.childNodes.length > 0) {
        var index = 1
        for (var o of rangebar.childNodes) {
            if (o && o.style) {
                o.style.margin = '1px 3px'
                var div = o.getElementsByTagName('div')
                if (div && div.length > 0) {
                    var d = div[0]
                    if (d && d.style) {
                        d.style.width = '1.3rem'
                        d.style.height = '1.3rem'
                        d.style.fontSize = '1.2rem'
                        d.style.paddingLeft = '5px'
                        d.style.margin = '6px'
                        d.style.color = 'black'
                        d.innerText = index
                    }
                }
            }
            index++;
        }
    }
}

var dps = document.getElementsByClassName('dp')
if (dps && dps.length > 0) {
    for (var dp of dps) {
        if (dp && dp.style) {
            dp.style.width = '100%'
            dp.style.fontSize = '1rem'
        }
    }
}

var arr_searchnav = document.getElementsByClassName('searchnav')
if (arr_searchnav && arr_searchnav.length > 0) {
    for (var o of arr_searchnav) {
        var searchnav = o
        if (searchnav && searchnav.style) {
            searchnav.style.whiteSpace = 'initial'
            var selectedNodes = searchnav.getElementsByTagName('select')
            if (selectedNodes && selectedNodes.length > 0) {
                var selectN = selectedNodes[0]
                if (selectN && selectN.selectedOptions && selectN.selectedOptions.length > 0) {
                    var sOptions = selectN.selectedOptions[0]
                    if (sOptions && sOptions.innerText == 'Extended') {
                        // if extended do nothing
                        selectN.style.display = 'none'
                    } else {
                        // selectN.value = 'e'
                        location.href = 'https://exhentai.org/?inline_set=dm_e'
                    }
                }
            }

        }
    }
}
