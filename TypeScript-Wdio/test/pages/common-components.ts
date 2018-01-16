import { ChatBoxElements, ChatBox, ChatBoxAssertions } from '../pages/common-components/chat-box/chat';
import { FriendProfileElements, FriendProfile, FriendProfileAssertions } from '../pages/common-components/friend-profile/friend_profile';

export class CommonComponents {

	public chatBoxElements = new ChatBoxElements();
	public chatBox = new ChatBox();
	public chatBoxAssertions = new ChatBoxAssertions();
	public friendProfileElements = new FriendProfileElements();
	public friendProfile = new FriendProfile()
	public friendProfileAssertions = new FriendProfileAssertions();
}
