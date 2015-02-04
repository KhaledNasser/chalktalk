function Axes() {
   this.label = 'axes';
   this.is3D = true;
   var v = newVec();
   this.render = function() {
      this.duringSketch(function() {
         mLine([-1,0],[1,0]);
         mLine([0,-1],[0,1]);
      });
      this.afterSketch(function() {

         var e = pointToPixelMatrix.elements;
	 var showZ = v.set(e[8],e[9],e[10]).normalize().z < .975;
        
	 textHeight(this.mScale(.1));
	 mText("x=-1",[-1.2,0,0],.5,.5);
	 mText("x= 1",[ 1.2,0,0],.5,.5);
	 mText("y=-1",[0,-1.1,0],.5,.5);
	 mText("y= 1",[0, 1.1,0],.5,.5);
	 if (showZ) {
	    mText("z=-1",[0,0,-1.1],.5,.5);
	    mText("z= 1",[0,0, 1.1],.5,.5);
         }
	 lineWidth(1);
         mArrow([-1,0],[1,0], .1);
         mArrow([0,-1],[0,1], .1);
	 if (showZ)
            mArrow([0,0,-1],[0,0,1], .1);

         if (this.inValues.length >= 3) {
	    var V = this.inValues, x = V[0], y = V[1], z = V[2];
	    lineWidth(0.5);
	    mLine([x,0,0],[x,y,0]);
	    mLine([0,y,0],[x,y,0]);
	    mLine([x,0,0],[x,0,z]);
	    mLine([0,0,z],[x,0,z]);
	    mLine([0,y,0],[0,y,z]);
	    mLine([0,0,z],[0,y,z]);
	    mLine([0,y,z], V);
	    mLine([x,0,z], V);
	    mLine([x,y,0], V);
	    mDot(V, 0.2);
         }
      });
   }
}
Axes.prototype = new Sketch;
addSketchType('Axes');
