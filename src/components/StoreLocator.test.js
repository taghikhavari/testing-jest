import React from "react";
import ReactDOM from "react-dom";
import StoreLocator from "./StoreLocator";
import { shallow, mount } from "enzyme";

describe("StoreLocator", () => {
	let mountedStoreLocator;
	beforeEach(() => {
		mountedStoreLocator = shallow(<StoreLocator />);
	});

	it("renders store locator without crashing", () => {
		const mountedStoreLocator = shallow(<StoreLocator />);
	});

	it("renders header", () => {
		const headers = mountedStoreLocator.find("Header");
		expect(headers.length).toBe(1);
	});

	it("renders three buttons", () => {
		const buttons = mountedStoreLocator.find("Button");

		expect(buttons.length).toBe(3);
	});

	it("renders the Map", () => {
		const map = mountedStoreLocator.find("Map");
		expect(map.length).toBe(1);
	});
});
