import {Component, Input, OnInit} from '@angular/core';
import {Discussion} from "../discussion";
import {Conversation} from "../conversation";

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {

  @Input() conversations!: Conversation;


  constructor() { }

  ngOnInit(): void {
  }

}
