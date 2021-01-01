let boxes = document.querySelectorAll(".box");
let w = window.screen.availWidth;
//alert(w)
let colours = [
    "#4ad",
    "#e7b",
    "#765",
    "#e51",
    "#088"
];
for(box of boxes)
{
    box.addEventListener("click", e=>{
        console.log(e.target);
    });
    box.addEventListener("touchstart", e=>{
        var initX = e.touches[0].pageX;
        var initY = e.touches[0].pageY;

        let log = document.querySelector("#log");
        log.innerText = `Start: ${initX} \n`
        e.target.addEventListener("touchmove", e=>{
            var i;
            var x;
            var y;
            for(i in e.changedTouches)
            {
                x = e.changedTouches[i].pageX;
                if(i%3==0)
                {
                    log.innerText += `Current: ${x} \n`
                    if(x < initX)
                    {
                        log.innerText = "Left \n"  + `${initX - x}`
                        e.target.style.background=`hsl(${parseInt(x-initX)*2}, 60%, 50%)`;
                        e.target.style.setProperty("left", `${x-initX}px`)
                    } else if(x > initX){
                        log.innerText = "Right \n" + `${x - initX}`
                        e.target.style.background=`hsl(${parseInt(x-initX)*2}, 60%, 50%)`;
                        e.target.style.setProperty("left", `${x-initX}px`)
                    }
                    /*
                    let log = document.querySelector("#log");
                    //console.log(e)
                    x = e.changedTouches[i].pageX
                    y = e.changedTouches[i].pageY
                    log.innerText = `${x}| ${y}` */
                }
            }
        });
        e.target.addEventListener("touchend", e=>{
            for(b of boxes){
                let offset = b.offsetLeft;
                console.log(offset);
                if(offset > (w*0.4) || offset < -(w*0.4))
                {
                    b.remove();
                } else {
                    b.style.left = 0;
                }
            }
        });
    })
}

/*
  EVERYTHING BELOW HERE IS JUST TO CHAGE THE COLOUR ON TAP
  WHICH I COULD HAVE DONE MUCH MORE EASILY OR OTHERWISE DONE WITHOUT
  IT ISN'T REALLY PART OF THE WHOLE SWIPING THING
*/




let box1 = document.querySelector("#box1");
let box1Index = 0;
box1.style.background = colours[box1Index];
box1.addEventListener("click", e=>{
    console.log(e);
    box1Index = (box1Index + 1) % 5;
    box1.style.background = colours[box1Index];
});

let box2 = document.querySelector("#box2");
let box2Index = 0;
box2.style.background = colours[box2Index];
box2.addEventListener("click", e=>{
    console.log(e);
    box2Index = (box2Index + 1) % 5;
    box2.style.background = colours[box2Index];
});

let box3 = document.querySelector("#box3");
let box3Index = 0;
box3.style.background = colours[box3Index];
box3.addEventListener("click", e=>{
    console.log(e);
    box3Index = (box3Index + 1) % 5;
    box3.style.background = colours[box3Index];
});

let box4 = document.querySelector("#box4");
let box4Index = 0;
box4.style.background = colours[box4Index];
box4.addEventListener("click", e=>{
    console.log(e);
    box4Index = (box4Index + 1) % 5;
    box4.style.background = colours[box4Index];
});

let box5 = document.querySelector("#box5");
let box5Index = 0;
box5.style.background = colours[box5Index];
box5.addEventListener("touchstart", e=>{
    console.log(e);
    box5Index = (box5Index + 1) % 5;
    box5.style.background = colours[box5Index];
});

function getEvent(event)
{
    let log = document.querySelector("#log");
    console.log(event)
    log.innerText = event.type// + "\n" +log.innerText;//.type
}

//document.addEventListener("touchstart", getEvent);
/*
    This is always called when contact is made
*/
//document.addEventListener("touchend", getEvent);
/*
    This is always called when contact is ended,
    unless the touch event was canceled somehow.
*/
//document.addEventListener("touchmove", getEvent);
/*
    This is called when the touch event moves
*/
//document.addEventListener("touchcancel", getEvent);
/*
    This is sometimes called, but only when I touch like no element or seomthing?
    It's tough to consistantly cause an error.
 */

//document.addEventListener("click", getEvent);
