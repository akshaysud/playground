import { ChatBoxElements, ChatBox, ChatBoxAssertions } from '../pages/common-components/chat-box/chat';
import { FriendProfilePageElements, FriendProfilePage, FriendProfilePageAssertions } from '../pages/common-components/friend-profile/friend_profile';

export class CommonComponents {

	public chatBoxElements = new ChatBoxElements();
	public chatBox = new ChatBox();
	public chatBoxAssertions = new ChatBoxAssertions();
	public friendProfilePageElements = new FriendProfilePageElements();
	public friendProfilePage = new FriendProfilePage()
	public friendProfilePageAssertions = new FriendProfilePageAssertions();
}
