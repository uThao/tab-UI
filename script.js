const $ = document.querySelector.bind(document),
      $$ = document.querySelectorAll.bind(document),
      tabs = $$('.tab-item'),
      panes = $$('.tab-pane'),
      line = $('div.line')
    

tabs.forEach(function(tab, index) {
    tab.onclick = function(e) {
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');

        e.target.classList.add('active')
        panes[index].classList.add('active')

        line.style.left = e.target.offsetLeft + 'px'
        line.style.width = e.target.offsetWidth + 'px'
    }
})  