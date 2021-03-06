# Example JS project for the Pact workshop

## Step 1: Run the consumer test

Demonstrates:

- that we can put assumptions in our unit tests that aren't valid
- Pact tests are nothing scary, and look much like the use of `nock`

_Running step 1:_

```
npm run test:consumer
npm run test:pact:consumer
```

## Step 2: Write the provider test

Demonstrates:

- the assumptions in step 1 by the consumer team are wrong (failed test)
- teams need to communicate with each other
- use of flexible matching to make tests less brittle

_Running step 2_

```
npm run test:pact:consumer
npm run test:pact:provider
```

Two problems

1. qty -> quantity difference
2. value -> itemValue

## Step 3: fix provider test

Demonstrates:

- fixes `qty` and `itemValue` properties in provider test
- contract testing validates assumptions from both collaborators

_Running step 3_

```
npm run test:pact:consumer
npm run test:pact:provider
```

## Step 4: Broker / Can-i-deploy

Demonstrates:

- sharing and collaborating on contracts via the Pact Broker
- how you might integrate Pact into your CI and CD pipelines

_Running step 4_

```
npm run test:pact:consumer
npm run test:pact:publish
npm run test:pact:provider
npm run can-i-deploy:consumer
npm run can-i-deploy:provider
```
