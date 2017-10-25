import { BrowserHelper, IElement } from '../../shared/browser_helper';

export interface IHomePageElements {
	SearchBar: IElement;
}

export class HomePageElements implements IHomePageElements {

	readonly SearchBar: IElement = {
		selector: 'input[data-testid="search_input"]'
	};
}

export class HomePage {

	myPageElements: IHomePageElements = new HomePageElements();

	navigateToNewsFeed = (nextPage): void => {

	}

}

export class HomePageAssertions {

	myPageElements: IHomePageElements = new HomePageElements();

	verifyHomePage = (): void => {
		const { myPageElements } = this;
		expect(BrowserHelper.isVisible(myPageElements.SearchBar)).toBeTruthy();
	}
}

