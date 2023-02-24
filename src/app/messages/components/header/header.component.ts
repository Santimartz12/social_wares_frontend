import { Component } from '@angular/core';
import { Message } from 'src/app/interfaces/messages';
import { OptionsMenu } from 'src/app/interfaces/optionsMenu';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private authServices : AuthService,
  ){

  }

  options: OptionsMenu[] = [
    {
      imgUrl: "../../../../assets/icons/create.svg",
      route: "/home/create",
      text: 'Create Messages'
    },
    {
      imgUrl: "../../../../assets/icons/send.svg",
      route: "/home/my-msg",
      text: 'My Messages'
    },
    {
      imgUrl: "../../../../assets/icons/chatbubbles-sharp.svg",
      route: "/home/messages",
      text: 'See all Messages'
    },
    {
      imgUrl: "../../../../assets/icons/log-in-sharp.svg",
      route: "/auth/login",
      text: 'Logout'
    },
  ];

  messages: Message[] = [];

  isMenuSelected = false;
  isModalMsgSelected = false;

  toogleMenu(){
    if(this.isMenuSelected){
      this.isMenuSelected = false;
    }else{
      this.isMenuSelected = true;
      this.isModalMsgSelected = false;
    }
  }

  toogleModalMsg(){
    if(this.isModalMsgSelected){
      this.isModalMsgSelected = false;
    } else{
      this.isModalMsgSelected = true;
      this.isMenuSelected = false;
    }
  }

  verificarlogout(route: String){
    if(route == 'Logout'){
      this.authServices.eliminarLocalStg();
    }
  }

  get urlImgMenu(){
    return this.isMenuSelected 
    ? '../../../../assets/icons/menu-dark.svg'
    : "../../../../assets/icons/menu.svg";
  }

  get urlModalMsg(){
    return this.isModalMsgSelected 
    ? "../../../../assets/icons/chatbox-ellipses-dark.svg"
    : "../../../../assets/icons/chatbox-ellipses.svg"
  }

}
