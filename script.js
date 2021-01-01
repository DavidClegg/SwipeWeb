let w = window.screen.availWidth; // The screen width
//alert(w)
function addEvents()
{
  let boxes = document.querySelectorAll(".box");
  for(box of boxes)
  {
    box.addEventListener("click", e=>{
      //console.log(e.target);
    });
    box.addEventListener("touchstart", e=>{
      var initX = e.touches[0].pageX;
      var initY = e.touches[0].pageY;
      var endX = initX;
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
            endX = x;
            log.innerText += `Current: ${x} \n`
            e.target.style.setProperty("left", `${x-initX}px`)

            let cx = e.target.offsetLeft;
            let cw = {p:e.target.offsetWidth*0.3, n:-(e.target.offsetWidth*0.3)};
            if(cx > cw.p)
            {
              log.innerText = "Right \n"  + `cx:${cx} | cw:${cw.p}`
              e.target.style.background=`#f00`;
            } else if( cx < cw.n)
            {
              log.innerText = "Left \n" + `cx:${cx} | cw:${cw.n}`
              e.target.style.background=`#00f`;
            } else {
              e.target.style.background=`#fa0`;
              log.innerText = "Center \n" + `cx:${cx} | cw:${cw.p}`
            }
          }
        }
      });
      e.target.addEventListener("touchend", e=>{
        let thisBox = e.target;
        let offset = thisBox.offsetLeft;
        let boxWidth = thisBox.offsetWidth;
        //console.log(`${initX}:>${endX}`)
        if(initX == endX) // Not moved
        {
         thisBox.style.background =
         `rgb(${rnd255()},${rnd255()},${rnd255()})`
        }
        if(offset > boxWidth*0.3 || offset < -(boxWidth*0.3))
        {
          thisBox.remove();
        } else {
          thisBox.style.left = 0;
        }
      });
    })
  }
}

const rnd255 = () => parseInt(Math.random()*255)

document.querySelector("button").addEventListener("click", e=>{
    let child = document.createElement("div");
    child.className = "box";
    document.querySelector("#boxes").appendChild(child);
    addEvents();
})

window.onload = () => addEvents();
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
