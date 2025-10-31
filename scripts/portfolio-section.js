// Small carousel controls for the Other Projects scroller
(function(){
    const scroller = document.getElementById('otherScroller');
    if(!scroller) return;

    const prev = document.querySelector('#other-projects .carousel-btn.prev');
    const next = document.querySelector('#other-projects .carousel-btn.next');

    function scrollByAmount(amount){ scroller.scrollBy({ left: amount, behavior: 'smooth' }); }

    prev && prev.addEventListener('click', ()=> scrollByAmount(-Math.round(scroller.clientWidth * 0.8)));
    next && next.addEventListener('click', ()=> scrollByAmount(Math.round(scroller.clientWidth * 0.8)));

    scroller.addEventListener('keydown', (e)=>{
        if(e.key === 'ArrowRight') { e.preventDefault(); scrollByAmount(320); }
        if(e.key === 'ArrowLeft') { e.preventDefault(); scrollByAmount(-320); }
    });

    // Allow mouse wheel to scroll horizontally when over scroller
    scroller.addEventListener('wheel', (e)=>{
        if(Math.abs(e.deltaX) < Math.abs(e.deltaY)){
            e.preventDefault(); scroller.scrollBy({ left: e.deltaY, behavior: 'auto' });
        }
    }, { passive: false });
})();
