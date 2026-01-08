
# Types of testing(developer)

- Unit Testing => testing one unit in isolation
- Integration Testing 
- End to End testing

## ✅ Unit Testing

`Testing one unit in isolation`

- A unit = smallest piece of code (function, component, method)

- No dependency on other parts (API, DB, other components)

`Example: testing a single React component or a JS function`

🧠 Goal: Check individual logic works correctly

## ✅ Integration Testing

- Testing how multiple units work together

- Tests interaction between components/modules

- Dependencies are combined (component + API call, parent + child component)

`Example: React component fetching data and displaying it`

🧠 Goal: Check units integrate properly

## ✅ End-to-End (E2E) Testing

- Testing the complete application flow

- Simulates real user behavior

- Tests frontend + backend + database together

`Example: User logs in → adds item to cart → places order`

🧠 Goal: Check entire system works as expected

📊 Easy Comparison Table

| Testing Type | Scope                     | Example                |
| ------------ | ------------------------- | ---------------------- |
| Unit         | Single function/component | `sum(2,3)` returns `5` |
| Integration  | Multiple modules          | Component + API        |
| End-to-End   | Full app                  | Login → Order → Logout |

`🔁 Real-Life Analogy 🚗`

Unit Test → Testing engine alone

Integration Test → Engine + gearbox together

E2E Test → Driving the full car on road