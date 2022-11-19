import { Injectable } from '@angular/core';
import { AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private auth: AuthService
  ) { }

  UUID() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
  }

  generateThreadId (currentUser , chatUser) {
    return currentUser + 'chat-thread' + chatUser;
  }

  getConversation(data) {
    return this.auth.common('conversation/getOneToOneConversation',data);
  }

  getUnreadMessageCount(data) {
    return this.auth.common('conversation/getUnreadMessageCount',data);
  }

  getLastMessage(data) {
    return this.auth.common('conversation/getLastMessage',data);
  }
}
