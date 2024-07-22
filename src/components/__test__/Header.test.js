import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { userContext } from "../context/UserContext";
import Header from "./Header";

// Mock the custom hook
jest.mock("../utils/CustomHooks/useOnlineStatus", () => ({
  __esModule: true,
  default: jest.fn(),
}));

// Import the mocked hook
import useOnlineStatus from "../utils/CustomHooks/useOnlineStatus";

const mockStore = configureStore([]);

describe("Header component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      cart: { items: [] },
    });
    useOnlineStatus.mockReturnValue(false); // Mock online status as offline
  });

  it("renders correctly", () => {
    const { getByAltText, getByText } = render(
      <Provider store={store}>
        <Router>
          <userContext.Provider value={{ name: "" }}>
            <Header />
          </userContext.Provider>
        </Router>
      </Provider>
    );

    expect(getByAltText("logo")).toBeInTheDocument();
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("About Us")).toBeInTheDocument();
    expect(getByText("Contact Us")).toBeInTheDocument();
    expect(getByText("Grocery")).toBeInTheDocument();
  });

  it("displays online status", () => {
    useOnlineStatus.mockReturnValue(true); // Mock online status as online

    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <userContext.Provider value={{ name: "" }}>
            <Header />
          </userContext.Provider>
        </Router>
      </Provider>
    );

    expect(getByText("🟢")).toBeInTheDocument();
  });

  it("displays offline status", () => {
    useOnlineStatus.mockReturnValue(false); // Mock online status as offline

    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <userContext.Provider value={{ name: "" }}>
            <Header />
          </userContext.Provider>
        </Router>
      </Provider>
    );

    expect(getByText("🔴")).toBeInTheDocument();
  });

  it("displays login button when user is not logged in", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <userContext.Provider value={{ name: "" }}>
            <Header />
          </userContext.Provider>
        </Router>
      </Provider>
    );

    expect(getByText("Login")).toBeInTheDocument();
  });

  it("displays welcome message when user is logged in", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <userContext.Provider value={{ name: "John Doe" }}>
            <Header />
          </userContext.Provider>
        </Router>
      </Provider>
    );

    expect(getByText("Welcome John Doe")).toBeInTheDocument();
  });

  it("displays the correct number of cart items", () => {
    store = mockStore({
      cart: { items: [{ id: 1 }, { id: 2 }] },
    });

    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <userContext.Provider value={{ name: "" }}>
            <Header />
          </userContext.Provider>
        </Router>
      </Provider>
    );

    expect(getByText("2")).toBeInTheDocument();
  });
});
