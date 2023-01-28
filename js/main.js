let elForm = document.querySelector('.form')
let elInp = document.querySelector('.inp')
let elText =document.querySelector('.text') 
let str = 'Mirzo (keyinchalik Sulton) Muhammad ibn Shohrux ibn Temur Ulugʻbek Koʻragon — Temuriylar davlatining hukmdori, Shohruxning oʻgʻli. Buyuk oʻzbek astronomi (yulduzshunos) va matematigi. U otasi Shohrux Mirzo davrida Mavarounnahr hokimi va otasi vafot etgach butun Temuriylar imperiyasi sultoni(1447—1449) boʻldi. Ulugʻbek  trigonometriya va sferik geometriya kabi astronomiya bilan bogʻliq matematika sohasidagi ishlari, shuningdek, sanʼat va intellektual faoliyatga umumiy qiziqishlari bilan ajralib turardi.   U besh tilda: turkiy, arab ,  fors ,  moʻgʻul va oz miqdorda  xitoy tillarini bilgan deb taxmin qilinadi .  Uning hukmronligi davrida (avval hokim, keyin toʻgʻridan-toʻgʻri) uning eʼtibori va homiyligi tufayli  temuriylar uygʻonish davrining  madaniy choʻqqisiga erishdi . Samarqand hokimligi, otasi Shohrux Mirzo tomonidan Ulugʻbekga berilgan.'
 
elText.innerHTML = str
elForm.addEventListener('submit',(e)=>{
    e.preventDefault()
  let re = new RegExp(elInp.value,'gi')                     
 let reStr = str.replace(re ,`<mark>${elInp.value}</mark>`)
 elText.innerHTML = reStr
})