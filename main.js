let categories = [
    'All','Computer Program',
    'Live','Mixes','Podcasts','Courses',
    'Mishary bin Rashid Alafasy','Novels','Hitory','Psychology',
    'New to you','Watched'
]

let category = document.querySelector('#cat')
for (let item of categories){
    let link = document.createElement('a')
    link.textContent=`${item}`
    category.appendChild(link)
}




let videos = [
    {   name : 'وعي',
        profileImg : "assets/C1.PNG" ,
        title : ' وعي 26 | ما هو القرآن' ,
        cover : "assets/Capture1.PNG",
        details : '180k views . 5 months ago',
        dirc : 'rtl'
    },
    {
        name : "The Net Ninja",
        profileImg : "assets/C2.PNG" ,
        title : "Vue Js 3 Tutorial For Beginners #11" ,
        cover : "assets/Capture2.PNG",
        details : '99K views . 1 year ago'
    },
    {
        name : "القرآن الكريم",
        profileImg : "assets/C8.PNG" ,
        title : "سورة البقرة كاملة هزاع البلوشي" ,
        cover : "assets/Capture8.PNG",
        details : '2.1M views . 1 year ago',
        dirc : "rtl"
    },
    {
        name : "The Net Ninja",
        profileImg : "assets/C2.PNG" ,
        title : "Modern Js Jutorial #1 -Intro & Setup" ,
        cover : "assets/Capture3.PNG",
        details : '389K views . 2year ago'
    },
    {
        name : "Kesh",
        profileImg : "assets/C5.PNG" ,
        title : 'How I actually get my "ORIGINAL" Ideas' ,
        cover : "assets/Capture5.PNG",
        details : '355K views . 5years ago'
    },
    {
        name : " المراجعة النهائية",
        profileImg : "assets/C6.PNG" ,
        title : " مراجعة فاتت جنبنا لعبدالحليم حافظ و موقف محرج لاحمد عز و ظهور خاص لمنى زكي" ,
        cover : "assets/Capture6.PNG",
        details : '343K views . 6months ago',
        dirc : 'rtl'
    },
    {
        name : "Nedal Reads",
        profileImg : "assets/C7.PNG" ,
        title : "February wrap up 2022" ,
        cover : "assets/Capture7.PNG",
        details : '5.8k views . 13 hours ago'
    },
    {
        name : "mintephysics",
        profileImg : "assets/C9.PNG" ,
        title : "Is it Better to Walk or Run in the Rain " ,
        cover : "assets/Capture9.PNG",
        details : '17M views . 9 year ago'
    },
    {
        name : "هدى القرآن",
        profileImg : "assets/C10.PNG" ,
        title : "سلسلة اسماء الله الحسنى - اسم الله النور" ,
        cover : "assets/Capture10.PNG",
        details : '677 views . 1 year ago',
        dirc: 'rtl'
    },
    {
        name : "TED-Ed",
        profileImg : "assets/C11.PNG" ,
        title : "What's DEPRESSION ?" ,
        cover : "assets/Capture11.PNG",
        details : '19M views . 6years ago'
    }

]

let showSection = document.querySelector('#videos')
for (let video of videos){
    let newVideo = document.createElement('div');
    newVideo.classList = 'card'
    // locate each video information with trimming the title if it is too long .. >37
    newVideo.innerHTML=`
        <img src="${video.cover}" alt="" class="cover">
        <div class="info">
            <img src="${video.profileImg}" alt="" class="channel">
            <div>
                <h5 dir="ltr || ${video.dirc}"> 
                    ${ video.title.length > 37 ? ((!video.dirc)? 
                        video.title.substring(0,35)+'..': 
                        '..' + video.title.substring(0,35)) : video.title}
                </h5>
                <p dir="ltr || ${video.dirc}">${video.name}</p>
                <p>${video.details}</p>
            </div>
        </div>
    `
    showSection.appendChild(newVideo)
}

document.querySelector('#bars').addEventListener('click',()=>{

    document.querySelector("#pageBelow").classList.toggle('rest1')
    document.querySelector("#pageBelow").classList.toggle('rest2')
})

let covers= document.getElementsByClassName('cover')
for( let cover of covers){
    cover.addEventListener('mouseenter', ()=>{
        let clone = cover.parentElement.cloneNode(true)
        clone.classList.add('added')
        links=document.createElement('div')
        links.innerHTML=`
            <a href="">WATCH LATER</a>
            <a href="">ADD TO QUEUE</a>
        `
        clone.appendChild(links)
        cover.parentElement.appendChild(clone)
        
        clone.addEventListener('mouseleave',()=>{
            document.querySelector('.added').remove()
        })
    })
    
}






window.addEventListener('resize',()=>{
    document.querySelector("#pageBelow").classList.replace('rest1' , 'rest2')
})