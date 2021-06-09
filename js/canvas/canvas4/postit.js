export class Postit {
	constructor(seq, stageWidth, stageHeight, countPerWidth, countPerHeight) {
		this.seq = seq;
		this.stageWidth = stageWidth;
		this.stageHeight = stageHeight;
		this.width = this.stageWidth/countPerWidth-25;
		this.height = this.stageHeight/countPerHeight-25;
		this.x = this.stageWidth/2 - this.width/2;
		this.y = this.stageHeight/2 - this.height/2;
		this.vx = 1;
		this.vy = 1*(this.stageHeight-100)/this.stageWidth;
		this.posx = this.width*this.seq + 25;
		this.posy = this.height*this.seq + 125;

	}

	draw(ctx) {
		const plusx = this.posx - this.x >= 0;
		const plusy = this.posy - this.y >= 0;
		if(plusx) {
			if(this.posx > this.x + this.vx*(plusx ? 1 : -1)) {
				this.x += this.vx*(plusx ? 1 : -1);
			} else {
				this.isFixX = true;
			}
		} else {
			if(this.posx < this.x + this.vx*(plusx ? 1 : -1)) {
				this.x += this.vx*(plusx ? 1 : -1);
			} else {
				this.isFixX = true;
			}
		}
		if(plusy) {
			if(this.posy > this.y + this.vy*(plusy ? 1 : -1)) {
       			this.y += this.vy*(plusy ? 1 : -1);
			} else {
				this.isFixY = true;
			}
		} else {
			if(this.posx < this.y + this.vy*(plusy ? 1 : -1)) {
       			this.y += this.vy*(plusy ? 1 : -1);	
			} else {
				this.isFixY = true;
			}
		}
		
		
		ctx.fillStyle = 'yellow';
		ctx.beginPath();
		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.fill();
	}
}
