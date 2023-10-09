import { _decorator, Component, director, Node, Size, Sprite, SpriteFrame, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('movingSprite')
export class movingSprite extends Component {
    @property({type:SpriteFrame})
    jBackground:SpriteFrame | null = null;
    @property
    jMoveSpeed:number = 100;
    @property
    jMoveDir: 1|-1 = 1;

    private jSpriteWidth:number = 0;
    private jSpriteAmount:number = 1;
    private jSpriteNode:Node[] = [];
    

    start() {
        //获取将要移动的图片的尺寸
        if(this.jBackground){
            this.jSpriteWidth = this.jBackground.width;
            this.jSpriteAmount = Math.ceil(1280/this.jSpriteWidth)+1;
            console.log('the sprite amount is ' + this.jSpriteAmount);

            for(let i = 0;i < this.jSpriteAmount;i++){
                let tempNode = new Node();
                tempNode.addComponent(Sprite).spriteFrame = this.jBackground;
                this.jSpriteNode.push(tempNode);
                tempNode.setPosition((i-1)*this.jSpriteWidth,0);
                tempNode.getComponent(UITransform).setAnchorPoint(0,0);
                this.node.addChild(tempNode);
                console.log(tempNode.position.x);
            }

            // console.log(this.jSpriteWidth);

            // console.error(this.jSpriteNode);
        }
    }

    update(deltaTime: number) {
        for(let i = 0; i < this.jSpriteAmount; i++){
            let pos = this.jSpriteNode[i].position;
            if(pos.x > this.jSpriteWidth*(this.jSpriteAmount-1)){
                this.jSpriteNode[i].setPosition(-this.jSpriteWidth,0);
            }else if(pos.x < -this.jSpriteWidth){
                this.jSpriteNode[i].setPosition(this.jSpriteWidth*(this.jSpriteAmount-1),0);
            }else{
                this.jSpriteNode[i].setPosition(pos.x + this.jMoveSpeed*this.jMoveDir*deltaTime,0);
            }
            
        }
        // console.log(this.jSpriteNode[0].position);
    }
}


