
// switching breadcrumbs переключение хлебных крошек

const sections = document.querySelectorAll('section');
const navBtns = document.querySelectorAll('.shift');

// функция которая добавляет и удаляет класс activ-point
const actionSectionHandler = (currentSectionId) => {
   navBtns.forEach(btn => {
     if (btn.dataset.section === currentSectionId) {
       btn.classList.add('activ-point');
       return;
     }
     btn.classList.remove('activ-point');
   })
}
// фукция контролирует пердвижение секций
const sectionWatcherCallback = (section, sectionWatcher) => {
  section.forEach(section => {
    if(!section.isIntersecting){return};
    actionSectionHandler(section.target.id);
  })
}

const sectionWatcherOptions = {
   threshold: .9
}

const sectionWatcher = new
IntersectionObserver(sectionWatcherCallback,
  sectionWatcherOptions)

sections.forEach(section => {
  sectionWatcher.observe(section);
})

/**
   * ------------------------------------------------------------------------
   * BURGER BATTON
   * ------------------------------------------------------------------------
   */
const menuToggle = document.querySelector('#menu-togle');
const mibileNavConteiner = document.querySelector('#mobile-nav1');

menuToggle.onclick = function(){

	menuToggle.classList.toggle('menu_icon_active');
	mibileNavConteiner.classList.toggle('mobile-nav-sctiv');

}
  window.addEventListener('scroll', () => { //анонимная функция
   if (mibileNavConteiner.classList.contains('mobile-nav-sctiv')) {

     mibileNavConteiner.classList.remove('mobile-nav-sctiv');
     menuToggle.classList.remove('menu_icon_active');
   }
  });
/**
   * ------------------------------------------------------------------------
   * ANYMATE
   * ------------------------------------------------------------------------
   */

//top_head

let header_1 = document.querySelector('.header');

header_1.style.padding = '7px';

const list = document.querySelector('.navigate');

list.style.height = '37px';
list.style.alignItems = 'center';
list.style.color = '#fff';


  window.addEventListener('scroll', () => { //анонимная функция
   if (window.pageYOffset > 0) {
      header_1.classList.add('active_scroll');
      list.classList.add('title_content');
   } else {
      header_1.classList.remove('active_scroll');
      list.classList.remove('title_content');
      header_1.style.transition = 'all 0.5s ease';
      list.style.transition = 'all 0.5s ease';
   }
  });


// parallax

let headerPage = document.querySelector('.slide_1');

 window.addEventListener('scroll', () => {
   let offset =  window.pageYOffset;
   headerPage.style.backgroundPositionY = offset * 0.7 + 'px';
});

const wordTl = document.querySelector('.baner');
window.addEventListener('scroll', function () {
  wordTl.style.backgroundSize = 100 - +window.pageYOffset/39+'%';
  wordTl.style.opacity = 1 - +window.pageYOffset/400+'';
});

  //finish top_head

  //Start Block houseLockout

  const translateX = document.querySelectorAll('.trans');
const translateY = document.querySelectorAll('.trans_vert');

window.addEventListener('scroll', () => {

    let scroll = window.pageYOffset;

    translateX.forEach(element => {
       let speed = element.dataset.speed;
       element.style.transform = `translateX(${scroll * speed}px)`;
    })
    translateY.forEach(element => {
       let speed = element.dataset.speed;
       element.style.transform = `translateY(${scroll * speed}px)`;
    })
});
 //finish Block houseLockout


//Start block mailboxLockout
const transMission=document.querySelector('.in-veiwe');
window.addEventListener('scroll', ()=> {
    const {
        scrollTop, clientHeight
    }
    =document.documentElement;
    const topElementToTopViewport=transMission.getBoundingClientRect().top;
    if(scrollTop>(scrollTop+topElementToTopViewport).toFixed()-clientHeight*0.9) {
        transMission.classList.add('activeTrans')
    }
}
);
//finish block mailboxLockout



//Start block commercialLockout

const hello = document.querySelector('.itemFocus');
const trigger = document.querySelector('.trigger');


hello.onmouseenter = () => {
  hello.style.background = '#7dacc900';
  hello.style.border = '80px solid #1e2c354d';
  trigger.classList.add('in-viewport');
}
hello.onmouseleave = () => {
  hello.style.background = '#1e2c354d';
  hello.style.border = '1px solid #7dacc900';
  trigger.classList.remove('in-viewport');
}
if (window.matchMedia("screen and (min-width: 1px) and (max-width:782px)").matches) {
   hello.onmouseenter = () => {
      hello.style.background = '#7dacc900';
      hello.style.border = '30px solid #1e2c354d';
      trigger.classList.add('in-viewport');
} 
}

//finish block commercialLockout

//Start btn-up
const btnUp = {
      el: document.querySelector('.btn-up'),
      scrolling: false,
      show() {
        if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
          this.el.classList.remove('btn-up_hide');
          this.el.classList.add('btn-up_hiding');
          window.setTimeout(() => {
            this.el.classList.remove('btn-up_hiding');
          }, 300);
        }
      },
      hide() {
        if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
          this.el.classList.add('btn-up_hiding');
          window.setTimeout(() => {
            this.el.classList.add('btn-up_hide');
            this.el.classList.remove('btn-up_hiding');
          }, 300);
        }
      },
      addEventListener() {
        // при прокрутке окна (window)
        window.addEventListener('scroll', () => {
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          if (this.scrolling && scrollY > 0) {
            return;
          }
          this.scrolling = false;
          // если пользователь прокрутил страницу более чем на 200px
          if (scrollY > 400) {
            // сделаем кнопку .btn-up видимой
            this.show();
          } else {
            // иначе скроем кнопку .btn-up
            this.hide();
          }
        });
        // при нажатии на кнопку .btn-up
        document.querySelector('.btn-up').onclick = () => {
          this.scrolling = true;
          this.hide();
          // переместиться в верхнюю часть страницы
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      }
    }

    btnUp.addEventListener();
 //finish btn-up
