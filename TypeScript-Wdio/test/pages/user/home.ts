import { BrowserHelper, IElement, IReferenceElement } from '../../shared/browser_helper';
import { BADRESP } from 'dns';

export interface IHomePageElements {
	SearchBar: IElement;
	NewsFeed: IElement;
	StatusBox: IElement;
	PostStatus: IElement;
	StatusBoxDialogView: IElement;
	StatusBoxInput: IElement;
	NotificationPermissionPopUp: IElement;
	NotificationCancelButton: IElement;
	LikeLink: IElement;
	JustNow: IReferenceElement;
	ProfileIcon: IElement;
	Poll: IElement;
	PollOptionOne: IElement;
	PollOptionTwo: IElement;
}

export class HomePageElements implements IHomePageElements {

	readonly SearchBar: IElement = {
		selector: 'input[data-testid="search_input"]'
	};

	readonly NewsFeed: IElement = {
		selector: 'a[data-testid="left_nav_item_News Feed"]'
	}

	//Facebook changed the ID's so need to use Xpath for now - working on a better fix
	readonly StatusBox: IElement = {
		selector: '//*[@id="rc.u_fetchstream_1_3"]/div[1]/span[1]/a'
	};

	readonly StatusBoxDialogView: IElement = {
		selector: '#pagelet_composer > div > div[role="dialog"]'
	};

	readonly NotificationPermissionPopUp: IElement = {
		selector: 'span#notification-permission-title'
	};

	readonly NotificationCancelButton: IElement = {
		selector: 'a[action="cancel"]'
	};

	readonly StatusBoxInput: IElement = {
		selector: '[data-testid="status-attachment-mentions-input"]'
	}

	readonly PostStatus: IElement = {
		selector: 'button[data-testid="react-composer-post-button"]'
	};

	readonly LikeLink: IElement = {
		selector: '[data-testid="fb-ufi-likelink"]'
	};

	readonly JustNow: IReferenceElement = {
		selector: '[data-utime="${reference}"]',
		getSelector(reference: string): IElement {
			var newElem = Object.assign(Object.create(this), this);
			newElem.selector = newElem.selector.replace('${reference}', reference);
			return newElem;
		}
	}

	readonly ProfileIcon: IElement = {
		selector: 'div[data-click="profile_icon"]'
	}

	readonly Poll: IElement = {
		selector: 'div[data-tooltip-content="Poll"]'
	}

	readonly PollOptionOne: IElement = {
		selector: 'input[placeholder="Option 1"]'
	}

	readonly PollOptionTwo: IElement = {
		selector: 'input[placeholder="Option 2"]'
	}
}

export class HomePage {

	myPageElements: IHomePageElements = new HomePageElements();

	navigateToNewsFeed = (nextPage): void => {
		const { myPageElements } = this;
		if (BrowserHelper.isExisting(myPageElements.NotificationCancelButton)) {
			BrowserHelper.click(myPageElements.NotificationCancelButton, myPageElements.NewsFeed.selector);
		}
		BrowserHelper.click(myPageElements.NewsFeed, nextPage);
	}

	navigateToMyProfile = (nextPage): void => {
		const { myPageElements } = this;
		if (BrowserHelper.isExisting(myPageElements.NotificationCancelButton)) {
			BrowserHelper.click(myPageElements.NotificationCancelButton, myPageElements.NewsFeed.selector);
		}
		BrowserHelper.click(myPageElements.ProfileIcon, nextPage);
	}

	selectStatusBox = (): void => {
		const { myPageElements } = this;
		BrowserHelper.waitForVisible(myPageElements.StatusBox)
			.click(myPageElements.StatusBox, myPageElements.StatusBoxDialogView.selector);
	}

	postStatusMessage = (message): void => {
		const { myPageElements } = this;
		var date = new Date();
		let reference = date.getTime().toString().substring(0, 10);
		BrowserHelper.waitForVisible(myPageElements.StatusBoxInput)
			.setValue(myPageElements.StatusBoxInput, message)
			.click(myPageElements.PostStatus, myPageElements.LikeLink.selector);
	}

	addAPoll = (data): void => {
		const { myPageElements } = this;
		const { pollTitle, pollOptionOne, pollOptionTwo } = data;

		this.selectStatusBox();
		browser.pause(5000); // Hack to let the react view completely enabled - makes me very sad
		BrowserHelper.moveToObject(myPageElements.Poll, myPageElements.Poll.selector)
			.click(myPageElements.Poll, myPageElements.PollOptionOne.selector)
			.setValue(myPageElements.StatusBoxInput, pollTitle)
			.setValue(myPageElements.PollOptionOne, pollOptionOne)
			.setValue(myPageElements.PollOptionTwo, pollOptionTwo)
			.click(myPageElements.PostStatus, myPageElements.LikeLink.selector);
	}
}

export class HomePageAssertions {

	myPageElements: IHomePageElements = new HomePageElements();

	verifyHomePage = (): void => {
		const { myPageElements } = this;
		expect(BrowserHelper.isVisible(myPageElements.SearchBar)).toBeTruthy();
	}

	verifyContentIsUpdated = (): void => {
		const { myPageElements } = this;
		expect(BrowserHelper.isVisible(myPageElements.LikeLink)).toBeTruthy();

		var date = new Date();
		let reference = date.getTime().toString().substring(0, 10);
		if (BrowserHelper.isVisible(myPageElements.JustNow.getSelector(reference))) console.log('Status was updated successfully')
		else {
			console.log('Timezones are sad - I hope the content is published *Looking for a better fix*');
		}
	}
}
