import { EnvironmentData } from '../shared/global/environment_data';

export interface IAttribute {
	id: string;
	value?: string;
}

export interface IElement {
	selector: string;
	requiredFieldText?: string;
	conditionalText?: string;
	conditionalErrorMessage?: string;
}

export interface IReferenceElement {
	selector: string;
	getSelector(reference: string): IElement;
}

export interface IElementWithAttributes<T> extends IElement {
	attributes?: T;
}

export namespace BrowserHelper {

	export function navigate(url, waitForSelector) {
		const environmentData = new EnvironmentData();

		if ((!waitForSelector) || (waitForSelector.toLowerCase() === 'body')) { throw new Error('You need to provide a valid selector'); }

		browser.url(`/${url}`);
		browser.waitForExist(waitForSelector, environmentData.timeout);
		return BrowserHelper;
	}

	export function click(clickSelector: IElement, waitForSelector) {
		const environmentData = new EnvironmentData();

		if ((!waitForSelector) || (waitForSelector.toLowerCase() === 'body')) { throw new Error('You need to provide a valid selector'); }

		browser.waitForExist(clickSelector.selector, environmentData.timeout);
		browser.click(clickSelector.selector);
		browser.waitForExist(waitForSelector, environmentData.timeout);
		return BrowserHelper;
	}

	export function submitForm(form: IElement, waitForSelector) {
		const environmentData = new EnvironmentData();

		if ((!waitForSelector) || (waitForSelector.toLowerCase() === 'body')) { throw new Error('You need to provide a valid selector'); }

		browser.waitForExist(form.selector, environmentData.timeout);
		browser.submitForm(form.selector);
		browser.waitForExist(waitForSelector, environmentData.timeout);
		return BrowserHelper;
	}

	export function selectByValue(element: IElement, value) {
		browser.selectByValue(element.selector, value);
		return BrowserHelper;
	}

	export function setValue(element: IElement, value: string) {
		browser.setValue(element.selector, value);
		return BrowserHelper;
	}

	export function isVisible(element: IElement): boolean {
		return browser.isVisible(element.selector);
	}

	export function isSelected(element: IElement): boolean {
		return browser.isSelected(element.selector);
	}

	export function getText(element: IElement): string {
		return browser.getText(element.selector);
	}

	export function getAttribute(element: IElement, attribute: IAttribute): string {
		return browser.getAttribute(element.selector, attribute.id);
	}

	export function getUrl(): string {
		return browser.getUrl();
	}

	export function Url(element: IElement): void {
		browser.url(element.selector);
	}

	export function scrollToElement(element: IElement) {
		browser.scroll(element.selector);
		return BrowserHelper;
	}

	export function waitForVisible(element: IElement) {
		const environmentData = new EnvironmentData();
		browser.waitForVisible(element.selector, environmentData.timeout);
		return BrowserHelper;
	}

	export function waitForEnabled(element: IElement) {
		const environmentData = new EnvironmentData();
		browser.waitForEnabled(element.selector, environmentData.timeout);
		return BrowserHelper;
	}

	export function clearElement(element: IElement) {
		browser.clearElement(element.selector);
		return BrowserHelper;
	}

	export function deleteCookies(name?) {
		let cookies = browser.getCookie();
		console.log(`Cookies in the current browser session: ${JSON.stringify(cookies)}`);

		browser.deleteCookie(name);
		cookies = browser.getCookie();
		if (JSON.stringify(cookies) !== '[]') {
			console.log('Seems like the cookies were not cleared - this test will now fail');
			browser.end();
		}
		return BrowserHelper;
	}

	export function findElements(element: IElement) {
		return browser.elements(element.selector);
	}

	export function performNativeAction(action) {
		browser.keys(action);
		browser.pause(3000);
		return BrowserHelper;
	}

	export function isExisting(element: IElement) {
		return browser.isExisting(element.selector);
	}
}

