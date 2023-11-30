import { Injectable } from '@angular/core';
import {Conversation} from "./conversation";
import {Message} from "./message";
import {Discussion} from "./discussion";

@Injectable({
  providedIn: 'root'
})
export class InteractingService {



  conversationList:Conversation[]=[];
  getAllMessages(): Conversation[] {
    const messagesString = localStorage.getItem('conversations');
    if (messagesString != null) {
      this.conversationList = JSON.parse(messagesString);
      console.log('ssssssssss',this.conversationList)
    }
    return this.conversationList;
  }

/*  getAllUsers():Conversation[]{*/

/*
    this.discussionList=this.conversationList;
*/

  /*  this.conversationList.forEach((conversation:Conversation) => {
      this.discussionList.forEach((discussion:Discussion) =>{
        if (((conversation.user1!=discussion.user1)||(conversation.user2!=discussion.user2))&&((conversation.user1!=discussion.user2)||(conversation.user2!=discussion.user1))){
          this.discussionList.push(conversation);
        }
      })

    })
    return this.discussionList*/
  /*  const messagesString = localStorage.getItem('conversations');
    if (messagesString != null) {
      this.conversationList = JSON.parse(messagesString);

    }
    console.log('ssssssssss',this.conversationList)
    console.log('aaslema',messagesString)
    return this.discussionList;


    }*/
  /*  this.conversationList.forEach((conversation: Conversation) => {
      const existingDiscussion:Discussion|undefined = discussionList.find(
        (discussion: Discussion) =>
          (conversation.user1 === discussion.user1 && conversation.user2 === discussion.user2) ||
          (conversation.user1 === discussion.user2 && conversation.user2 === discussion.user1)
      );

      if (!existingDiscussion) {
        const discussion: Discussion = {
          user1: conversation.user1,
          user2: conversation.user2,
          messages: [conversation.message]
        };
        discussionList.push(discussion);
      } else {
        existingDiscussion.messages.push(conversation.message);
      }
    });*/

  /*  return discussionList;*/


  filterByUsers(user1: string, user2:string): Conversation[] {
    user1 = user1.toLowerCase();
    user2 = user2.toLowerCase();
    return this.conversationList.filter((conversation: Conversation) => {
      return (
        ( conversation.user1.toLowerCase() == user1 && conversation.user2.toLowerCase() == user2 )||
        (conversation.user1.toLowerCase() == user2 && conversation.user2.toLowerCase() == user1)

      );
    });
  }

}
