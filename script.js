
var navtoggle = document.getElementById(`navtoggle`)
var navClose = document.getElementById(`navClose`)
var navbar = document.getElementById ('navShow')
var navMobile = document.getElementById('nav-mobileShow')

var mon = document.getElementById('mon')
var tue = document.getElementById('tue')
var wed = document.getElementById('wed')
var thur = document.getElementById('thur')
var fri = document.getElementById('fri')


  var m1 = document.getElementById(`m1`)
  var m2 = document.getElementById(`m2`)
  var t1 = document.getElementById(`t1`)
  var t2 = document.getElementById(`t2`)
  var w1 = document.getElementById(`w1`)
  var w2 = document.getElementById(`w2`)
  var th1 = document.getElementById(`th1`)
  var th2 = document.getElementById(`th2`)
  var f1 = document.getElementById(`f1`)
  var f2 = document.getElementById(`f2`)


  var click1 = document.getElementById ('ui-id-1')
  var tabs1 = document.getElementById ('tabs-1')

  var click2 = document.getElementById ('ui-id-2')
  var tabs2 = document.getElementById ('tabs-2')

  var click3 = document.getElementById ('ui-id-3')
  var tabs3 = document.getElementById ('tabs-3')

  var click4 = document.getElementById ('ui-id-4')
  var tabs4 = document.getElementById ('tabs-4')
  
  click1.addEventListener('click', function(){
    if ( tabs1.style.display = "none" ) {
      tabs2.className = "hide"
      tabs3.className = "hide"
      tabs4.className = "hide"
      tabs1.style.display = "" 
       
    }
       
    }

)

  click2.addEventListener('click', function(){
    if ( tabs2.className = "hide") {
      tabs3.className = "hide"
      tabs4.className = "hide"
      tabs2.className = ""
      tabs1.style.display = "none"  
    }

  })

  click3.addEventListener('click', function(){
    if ( tabs3.className = "hide") {
      tabs2.className = "hide"
      tabs4.className = "hide"
      tabs3.className = ""
      tabs1.style.display = "none"  
    }

  })

  click4.addEventListener('click', function(){
    if ( tabs4.className = "hide") {
      tabs3.className = "hide"
      tabs2.className = "hide"
      tabs4.className = ""
      tabs1.style.display = "none"  
    }

  })

  
   
  function showMday() {
    t1.textContent = ''
    t2.textContent = ''

    w1.textContent = ''
    w2.textContent = ''

    th1.textContent = ''
    th2.textContent = ''

    f1.textContent = '' 
    f2.textContent = ''

    m1.innerHTML = '10:00AM - 11:30AM'
    m2.innerHTML = '2:00PM - 3:30PM'

    if (mon.className = 'active') {
      mon.className = 'active'
      tue.className = ''
      wed.className = ''
      thur.className = ''
      fri.className = ''
    }
  }

  showMday()

  function showTday() {

    m1.textContent = ''
    m2.textContent = ''

    w1.textContent = ''
    w2.textContent = ''

    th1.textContent = ''
    th2.textContent = ''

    f1.textContent = '' 
    f2.textContent = ''

    t1.textContent = '2:00PM - 3:30PM'
    t2.textContent = '10:00AM - 11:30AM'

if (mon.className = 'active') {
  mon.className = ''
  tue.className = 'active'
  wed.className = ''
  thur.className = ''
  fri.className = ''
}
  }

  function showWday() {
    m1.textContent = ''
    m2.textContent = ''

    t1.textContent = ''
    t2.textContent = ''

    th1.textContent = ''
    th2.textContent = ''

    f1.textContent = ''
    f2.textContent = ''

    w1.textContent = '10:00AM - 11:30AM'
    w2.textContent = '2:00PM - 3:30PM'

    if (mon.className = 'active') {
      mon.className = ''
      tue.className = ''
      wed.className = 'active'
      thur.className = ''
      fri.className = ''
    }
  }

  function showThday() {
    m1.textContent = ''
    m2.textContent = ''

    t1.textContent = ''
    t2.textContent = ''

    w1.textContent = ''
    w2.textContent = ''

    f1.textContent =  ''
    f2.textContent = ''

    th1.textContent = '10:00AM - 11:30AM'
    th2.textContent = '09:00AM - 10:00AM'

    if (mon.className = 'active') {
      mon.className = ''
      tue.className = ''
      wed.className = ''
      thur.className = 'active'
      fri.className = ''
    }
  }
  
  function showFday() {
    m1.textContent = ''
    m2.textContent = ''

    t1.textContent = ''
    t2.textContent = ''

    w1.textContent = ''
    w2.textContent = ''

    th1.textContent = ''
    th2.textContent = ''

    f1.textContent = '10:00AM - 11:30AM' 
    f2.textContent = '2:00PM - 3:30PM'

    if (mon.className = 'active') {
      mon.className = ''
      tue.className = ''
      wed.className = ''
      thur.className = ''
      fri.className = 'active'
    }
  }
  


  function navDisplay () {
    if (window.innerWidth <= 700) {
        navtoggle.style.visibility =`hidden`
        navClose.style.visibility =`visible`
        navMobile.style.visibility = 'visible'
        
    }
  }

  function closeNav() {
    if (window.innerWidth <= 700) {
    navClose.style.visibility =`hidden`
    navtoggle.style.visibility =`visible`
    navMobile.style.visibility = 'hidden'   
    }
  }



  navtoggle.addEventListener (`click`, navDisplay)
  navClose.addEventListener (`click`, closeNav)
  
  function handleResize() {
    
    if (window.innerWidth > 700) {
      // Ensure both icons are hidden when the screen is above 700px
      navtoggle.style.visibility =`hidden`;
      navClose.style.visibility =`hidden`;
      navMobile.style.visibility = 'hidden'
       
     
    } 
    

    else {
       navtoggle.style.visibility =`visible`;
       navClose.style.visibility =`hidden`;
       navMobile.style.visibility = 'hidden';
    }

  }
  
  // Initialize visibility on page load
  document.addEventListener('DOMContentLoaded', handleResize);
  
  // Add event listener to handle window resize
  window.addEventListener('resize', handleResize);
