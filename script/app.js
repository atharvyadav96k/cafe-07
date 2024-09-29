const body = document.querySelector('body');
const menuContainer = document.getElementById('menuContainer');
const menuBtn = document.getElementById('menu');
class resBtn{
    constructor(btn, container,showClass, hideClass){
        this.btn = btn;
        this.showClass = showClass;
        this.hideClass = hideClass;
        this.container = container;
        btn.addEventListener('click', ()=>{
            if(body.clientWidth < 728 && !this.container.classList.contains(this.showClass)){
                this.container.classList.remove(this.hideClass)
                this.container.classList.add(this.showClass)
            }else{
                this.container.classList.remove(this.showClass)
                this.container.classList.add(this.hideClass)
            }
        })
    }
}
const cartContainer = document.getElementById('cartContainer');
const cartBtn = document.getElementById('cart');
new resBtn(menuBtn, menuContainer, 'showMenu', 'hideMenu')
new resBtn(cartBtn, cartContainer, 'showCart', 'hideCart')