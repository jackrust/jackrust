
var imageWidth=256,
    imageHeight=64,
    numFrames = 4,
    frameSize= 64,
    BUFFER = 100,
    petas = [];


$(document).ready(function() {
    init();
});

function init() {
    addPeta();
    setInterval(wave, 1000 / 8);
    setInterval(float, 1000 / 3);
}

function addPeta(top, left){
    if(typeof top === 'undefined' || typeof left === 'undefined'){
        top = '100px';
        left = '100px';
    }

    $('#petas').append('<div id="peta'+petas.length+'" class="peta" style="top:'+top+';left:'+left+';"></div>');
    petas.push({id:'#peta'+petas.length, lastTop:0, lastLeft:0, x:0, y:0, index:0});
    //Make clickable
    $('#peta'+(petas.length-1)).bind('click', function() {
        addPeta( $(this).css('top'), $(this).css('left'))
    });
}



function wave() {
    $.each(petas, function(){
        $(this.id).css('background-position', (-this.x)+"px "+(-this.y)+"px");
        this.x += frameSize;
        this.index += 1;
        if (this.index >= numFrames) {
            this.x =0;
            this.y =0;
            this.index=0;
        } else if (this.x + frameSize > imageWidth){
            this.x =0;
            this.y += frameSize;
        }
    });
}
function float() {
    var top, left;
    $.each(petas, function(){
        top = Number($(this.id).css('top').replace('px', ''));
        left = Number($(this.id).css('left').replace('px', ''));
        out = move(top, this.lastTop, $(document).height());
        top = out.pos;
        this.lastTop = out.last;
        out = move(left, this.lastLeft, $(document).width());
        left = out.pos;
        this.lastLeft = out.last;
        $(this.id).css('top', (top)+"px ");
        $(this.id).css('left', (left)+"px ");
    });

}

function move(pos, last, max){
    var random = Math.random();
    if(pos < BUFFER)
    {
        pos += 5;
        last = 5;
    }else if(pos > max - BUFFER)
    {
        pos -= 5;
        last = -5;
    }else if (last > 0 && random > 0.2){
        pos += 5;
        last = 5;
    }else if (last < 0 && random < 0.6){
        pos -= 5;
        last = -5;
    }else if(random > 0.5){
        pos += 5;
        last = 5;
    }else{
        pos -= 5;
        last = -5;
    }
    return {pos:pos, last:last};
}