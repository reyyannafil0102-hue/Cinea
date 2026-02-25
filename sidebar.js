// Shared sidebar behavior: open, close, overlay
(function(){
  const id = (s, root=document)=> root.querySelector(s);
  function init(root=document){
    const toggle = id('#sidebarToggle', root);
    const sidebar = id('#siteSidebar', root);
    const closeBtn = id('#sidebarClose', root);
    let overlay = document.querySelector('.sidebar-overlay');
    if(!overlay){ overlay = document.createElement('div'); overlay.className='sidebar-overlay'; document.body.appendChild(overlay); }

    function open(){ sidebar.classList.add('open'); overlay.classList.add('visible'); sidebar.setAttribute('aria-hidden','false'); }
    function close(){ sidebar.classList.remove('open'); overlay.classList.remove('visible'); sidebar.setAttribute('aria-hidden','true'); }

    if(toggle) toggle.addEventListener('click', ()=>{ if(sidebar.classList.contains('open')) close(); else open(); });
    if(closeBtn) closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', close);
    document.addEventListener('keydown', e=>{ if(e.key==='Escape') close(); });
    // Close when clicking any link inside sidebar
    document.addEventListener('click', e=>{ const a = e.target.closest && e.target.closest('.site-sidebar a'); if(a) close(); });
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', ()=>init(document)); else init(document);
})();
