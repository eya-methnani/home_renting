import {Component, Input, OnInit} from '@angular/core';
import {Conversation} from "../conversation";
import {InteractingService} from "../interacting.service";
import {Discussion} from "../discussion";

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.css']
})
export class DiscussionsComponent implements OnInit {
  discussionList: Conversation[]=[];
  conversationList:Conversation[]=[];
  @Input() conversations!: Conversation;


  constructor(private interactingService: InteractingService) { }

  ngOnInit(): void {
    this.refresh();

  }
  refresh() {
    this.conversationList = this.interactingService.getAllMessages();
console.log(this.discussionList)
  }

}
