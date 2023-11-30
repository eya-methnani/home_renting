import {Component, Input, OnInit} from '@angular/core';
import {Conversation} from "../conversation";
import {InteractingService} from "../interacting.service";
import {CommonModule} from "@angular/common";
import {ConversationsComponent} from "../conversations/conversations.component";
imports: [
  CommonModule,
  ConversationsComponent,
]


@Component({
  selector: 'app-personal-space',
  templateUrl: './personal-space.component.html',
  styleUrls: ['./personal-space.component.css']
})
export class PersonalSpaceComponent implements OnInit {
  email1 :string='';
  email2 :string='';
  text :string='';


  user1:string='';
  user2:string='';

  conversationList: Conversation[]=[];
  filteredConversationList :Conversation[]=[];

  @Input() conversation!: Conversation;

  constructor(private interactingService: InteractingService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.conversationList = this.interactingService.getAllMessages();
    this.filteredConversationList = this.interactingService.filterByUsers(this.user1, this.user2);
    if ((this.user1.trim() !== '') && (this.user2.trim() !== '')) {
      this.filteredConversationList = this.interactingService.filterByUsers(this.user1, this.user2);
    } else {
      this.filteredConversationList = []; // No search keyword, so set filteredMessages to an empty array
    }
  }
    SendingMessage() {

      const newConversation: Conversation = {
        user1:this.email1,
        user2: this.email2,
        message: this.text
      };
      this.conversationList.push(newConversation);
      localStorage.setItem('conversations', JSON.stringify(this.conversationList));
      this.refresh();
    }

  handleEmail1Change(event:any){

    this.email1=event.target.value;

  }
  handleEmail2Change(event:any){

    this.email2=event.target.value;

  }
  handleInputChange(event: any) {
    this.text=event.target.value;

  }

  handleUser1Change(event:any){

    this.user1=event.target.value;
    this.refresh();

  }

  handleUser2Change(event:any){

    this.user2=event.target.value;
    this.refresh();

  }


}
