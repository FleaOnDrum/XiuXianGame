import { _decorator, Canvas, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    @property({type:Canvas})
    jcanvas:Canvas | null = null;

    start() {

    }

    update(deltaTime: number) {
        
    }
}


