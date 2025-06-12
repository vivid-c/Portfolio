const content = document.getElementById("content");
let linIndex = 0;

const lines =[
   {text:"$ Intializing",delay:800},
   {text:"Hey there..",delay:1000,typewriter:true},
   {
  text: "I'm V. A second year CS Student (BCA)",
  delay: 1200,
  typewriter:true,
  glow: true
},
   { text: "<strong>Skills: HTML, CSS, JavaScript, Python</strong>", delay: 800},
   { text: "GitHub → <a href='https://github.com/vivid-c' class='link' target='_blank'>github.com/vivid-c</a>", delay: 800 },
   { text: "LinkedIn→ <a href='https://github.com/vivid-c' class='link' target='_blank'>github.com/vivid-c</a>", delay: 800 },
   {text : "Learning AI ",delay:800,typewriter:true},
   {text:"One of the Founders of <a href='https://genzattire.in' class='link' target='_blank'>GenzAttire</a>",delay:900,glow:true},
    { text: "<br><strong>PROJECTS:</strong>", delay: 1000 },
  { text: "🖥 Portfolio Terminal → <a href='https://your-live-link.com' class='link' target='_blank'>Live</a>", delay: 800 },
  { text: "🛒 GenzAttire Clothing Store → <a href='https://genzattire.in' class='link' target='_blank'>GenzAttire</a>", delay: 800 },
  { text:"CONNECT!",delay:2000,typewriter:true},
  {text:"That's It.",delay:1000,typewriter:true},
  {text:"BYE",delay:800,typewriter:true},
  

   { text: "<span class='cursor'></span>", delay: 500, cursor: true }

]


function typeWriterEffect(element,text,speed=50,callback){
    let i = 0;
    function type(){
        if(i<text.length){
            element.innerHTML+= text.charAt(i)
            i++;
            setTimeout(type,speed);
        }
        else{
            callback()
        }

    }
    type()
}

function showNextLine(){
    if(linIndex>=lines.length) return;
    const lineData = lines[linIndex];
    const line = document.createElement('div');
    line.className = 'line';

    if(lineData.glow){
        line.classList.add('glow');
    }
    content.appendChild(line)

    setTimeout(() => {
        if(lineData.cursor){
            line.innerHTML = `<span class="cursor"></span>`;
            return;
        }
        if(lineData.typewriter){
            line.classList.add("typewriter");
            typeWriterEffect(line,lineData.text,40,() => {
                linIndex++;
                showNextLine();
            });

        }
        else{
            line.innerHTML = lineData.text;
            line.style.opacity = 1;
            linIndex++;
            setTimeout(showNextLine,lineData.delay || 1000)
        }
    },200);

}

setTimeout(showNextLine,1000);
