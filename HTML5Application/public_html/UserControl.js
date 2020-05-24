/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function userControl(event) {
    var key = event.key;
    var width = gEngine.Core.mWidth;
    var height = gEngine.Core.mHeight;
    var context = gEngine.Core.mContext;
    if (key === 'f') {
        context.strokeRect(
            Math.random() * width * 0.8,
            Math.random() * height * 0.8,
            40, 40);
    }
    
    if (key === 'g') {
        context.beginPath();
        // x,y,ra,di,us,true
        context.arc(
            Math.random() * width * 0.8,
            Math.random() * height * 0.8,
            Math.random() * 30 + 10 , 0, Math.PI * 2);
        context.closePath();
        context.stroke();
    }
}

